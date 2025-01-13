import CakeIcon from "@mui/icons-material/Cake";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { matchPath, NavLink, useLocation } from "react-router";

function useRouteMatch(patterns: readonly string[]) {
	const { pathname } = useLocation();

	for (let i = 0; i < patterns.length; i += 1) {
		const pattern = patterns[i];
		const possibleMatch = matchPath(pattern, pathname);
		if (possibleMatch !== null) {
			return possibleMatch;
		}
	}

	return null;
}

export default function MainNavigationTabs() {
	const routeMatch = useRouteMatch(["/volunteers", "/help-pets", "/"]);
	const currentTab = routeMatch?.pattern?.path;

	return (
		<Tabs value={currentTab}>
			<Tab
				value="/"
				icon={<HomeIcon />}
				iconPosition="start"
				label="Главная"
				component={NavLink}
				to="/"
			/>
			<Tab
				value="/volunteers"
				icon={<FavoriteIcon />}
				iconPosition="start"
				label="Волонтёры"
				component={NavLink}
				to="/volunteers"
			/>
			<Tab
				value="/help-pets"
				icon={<CakeIcon />}
				iconPosition="start"
				label="Помочь животным"
				component={NavLink}
				to="/help-pets"
			/>
		</Tabs>
	);
}
