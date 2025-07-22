import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkToken } from './store/thunks/authThunks'

function App() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [])
  
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
