package org.lithium.service;

import java.util.GregorianCalendar;
import java.util.List;

import org.hibernate.SessionFactory;
import org.lithium.dto.MessageDTO;
import org.lithium.persistence.domain.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class HelloWorldService {

	@Autowired
	private SessionFactory sessionFactory;

	public String getmessage() {
		return "Hello World";
	}

	public MessageDTO getMessage() {
		return new MessageDTO();
	}

	@Transactional
	public List<Match> getMatches() {
		List results = sessionFactory.getCurrentSession()
				.createQuery("from Match").list();
		return results;
	}

	@Transactional
	public Match saveMatch() {
		Match match = new Match();
		match.setMatchDate(GregorianCalendar.getInstance().getTime());
		match.setTeamAwayId("testaway");
		match.setTeamHomeId("testhome");
		sessionFactory.getCurrentSession().save(match);
		//List results = sessionFactory.getCurrentSession().createQuery("from Match").list();
		return match;
	}
}
