package org.lithium.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MatchesController {

	@RequestMapping(value = "/match")
	public String displayMatches() {
		return "matches";
	}

}
