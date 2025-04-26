import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

const ensureFavicon = () => {
  const exists = document.querySelector("link[rel='icon']");
  if (!exists) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'icons/favicon.ico';
    document.head.appendChild(link);
  }
};

ensureFavicon();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)