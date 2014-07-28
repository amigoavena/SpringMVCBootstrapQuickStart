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
@Table(name="gameSchedules")
public class GameSchedule {

	@Id
	@Column(name="scheduleId")
	private String scheduleId;
	public String getScheduleId() {
		return this.scheduleId;
	}
	public void setScheduleId(String scheduleId) {
		this.scheduleId = scheduleId;
	}
	@Column(name="leagueId")
	private String leagueId;
	public String getLeagueId() {
		return this.leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	@Column(name="weekId")
	private Integer weekId;
	public Integer getWeekId() {
		return this.weekId;
	}
	public void setWeekId(Integer weekId) {
		this.weekId = weekId;
	}
	@Column(name="matchID")
	private String matchID;
	public String getMatchID() {
		return this.matchID;
	}
	public void setMatchID(String matchID) {
		this.matchID = matchID;
	}
	@Column(name="comments")
	@Type(type="text")
	private String comments;
	public String getComments() {
		return this.comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
}