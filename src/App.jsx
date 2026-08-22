/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import authservice from './appwrite/auth'
import { login, logout } from './store/authSlice'
import './App.css'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading , setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
        authservice.getCurrentUser()
        .then((userData) => {
          if (userData){
            dispatch(login({userData}))
          }
          else{
            dispatch(logout())
          }
        })
        .finally(() => setLoading(false))
  } , [])


  return !loading ? (
    <div className='h-screen w-full'>
         <div className='h-full w-full flex flex-col justify-between'>
          <Header />
          <Outlet />
          <Footer />
         </div>
    </div>
  ) : null
}

export default App
