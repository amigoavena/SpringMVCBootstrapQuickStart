create table scores(
 scoreID varchar(50), -- Score ID
 matchID varchar(50), -- Match ID
 playerID varchar(50), -- Player ID
 teamID varchar(50),
 scoreValue int, 
 scoreTime varchar(50),
 scoreDate timestamp,
 updateUser varchar(50)
);

create table matches(
 matchId varchar(50),
 teamHomeId varchar(50),
 teamAwayId varchar(50),
 matchDate timestamp, -- needs to be with time zone for matches.
);
