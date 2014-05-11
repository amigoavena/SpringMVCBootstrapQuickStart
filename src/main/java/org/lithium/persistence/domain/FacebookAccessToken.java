package org.lithium.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="facebookAccessTokens")
public class FacebookAccessToken {

	@Id
	@Column(name="userID")
	private String userID;
	public String getUserID() {
		return this.userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	@Column(name="accessToken")
	private String accessToken;
	public String getAccessToken() {
		return this.accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	@Column(name="expiresIn")
	private Integer expiresIn;
	public Integer getExpiresIn() {
		return this.expiresIn;
	}
	public void setExpiresIn(Integer expiresIn) {
		this.expiresIn = expiresIn;
	}
	@Column(name="signedRequest")
	private String signedRequest;
	public String getSignedRequest() {
		return this.signedRequest;
	}
	public void setSignedRequest(String signedRequest) {
		this.signedRequest = signedRequest;
	}
}