package org.lithium.dto;

import java.sql.Timestamp;

import org.hibernate.annotations.Type;
public class FacebookUserDTO {
	private String id;
	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	private String email;
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	private String first_name;
	public String getFirst_name() {
		return this.first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	private String gender;
	public String getGender() {
		return this.gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	private String last_name;
	public String getLast_name() {
		return this.last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	private String link;
	public String getLink() {
		return this.link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	private String locale;
	public String getLocale() {
		return this.locale;
	}
	public void setLocale(String locale) {
		this.locale = locale;
	}
	private String name;
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	private String timezone;
	public String getTimezone() {
		return this.timezone;
	}
	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}
	private String updated_time;
	public String getUpdated_time() {
		return this.updated_time;
	}
	public void setUpdated_time(String updated_time) {
		this.updated_time = updated_time;
	}
	private Boolean verified;
	public Boolean getVerified() {
		return this.verified;
	}
	public void setVerified(Boolean verified) {
		this.verified = verified;
	}
}