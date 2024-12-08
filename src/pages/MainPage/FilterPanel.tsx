import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	MenuItem,
	Paper,
	Slider,
	TextField,
	Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";

const FilterPanel: FunctionComponent = () => {
	const [petSex, setPetSex] = React.useState<string>("");
	const [age, setAge] = React.useState<number[]>([0, 30]);

	const handleAgeChange = (event: Event, newValue: number | number[]) => {
		setAge(newValue as number[]);
	};

	const marks = [
		{
			value: 0,
			label: "0",
		},
		{
			value: 5,
			label: "5",
		},
		{
			value: 10,
			label: "10",
		},
		{
			value: 15,
			label: "15",
		},
		{
			value: 20,
			label: "20",
		},
		{
			value: 25,
			label: "25",
		},
		{
			value: 30,
			label: "30",
		},
	];

	return (
		<Paper elevation={2} className="min-w-max">
			<FormGroup className="flex flex-col justify-center items-center gap-y-6 m-0 py-6 px-3">
				<Divider orientation="horizontal" flexItem>
					Сортировка
				</Divider>

				<TextField
					className="break-words w-72"
					label="Сортировка по"
					size="small"
					defaultValue="default"
					select
				>
					<MenuItem key={1} value="default">
						По умолчанию
					</MenuItem>
					<MenuItem key={2} value="age-asc">
						По возрасту, по возрастанию
					</MenuItem>
					<MenuItem key={3} value="age-desc">
						По возрасту, по убыванию
					</MenuItem>
					<MenuItem key={4} value="created-asc">
						По дате добавления, сначала новые
					</MenuItem>
					<MenuItem key={5} value="created-desc">
						По дате добавления, сначала старые
					</MenuItem>
				</TextField>

				<Divider orientation="horizontal" flexItem>
					Фильтрация
				</Divider>

				<TextField
					label="Имя"
					className="w-full"
					variant="outlined"
					size="small"
				/>

				<TextField
					className="w-full"
					value={petSex}
					label="Пол"
					size="small"
					onChange={(item) => setPetSex(item.target.value)}
					select
				>
					<MenuItem key={1} value="boy">
						Мальчик
					</MenuItem>
					<MenuItem key={2} value="girl">
						Девочка
					</MenuItem>
				</TextField>

				<TextField className="w-full" label="Статус" size="small" select>
					<MenuItem key={1} value="needs-help">
						Нужна помощь
					</MenuItem>
					<MenuItem key={2} value="looking-for-home">
						В поисках дома
					</MenuItem>
					<MenuItem key={2} value="found-home">
						Найден дом
					</MenuItem>
				</TextField>

				<TextField className="w-full" label="Вид" size="small" select>
					<MenuItem key={1} value="cat">
						Кошка
					</MenuItem>
					<MenuItem key={2} value="dog">
						Собака
					</MenuItem>
					<MenuItem key={3} value="hamster">
						Хомяк
					</MenuItem>
				</TextField>

				<TextField className="w-full" label="Порода" size="small" select>
					<MenuItem key={1} value="siamese">
						Сиамская
					</MenuItem>
					<MenuItem key={2} value="abyssinian">
						Абиссинская
					</MenuItem>
					<MenuItem key={3} value="burma">
						Бурма
					</MenuItem>
				</TextField>

				<TextField
					className="w-full"
					label="Страна нахождения"
					size="small"
					select
				>
					<MenuItem key={1} value="south-korea">
						Южная Корея
					</MenuItem>
					<MenuItem key={2} value="uganda">
						Уганда
					</MenuItem>
					<MenuItem key={3} value="sudan">
						Судан
					</MenuItem>
				</TextField>

				<TextField
					className="w-full"
					label="Город нахождения"
					size="small"
					select
				>
					<MenuItem key={1} value="phenyan">
						Пхеньян
					</MenuItem>
					<MenuItem key={2} value="norilsk">
						Норильск
					</MenuItem>
					<MenuItem key={3} value="grodno">
						Гродно
					</MenuItem>
				</TextField>

				<Box className="w-full p-1">
					<Typography variant="body2" className="w-full" gutterBottom>
						Возраст
					</Typography>
					<Slider
						marks={marks}
						max={30}
						getAriaLabel={() => "Возраст"}
						value={age}
						onChange={handleAgeChange}
						valueLabelDisplay="auto"
					/>
				</Box>

				<FormControlLabel
					className="w-full m-0"
					control={<Checkbox />}
					label="Кастрация/стерилизация"
				/>

				<FormControlLabel
					className="w-full"
					control={<Checkbox />}
					label="Прививки"
				/>

				<Button variant="contained" color="primary" style={{ marginLeft: 20 }}>
					Применить
				</Button>
			</FormGroup>
		</Paper>
	);
};

export default FilterPanel;
