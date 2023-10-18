import React, { useState } from "react";
import { postsAdd } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export default function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState('');
  const users = useSelector(selectAllUsers);

  const titleHandle = (e) => {
    setTitle(e.target.value);
  };
  const contentHandle = (e) => {
    setContent(e.target.value);
  };
  const userIdHandle = (e) => {
    setUserId(e.target.value);
  };
  const userOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  const onSavePostClick = (e) => {
    if (title && content) {
      dispatch(postsAdd(title, content, userId));
    }
    setTitle("");
    setContent("");
    // e.preventDefault();
  };
  const auth=Boolean(title)&&Boolean(content)&&Boolean(userId)

  return (
    <div>
      <h2>Add New Post</h2>
      <form>
        <div className="name">
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="enter title"
            value={title}
            onChange={titleHandle}
          />
        </div>
        <div className="author">
          <label htmlFor="postAuthor">Post Title</label>
          <select
            id="postAuthor"
            name="postAuthor"
            value={userId}
            onChange={userIdHandle}
          >
          <option value=''>select Author</option>
            {userOption}
          </select>
        </div>
        <div className="content">
          <label htmlFor="postTitle">Post Content</label>
          <textarea
          placeholder="enter content"
            name="postContent"
            id="postContent"
            value={content}
            onChange={contentHandle}
          />
        </div>
        <div className="button">
          <button type="button" className="submit" onClick={onSavePostClick} disabled={!auth}>
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}
