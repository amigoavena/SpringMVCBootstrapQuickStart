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

create table matchInfo(
 matchId varchar(50),
 referee varchar(50), --- user ID
 placeId varchar(50), --- place ID
 matchDate timestamp, -- needs to be with time zone for matches.
);

create table places(
 placeId varchar(50),
 placeName varchar(250),
 city varchar(150),
 state varchar(150),
 country varchar(150)
);
