import catalogue from "./catalogue";

export const bootstrap = (pageId: number) => {
  return catalogue.find((ele) => ele.hashCode === +pageId);
};
