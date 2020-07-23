import React, { useEffect, useState } from "react";
import { catalogue } from "../../posts";
import { Markdown } from "../../components";
import styles from "./style.module.less";
import { useParams } from "react-router-dom";

const Content: React.FC<{}> = () => {
  const [content, setContent] = useState<string>("");
  const { pageId } = useParams();
  useEffect(() => {
    if (pageId) {
      const meta = catalogue.find((ele) => ele.hashCode === +pageId);
      if (meta) {
        setContent(meta.content());
      }
    }
  }, [pageId]);
  return (
    <div className={styles.content}>
      <Markdown content={content}></Markdown>
    </div>
  );
};

export default Content;
