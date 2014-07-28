package org.lithium.persistence.domain;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="matchs")
public class Match {

	@Id
	@GeneratedValue(generator="match-uuid")
	@GenericGenerator(name="match-uuid", strategy = "uuid")
	@Column(name="matchId")
	private String matchId;
	public String getMatchId() {
		return this.matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	@Column(name="teamHomeId")
	private String teamHomeId;
	public String getTeamHomeId() {
		return this.teamHomeId;
	}
	public void setTeamHomeId(String teamHomeId) {
		this.teamHomeId = teamHomeId;
	}
	@Column(name="teamAwayId")
	private String teamAwayId;
	public String getTeamAwayId() {
		return this.teamAwayId;
	}
	public void setTeamAwayId(String teamAwayId) {
		this.teamAwayId = teamAwayId;
	}
	@Column(name="matchDate")
	private Timestamp matchDate;
	public Timestamp getMatchDate() {
		return this.matchDate;
	}
	public void setMatchDate(Timestamp matchDate) {
		this.matchDate = matchDate;
	}
}