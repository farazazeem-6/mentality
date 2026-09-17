export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export enum SocialPlatform {
  Twitter = "twitter",
  Instagram = "instagram",
  LinkedIn = "linkedin",
  Facebook = "facebook",
}

export type SocialLink = {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly href: string;
};

export enum DrawerState {
  Open = "open",
  Closed = "closed",
}
