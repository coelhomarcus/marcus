import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'

import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <div className="px-6 py-8 min-h-[100vh] space-y-3 max-w-[600px] mx-auto bg-[#0A0A0A]">
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App