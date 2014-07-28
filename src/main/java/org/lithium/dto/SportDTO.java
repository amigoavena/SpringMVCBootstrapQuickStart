package org.lithium.dto;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
public class SportDTO {
	private Long sportId;
	public Long getSportId() {
		return this.sportId;
	}
	public void setSportId(Long sportId) {
		this.sportId = sportId;
	}
	private String sportName;
	public String getSportName() {
		return this.sportName;
	}
	public void setSportName(String sportName) {
		this.sportName = sportName;
	}
}