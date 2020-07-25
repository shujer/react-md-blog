import React, { useEffect, useState } from "react";
import { bootstrap } from "../../bootstrap";
import styles from "./style.module.less";
import { useParams } from "react-router-dom";
import { Meta } from "constants/type";
import ArticleContent from "./Content";

const Article: React.FC<{}> = () => {
  const { pageId } = useParams();
  const [content, setContent] = useState<string>("");
  const [data, setData] = useState<Omit<Meta, "content">>({ title: "" });

  useEffect(() => {
    if (pageId) {
      const meta = bootstrap(pageId);
      if (meta) {
        const data = meta.content();
        setContent(data);
      }
    }
  }, [pageId]);

  return (
    <div className={styles.content}>
      <ArticleContent content={content}></ArticleContent>
    </div>
  );
};

export default Article;
