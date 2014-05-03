package org.lithium.service;

import java.util.GregorianCalendar;
import java.util.List;

import org.hibernate.SessionFactory;
import org.lithium.dto.MessageDTO;
import org.lithium.persistence.domain.League;
import org.lithium.persistence.domain.Match;
import org.lithium.persistence.domain.Sport;
import org.lithium.persistence.domain.Team;
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

	@SuppressWarnings("unchecked")
	@Transactional
	public List<Match> getMatches() {
		List<Match> results = sessionFactory.getCurrentSession()
				.createQuery("from Match").list();
		return results;
	}

	@Transactional
	public Sport saveSport(Sport sport) {
		sessionFactory.getCurrentSession().save(sport);
		return sport;
	}
	
	@Transactional
	public void deleteSport(Sport sport){
		sessionFactory.getCurrentSession().delete(sport);
	}
	
	@Transactional
	public Team saveTeam(Team team) {
		sessionFactory.getCurrentSession().save(team);
		return team;
	}
	
	@Transactional
	public Team getTeamById(String id) {
		Team team = (Team) sessionFactory.getCurrentSession().get(
				Team.class, id);
		return team;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List<Team> getTeams() {
		List<Team> teams = sessionFactory.getCurrentSession()
				.createQuery("from Team").list();
		return teams;
	}

	@Transactional
	public Sport getSportById(Long id) {
		Sport sport = (Sport) sessionFactory.getCurrentSession().get(
				Sport.class, id);
		return sport;
	}

	@SuppressWarnings("unchecked")
	@Transactional
	public List<League> getLeagueList() {
		List<League> sports = sessionFactory.getCurrentSession()
				.createQuery("from League").list();
		return sports;
	}
	
	@Transactional
	public League saveTeam(League league) {
		sessionFactory.getCurrentSession().save(league);
		return league;
	}
	
	@Transactional
	public void deleteLeague(League league){
		sessionFactory.getCurrentSession().delete(league);
	}
	
	@Transactional
	public League getLeagueById(String id) {
		League league = (League) sessionFactory.getCurrentSession().get(
				League.class, id);
		return league;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	public List<Sport> getSportList() {
		List<Sport> sports = sessionFactory.getCurrentSession()
				.createQuery("from Sport").list();
		return sports;
	}

	@Transactional
	public Match saveMatch() {
		Match match = new Match();
		match.setMatchDate(GregorianCalendar.getInstance().getTime());
		match.setTeamAwayId("testaway");
		match.setTeamHomeId("testhome");
		sessionFactory.getCurrentSession().save(match);
		// List results =
		// sessionFactory.getCurrentSession().createQuery("from Match").list();
		return match;
	}
}
