import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import News from './pages/News'
import Homepage from './pages/Homepage'
import Articles from './pages/Articles'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/*' element={<Homepage/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='articles' element={<Articles/>}/>
        <Route path='news' element={<News/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
