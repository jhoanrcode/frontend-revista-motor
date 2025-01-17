import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryPost } from "../services/api";
import { ShowError } from "../components/ShowError/ShowError";
import PostRow from "../components/PostRow/PostRow";
import PostType from "../helpers/postType";
import MoreInfo from "../components/MoreInfo/MoreInfo";

export default function Category() {
  const { categoryName } = useParams() as { categoryName: string };
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    try {
      getCategoryPost(categoryName)
        .then((data) => {
          setPosts(data);
        })
        .catch(console.error);
    } catch (err) {
      console.log(err);
    }
  }, [categoryName]);

  if (!posts) return <ShowError data={false} />;
  if (!posts.length) return <ShowError data={true} />;

  return (
    <section className="container-main">
      <div className="d-flex-column">
        <div className="container__posts--principal">
          <div className="category-title d-flex-column">
            <div className="category-title__head d-flex-row">
              <h2>{categoryName}</h2>
            </div>
            <p className="category-title__info">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Gravida
              cubilia est penatibus parturient cras.
            </p>
          </div>
        </div>
        <div className="row-column">
          <div className="col-left">
            <div className="container-posts--row">
              {posts.map((post) => (
                <PostRow
                  key={post.id}
                  id={post.id}
                  img={post.img}
                  title={post.titulo}
                  category={post.seccion}
                  date={post.fecha}
                  main={"post--list"}
                ></PostRow>
              ))}
            </div>
          </div>
          <div className="col-right">
            <MoreInfo></MoreInfo>
          </div>
        </div>
      </div>
    </section>
  );
}
