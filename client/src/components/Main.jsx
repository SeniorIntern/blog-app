import '../styles/Main.css';

export default function Main() {
  return (
    <main className="main">
      <article className="article">
        <div className="article__author">
          <div className="author__name">
            <p>Nikhil Thapa</p>
            <p>March 7, 2023</p>
          </div>
        </div>
        <div className="article__content">
          <div className="content_description">
            <h2>JavaScritp is an awesome language.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              eaque tempore corrupti sapiente earum totam quasi obcaecati, nisi
              eligendi ut placeat vitae quis laboriosam unde perferendis
              praesentium a inventore dolorem?
            </p>
          </div>
          <div className="article__image">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minima illum adipisci, tenetur perferendis sed repellat nesciunt.
          </div>
        </div>
        <div className="article__informations"></div>
      </article>
    </main>
  );
}
