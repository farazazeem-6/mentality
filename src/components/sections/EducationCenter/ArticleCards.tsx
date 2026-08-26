import { css } from "styled-system/css";
import { EDUCATION_ARTICLES } from "@/constants/educationCenter.constants";
import { ArticleCardItem } from "./ArticleCardItem";

export function ArticleCards() {
  return (
    <div
      className={css({
        gridColumn: "span 12",
        display: "grid",
        gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: "5",
        mt: "12",
      })}
    >
      {EDUCATION_ARTICLES.map((article) => (
        <ArticleCardItem key={article.title} article={article} />
      ))}
    </div>
  );
}
