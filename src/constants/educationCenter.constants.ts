import type { ArticleCard } from "@/types/section.types";

export * from "@/constants/site.constants";

export const EDUCATION_CENTER_VIEW_ALL_LABEL = "View all articles";
export const EDUCATION_CENTER_VIEW_ALL_HREF = "#education-articles";

export const EDUCATION_ARTICLES: readonly ArticleCard[] = [
  {
    category: "Anxiety",
    title: "Understanding the physical signs of anxiety",
    readTime: "5 min read",
    href: "#article-anxiety-signs",
  },
  {
    category: "Sleep",
    title: "Why your sleep schedule affects your mood more than you think",
    readTime: "6 min read",
    href: "#article-sleep-mood",
  },
  {
    category: "Relationships",
    title: "Setting boundaries without the guilt",
    readTime: "4 min read",
    href: "#article-boundaries",
  },
];
