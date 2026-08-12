import localFont from "next/font/local";

export const montaguSlab = localFont({
  src: "../../node_modules/@fontsource-variable/montagu-slab/files/montagu-slab-latin-wght-normal.woff2",
  weight: "100 700",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

export const monaSans = localFont({
  src: "../../node_modules/mona-sans/Mona-Sans.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-body",
  display: "swap",
});
