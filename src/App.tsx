import React, { lazy } from "react";
import { Link, useRoutes } from "react-router-dom";
// import Home from './pages/Home'
// import About from './pages/About'
// const About = lazy(() => import("./pages/About"));
// const Comment = lazy(() => import("./pages/Comment"));
// import Product  from "./pages/Product";
const Product = lazy(()=> import("./pages/Product"))
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex p-4 bg-blue-200 text-[20px] gap-2.5">
    <Link to={"/"}>Home</Link>
    <Link to={"/product"}>Product</Link>
    {/* <Link to={"/about"}>About</Link>
    <Link to={"/comment"}>Comment</Link> */}

      </div>
      {useRoutes([
        { path: "/", element: <Home /> },
        { path: "/product", element: <Product /> },
        // { path: "/about", element: <About /> },
        // { path: "/comment", element: <Comment /> },
      ])}
    </div>
  );
};

export default React.memo(App);
