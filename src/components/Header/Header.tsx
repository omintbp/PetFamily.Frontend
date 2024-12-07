import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PetsIcon from "@mui/icons-material/Pets";
import {
	AppBar,
	Box,
	Collapse,
	Container,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MainNavigationTabs from "./MainNavigationTabs";

interface Props {
	children?: React.ReactElement<unknown>;
}

function CollapseOnScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger();

	return <Collapse in={!trigger}>{children ?? <div />}</Collapse>;
}

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<CollapseOnScroll>
					<Toolbar className="m-4">
						<Container className="flex flex-row justify-between items-center">
							<NavLink to="/" className="hover:font-bold">
								<PetsIcon
									className="hover:text-blue-100"
									sx={{ fontSize: 40 }}
								/>
							</NavLink>
							<Typography variant="h3" component="div">
								Pet Family
							</Typography>
							<Box className="flex flex-row justify-between items-center gap-4">
								<NavLink to="/profile">
									<AccountCircleIcon
										className="hover:text-blue-100"
										sx={{ fontSize: 30 }}
									/>
								</NavLink>
								<NavLink to="/">
									<ExitToAppIcon
										className="hover:text-blue-100"
										sx={{ fontSize: 30 }}
									/>
								</NavLink>
							</Box>
						</Container>
					</Toolbar>
				</CollapseOnScroll>
				<Toolbar className="bg-white">
					<Container>
						<MainNavigationTabs />
					</Container>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Toolbar />
			<Toolbar />
		</Box>
	);
}
