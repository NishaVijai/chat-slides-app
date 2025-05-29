export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="copyright-text">Real-time Chat & Slides Viewer Web App &copy; {currentYear} - {currentYear}</p>
      <p className="footer-made-by-text">Made by -
        <strong>
          Mia Steinbach
        </strong>
        &
        <strong>
          Nisha
        </strong>
      </p>
      <p>GitHub - <a href="https://github.com/NishaVijai/chat-slides-app" target="_blank" rel="noopener noreferrer" title="GitHub repository of this project will open on a new tab">Repo</a></p>
    </footer>
  );
};
