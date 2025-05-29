import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <aside>
      <h4>Menu</h4>

      <nav>
        <Link to="/slides">Slide Viewer</Link>
        <Link to="/chat">Chat Window</Link>
      </nav>
    </aside>
  );
};
