export interface RouteConfig {
  path: string;
  component: React.FC<any>;
  routes?: RouteConfig[];
  exact?: boolean;
}
