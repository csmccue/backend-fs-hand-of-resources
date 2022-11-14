-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS cars;

create table cars (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	make VARCHAR,
	model VARCHAR,
	year VARCHAR,
	color VARCHAR,
	origin VARCHAR
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
	('BMW', 'Z4', 2011, 'Indigo', 'Ecuador'),
	('Mitsubishi', 'Eclipse', 2006, 'Crimson', 'China');