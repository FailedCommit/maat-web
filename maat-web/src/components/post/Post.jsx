import {Link} from "react-router-dom";
import "./post.css";
import axios from "axios";

export default function Post({post}) {
    return (
        <div className="post">
            <img
                className="postImg"
                src={post.mainImage.location}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
                    <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
                </div>
                <Link to={`/post/${post.id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">
          {new Date(post.createdTime).toDateString()}
        </span>
            </div>
            <p className="postDesc">{post.content}</p>
        </div>
    );
}
