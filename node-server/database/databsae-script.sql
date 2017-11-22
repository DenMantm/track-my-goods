
-- Creating the users table
CREATE TABLE users (
    id int NOT NULL IDENTITY (1,1),
    username varchar(50),
    password varchar(50)
);

--insert statement
INSERT INTO users VALUES('testuser','testuser');


CREATE TABLE truckFleet (
    id int NOT NULL IDENTITY (1,1),
    driver varchar(50),
    currentRouteStart varchar(50)
);