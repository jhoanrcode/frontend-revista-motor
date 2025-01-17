import { Link } from "react-router-dom";
import "./index.css";

interface PostRowProps {
  id: number;
  title: string;
  img: string;
  summary?: string;
  category: string;
  date: string;
  main?: string;
}

export default function PostRow(props: PostRowProps) {
  return (
    <article className={`post ${props.main}`}>
      <figure className="post__image">
        <Link to={`/post/${props.id}`} target="_self">
          <img
            src={props.img}
            loading="lazy"
            className="figure-img img-fluid"
            alt={props.title}
          />
        </Link>
      </figure>
      <div className="post__info">
        <Link
          to={`/category/${props.category}`}
          target="_self"
          className="post__info__category"
        >
          {props.category}
        </Link>
        <h2 className="post__info__title">
          <Link to={`/post/${props.id}`} target="_self">
            {props.title}
          </Link>
        </h2>
        <p className="post__info__summary">{props.summary}</p>
        <p className="post__info__date">{props.date}</p>
      </div>
    </article>
  );
}
