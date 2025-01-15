import { createBrowserRouter } from "react-router-dom";
import HelpPetsPage from "../pages/HelpPetsPage";
import Login from "../pages/LoginPage";
import PetsPage from "../pages/PetsPage";
import ProfilePage from "../pages/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";
import VolunteerPage from "../pages/VolunteersPage";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";
import RootLayout from "./RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <PetsPage />,
			},
			{
				path: "/volunteers",
				element: <VolunteerPage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/profile",
				element: (
					<ProtectedRoute roles={["volunteer", "admin", "participant"]}>
						<ProfilePage />
					</ProtectedRoute>
				),
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
