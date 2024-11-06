import React from 'react'




import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Home from './Pages/Home';
import Products from './Pages/Products';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Contacts from './Pages/Contacts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      {/* <Route path='/products' element={<Products/>}></Route> */}
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/log-in' element={<Login/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
    </Route>
  )
);







const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App