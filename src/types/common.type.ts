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

export type TId = Pick<TImage, "id">;
export type TImageWithoutId = Omit<TImage, "id">;
