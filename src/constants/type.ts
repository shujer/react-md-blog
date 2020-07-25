export interface Meta {
  title: string;
  date?: string;
  poster?: string;
  categories?: string[];
  tag?: string[];
  content: () => string;
}
