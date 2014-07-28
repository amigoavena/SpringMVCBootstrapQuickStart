package org.lithium.dto;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
public class GameScheduleDTO {
	private String scheduleId;
	public String getScheduleId() {
		return this.scheduleId;
	}
	public void setScheduleId(String scheduleId) {
		this.scheduleId = scheduleId;
	}
	private String leagueId;
	public String getLeagueId() {
		return this.leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	private Integer weekId;
	public Integer getWeekId() {
		return this.weekId;
	}
	public void setWeekId(Integer weekId) {
		this.weekId = weekId;
	}
	private String matchID;
	public String getMatchID() {
		return this.matchID;
	}
	public void setMatchID(String matchID) {
		this.matchID = matchID;
	}
	private String comments;
	public String getComments() {
		return this.comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
}