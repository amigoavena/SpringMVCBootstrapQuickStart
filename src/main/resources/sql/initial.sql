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
-- Table FacebookUsers 
create table FacebookUsers (
 id varchar(32),
 email varchar(32),
 first_name varchar(64),
 gender varchar(24),
 last_name varchar(64),
 link varchar(255),
 locale varchar(24),
 name varchar(255),
 timezone varchar(12),
 updated_time varchar(32),
 verified boolean
);
-- Table gameSchedules 
create table gameSchedules (
 scheduleId varchar(32),
 leagueId varchar(32),
 weekId int,
 matchID varchar(250),
 comments text
);
-- Table sports 
create table sports (
 sportId bigint,
 sportName varchar(250)
);
-- Table facebookAccessTokens 
create table facebookAccessTokens (
 userID varchar(100),
 accessToken varchar(250),
 expiresIn int,
 signedRequest text
);
