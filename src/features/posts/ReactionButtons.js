import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsup: "👍",
  wow: "🤩",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

export default function ReactionButtons({ post }) {
  const dispatch=useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="reactionBtn" onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))}>
        {emoji}&nbsp;
        {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
}
