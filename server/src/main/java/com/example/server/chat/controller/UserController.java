package com.example.server.chat.controller;

import javax.validation.Valid;

import com.example.server.chat.model.User;
import com.example.server.chat.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@RestController
public class UserController {
    private final UserRepo userRepo;

    @PostMapping("/users")
    public Mono<User> saveUser(@Valid @RequestBody User user){
        return userRepo.save(user);
    }

    @GetMapping("/user/{id}")
    public Mono<ResponseEntity<User>> getUserById(@PathVariable String id){
        return userRepo.findById(id).map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}