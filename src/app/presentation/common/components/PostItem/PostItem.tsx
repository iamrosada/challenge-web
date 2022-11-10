import React from "react";
import {
  Author,
  ButtonRemove,
  Container,
  ImageItem,
  SendBy,
} from "./styled-components/styles";
import deleteIcon from "@/app/presentation/assets/icons/delete.svg";

export interface PostItemInterface {}

const PostItem: React.FC<PostItemInterface> = () => {
  return (
    <Container>
      <ButtonRemove>
        <img src={deleteIcon} alt="Excluir" />
      </ButtonRemove>
      <div className="post-data">
        <ImageItem
          src="https://avatars.githubusercontent.com/u/59142372?s=400&u=b4e54ff8ed49f32efe8c28c93d941e0e5349af13&v=4"
          alt="Excluir"
        />
        <div className="message-and-author">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mattis ligula vel velit scelerisque iaculis. Nam mattis justo id
            orci commodo, eu tempus purus cursus.
          </p>
          <SendBy>Enviado por</SendBy>
          <Author>Rosada Luis</Author>
        </div>
      </div>
    </Container>
  );
};

export default PostItem;
