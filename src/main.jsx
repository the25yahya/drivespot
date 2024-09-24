import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './home/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import Profile from './profile/index.jsx'
import AddListing from './add-listing/index.jsx'
import { Toaster } from "@/components/ui/sonner"
import Search from './search/index.jsx'
import { ContextProvider, useStateContext } from './Context/ContextProvide.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element: <App/>
  },
  {
    path:'/profile',
    element:<Profile />
  },
  {
    path:'/add-listing',
    element: <AddListing />
  },
  {
    path:'/search',
    element: <Search />
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
          <RouterProvider router={router} />
          <Toaster />
        </ClerkProvider>
    </ContextProvider>
  </StrictMode>,
)
