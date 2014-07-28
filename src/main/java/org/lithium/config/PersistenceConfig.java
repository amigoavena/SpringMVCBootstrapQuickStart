package org.lithium.config;

import java.util.Properties;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
// @ComponentScan({ "org.baeldung.spring.persistence" })
public class PersistenceConfig {

	@Autowired
	private Environment env;

	@Bean
	public LocalSessionFactoryBean sessionFactory() {
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(dataSource());
		sessionFactory
				.setPackagesToScan(new String[] { "org.lithium.persistence.domain" });
		sessionFactory.setHibernateProperties(hibernateProperties());

		return sessionFactory;
	}

	@Bean
	public DataSource dataSource() {

		// http://106.186.23.242/
		return createPooledDataSource("mysql", "com.mysql.jdbc.Driver",
				"jdbc:mysql://106.186.23.242:3306/gue", "gue_user",
				"Kzh6wCc5TUpxyKeN");

		/*
		 * return new EmbeddedDatabaseBuilder().setType(EmbeddedDatabaseType.H2)
		 * .addScript("sql/initial.sql").build();
		 */
	}

	@Bean
	public HibernateTransactionManager transactionManager() {
		HibernateTransactionManager txManager = new HibernateTransactionManager();
		txManager.setSessionFactory(sessionFactory().getObject());
		return txManager;
	}

	@Bean
	public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
		return new PersistenceExceptionTranslationPostProcessor();
	}

	private DataSource createPooledDataSource(String dataSourceName,
			String driverClassName, String jdbcUrl, String jdbcUsername,
			String jdbcPassword) {

		DataSource ds = new DataSource();
		ds.setDriverClassName(driverClassName);
		ds.setUrl(jdbcUrl);
		ds.setUsername(jdbcUsername);
		ds.setPassword(jdbcPassword);
		ds.setInitialSize(5);
		ds.setMaxActive(10);
		ds.setMaxIdle(5);
		ds.setMinIdle(2);

		return ds;

	}

	Properties hibernateProperties() {
		return new Properties() {
			{
				setProperty("hibernate.hbm2ddl.auto", "create-drop");
				setProperty("hibernate.dialect",
						"org.hibernate.dialect.MySQL5Dialect");
				setProperty("hibernate.globally_quoted_identifiers", "true");
			}
		};
	}
}