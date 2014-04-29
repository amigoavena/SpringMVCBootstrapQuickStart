package org.lithium.controller;

import java.util.Locale;

import org.lithium.dto.MessageDTO;
import org.lithium.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.core.MessageSendingOperations;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

	@Autowired
	private MessageSendingOperations<String> messagingTemplate;

	@Autowired
	private HelloWorldService service;

	@RequestMapping(value = "/test")
	public String test() {
		return "index";
	}

	@RequestMapping(value = "/admin/andale")
	public String test1() {
		return "index";
	}

	@RequestMapping(value = "/")
	public String displayHome() {
		return "index";
	}

	@RequestMapping(value = "/tomala")
	public ModelAndView gettest() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index");
		mv.addObject("message", service.getmessage());
		return mv;
	}
	
	@RequestMapping(value = "/index")
	public ModelAndView indexView() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index");
		mv.addObject("message", service.getmessage());
		return mv;
	}

	@RequestMapping(value = "/message", method = RequestMethod.GET)
	@ResponseBody
	public MessageDTO getMessage() {
		return service.getMessage();
	}

	@RequestMapping(value = "/getLocale", method = RequestMethod.GET)
	@ResponseBody
	public Locale getlocale(Locale local) {
		return local;
	}

	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public MessageDTO greeting(MessageDTO message) throws Exception {
		MessageDTO messageResult = new MessageDTO();
		messageResult.setMessage(message.getMessage());
		return messageResult;
	}
	
}
