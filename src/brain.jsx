import React , {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Shimmer from "./components/shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
import { ClerkProvider } from '@clerk/clerk-react'
import Footer from "./components/footer";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const Contact = lazy(()=> import("./components/Contact"));

const AppLayout = () => {
  // const [UserName,setUserName]=useState();
  // useEffect(()=>{
  //   const data={
  //     name:"",
  //   };
  //   setUserName(data.name);

  // },[]);
  return ( 
    <React.StrictMode>
       <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
       <Provider store={AppStore}>
    {/* // <UserContext.Provider value={{loggedInUser:UserName , setUserName}}> */}
      <div className="app">
      <Header />
      <div className="mt-30 min-h-[70vh]">
        <Outlet />  
      </div>
       <Footer/>
    
    </div>
    {/* // </UserContext.Provider> */}
    </Provider></ClerkProvider>
      
    </React.StrictMode>
    
    
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
       
      },
      {
        path: "/about",
        element: <About />,
       
      },
      {
        path: "/contact",
        element: (<Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>),
        
      },
      {
        path: "/restaurant/:resId",
        element:<RestaurantMenu/>
      },
       {
        path: "/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
