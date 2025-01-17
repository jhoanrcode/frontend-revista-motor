import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/api";
import { ShowError } from "../components/ShowError/ShowError";
import PostType from "../helpers/postType";

export default function Post() {
  const { id } = useParams() as { id: string };
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    try {
      getPost(id)
        .then((data) => {
          setPosts(data);
        })
        .catch(console.error);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  if (!posts) return <ShowError data={false} />;
  if (!posts.length) return <ShowError data={true} />;

  const firstPost = Array.from(posts)[0];

  return (
    <section className="container-main">
      <div className="d-flex-column">
        <div className="container-posts--row text-center post-head">
          <p className="post-head__category">{firstPost.seccion}</p>
          <h2 className="post-head__title">{firstPost.titulo}</h2>
          <p className="post-head__summary">{firstPost.resumen}</p>
          <span className="post-head__line"></span>
          <p className="post-head__date">{firstPost.fecha}</p>
          <figure className="post-head__img">
            <img
              src={firstPost.img}
              className="figure-img img-fluid"
              alt={firstPost.titulo}
            />
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>

        {
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: firstPost.contenido }}
          />
        }
      </div>
    </section>
  );
}
