package org.lithium.dto;

public class MessageDTO {
	
	private String message;
	
	private String from;

	public MessageDTO() {
		message="test";
		from = "tomala";
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

}
