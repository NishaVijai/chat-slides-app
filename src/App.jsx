import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { ChatComponent } from './components/ChatComponent';
import { SlidesViewer } from "./components/SlidesViewer";

function App() {
  return (
    <div className="app-container">
      <Header />

      <section className="main-container">
        <Aside />

        <div className="content-container">
          <h3>Content to show</h3>
          <SlidesViewer />
          <ChatComponent />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
