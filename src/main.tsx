import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HelpPetsPage from "./pages/HelpPetsPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import VolunteerPage from "./pages/VolunteersPage";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <MainPage />,
			},
			{
				path: "/volunteers",
				element: <VolunteerPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
			{
				path: "/registraion",
				element: <RegistrationPage />,
			},
			{
				path: "/help-pets",
				element: <HelpPetsPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router}></RouterProvider>
);
