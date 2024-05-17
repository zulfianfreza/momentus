import {
  Comfortaa,
  Josefin_Sans,
  Overlock,
  Roboto,
  Rubik,
} from "next/font/google";
import localFont from "next/font/local";

export const javassoul = localFont({
  src: "../../public/fonts/javassoul/Javassoul.ttf",
});

export const overlock = Overlock({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const rubik = Rubik({ subsets: ["arabic"] });

export const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const josefinSans = Josefin_Sans({ subsets: ["latin"] });
