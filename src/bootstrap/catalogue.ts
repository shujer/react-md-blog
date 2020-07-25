import { Meta } from "../constants/type";
import { caculateHashCode, importAll } from "../utils";

export interface CatalogueItem extends Meta {
  hashCode: number;
}

const metaContext = importAll(
  require.context("../_posts", true, /meta.ts$/)
) as {
  meta: Meta;
}[];

const catalogue = metaContext.reduce((prev, cur) => {
  const { meta } = cur;
  return [...prev, { ...meta, hashCode: caculateHashCode(meta.title) }];
}, [] as CatalogueItem[]);

export default catalogue;
