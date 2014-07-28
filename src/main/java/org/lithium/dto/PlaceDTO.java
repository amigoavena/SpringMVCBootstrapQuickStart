package org.lithium.dto;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
public class PlaceDTO {
	private String placeId;
	public String getPlaceId() {
		return this.placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
	private String placeName;
	public String getPlaceName() {
		return this.placeName;
	}
	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}
	private String city;
	public String getCity() {
		return this.city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	private String state;
	public String getState() {
		return this.state;
	}
	public void setState(String state) {
		this.state = state;
	}
	private String country;
	public String getCountry() {
		return this.country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
}