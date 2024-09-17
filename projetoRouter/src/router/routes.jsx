import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Musicas from "../pages/Musicas";
import Filmes from "../pages/Filmes";
import Series from "../pages/Series";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/musicas", element: <Musicas /> },
    { path: "/filmes", element: <Filmes /> },
    { path: "/series", element: <Series />},
]) 

export default router;