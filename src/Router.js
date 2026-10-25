import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./RootLayout";

export const Router = createBrowserRouter([
   {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About },
      
    ],
  },
]);