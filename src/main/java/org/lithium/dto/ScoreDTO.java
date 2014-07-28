package org.lithium.dto;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
public class ScoreDTO {
	private String scoreID;
	public String getScoreID() {
		return this.scoreID;
	}
	public void setScoreID(String scoreID) {
		this.scoreID = scoreID;
	}
	private String matchID;
	public String getMatchID() {
		return this.matchID;
	}
	public void setMatchID(String matchID) {
		this.matchID = matchID;
	}
	private String playerID;
	public String getPlayerID() {
		return this.playerID;
	}
	public void setPlayerID(String playerID) {
		this.playerID = playerID;
	}
	private String teamID;
	public String getTeamID() {
		return this.teamID;
	}
	public void setTeamID(String teamID) {
		this.teamID = teamID;
	}
	private Integer scoreValue;
	public Integer getScoreValue() {
		return this.scoreValue;
	}
	public void setScoreValue(Integer scoreValue) {
		this.scoreValue = scoreValue;
	}
	private String scoreTime;
	public String getScoreTime() {
		return this.scoreTime;
	}
	public void setScoreTime(String scoreTime) {
		this.scoreTime = scoreTime;
	}
	private Timestamp scoreDate;
	public Timestamp getScoreDate() {
		return this.scoreDate;
	}
	public void setScoreDate(Timestamp scoreDate) {
		this.scoreDate = scoreDate;
	}
	private String updateUser;
	public String getUpdateUser() {
		return this.updateUser;
	}
	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}
}