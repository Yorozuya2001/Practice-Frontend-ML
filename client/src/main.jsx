import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/Navbar.jsx";
import Cards from "./components/Cards/Cards";
import CardDetail from "./components/CardDetail/CardDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
  },
  {
    path: "/items",
    element: (
      <>
        <NavBar />
        <Cards />
      </>
    ),
  },
  {
    path: "/items/:id",
    element: (
      <>
        <NavBar />
        <CardDetail />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
