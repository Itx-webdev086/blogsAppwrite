import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {AuthLayout, Login }from './components/index.js'
import Home from './pages/Home.jsx'
import SignupPage from './pages/SignupPage.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPostPage from './pages/AddPostPage.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { MyPosts } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
     {
      path : '/',
      element: <App />,
      children : [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: (<AuthLayout authentication={false}>
            <Login />
          </AuthLayout>),
        },
        {
          path: '/signup',
          element: (<AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>),
        },
        {
        path: '/allblogs',
        element: (<AuthLayout authentication>
          <AllPosts />
        </AuthLayout>),
        },
        {
          path: '/addblog',
          element: (<AuthLayout authentication>
            <AddPostPage />
          </AuthLayout>),
        },
        {
          path: '/editblog/:slug',
          element: (<AuthLayout authentication>
            <EditPost />
          </AuthLayout>),
        },
        {
          path: '/post/:slug',
          element: (<AuthLayout authentication>
            <Post />
          </AuthLayout>),
        },
        {
          path: '/myblogs',
          element: (<AuthLayout authentication>
            <MyPosts />
          </AuthLayout>)
        }


      ]
     }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
