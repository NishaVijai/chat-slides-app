export const SlidesViewer = () => {
  const embedUrl = "https://docs.google.com/presentation/d/e/2PACX-1vQtFahe8Ls-FZgmpcByVyaZeqeS-9tuVeqQxR9NyH30EbTZnrRgyRQCj5t9fL3mV_4MOK55tt8xbbGb/pubembed?start=false&loop=false&delayms=3000";

  // <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQtFahe8Ls-FZgmpcByVyaZeqeS-9tuVeqQxR9NyH30EbTZnrRgyRQCj5t9fL3mV_4MOK55tt8xbbGb/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

  return (
    <section className="slides-container">
      <h2>Slide Viewer</h2>
      <iframe
        src={embedUrl}
        width="100%"
        height="600"
        allowFullScreen
        title="Google Slides"
      ></iframe>
    </section>
  );
};
