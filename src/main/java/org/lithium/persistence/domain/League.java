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
@Table(name="leagues")
public class League {

	@Id
	@GeneratedValue(generator="league-uuid")
	@GenericGenerator(name="league-uuid", strategy = "uuid")
	@Column(name="leagueId")
	private String leagueId;
	public String getLeagueId() {
		return this.leagueId;
	}
	public void setLeagueId(String leagueId) {
		this.leagueId = leagueId;
	}
	@Column(name="leagueName")
	private String leagueName;
	public String getLeagueName() {
		return this.leagueName;
	}
	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}
	@Column(name="sportId")
	private String sportId;
	public String getSportId() {
		return this.sportId;
	}
	public void setSportId(String sportId) {
		this.sportId = sportId;
	}
	@Column(name="address")
	private String address;
	public String getAddress() {
		return this.address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Column(name="address2")
	private String address2;
	public String getAddress2() {
		return this.address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
}