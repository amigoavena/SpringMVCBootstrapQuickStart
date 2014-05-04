package org.lithium.persistence.domain;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="matchExtras")
public class MatchExtra {

	@Id
	@Column(name="matchId")
	private String matchId;
	public String getMatchId() {
		return this.matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	@Column(name="referee")
	private String referee;
	public String getReferee() {
		return this.referee;
	}
	public void setReferee(String referee) {
		this.referee = referee;
	}
	@Column(name="placeId")
	private String placeId;
	public String getPlaceId() {
		return this.placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
}