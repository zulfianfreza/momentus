import { Icon, IconProps } from "iconsax-react";

export type TMenu = {
  title: string;
  path: string;
  icon: Icon;
  variant?: IconProps["variant"];
  submenu?: TMenu[];
};

export type TMeta = {
  meta_title: string;
  meta_description: string;
};

export type TBlog = TImage &
  TMeta & {
    id: number;
    title: string;
  };

export interface IMeta {
  meta_title: string;
  meta_description: string;
}

export interface IImage {
  id: number;
  url: string;
}

export interface IBlog extends IMeta, IImage {
  id: number;
  title: string;
}

export type TImage = {
  id: number;
  url: string;
  alt: string;
  type: string;
};

export type IFaq = {
  item: number;
  trigger: string;
  content: string;
};

export type IFeature = {
  icon: Icon;
  feature_name: string;
  feature_description: string;
};

export type ITestimonial = {
  tesimonial_image: string;
  icon_quotation: Icon;
  testimonial_name: string;
  testimonial: string;
};

export type IPortofolio = {
  background_image: string;
  bride_icon: string;
  groom_icon: string;
  name: string;
  date: Date;
  theme: string;
};

export type IAbout = {
  thumbnail: string;
  title: string;
  description: string;
};

export type TId = Pick<TImage, "id">;
export type TImageWithoutId = Omit<TImage, "id">;
