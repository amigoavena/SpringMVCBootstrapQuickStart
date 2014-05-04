package org.lithium.dto;

import java.sql.Timestamp;
public class MatchExtraDTO {
	private String matchId;
	public String getMatchId() {
		return this.matchId;
	}
	public void setMatchId(String matchId) {
		this.matchId = matchId;
	}
	private String referee;
	public String getReferee() {
		return this.referee;
	}
	public void setReferee(String referee) {
		this.referee = referee;
	}
	private String placeId;
	public String getPlaceId() {
		return this.placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
}