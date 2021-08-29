package com.example.server.chat.controller;

import javax.validation.Valid;

import com.example.server.chat.model.Channel;
import com.example.server.chat.model.Message;
import com.example.server.chat.repository.ChatChannelRepo;
import com.example.server.chat.repository.ChatMessageRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.http.HttpStatus;

@RestController
public class ChatMessageController {
    @Autowired
    ChatChannelRepo chatChannelRepo;
    @Autowired
    ChatMessageRepo chatMessageRepo;

    @PostMapping("/chats")
    @ResponseStatus(HttpStatus.CREATED)
    public void postChat(@Valid @RequestBody Message chatMessage){
        chatMessageRepo.insert(chatMessage).subscribe();
    }

    @PostMapping("/channels")
    public Mono<Channel> createChannel(@Valid @RequestBody Channel channel){
        return chatChannelRepo.save(channel);
    }

    @GetMapping(value = "/chats/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Message> streamMessages(@RequestParam String channelId){
        return chatMessageRepo.findWithTailableCursorByChannelId(channelId);
    }
}