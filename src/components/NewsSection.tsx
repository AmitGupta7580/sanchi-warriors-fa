type NewsItem = {
  date: string;
  title: string;
  text: string;
};

const newsItems: NewsItem[] = [];

function NewsSection() {
  return (
    <section id="news" className="section section-alt">
      <div className="container">
        <h2>News</h2>
        <p className="section-lead">Latest updates and academy insights.</p>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article className="card news-item" key={item.title}>
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
