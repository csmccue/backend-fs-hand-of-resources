-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS movies;

create table cars (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	make VARCHAR,
	model VARCHAR,
	year VARCHAR,
	color VARCHAR,
	origin VARCHAR
);

create table jobs (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	company VARCHAR,
	role VARCHAR,
	stock VARCHAR,
	salary INT,
	field VARCHAR
);

create table movies (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title VARCHAR,
	genre VARCHAR,
	country VARCHAR,
	director VARCHAR,
	language VARCHAR
);

INSERT INTO cars (
	make,
	model,
	year,
	color,
	origin
)

VALUES
	('Toyota', 'TundraMax', 2009, 'Fuscia', 'United States'),
	('Mercury', 'Grand Marquis', 1986, 'Red', 'Reunion'),
	('Mazda', 'B-Series Plus', 1999, 'Goldenrod', 'Indonesia'),
	('Chevrolet', 'Suburban 2500', 1995, 'Orange', 'Slovenia'),
	('Subaru', 'Impreza WRX', 2010, 'Blue', 'Netherlands'),
	('Mitsubishi', 'Mighty Max', 1994, 'Orange', 'United States'),
	('Land Rover', 'Freelander', 2008, 'Mauv', 'Zambia'),
	('Toyota', 'Tacoma Xtra', 2003, 'Mauv', 'Peru'),
	('BMW', 'Z4', 2001, 'Indigo', 'Ecuador'),
	('Mitsubishi', 'Eclipse', 2006, 'Crimson', 'China');

INSERT INTO jobs (
	company,
	role,
	stock,
	salary,
	field
)

VALUES
('Digitube', 'Construction Foreman', 'Prudential Public Limited Company', 73629, 'Research and Development'),
('Jatri', 'Project Manager', 'Infinity Property and Casualty Corporation', 71915, 'Human Resources'),
('Demimbu', 'Project Manager', 'M&T Bank Corporation', 7701, 'Support'),
('Jabbercube', 'Project Manager', 'AAON, Inc.', 70103, 'Business Development'),
('Blogtags', 'Construction Manager', 'SeaChange International, Inc.', 75439, 'Legal'),
('Camimbo', 'Estimator', 'Astrazeneca PLC', 118105, 'Accounting'),
('Yambee', 'Surveyor', 'Intermolecular, Inc.', 91718, 'Support'),
('Yodoo', 'Surveyor', 'Boston Omaha Corporation', 99966, 'Legal'),
('Twitterwire', 'Construction Expeditor', 'Arrow Financial Corporation', 84078, 'Accounting'),
('Babbleblab', 'Engineer', 'Sunworks, Inc.', 101794, 'Engineering');

INSERT INTO movies (
	title,
	genre,
	country,
	director,
	language
)

VALUES
('Sons of Perdition', 'Documentary', 'China', 'Denni Stoaks', 'Greek'),
('Wings of Hope (Julianes Sturz in den Dschungel)', 'Adventure|Documentary', 'Indonesia', 'Guilbert Brislane', 'Indonesian'),
('Just Bea (Bare Bea)', 'Drama', 'Indonesia', 'Odelia Fetherby', 'Bosnian'),
('Night of the Comet', 'Comedy|Horror|Sci-Fi', 'Ukraine', 'Gerrard Lyst', 'Kashmiri'),
('Tunnel, The (Tunnel, Der)', 'Action|Drama|Thriller', 'China', 'Keslie Clausewitz', 'Guaraní'),
('Lone Ranger, The', 'Adventure|Western', 'Indonesia', 'Goddard Ghilks', 'English'),
('Where Love Has Gone', 'Drama', 'China', 'Morey Gouly', 'Danish'),
('Army of Darkness', 'Action|Adventure|Comedy|Fantasy|Horror', 'Portugal', 'Manya Rapport', 'Romanian'),
('Bachelor in Paradise', 'Comedy|Romance', 'China', 'Susanne Truett', 'Ndebele'),
('Return to Salem''s Lot, A', 'Horror', 'Russia', 'Norry Peschet', 'Albanian');