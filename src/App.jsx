import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Main from './Mainbody'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Footer from './footer'


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className='app_container'>
          <Toaster position='top-right' toastOptions={{duration: 3000}}/>
          <Main/>
          <Footer/>
        </div>
      </BrowserRouter>
    </UserContextProvider>


  )
}

export default App
