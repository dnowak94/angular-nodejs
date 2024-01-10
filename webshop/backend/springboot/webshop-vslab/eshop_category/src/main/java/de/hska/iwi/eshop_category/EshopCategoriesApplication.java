package de.hska.iwi.eshop_category;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@Configuration
@ComponentScan("de.hska.iwi.eshop_category")
@EnableAutoConfiguration
@ServletComponentScan
@EnableJpaRepositories("de.hska.iwi.eshop_category")
public class EshopCategoriesApplication {

	public static void main(String[] args) {
		SpringApplication.run(EshopCategoriesApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/category").allowedOrigins("http://localhost:4200");
			}
		};
	}
}
