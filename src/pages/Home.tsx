import { useEffect, useState } from "react";
import { getAllPost } from "../services/api";
import { ShowError } from "../components/ShowError/ShowError";
import PostRow from "../components/PostRow/PostRow";
import PostType from "../helpers/postType";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const loadAllPosts = async () => {
      try {
        const allPosts = await getAllPost();
        setPosts(allPosts);
      } catch (err) {
        console.log(err);
      }
    };
    loadAllPosts();
  }, []);

  if (!posts) return <ShowError data={false} />;
  if (!posts.length) return <ShowError data={true} />;

  const firstPost = Array.from(posts)[0];

  return (
    <section className="container-main container-main--sm">
      <div className="d-flex-column">
        <div className="container__posts--principal">
          <PostRow
            key={firstPost.id}
            id={firstPost.id}
            img={firstPost.img}
            title={firstPost.titulo}
            summary={firstPost.resumen}
            category={firstPost.seccion}
            date={firstPost.fecha}
            main={"post--main"}
          />
        </div>
        <div className="container-posts--grid">
          {posts.map(
            (post, i) =>
              i > 0 && (
                <PostRow
                  key={post.id}
                  id={post.id}
                  img={post.img}
                  title={post.titulo}
                  summary={post.resumen}
                  category={post.seccion}
                  date={post.fecha}
                  main={"post--grid"}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
