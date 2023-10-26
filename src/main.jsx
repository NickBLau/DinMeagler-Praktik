import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage";
import FavoriteProperty from "./pages/FavoriteProperty";
import LoginPage from "./pages/LoginPage";
// import ErrorPage from "./pages/ErrorPage";
import PropertyList from "./pages/PropertyList";
import WorkersPage from "./pages/WorkersPage";
import RegisterPage from "./pages/RegisterPage";
import DetailsPage from "./pages/DetailsPage";
import AgentDetailsPage from "./pages/AgentDetailsPage";
import ContactUsPage from "./pages/ContactUsPage";

import ModalTestPage from "./pages/ModalTestPage";
import Axiostest from "./pages/Axiostest";
import Axios from "./pages/Axios";
import TestPage from "./pages/TestPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/HomePage/" element={<HomePage />} />
      <Route path="/FavoriteProperty/" element={<FavoriteProperty />} />
      <Route path="/LoginPage/" element={<LoginPage />} />
      <Route path="/PropertyList/" element={<PropertyList />} />
      <Route path="/WorkersPage/" element={<WorkersPage />} />
      <Route path="/RegisterPage/" element={<RegisterPage />} />
      <Route path="/DetailsPage/:id" element={<DetailsPage />} />
      <Route path="/AgentDetailsPage/:id" element={<AgentDetailsPage />} />
      <Route path="/ContactUsPage/" element={<ContactUsPage />} />
      <Route path="/ModalTestPage/" element={<ModalTestPage />} />
      <Route path="/Axiostest/" element={<Axiostest />} />
      <Route path="/Axios/" element={<Axios />} />
      <Route path="/TestPage/" element={<TestPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//
//  errorElement={<ErrorPage />}>
