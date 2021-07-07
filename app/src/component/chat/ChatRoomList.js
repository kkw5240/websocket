import './ChatRoomList.css'

function ChatRoomList() {
    return (
        <section>
            <div>
                <input tpye="text" id="chatRoomList_searchKey"/>
                <button type="button" id="chatRoomList_searchBtn">검색</button>
            </div>

            <div>
                <ul>
                    <li>채팅방 1</li>
                    <li>채팅방 2</li>
                    <li>채팅방 3</li>
                    <li>채팅방 4</li>
                </ul>
            </div>
            
        
            
        </section>
    );
}

export default ChatRoomList;