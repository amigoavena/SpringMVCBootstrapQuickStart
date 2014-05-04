package org.lithium.dto;

import java.sql.Timestamp;
public class MatchDTO {
	private String matchId;
	public String getMatchId() {
		return this.matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	private String teamHomeId;
	public String getTeamHomeId() {
		return this.teamHomeId;
	}
	public void setTeamHomeId(String teamHomeId) {
		this.teamHomeId = teamHomeId;
	}
	private String teamAwayId;
	public String getTeamAwayId() {
		return this.teamAwayId;
	}
	public void setTeamAwayId(String teamAwayId) {
		this.teamAwayId = teamAwayId;
	}
	private Timestamp matchDate;
	public Timestamp getMatchDate() {
		return this.matchDate;
	}
	public void setMatchDate(Timestamp matchDate) {
		this.matchDate = matchDate;
	}
}