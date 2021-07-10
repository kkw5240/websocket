import './App.css';
import Header from './component/header/Header.js'
import Footer from './component/footer/Footer.js'
import Nav from './component/nav/Nav.js'
import ChatRoomList from './component/chat/ChatRoomList.js'
import ChatContent from './component/chat/ChatContent.js'

function App() {
  return (
    <div className="App">

      <Header />
      
      <div className="container">
        <Nav />

        <section className="content">
          <article>
            <ChatContent />
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
