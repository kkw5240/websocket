import './ChatContent.css'

import { useSelector } from 'react-redux'
import { useState, useEffect } from "react";

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import ChatMsgList from './ChatMsgList'

import store from '../../app/store'

function ChatContent() {
    let sockJS = new SockJS("http://localhost:8080/ws-stomp");
    let ws = Stomp.over(sockJS);
    let reconnect = 0;

    const [roomId, setRoomId] = useState(useSelector((state) => state.chatRoomMng.value));

    const [chatMsg, setChatMsg] = useState('');
    const [chatList, setChatList] = useState([]);
 

    useEffect(() => {
        connect();
    }, [roomId]);


    function render() {
        setRoomId(store.getState().chatRoomMng.id);
    }

    store.subscribe(render);

    
    function sendMessage(msg) {
        if(!ws) return;
        ws.send("/pub/chat/message", {}, msg);   
        setChatMsg('');
    }

    function receveMessage(msg) {
        console.log(msg);
        if(!msg.message) return;

        let list = chatList;

        list.push({
            sender : msg.sender,
            message : msg.message 
        });

        setChatList([...list]);
    }

    function connect() {
        if(roomId) {
            // pub/sub event
            ws.connect({}, function(frame) {
                ws.subscribe("/sub/chat/room/"+ roomId, function(message) {
                    var recv = JSON.parse(message.body);
                    console.log(recv);
                    receveMessage(recv);
                });

                sendMessage(JSON.stringify({type:'JOIN', roomId:roomId, sender:'test'}));
            }, function(error) {
                if(reconnect++ <= 3) {
                    setTimeout(function() {
                        console.log("connection reconnect");
                        sockJS = new SockJS("/ws-stomp");
                        ws = Stomp.over(sockJS);
                        connect();
                    },5*1000);
                }
            });        
        }
    }

    function sendMsgBtn() {
        if(chatMsg) {
            sendMessage(JSON.stringify({type:'TALK', roomId:roomId, sender:'test', message: chatMsg}));
        }
    }

    return (
        <div>
            <div id="chatMessageList">
                <ChatMsgList messages={chatList} />
            </div>
                
            <div>
                <input tpye="text" value={chatMsg} onChange={e => setChatMsg(e.target.value)} /> 
                <button type="button" onClick={sendMsgBtn}>전송</button>
            </div>

            <div>
               
            </div>
        </div>
    )
}

export default ChatContent;