package com.example.server.chat.repository;

import com.example.server.chat.model.Message;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;

import org.springframework.stereotype.Repository;
import reactor.core.CorePublisher;
import reactor.core.publisher.Flux;

//@Repository
public interface ChatMessageRepo extends ReactiveMongoRepository<Message, String> {
    @Tailable
    public Flux<Message> findWithTailableCursorByChannelId(String channelId);
}
