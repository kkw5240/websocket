package com.example.server.chat.repository;

import com.example.server.chat.model.Channel;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface ChatChannelRepo extends ReactiveMongoRepository<Channel, String> {

}