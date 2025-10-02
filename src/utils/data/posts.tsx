import type { BlogPost } from "@/types";

function parseFrontmatter(content: string) {
   const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

   if (!normalizedContent.startsWith('---\n')) {
      return { data: {}, content: normalizedContent };
   }
   const endIndex = normalizedContent.indexOf('\n---\n', 4);
   if (endIndex === -1) {
      return { data: {}, content: normalizedContent };
   }

   const frontmatterText = normalizedContent.slice(4, endIndex);
   const remainingContent = normalizedContent.slice(endIndex + 5).trim();

   const data: Record<string, string> = {};
   frontmatterText.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
         const key = line.slice(0, colonIndex).trim();
         const value = line.slice(colonIndex + 1).trim();
         data[key] = value;
      }
   });

   return { data, content: remainingContent };
}

function getAllBlogPosts(): BlogPost[] {
   const modules = import.meta.glob('../posts/*.mdx', {
      query: '?raw',
      import: 'default',
      eager: true
   });

   const posts: BlogPost[] = [];

   Object.entries(modules).forEach(([path, content]) => {
      const slug = path.replace('../posts/', '').replace('.mdx', '');

      const { data } = parseFrontmatter(content as string);

      posts.push({
         slug,
         title: data.title || slug,
         desc: data.desc || '',
         date: data.date || '',
         tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : undefined
      });
   });

   return posts.sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));
      return dateB.getTime() - dateA.getTime();
   });
}

export const arrBlog: BlogPost[] = getAllBlogPosts();
