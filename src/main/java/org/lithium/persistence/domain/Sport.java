package org.lithium.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="sport")
public class Sport {
	
	private String sportId;
	private String sportName;
	
	@Id
	@GeneratedValue(generator="sport-uuid")
	@GenericGenerator(name="sport-uuid", strategy = "uuid")
	@Column(name="sportId")
	public String getSportId() {
		return sportId;
	}
	public void setSportId(String sportId) {
		this.sportId = sportId;
	}
	@Column(name="sportName")
	public String getSportName() {
		return sportName;
	}
	public void setSportName(String sportName) {
		this.sportName = sportName;
	}
	
}
