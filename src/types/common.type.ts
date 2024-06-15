import { Icon } from 'iconsax-react';
import { IconType } from 'react-icons/lib';
import { TPlan } from './invitation.type';

export type TMenu = {
  title: string;
  path: string;
  icon: Icon | IconType;
  submenu?: TMenu[];
};

export type TMeta = {
  meta_title: string;
  meta_description: string;
};

export type TTimestamp = {
  created_at?: Date | string;
  updated_at?: Date | string;
  deleted_at?: Date | string;
};

export type TBlog = TImage &
  TMeta & {
    id: number;
    title: string;
  };

export type TImage = {
  id: number;
  url: string;
  alt?: string;
  type?: string;
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

export type TPreviewDeviceType = 'laptop' | 'tablet' | 'smartphone';
