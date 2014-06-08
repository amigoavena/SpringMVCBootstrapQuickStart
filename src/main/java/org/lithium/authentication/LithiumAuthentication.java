package org.lithium.authentication;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

public class LithiumAuthentication implements Authentication {

	private static final long serialVersionUID = 1L;
	
	private String name;
	private String credentials;
	private String principal;
	private LithiumUserDetails details;
	private List<LithiumAuthority> authorities;
	private boolean authenticated;

	@Override
	public String getName() {
		return name;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getCredentials() {
		return credentials;
	}

	@Override
	public LithiumUserDetails getDetails() {
		return details;
	}

	@Override
	public Object getPrincipal() {
		return principal;
	}

	@Override
	public boolean isAuthenticated() {
		return authenticated;
	}

	@Override
	public void setAuthenticated(boolean isAuthenticated)
			throws IllegalArgumentException {
		this.authenticated = isAuthenticated;
	}

	public LithiumAuthentication(){}
}
