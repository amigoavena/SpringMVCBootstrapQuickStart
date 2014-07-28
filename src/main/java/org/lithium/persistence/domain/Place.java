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
@Table(name="places")
public class Place {

	@Id
	@GeneratedValue(generator="place-uuid")
	@GenericGenerator(name="place-uuid", strategy = "uuid")
	@Column(name="placeId")
	private String placeId;
	public String getPlaceId() {
		return this.placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
	@Column(name="placeName")
	private String placeName;
	public String getPlaceName() {
		return this.placeName;
	}
	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}
	@Column(name="city")
	private String city;
	public String getCity() {
		return this.city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Column(name="state")
	private String state;
	public String getState() {
		return this.state;
	}
	public void setState(String state) {
		this.state = state;
	}
	@Column(name="country")
	private String country;
	public String getCountry() {
		return this.country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
}