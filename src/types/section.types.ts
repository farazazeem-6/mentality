export enum SectionIcon {
  Talk = "talk",
  Community = "community",
  Guide = "guide",
  Crisis = "crisis",
}

export type ServiceCard = {
  readonly icon: SectionIcon;
  readonly title: string;
  readonly description: string;
};

export type ResourceLink = {
  readonly label: string;
  readonly description: string;
  readonly href: string;
};

export type StatItem = {
  readonly value: string;
  readonly label: string;
};

export type ArticleCard = {
  readonly category: string;
  readonly title: string;
  readonly readTime: string;
  readonly href: string;
};
