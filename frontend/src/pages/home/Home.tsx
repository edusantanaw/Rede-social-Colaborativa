import React, {useState} from "react";
import { useAuth } from "../../hooks/auth";
import { creaetPost } from "../../services/post";
import { IPost } from "../../types/post";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import { HomeContainer } from "./styles";

const Home = () => {
  const [newPost, setNewPost] = useState<IPost | null>(null)
  const { user } = useAuth();

  const handleCreatePost = async (
    imagem: File | null,
    content: string | null
  ) => {
    const formData = new FormData();
    imagem && formData.append("image", imagem);
    content && formData.append("content", content);
    user && formData.append("userId", user.id);
    const newPost = await creaetPost(formData);
    if(newPost && user){
      newPost.name = user.name;
      newPost.userId = user.id
      newPost.perfilPhoto = user.perfilPhoto;
    }
    setNewPost(newPost)
  };

  return (
    <HomeContainer>
      <NewPost handleCreate = {handleCreatePost} />
      <Feed newPost={newPost} />
    </HomeContainer>
  );
};

export default Home;
