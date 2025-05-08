package com.example.shopping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.shopping")
public class ECommerceStoreAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(ECommerceStoreAppApplication.class, args);
    }
}

