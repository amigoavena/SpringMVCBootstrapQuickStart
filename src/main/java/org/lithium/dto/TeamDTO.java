package org.lithium.dto;

import java.sql.Timestamp;
public class TeamDTO {
	private String teamId;
	public String getTeamId() {
		return this.teamId;
	}
	public void setTeamId(String teamId) {
		this.teamId = teamId;
	}
	private String teamName;
	public String getTeamName() {
		return this.teamName;
	}
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
	private String leagueId;
	public String getLeagueId() {
		return this.leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	private String imageLocation;
	public String getImageLocation() {
		return this.imageLocation;
	}
	public void setImageLocation(String imageLocation) {
		this.imageLocation = imageLocation;
	}
	private String description;
	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}