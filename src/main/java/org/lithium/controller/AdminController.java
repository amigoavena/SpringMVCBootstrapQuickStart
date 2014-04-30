package org.lithium.controller;

import java.util.List;

import org.lithium.dto.SportDTO;
import org.lithium.persistence.domain.Sport;
import org.lithium.persistence.domain.Team;
import org.lithium.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AdminController {
	
	@Autowired
	private MessageSendingOperations<String> messagingTemplate;

	@Autowired
	private HelloWorldService service;
	
	@RequestMapping(value = "/getSports", method = RequestMethod.GET)
	@ResponseBody
	public List<Sport> getSports() {
		return service.getSportList();
	}
	
	@RequestMapping(value = "/saveSport", method = RequestMethod.POST)
	@ResponseBody
	public Sport saveSport(@RequestBody SportDTO sportdto) {
		Sport sport = new Sport();
		if(sportdto.getSportName().isEmpty())
			return sport;
		sport.setSportName(sportdto.getSportName());
		return service.saveSport(sport);
	}
	
	@RequestMapping(value = "/deleteSport", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteSport(@RequestParam Long sportId) {
		Sport sport = service.getSportById(sportId);
		service.deleteSport(sport);
		return;
	}
	
	@RequestMapping(value = "/saveTeam", method = RequestMethod.GET)
	@ResponseBody
	public Team saveTeam(@RequestBody Team team) {
		return service.saveTeam(team);
	}

}
