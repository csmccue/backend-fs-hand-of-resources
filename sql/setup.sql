-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS jobs;

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