import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Algorithms from './pages/Algorithms'
import AlgorithmDetail from './pages/AlgorithmDetail'
import Practice from './pages/Practice'
import About from './pages/About'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/algorithms/:id" element={<AlgorithmDetail />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App 