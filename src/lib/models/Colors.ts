import { colors } from "../../../tailwind.config";

export type Colors = keyof typeof colors;

type ColorPrefix<K extends string> = `${K}-${Colors}`;
export type TextColors = ColorPrefix<"text">;
export type BorderColors = ColorPrefix<"border">;
export type PlaceholderColors = ColorPrefix<"placeholder">;
export type FillColors = ColorPrefix<"fill">;
export type BackgroundColors = ColorPrefix<"bg">;
