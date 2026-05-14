import { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { UserList } from './pages/UserList/UserList.tsx';
import { UserForm } from './pages/userForm/UserForm.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList/>,
  },
  {
    path: "/userForm",
    element: <UserForm/>,
  },
  {
    path: "*",
    element: <h3>route not found!</h3>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
