package edu.charactyr.backend;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

  @Bean
  CommandLineRunner init(UserRepository userRepository) {
      return args -> {
        /*  
        String[] names = {"John", "Julie", "Jennifer", "Helen", "Rachel"};
          for (int i = 0; i < names.length; i++) {
              String name = names[i];
              Users user = new Users(i+1, name, name.toLowerCase() + "@domain.com");
              userRepository.save(user);
          }
          */
          userRepository.findAll().forEach(System.out::println);
      };
  }
}
