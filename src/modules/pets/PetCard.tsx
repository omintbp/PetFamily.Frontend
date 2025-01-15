import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	Paper,
	Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface RussinDeclineProps {
	d1: string;
	d2: string;
	d3: string;
	c: number;
}

interface PetProps {
	id: string;
	age: number;
	name: string;
	status: string;
	sex: string;
	isCastrated: boolean;
	isVacinated: boolean;
}

function trueRussianDecline({ d1, d2, d3, c }: RussinDeclineProps): string {
	switch (c % 100) {
		case 11:
		case 12:
		case 13:
		case 14:
			return `${c} ${d1}`;
		default:
			switch (c % 10) {
				case 0:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					return `${c} ${d1}`;
				case 1:
					return `${c} ${d2}`;
				case 2:
				case 3:
				case 4:
					return `${c} ${d3}`;
			}
	}
	return "";
}

const PetCard: FunctionComponent<PetProps> = ({
	id,
	age,
	name,
	status,
	sex,
	isCastrated,
	isVacinated,
}) => {
	const ageTitle = trueRussianDecline({
		d1: "лет",
		d2: "год",
		d3: "года",
		c: age,
	});

	return (
		<Card className="max-w-96">
			<Box className="relative">
				<CardMedia
					className="h-64"
					image="https://proza.ru/pics/2021/09/03/24.jpg"
					title="pet"
				/>
				<Paper className="absolute top-0 right-0 m-1">
					<Typography className="px-2">{status}</Typography>
				</Paper>
			</Box>

			<CardContent className="flex flex-col h-72">
				<Typography gutterBottom variant="h5" component="div">
					{name}, {ageTitle}
				</Typography>

				<Box className="flex flex-row gap-2 mb-3 mt-1">
					{isVacinated && (
						<Chip
							variant="outlined"
							icon={<DoneOutlineIcon color="success" />}
							label="Вакцинация"
						/>
					)}
					{isCastrated && (
						<Chip
							variant="outlined"
							icon={<DoneOutlineIcon color="success" />}
							label={sex === "Male" ? "Кастрация" : "Стерилизация"}
						/>
					)}
				</Box>

				<Divider orientation="horizontal" flexItem></Divider>

				<Box className="h-40 mt-3 overflow-auto">
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						Очаровательный котенок {name} ищет дом. Ему примерно {ageTitle}, он
						здоров, обработан от паразитов и приучен к лотку, готов к
						вакцинации. По характеру очень ласковый и ручной, обожает бегать и
						играть, на ручках фырчит.
					</Typography>
				</Box>
			</CardContent>

			<CardActions className="flex flex-row justify-normal items-center my-2">
				<NavLink className="flex-1" to={`pet/${id}`}>
					<Button fullWidth size="medium" variant="contained">
						Подробнее
					</Button>
				</NavLink>
				<Button size="medium" variant="contained" className="text-black">
					<StarOutlineIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

export default PetCard;
