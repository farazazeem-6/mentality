import type { ReactElement, SVGProps } from "react";
import { ChatIcon } from "@/assets/icons/ChatIcon";
import { CompassIcon } from "@/assets/icons/CompassIcon";
import { UsersIcon } from "@/assets/icons/UsersIcon";
import { HeartPulseIcon } from "@/assets/icons/HeartPulseIcon";
import { SectionIcon } from "@/types/section.types";

export const SERVICE_ICON_MAP: Record<
  SectionIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  [SectionIcon.Talk]: ChatIcon,
  [SectionIcon.Guide]: CompassIcon,
  [SectionIcon.Community]: UsersIcon,
  [SectionIcon.Crisis]: HeartPulseIcon,
};
