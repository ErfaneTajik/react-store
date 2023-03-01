import React from 'react';
import {CssBaseline} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },

]);

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <RouterProvider router={router}/>
            {/* The rest of your application */}
        </React.Fragment>
    );
}

export default App;
