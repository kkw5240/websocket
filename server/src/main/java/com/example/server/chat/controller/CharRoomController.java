package com.example.server.chat.controller;


import com.example.server.chat.model.ChatRoom;
import com.example.server.chat.repository.ChatRoomMapRepo;
import com.example.server.chat.repository.IChatRoomRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class CharRoomController {

    private final IChatRoomRepo chatRoomRepo;

    public CharRoomController() {
        chatRoomRepo = new ChatRoomMapRepo();
    }

    @PostMapping("room")
    public ChatRoom createRoom(@RequestParam String name) {
        return chatRoomRepo.createChatRoom(name);
    }

    @GetMapping("/rooms")
    public List<ChatRoom> searchRoomList() {
        return chatRoomRepo.findAllRoom();
    }

    @GetMapping("/rooms/{roomId}")
    public ChatRoom searchRoom(@RequestParam String name) {
        return chatRoomRepo.findRoomById(name);
    }
}
