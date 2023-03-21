import React from "react";
import { useAuth } from "../../../hooks/auth";
import { useFetching } from "../../../hooks/useFetching";
import { MessagesContainer } from "./style";

const Messages = () => {
  const { user } = useAuth();
  const url = `/messages/recent/${user!.id}`;
  const { data, error } = useFetching({
    url,
    dependeces: [],
  });

  console.log(data);
  console.log("Error \n", error);
  return <MessagesContainer>Messages</MessagesContainer>;
};

export default Messages;
