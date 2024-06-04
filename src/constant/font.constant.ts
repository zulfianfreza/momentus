import {
  Abhaya_Libre,
  Comfortaa,
  Inter,
  Italiana,
  Italianno,
  Josefin_Sans,
  Jost,
  Judson,
  Meow_Script,
  Overlock,
  Poppins,
  Roboto,
  Rubik,
  The_Nautigal,
} from 'next/font/google';
import localFont from 'next/font/local';

export const javassoul = localFont({
  src: '../../public/fonts/javassoul/Javassoul.ttf',
});

export const overlock = Overlock({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const rubik = Rubik({ subsets: ['arabic'] });

export const comfortaa = Comfortaa({
  subsets: ['latin'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export const italianno = Italianno({ subsets: ['latin'], weight: ['400'] });

export const inter = Inter({ subsets: ['latin'] });

export const italiana = Italiana({ subsets: ['latin'], weight: ['400'] });

export const theNautigal = The_Nautigal({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const jost = Jost({ subsets: ['latin'] });

export const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const judson = Judson({ subsets: ['latin'], weight: ['400', '700'] });

export const meowScript = Meow_Script({ subsets: ['latin'], weight: ['400'] });
