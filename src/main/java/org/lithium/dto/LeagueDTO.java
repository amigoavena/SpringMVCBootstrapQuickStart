package org.lithium.dto;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
public class LeagueDTO {
	private String leagueId;
	public String getLeagueId() {
		return this.leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	private String leagueName;
	public String getLeagueName() {
		return this.leagueName;
	}
	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}
	private String sportId;
	public String getSportId() {
		return this.sportId;
	}
	public void setSportId(String sportId) {
		this.sportId = sportId;
	}
	private String address;
	public String getAddress() {
		return this.address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	private String address2;
	public String getAddress2() {
		return this.address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
}