import { useState, useEffect } from "react";

import './ChatRoomList.css'

function ChatRoomList() {
    const [loading, setLoading] = useState(true);
    const [roomList, setRoomList] = useState(null);
    const [error, setError] = useState(null);

    const [searchKey, setSearchKey] = useState();

    useEffect(() => {
        searchRoomList();
    }, []);

    function searchRoomList() {
        fetch('http://localhost:8080/chat/rooms')
        .then((res) => res.json())
        .then((data) => {
            setRoomList(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
            setLoading(false);
        });
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    function createChatRoom() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", searchKey);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch('http://localhost:8080/chat/room', requestOptions)
        .then((res) => res.json())
        .then((data) => {
            searchRoomList();
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
            setLoading(false);
        });
    }

    return (
        <section>
            <div>
                <input tpye="text" value={searchKey} onChange={e => setSearchKey(e.target.value)}/>
                <button type="button" onClick={createChatRoom}>방 추가</button>
            </div>

            <div>
                <ul>
                    {
                        roomList.map(({roomId, name}) => (
                            <li key={roomId}>{name}</li>
                        ))
                    }                    
                </ul>
            </div>
        </section>
    );
}

export default ChatRoomList;