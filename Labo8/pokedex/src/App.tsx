import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "../components/Root/Root.tsx";
import HomePage from "../components/HomePage/HomePage.tsx";

// npm install react-router-dom

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <HomePage/>
                }
            ]
        }
    ])

    }
  return (
    <RouterProvider router={router}/>
  );
}

export default App
