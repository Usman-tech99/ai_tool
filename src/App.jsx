import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import About from './components/About'
import Blog from './components/Blog'
import SecurePasswordImportance from './components/SecurePasswordImportance'

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="importance" element={<SecurePasswordImportance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
