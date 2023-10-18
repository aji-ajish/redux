import React from "react";
import {useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
const orderedPost=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
  const renderPosts = orderedPost.map((post) => (
    <article key={post.id}>
      <div>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 10)}</p>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timeStamp={post.date}/>
        <ReactionButtons post={post}/>
      </div>
    </article>
  ));

  return (
    <div>
      <h2>Posts</h2>
      {renderPosts}
    </div>
  );
}
