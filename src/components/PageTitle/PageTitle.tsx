import { useEffect } from "react";
import type { PageTitleProps } from "@/types";

const PageTitle: React.FC<PageTitleProps> = ({ title, suffix = " |  Marcus Coelho" }) => {
   useEffect(() => {
      const originalTitle = document.title;

      document.title = title + suffix;

      return () => {
         document.title = originalTitle;
      };
   }, [title, suffix]);

   return null;
};

export default PageTitle;
