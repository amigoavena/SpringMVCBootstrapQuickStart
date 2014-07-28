package org.lithium.controller;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.log4j.Logger;
import org.dozer.Mapper;
import org.lithium.dto.FacebookAccessTokenDTO;
import org.lithium.dto.FacebookUserDTO;
import org.lithium.persistence.domain.FacebookAccessToken;
import org.lithium.persistence.domain.FacebookUser;
import org.lithium.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class FacebookController {

	private static Logger LOG = Logger.getLogger(FacebookController.class);
	
	@Autowired
	private Mapper serviceMapper;

	@Autowired
	private HelloWorldService service;
	
	@RequestMapping(value = "/saveFBAccessToken", method = RequestMethod.POST)
	@ResponseBody
	public FacebookAccessTokenDTO saveFacebookDetails(HttpSession session, @RequestBody FacebookAccessTokenDTO dto) {
		FacebookAccessToken token = new FacebookAccessToken();
		serviceMapper.map(dto, token);
		token = service.saveOrUpdateFBAccessToken(token);
		session.setAttribute("fbResponse", token);
		serviceMapper.map(token,dto);
		return dto;
	}
	
	
	@RequestMapping(value = "/getFBAccessToken", method = RequestMethod.GET)
	@ResponseBody
	public FacebookAccessTokenDTO getFacebookDetails(HttpSession session) {
		FacebookAccessTokenDTO dto = new FacebookAccessTokenDTO();
		FacebookAccessToken token = (FacebookAccessToken) session.getAttribute("fbResponse");
		LOG.warn(token);
		serviceMapper.map(token,dto);
		return dto;
	}

	@RequestMapping(value = "/saveFacebookUser", method = RequestMethod.POST)
	@ResponseBody
	public FacebookUserDTO saveFacebookDetails(HttpSession session, @RequestBody FacebookUserDTO dto) {
		FacebookUser user = new FacebookUser();
		LOG.debug(ToStringBuilder.reflectionToString(user));
		LOG.debug(ToStringBuilder.reflectionToString(dto));
		serviceMapper.map(dto, user);
		
		session.setAttribute("user", dto);
		
		LOG.debug(user.getId());
		service.saveFacebookUser(user);
		return dto;
	}
}
