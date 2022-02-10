import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Posts } from "./components/Posts";
import { api } from "./services/api";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await api.get("/posts");
      setPosts(posts);
    }
    getPosts();
  }, []);
  return (
    <>
      <Posts posts={posts} />
      <GlobalStyle />
    </>
  );
}
