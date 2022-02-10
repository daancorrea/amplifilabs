import { Container, Cards } from "./styles";
import { CommentsModal } from "../CommentsModal";
import React, { useState } from "react";
interface PostsProps {
  posts: any;
}
export function Posts({ posts }: PostsProps) {
  const [isCommentsModal, setIsCommentsModal] = useState(false);
  const [postId, setPostId] = useState("");

  function handleOpenCommentsModal(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const postId: HTMLButtonElement = event.currentTarget;

    setIsCommentsModal(true);
    setPostId(postId.value);
  }
  function handleCloseCommentsModal() {
    setIsCommentsModal(false);
  }
  return (
    <Container>
      {posts &&
        posts.map((post: any) => {
          return (
            <Cards key={post.id}>
              <h2>{post.title.toUpperCase()}</h2>
              <p>{post.body}</p>
              <button
                type="button"
                value={post.id}
                onClick={handleOpenCommentsModal}
              >
                Comentários
              </button>
            </Cards>
          );
        })}
      <CommentsModal
        isOpen={isCommentsModal}
        onRequestClose={handleCloseCommentsModal}
        postId={postId}
      />
    </Container>
  );
}
