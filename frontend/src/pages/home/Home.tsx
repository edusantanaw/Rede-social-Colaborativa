import React, {useState} from "react";
import { useAuth } from "../../hooks/auth";
import { creaetPost } from "../../services/post";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import { HomeContainer } from "./styles";

const Home = () => {
  const [newPost, setNewPost] = useState<any>(null)
  const { user } = useAuth();

  const handleCreatePost = async (
    imagem: File | null,
    content: string | null
  ) => {
    const formData = new FormData();
    imagem && formData.append("image", imagem);
    content && formData.append("content", content);
    user && formData.append("userId", user.id);
    setNewPost(true)
    await creaetPost(formData);
  };

  return (
    <HomeContainer>
      <NewPost handleCreate = {handleCreatePost} />
      <Feed newPost={newPost} />
    </HomeContainer>
  );
};

export default Home;
