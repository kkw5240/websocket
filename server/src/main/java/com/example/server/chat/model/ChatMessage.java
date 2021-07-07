package com.example.server.chat.model;

import com.example.server.chat.type.MessageType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {
    private MessageType messageType;
    private String roomId;
    private String sender;
    private String message;
}
