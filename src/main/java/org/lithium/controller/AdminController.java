package org.lithium.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.dozer.Mapper;
import org.lithium.dto.FacebookAccessTokenDTO;
import org.lithium.dto.LeagueDTO;
import org.lithium.dto.SportDTO;
import org.lithium.persistence.domain.FacebookAccessToken;
import org.lithium.persistence.domain.League;
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
import org.springframework.web.context.request.WebRequest;



@Controller
public class AdminController {
	
	@Autowired
	private MessageSendingOperations<String> messagingTemplate;
	
	private static Logger LOG = Logger.getLogger(AdminController.class);
	
	@Autowired
	private Mapper serviceMapper;

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
		serviceMapper.map(sportdto, sport);
		if(sportdto.getSportName().isEmpty())
			return sport;
		return service.saveSport(sport);
	}
	
	@RequestMapping(value = "/deleteLeague", method = RequestMethod.DELETE)
	@ResponseBody
	public League deleteLeague(@RequestParam String leagueId) {
		League league = service.getLeagueById(leagueId);
		service.deleteLeague(league);
		return league;
	}
	
	@RequestMapping(value = "/saveLeague", method = RequestMethod.POST)
	@ResponseBody
	public LeagueDTO saveLeague(@RequestBody LeagueDTO leaguedto) {
		League league = new League();
		serviceMapper.map(leaguedto, league);
		service.saveLeague(league);
		return leaguedto;
	}
	
	@RequestMapping(value = "/deleteSport", method = RequestMethod.DELETE)
	@ResponseBody
	public SportDTO deleteSport(@RequestParam Long sportId) {
		Sport sport = service.getSportById(sportId);
		service.deleteSport(sport);
		SportDTO dto = new SportDTO();
		serviceMapper.map(sport, dto);
		return dto;
	}
	
	@RequestMapping(value = "/updateSport", method = RequestMethod.POST)
	@ResponseBody
	public SportDTO updateSport(@RequestBody SportDTO dto) {
		Sport sport = new Sport();//service.getSportById(dto.getSportId());
		serviceMapper.map(dto, sport);
		service.updateSport(sport);
		return dto;
	}
	
	@RequestMapping(value = "/saveTeam", method = RequestMethod.POST)
	@ResponseBody
	public Team saveTeam(@RequestBody Team team) {
		return service.saveTeam(team);
	}

}
