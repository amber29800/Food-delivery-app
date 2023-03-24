import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // ->~ Default import
//import {Header} from "./components/Header" ->  Named import
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResaturantMenu from "./components/RestaurantMenu";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <ResaturantMenu/>
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

//we can only write JS expressions inside '{}' not statements.
/*eg -> a = 20;
      console.leg(a);
      the above code is not allowed inside '{}'.
*/