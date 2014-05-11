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
	@Column(name="id")
	private String id;
	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	@Column(name="email")
	private String email;
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name="first_name")
	private String first_name;
	public String getFirst_name() {
		return this.first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	@Column(name="gender")
	private String gender;
	public String getGender() {
		return this.gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Column(name="last_name")
	private String last_name;
	public String getLast_name() {
		return this.last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	@Column(name="link")
	private String link;
	public String getLink() {
		return this.link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	@Column(name="locale")
	private String locale;
	public String getLocale() {
		return this.locale;
	}
	public void setLocale(String locale) {
		this.locale = locale;
	}
	@Column(name="name")
	private String name;
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name="timeZone")
	private String timeZone;
	public String getTimeZone() {
		return this.timeZone;
	}
	public void setTimeZone(String timeZone) {
		this.timeZone = timeZone;
	}
	@Column(name="updatedTime")
	private String updatedTime;
	public String getUpdatedTime() {
		return this.updatedTime;
	}
	public void setUpdatedTime(String updatedTime) {
		this.updatedTime = updatedTime;
	}
	@Column(name="verified")
	private Boolean verified;
	public Boolean getVerified() {
		return this.verified;
	}
	public void setVerified(Boolean verified) {
		this.verified = verified;
	}
}