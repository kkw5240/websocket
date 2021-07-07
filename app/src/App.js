import './App.css';
import Header from './component/header/Header.js'
import Footer from './component/footer/Footer.js'
import Nav from './component/nav/Nav.js'
import ChatRoomList from './component/chat/ChatRoomList.js'

function App() {
  return (
    <div className="App">

      <Header />
      
      <div className="container">
        <Nav />

        <section className="content">
          <article>
            <h1>제목</h1>
            <p>본문</p>
          </article>

        </section>

        <aside>
          <ChatRoomList />
        </aside>
      </div>
      <Footer />

    </div>
  );
}

export default App;
