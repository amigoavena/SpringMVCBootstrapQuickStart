package org.lithium.persistence.domain;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="scores")
public class Score {

	@Id
	@GeneratedValue(generator="score-uuid")
	@GenericGenerator(name="score-uuid", strategy = "uuid")
	@Column(name="scoreID")
	private String scoreID;
	public String getScoreID() {
		return this.scoreID;
	}
	public void setScoreID(String scoreID) {
		this.scoreID = scoreID;
	}
	@Column(name="matchID")
	private String matchID;
	public String getMatchID() {
		return this.matchID;
	}
	public void setMatchID(String matchID) {
		this.matchID = matchID;
	}
	@Column(name="playerID")
	private String playerID;
	public String getPlayerID() {
		return this.playerID;
	}
	public void setPlayerID(String playerID) {
		this.playerID = playerID;
	}
	@Column(name="teamID")
	private String teamID;
	public String getTeamID() {
		return this.teamID;
	}
	public void setTeamID(String teamID) {
		this.teamID = teamID;
	}
	@Column(name="scoreValue")
	private Integer scoreValue;
	public Integer getScoreValue() {
		return this.scoreValue;
	}
	public void setScoreValue(Integer scoreValue) {
		this.scoreValue = scoreValue;
	}
	@Column(name="scoreTime")
	private String scoreTime;
	public String getScoreTime() {
		return this.scoreTime;
	}
	public void setScoreTime(String scoreTime) {
		this.scoreTime = scoreTime;
	}
	@Column(name="scoreDate")
	private Timestamp scoreDate;
	public Timestamp getScoreDate() {
		return this.scoreDate;
	}
	public void setScoreDate(Timestamp scoreDate) {
		this.scoreDate = scoreDate;
	}
	@Column(name="updateUser")
	private String updateUser;
	public String getUpdateUser() {
		return this.updateUser;
	}
	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}
}