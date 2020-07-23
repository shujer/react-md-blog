import React from "react";
import Content from "./Content";

export interface IArticleProps {}

const Article: React.FC<IArticleProps> = () => {
  return (
    <div>
      <Content></Content>
    </div>
  );
};

export default Article;
