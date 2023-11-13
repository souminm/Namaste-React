import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//chunking
//Code Splitting
//Dynamic Bundling
//Lazy loading
//On Demand Loading
//Dynamically Import

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    const data = {
      name: "Soumin Mohanty",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
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
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
