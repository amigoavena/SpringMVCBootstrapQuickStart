package org.lithium.controller;

import java.util.List;

import org.lithium.dto.MessageDTO;
import org.lithium.persistence.domain.Match;
import org.lithium.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MatchesController {
	
	@Autowired
	private MessageSendingOperations<String> messagingTemplate;

	@Autowired
	private HelloWorldService service;

	@RequestMapping(value = "/match")
	public String displayMatches() {
		return "matches";
	}
	
	@RequestMapping(value = "/getMatches", method = RequestMethod.GET)
	@ResponseBody
	public List<Match> getMatches() {
		return service.getMatches();
	}
	
	@RequestMapping(value = "/saveMatch", method = RequestMethod.GET)
	@ResponseBody
	public Match saveMatch() {
		MessageDTO messageResult = new MessageDTO();
		messageResult.setMessage("pos andale");
		messagingTemplate.convertAndSend("/topic/match/1",messageResult);
		return service.saveMatch();
	}
	
	@MessageMapping("/matches")
	public MessageDTO matches(MessageDTO message) throws Exception {
		MessageDTO messageResult = new MessageDTO();
		messageResult.setMessage(message.getMessage());
		messagingTemplate.convertAndSend("/topic/match/1",message);
		return messageResult;
	}

}
