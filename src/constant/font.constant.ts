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
  Montserrat,
  Notable,
  Overlock,
  Plus_Jakarta_Sans,
  Poppins,
  Roboto,
  Rubik,
  The_Nautigal,
} from 'next/font/google';
import localFont from 'next/font/local';

// font title
export const javassoul = localFont({
  src: '../../public/fonts/javassoul/Javassoul.ttf',
});
export const italianno = Italianno({ subsets: ['latin'], weight: ['400'] });
export const italiana = Italiana({ subsets: ['latin'], weight: ['400'] });
export const theNautigal = The_Nautigal({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});
export const meowScript = Meow_Script({ subsets: ['latin'], weight: ['400'] });
export const notable = Notable({ subsets: ['latin'], weight: ['400'] });

// font text
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
export const inter = Inter({ subsets: ['latin'] });
export const jost = Jost({ subsets: ['latin'] });
export const judson = Judson({ subsets: ['latin'], weight: ['400', '700'] });
export const montserrat = Montserrat({ subsets: ['latin'] });
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const LIST_FONT_TITLE = [
  {
    title: 'Italianno',
    slug: 'italianno',
    font: italianno,
  },
  {
    title: 'Javassoul',
    slug: 'javassoul',
    font: javassoul,
  },

  {
    title: 'Italiana',
    slug: 'italiana',
    font: italiana,
  },
  {
    title: 'The Nautigal',
    slug: 'the-nautigal',
    font: theNautigal,
  },
  {
    title: 'Abhaya Libre',
    slug: 'abhaya-libre',
    font: abhayaLibre,
  },
  {
    title: 'Notable',
    slug: 'notable',
    font: notable,
  },
  {
    title: 'meow-script',
    slug: 'meow-script',
    font: meowScript,
  },
];

export const LIST_FONT_TEXT = [
  {
    title: 'Poppins',
    slug: 'poppins',
    font: poppins,
  },
  {
    title: 'Overlock',
    slug: 'overlock',
    font: overlock,
  },
  {
    title: 'Inter',
    slug: 'inter',
    font: inter,
  },
  {
    title: 'Jost',
    slug: 'jost',
    font: jost,
  },
  {
    title: 'Judson',
    slug: 'judson',
    font: judson,
  },
  {
    title: 'Roboto',
    slug: 'roboto',
    font: roboto,
  },
  {
    title: 'Montserrat',
    slug: 'montserrat',
    font: montserrat,
  },
  {
    title: 'Josefin Sans',
    slug: 'josefin-sans',
    font: josefinSans,
  },
  {
    title: 'Plus Jakarta Sans',
    slug: 'plus-jakarta-sans',
    font: plusJakartaSans,
  },
];
