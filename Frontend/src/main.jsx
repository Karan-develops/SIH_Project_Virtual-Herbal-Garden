import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/Login/LoginPage.jsx";
import SignupPage from "./components/Sign-up/SignupPage.jsx";
import BrowseHerbs from "./components/BrowseHerbs/BrowseHerbs.jsx";
import SavedPlants from "./components/Saved-Plants/SavedPlants.jsx";
import MainDetails from "./components/Plant-Details/MainDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/herbs" element={<BrowseHerbs />} />
      <Route path="/savedPlants" element={<SavedPlants/>}/>
      <Route path="/ab" element={<MainDetails />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
