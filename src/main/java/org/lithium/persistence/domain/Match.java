package org.lithium.persistence.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="matches")
public class Match {
	
	private String matchId;
	private String teamHomeId;
	private String teamAwayId;
	private Date matchDate;
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	@Column(name="matchId")
	public String getMatchId() {
		return matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	
	@Column(name="teamHomeId")
	public String getTeamHomeId() {
		return teamHomeId;
	}
	public void setTeamHomeId(String teamHomeId) {
		this.teamHomeId = teamHomeId;
	}
	@Column(name="teamAwayId")
	public String getTeamAwayId() {
		return teamAwayId;
	}
	public void setTeamAwayId(String teamAwayId) {
		this.teamAwayId = teamAwayId;
	}
	@Column(name="matchDate")
	public Date getMatchDate() {
		return matchDate;
	}
	public void setMatchDate(Date matchDate) {
		this.matchDate = matchDate;
	}
	
}
