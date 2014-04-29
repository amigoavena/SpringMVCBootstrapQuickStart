package org.lithium.dto;

public class EventDTO {

	private String eventId;
	private String matchId;
	private String team;
	private String action;
	private String subject;
	private String subAction;
	private String subSubject;
	
	public String getEventId() {
		return eventId;
	}
	public void setEventId(String eventId) {
		this.eventId = eventId;
	}
	public String getMatchId() {
		return matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getSubAction() {
		return subAction;
	}
	public void setSubAction(String subAction) {
		this.subAction = subAction;
	}
	public String getSubSubject() {
		return subSubject;
	}
	public void setSubSubject(String subSubject) {
		this.subSubject = subSubject;
	}
	
}
