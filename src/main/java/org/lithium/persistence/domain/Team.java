package org.lithium.persistence.domain;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="teams")
public class Team {

	@Id
	@GeneratedValue(generator="team-uuid")
	@GenericGenerator(name="team-uuid", strategy = "uuid")
	@Column(name="teamId")
	private String teamId;
	public String getTeamId() {
		return this.teamId;
	}
	public void setTeamId(String teamId) {
		this.teamId = teamId;
	}
	@Column(name="teamName")
	private String teamName;
	public String getTeamName() {
		return this.teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	@Column(name="leagueId")
	private String leagueId;
	public String getLeagueId() {
		return this.leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	@Column(name="imageLocation")
	private String imageLocation;
	public String getImageLocation() {
		return this.imageLocation;
	}
	public void setImageLocation(String imageLocation) {
		this.imageLocation = imageLocation;
	}
	@GeneratedValue(generator="team-uuid")
	@GenericGenerator(name="team-uuid", strategy = "increment")
	@Column(name="description")
	private String description;
	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}