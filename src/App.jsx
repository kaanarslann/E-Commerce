import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {
 
  return (
    <>
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
