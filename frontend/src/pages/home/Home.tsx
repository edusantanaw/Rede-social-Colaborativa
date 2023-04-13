import React, { useState } from "react";
import { useAuth } from "../../shared/hooks/auth";
import { creaetPost } from "../../services/post";
import { IPost } from "../../shared/types/post";
import Feed from "./components/feed/Feed";
import NewPost from "./components/newPost/NewPost";
import NewPostModal from "./components/newPost/NewPostModal";
import Projects from "./components/project/Projects";
import { HomeContainer } from "./styles";

const Home = () => {
  const [newPost, setNewPost] = useState<IPost | null>(null);
  const { user } = useAuth();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreatePost = async (
    imagem: File | null,
    content: string | null
  ) => {
    const formData = new FormData();
    imagem && formData.append("image", imagem);
    content && formData.append("content", content);
    user && formData.append("userId", user.id);
    const newPost = await creaetPost(formData);
    newPost && addNewPost(newPost);
  };

  function addNewPost(newPost: IPost) {
    if (!user) return;
    newPost.name = user.name;
    newPost.userId = user.id;
    newPost.perfilPhoto = user.perfilPhoto;

    setNewPost(newPost);
  }

  function handleShowModal() {
    setShowModal((show) => (show ? false : true));
  }

  return (
    <HomeContainer>
      {showModal && (
        <NewPostModal
          handleCreate={handleCreatePost}
          handleModal={handleShowModal}
        />
      )}
      <Projects />
      <div className="main">
        <NewPost handleShowModal={handleShowModal} />
        <Feed newPost={newPost} />
      </div>
    </HomeContainer>
  );
};

export default Home;
