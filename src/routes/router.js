import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import App from "../App.js";
import Resume from "../pages/Resume.js";
import Contact from "../components/ContactPage/Contact.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;