import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'
import PostPage from './components/Blog/[slug]';
import CommandMenu from './components/CommandMenu/CommandMenu';

import { useState } from 'react';
import { Routes, Route } from 'react-router';

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="px-6 py-8 min-h-[100vh] space-y-3 max-w-[600px] mx-auto bg-[#0A0A0A]">
      <Header />
      <CommandMenu open={open} setOpen={setOpen} />
      <Routes>
        <Route path='/' element={<About setOpen={setOpen} />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="*" element={<div className='text-white'>Pagina nao existe.</div>} />
      </Routes>
    </div>
  )
}

export default App