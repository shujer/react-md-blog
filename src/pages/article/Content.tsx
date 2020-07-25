import React from "react";
import { Markdown } from "../../components";
import styles from "./style.module.less";

const Content: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className={styles.content}>
      <Markdown content={content}></Markdown>
    </div>
  );
};

export default Content;
