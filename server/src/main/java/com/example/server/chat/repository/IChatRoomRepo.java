package com.example.server.chat.repository;

import com.example.server.chat.model.ChatRoom;

import java.util.List;

public interface IChatRoomRepo {
    public List<ChatRoom> findAllRoom();
    public ChatRoom findRoomById(String roomId);
    public ChatRoom createChatRoom(String name);
}
