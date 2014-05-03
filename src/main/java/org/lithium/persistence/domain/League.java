package org.lithium.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="leagues")
public class League {
	
	private String leagueId;
	private String leagueName;
	private Long sportId;
	private String address;
	private String address2;
	

	@Id
	@GeneratedValue(generator="league-uuid")
	@GenericGenerator(name="league-uuid", strategy = "uuid")
	@Column(name="leagueId")
	public String getLeagueId() {
		return leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	
	@Column(name="leagueName")
	public String getLeagueName() {
		return leagueName;
	}
	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}
	
	@Column(name="sportId")
	public Long getSportId() {
		return this.sportId;
	}
	public void setSportId(Long sportId) {
		this.sportId = sportId;
	}
	
	@Column(name="address")
	public String getAddress() {
		return this.address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	@Column(name="address2")
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	
}
