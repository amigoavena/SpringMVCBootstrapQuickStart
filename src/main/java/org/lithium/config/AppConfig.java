package org.lithium.config;

import java.util.ArrayList;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = { "org.lithium.service" })
public class AppConfig {
	
	@Bean
	public DozerBeanMapper dozerBeanMapper(){
		DozerBeanMapper mapper = new DozerBeanMapper();
		List<String> mappingFiles = new ArrayList<>();
		mappingFiles.add("mapping/dozer-conf.xml");
		mapper.setMappingFiles(mappingFiles);
		return mapper;
	}

}
