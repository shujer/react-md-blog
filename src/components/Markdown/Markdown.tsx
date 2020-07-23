import React from "react";
import "highlight.js/styles/atom-one-dark.css";
import styles from "./style.module.less";

export interface IMarkdownProps {
  content: string;
}

const wrapHtml = (html: string) => ({
  __html: html,
});

const Markdown: React.FC<IMarkdownProps> = ({ content }) => {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={wrapHtml(content)}
    ></div>
  );
};

export default Markdown;
