package org.lithium.service;

import org.lithium.dto.MessageDTO;
import org.springframework.stereotype.Service;

@Service
public class HelloWorldService {

	public String getmessage(){
		return "Hello World";
	}
	
	public MessageDTO getMessage(){
		return new MessageDTO();
	}
	
}
