package org.lithium.dto;

import java.util.Date;
import java.util.List;

public class MatchDTO {
	
	private String matchId;
	private String teamHome;
	private String teamAway;
	private Date matchDate;
	private String referee;
	private boolean finished;
	
	private List<EventDTO> events;
	
	public String getReferee() {
		return referee;
	}
	public void setReferee(String referee) {
		this.referee = referee;
	}
	public boolean isFinished() {
		return finished;
	}
	public void setFinished(boolean finished) {
		this.finished = finished;
	}
	public List<EventDTO> getEvents() {
		return events;
	}
	public void setEvents(List<EventDTO> events) {
		this.events = events;
	}
	public String getMatchId() {
		return matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	public String getTeamHome() {
		return teamHome;
	}
	public void setTeamHome(String teamHome) {
		this.teamHome = teamHome;
	}
	public String getTeamAway() {
		return teamAway;
	}
	public void setTeamAway(String teamAway) {
		this.teamAway = teamAway;
	}
	public Date getMatchDate() {
		return matchDate;
	}
	public void setMatchDate(Date matchDate) {
		this.matchDate = matchDate;
	}

}
