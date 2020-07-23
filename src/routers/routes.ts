import { Article, Category, Home, Tag } from "../pages";
import { RouteConfig } from "./type";

export const routes: RouteConfig[] = [
  {
    path: "/post/:pageId",
    component: Article,
    exact: true,
  },
  {
    path: "/category/:categoryId",
    component: Category,
    exact: true,
  },
  {
    path: "/tag/:tagId",
    component: Tag,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
