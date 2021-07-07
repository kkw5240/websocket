import './ChatRoomList.css'
import useFetch from "../util/useFetch";

function ChatRoomList() {

    const { loading, data: rooms, error } = useFetch(
        'http://localhost:8080/chat/rooms'        
      );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;


    return (
        <section>
            <div>
                <input tpye="text" id="chatRoomList_searchKey"/>
                <button type="button" id="chatRoomList_searchBtn">검색</button>
            </div>

            <div>
                <ul>
                    {
                        rooms.map(({roomId, name}) => (
                            <li key={roomId}>{name}</li>
                        ))
                    }                    
                </ul>
            </div>
        </section>
    );
}

export default ChatRoomList;