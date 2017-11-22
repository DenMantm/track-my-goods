
-- Creating the users table
CREATE TABLE users (
    id int NOT NULL IDENTITY (1,1),
    username varchar(50),
    password varchar(50)
);

--insert statement
INSERT INTO users VALUES('testuser','testuser');

--INSERT INTO USERS VALUES ('testuser','testuser');
CREATE TABLE truck_record (
    id int NOT NULL IDENTITY (1,1),
    truck_id varchar(50),
    start_lat float(50),
    start_lng float(50),
    finish_lat float(50),
    finish_lng float(50),
    driveer varchar(50),
    goods varchar(50),
    is_active bit
);

CREATE TABLE truck_fleet (
    id int NOT NULL IDENTITY (1,1),
    truck_id varchar(50),
    capacity varchar(50)
);

INSERT INTO truck_fleet VALUES('B1234','10T');
INSERT INTO truck_fleet VALUES('M4452','5T');
INSERT INTO truck_fleet VALUES('G2345','10T');
INSERT INTO truck_fleet VALUES('S7754','8T');
INSERT INTO truck_fleet VALUES('Z6432','6T');


