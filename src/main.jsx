import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/login.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Users from './components/home.jsx'
import User from './components/user.jsx'
import Album from './components/album.jsx'
import Photo from './components/photo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter future={{ v7_startTransition: true }}>
    <GoogleOAuthProvider clientId='762829273522-ln1t6hmofdaokhllpkl72v095clfclor.apps.googleusercontent.com' >
      <Routes>
        <Route path='/' element={<App />} ></Route>
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/home' element={<Users />} ></Route>
        <Route path='/users/:id' element={<User />} ></Route>
        <Route path='/users/:userId/albums/:albumId' element={<Album />} ></Route>
        <Route path='/users/:userId/albums/:albumId/photos/:id' element={<Photo/>} ></Route>
      </Routes>
    </GoogleOAuthProvider>
  </HashRouter>,
)
