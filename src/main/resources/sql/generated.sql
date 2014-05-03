-- Table leagues 
create table leagues (
 leagueId varchar(32),
 leagueName varchar(250),
 sportId varchar(50),
 address varchar(250),
 address2 varchar(250)
);
-- Table scores 
create table scores (
 scoreID varchar(32),
 matchID varchar(250),
 playerID varchar(50),
 teamID varchar(250),
 scoreValue int,
 scoreTime varchar(50),
 scoreDate timestamp,
 updateUser varchar(50)
);
