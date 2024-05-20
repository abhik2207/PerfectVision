import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from "./pages/AboutPage";

import './App.css';
import ProfilePage from "./pages/ProfilePage";
import PageNotFound from "./pages/PageNotFound";
import HowItWorksPage from "./pages/HowItWorksPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/pricing",
    element: <PricingPage />
  },
  {
    path: "/about-us",
    element: <AboutPage />
  },
  {
    path: "/how-it-works",
    element: <HowItWorksPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

function App() {
  return (
    <div id="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
