package org.lithium.dto;

import java.sql.Timestamp;
public class FacebookAccessTokenDTO {
	private String userID;
	public String getUserID() {
		return this.userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	private String accessToken;
	public String getAccessToken() {
		return this.accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	private Integer expiresIn;
	public Integer getExpiresIn() {
		return this.expiresIn;
	}
	public void setExpiresIn(Integer expiresIn) {
		this.expiresIn = expiresIn;
	}
	private String signedRequest;
	public String getSignedRequest() {
		return this.signedRequest;
	}
	public void setSignedRequest(String signedRequest) {
		this.signedRequest = signedRequest;
	}
}