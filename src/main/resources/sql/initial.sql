-- Table leagues 
create table leagues (
 leagueId varchar(32),
 leagueName varchar(250),
 sportId varchar(50),
 address varchar(250),
 address2 varchar(250)
);
-- Table matchs 
create table matchs (
 matchId varchar(32),
 teamHomeId varchar(32),
 teamAwayId varchar(32),
 matchDate timestamp
);
-- Table places 
create table places (
 placeId varchar(32),
 placeName varchar(250),
 city varchar(150),
 state varchar(100),
 country varchar(100)
);
-- Table sports 
create table sports (
 sportId bigint,
 sportName varchar(250)
);
-- Table matchExtras 
create table matchExtras (
 matchId varchar(32),
 referee varchar(32),
 placeId varchar(32)
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
-- Table teams 
create table teams (
 teamId varchar(32),
 teamName varchar(250),
 leagueId varchar(32),
 imageLocation varchar(250),
 description varchar(250)
);
