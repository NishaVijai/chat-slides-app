export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Real-time Chat & Slides Viewer Web App &copy; {currentYear} - {currentYear}</p>
      <p>Made by
        <strong>
          Mia Steinbach
        </strong>
        &
        <strong>
          Nisha
        </strong>
      </p>
      <p>GitHub - <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub repository of this project will open on a new tab">Repo</a></p>
    </footer>
  );
};
