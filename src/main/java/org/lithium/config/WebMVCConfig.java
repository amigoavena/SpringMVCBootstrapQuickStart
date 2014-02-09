package org.lithium.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan(basePackages = { "org.lithium.controller" })
public class WebMVCConfig extends WebMvcConfigurationSupport {

	@Override
	public void configureDefaultServletHandling(
			DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

	@Bean
	public ViewResolver viewResolver() {
		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".jsp");
		return viewResolver;
	}
	
	/*
	@Override
	public RequestMappingHandlerMapping requestMappingHandlerMapping() {
		RequestMappingHandlerMapping requestMappingHandlerMapping = super
				.requestMappingHandlerMapping();
		requestMappingHandlerMapping.setUseSuffixPatternMatch(false);
		requestMappingHandlerMapping.setUseTrailingSlashMatch(false);
		return requestMappingHandlerMapping;
	}

	
	 * @Override public void addResourceHandlers(ResourceHandlerRegistry
	 * registry) {
	 * registry.addResourceHandler("/resources/").addResourceLocations(
	 * "/resources/**"); }
	 * 
	 * @Override public void configureDefaultServletHandling(
	 * DefaultServletHandlerConfigurer configurer) { // if the spring dispatcher
	 * is mapped to / then forward non handled // requests // (e.g. static
	 * resource) to the container's "default servlet" configurer.enable(); }
	 * 
	 * @Override public void addInterceptors(final InterceptorRegistry registry)
	 * { // Default name of the locale specification parameter: "locale".
	 * LocaleChangeInterceptor localeChangeInterceptor = new
	 * LocaleChangeInterceptor(); localeChangeInterceptor.setParamName("lang");
	 * registry.addInterceptor(localeChangeInterceptor); }
	 * 
	 * @Bean public SimpleMappingExceptionResolver
	 * simpleMappingExceptionResolver() { SimpleMappingExceptionResolver b = new
	 * SimpleMappingExceptionResolver(); Properties mappings = new Properties();
	 * mappings.put("org.springframework.web.servlet.PageNotFound", "p404");
	 * mappings.put("org.springframework.dao.DataAccessException",
	 * "dataAccessFailure");
	 * mappings.put("org.springframework.transaction.TransactionException",
	 * "dataAccessFailure"); b.setExceptionMappings(mappings); return b; }
	 * 
	 * @Bean public ViewResolver viewResolver() { InternalResourceViewResolver
	 * viewResolver = new InternalResourceViewResolver();
	 * viewResolver.setPrefix("/WEB-INF/views/");
	 * viewResolver.setSuffix(".jsp"); return viewResolver; }
	 * 
	 * @Bean public MessageSource messageSource() {
	 * ReloadableResourceBundleMessageSource messageSource = new
	 * ReloadableResourceBundleMessageSource();
	 * messageSource.setBasenames("classpath:messages/messages");
	 * messageSource.setCacheSeconds(5);
	 * messageSource.setDefaultEncoding("UTF-8"); return messageSource; }
	 * 
	 * @Bean public LocaleResolver localeResolver() { SessionLocaleResolver lr =
	 * new org.springframework.web.servlet.i18n.SessionLocaleResolver();
	 * lr.setDefaultLocale(Locale.ENGLISH); return lr; }
	 * 
	 * 
	 * protected void configureMessageConverters(List<HttpMessageConverter<?>>
	 * converters) { converters.add(converter());
	 * addDefaultHttpMessageConverters(converters) ; }
	 * 
	 * @Bean MappingJackson2HttpMessageConverter converter() { ObjectMapper
	 * mapper = new ObjectMapper()
	 * mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS,false);
	 * MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter =
	 * new MappingJackson2HttpMessageConverter();
	 * mappingJackson2HttpMessageConverter.setObjectMapper(mapper); return
	 * mappingJackson2HttpMessageConverter; }
	 */

}
