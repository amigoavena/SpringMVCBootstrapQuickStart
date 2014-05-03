package org.lithium.dto;

public class LeagueDTO {
	
	private String leagueId;
	private String leagueName;
	private Long SportId;
	private String address;
	private String address2;
	
	public String getLeagueId() {
		return leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	public String getLeagueName() {
		return leagueName;
	}
	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}
	public Long getSportId() {
		return SportId;
	}
	public void setSportId(Long sportId) {
		SportId = sportId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}

}
