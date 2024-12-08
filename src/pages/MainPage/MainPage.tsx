import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab, Grid2 as Grid, Pagination } from "@mui/material";

import { FunctionComponent } from "react";
import ScrollTop from "../../components/ScrollTop";
import FilterPanel from "./FilterPanel";
import PetCard from "./PetCard";

const MainPage: FunctionComponent = () => {
	return (
		<Box className="flex">
			<Box className="w-5/12">
				<FilterPanel />
			</Box>
			<Box className="flex flex-col gap-10 items-center w-full ml-10">
				<Grid container rowSpacing={4}>
					<Grid size={6}>
						<PetCard
							id="78540491-3e63-4ded-8b94-820e6b26dc5d"
							name="Барсик"
							age={14}
							status="Требуется помощь"
							sex="Male"
							isCastrated={true}
							isVacinated={false}
						/>
					</Grid>
					<Grid size={6}>
						<PetCard
							id="78540491-3e63-4ded-8b94-820e6b26dc5d"
							name="Антон"
							age={1}
							status="Требуется помощь"
							sex="Male"
							isCastrated={true}
							isVacinated={false}
						/>
					</Grid>
					<Grid size={6}>
						<PetCard
							id="78540491-3e63-4ded-8b94-820e6b26dc5d"
							name="Борис Николаевич"
							age={16}
							status="Требуется помощь"
							sex="Famele"
							isCastrated={true}
							isVacinated={true}
						/>
					</Grid>
					<Grid size={6}>
						<PetCard
							id="78540491-3e63-4ded-8b94-820e6b26dc5d"
							name="Максим Максимович"
							age={11}
							status="Требуется помощь"
							sex="Male"
							isCastrated={false}
							isVacinated={false}
						/>
					</Grid>
				</Grid>
				<Pagination
					count={10}
					className="my-4"
					variant="outlined"
					shape="rounded"
				/>
				<ScrollTop>
					<Fab
						className="bottom-10 right-5"
						size="small"
						aria-label="scroll back to top"
					>
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</Box>
		</Box>
	);
};

export default MainPage;
