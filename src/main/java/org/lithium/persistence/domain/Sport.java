package org.lithium.persistence.domain;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="sports")
public class Sport {

	@Id
	@GeneratedValue(generator="sport-uuid")
	@GenericGenerator(name="sport-uuid", strategy = "increment")
	@Column(name="sportId")
	private Long sportId;
	public Long getSportId() {
		return this.sportId;
	}
	public void setSportId(Long sportId) {
		this.sportId = sportId;
	}
	@Column(name="sportName")
	private String sportName;
	public String getSportName() {
		return this.sportName;
	}
	public void setSportName(String sportName) {
		this.sportName = sportName;
	}
}