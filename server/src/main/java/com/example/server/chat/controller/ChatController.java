package com.example.server.chat.controller;

import com.example.server.chat.model.ChatMessage;
import com.example.server.chat.type.MessageType;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@RequiredArgsConstructor
@Controller
public class ChatController {

    private final SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/chat/message")
    public void message(ChatMessage chatMessage) {
        System.out.println(chatMessage.getRoomId());
        System.out.println(chatMessage.getMessage());
        System.out.println(chatMessage.getSender());
        if(MessageType.JOIN.equals(chatMessage.getMessageType())) {
            chatMessage.setMessage(chatMessage.getSender() + " 입장 ~~~~");
        }

        messagingTemplate.convertAndSend("/sub/chat/room/" + chatMessage.getRoomId(), chatMessage);
    }
}
