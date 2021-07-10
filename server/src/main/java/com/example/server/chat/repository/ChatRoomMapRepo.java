package com.example.server.chat.repository;

import com.example.server.chat.model.ChatRoom;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@Repository
public class ChatRoomMapRepo implements IChatRoomRepo {
    private Map<String, ChatRoom> chatRoomMap = new LinkedHashMap<>();

    @Override
    public List<ChatRoom> findAllRoom() {
        List chatRooms = new ArrayList<>(chatRoomMap.values());
        Collections.reverse(chatRooms);
        return chatRooms;
    }

    @Override
    public ChatRoom findRoomById(String roomId) {
        return chatRoomMap.get(roomId);
    }

    @Override
    public ChatRoom createChatRoom(String name) {
        ChatRoom chatRoom = ChatRoom.create(name);
        chatRoomMap.put(chatRoom.getRoomId(), chatRoom);

        return chatRoom;
    }
}
