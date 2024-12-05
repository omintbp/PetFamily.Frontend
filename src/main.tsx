import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import VolunteerPage from "./pages/VolunteersPage";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header />
		<VolunteerPage />
		<Footer />
	</StrictMode>
);
