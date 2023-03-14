import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import theme from "./lib/materialUiTheme";
import "./App.css"

// register Swiper custom elements


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
            <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>

            </ThemeProvider>
            {/* The rest of your application */}
        </React.Fragment>
    );
}

export default App;
