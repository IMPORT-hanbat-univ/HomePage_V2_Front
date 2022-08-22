import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Pagenation from "./Pagenation";

const PostList = ({ posts }) => { // posts : {{postId, Title, writer, postTime}, ...}
  const router = useRouter();

  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * postsPerPage;

  return (
    <div>
      <label>
        페이지 당 표시할 게시물 수:
        <select
          type="number"
          value={postsPerPage}
          onChange={({ target: { value } }) => setPostsPerPage(Number(value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </label>

      <ul>
        {posts
          .slice(offset, offset + postsPerPage)
          .map((post) => (
            <li key={post.postId}>
              <Link href={`${router.pathname}/${post.postId}`}>
                <a>
                  <h1>{post.title}</h1>
                  <p>{post.writer}</p>
                  <p>{post.postTime}</p>
                </a>
              </Link>
            </li>
        ))}
      </ul>

      <Pagenation
        total={posts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default PostList;