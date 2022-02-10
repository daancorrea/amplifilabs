import { useEffect, useState } from "react";
import Modal from "react-modal";
import CloseImg from "../../assets/close.svg";
import { api } from "../../services/api";
import { Container, Comment, TextEmail, TextBody } from "./styles";

interface CommentsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  postId: string;
}

export function CommentsModal({
  isOpen,
  onRequestClose,
  postId,
}: CommentsModalProps) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function getCommentsByPostId() {
      const { data: comments } = await api.get(`/comments?postId=${postId}`);
      setComments(comments);
    }
    getCommentsByPostId();
  }, [postId]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar modal" />
      </button>
      {comments &&
        comments.map((comment: any) => {
          return (
            <Container key={comment.id}>
              <h2>{comment.name}</h2>
              <Comment>
                <TextEmail>{comment.email}</TextEmail>
                <TextBody>{comment.body}</TextBody>
              </Comment>
            </Container>
          );
        })}
    </Modal>
  );
}
