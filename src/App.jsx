import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Category from './Component/Category/Category';
import Home from "./Component/Home/home"
import LogIN from "./Component/LogIn/login"
import MainLayout from "./Component/MainLayout/mainlayout"
import Product from './Component/Product/Product';
import Register from "./Component/Register/register"
import Cart from "./Component/Cart/Cart"
import Favorite from './Component/Favorite/Favorite';
import Allproduct from './Component/Allproduct/Allproduct';
import Brans from './Component/Brands/Brands';
import CardInfo from './Component/CardInformation/CardInfo';
import NotFound from './Component/NotFound/NotFound';
function App() {



const routers= createBrowserRouter([
  {path:"/",element:<MainLayout/>,children:[
    {index:true ,element: <Home/>},
    {path:'home' ,element: <Home/>},
    {path:'Fake-Store' ,element: <Home/>},

      {path:"register",element:<Register/>},
        {path:"login",element:<LogIN/>},
        {path:"category",element:<Category/>},
        {path:"product/:id",element:<Product/>},
        {path:"cart",element:<Cart/>},
        {path:"favorite",element:<Favorite/>},
        {path:"all",element:<Allproduct/>},
        {path:"brands",element:<Brans/>},
        {path:"cardInfo",element:<CardInfo/>},
    {path:"*" ,element:<NotFound/>},


       
  ]}
])




  return (
   
    <>
  <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
