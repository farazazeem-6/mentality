import type { ArticleCard } from "@/types/section.types";

export const EDUCATION_CENTER_EYEBROW = "education center";
export const EDUCATION_CENTER_HEADING_ACCENT = "Learn at your";
export const EDUCATION_CENTER_HEADING_MUTED = "own pace.";
export const EDUCATION_CENTER_DESCRIPTION =
  "Clear, well-researched articles on anxiety, sleep, relationships, and more — written with clinicians, for real life.";

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
