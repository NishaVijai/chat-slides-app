import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { SlidesViewer } from "./components/SlidesViewer";
import { ChatComponent } from './components/ChatComponent';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="main-container">
          <Aside />

          <div className="content-container">
            <Routes>
              <Route path="/slides" element={<SlidesViewer />} />
              <Route path="/chat" element={<ChatComponent />} />
              <Route path="*" element={<div>Select a menu item</div>} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
