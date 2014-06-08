package org.lithium.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

	@RequestMapping(value = "/getUser", method = RequestMethod.GET)
	@ResponseBody
	public Object getFacebookDetails(HttpSession session) {
		Object userDetails = session.getAttribute("user");
		return userDetails;
	}

	@RequestMapping(value = "/logOutUser", method = RequestMethod.GET)
	@ResponseBody
	public Object logoutUser(HttpSession session) {
		session.invalidate();
		return null;
	}
	
}
