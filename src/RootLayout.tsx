import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

export default function RootLayout() {
	return (
		<div className="flex flex-col h-screen min-h-screen gap-1">
			<Header />
			<Container className="flex-grow m-4">
				<Outlet />
			</Container>
			<Footer />
		</div>
	);
}
