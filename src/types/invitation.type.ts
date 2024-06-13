import { TImage, TTimestamp } from './common.type';

export type TInvitationGallery = {
  id: number;
  url: string;
};

export type TInvitationStory = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type TInvitationWish = TTimestamp & {
  id: number;
  name: string;
  location: string;
  message: string;
};

export type TInvitationGalleryType =
  | 'grid'
  | 'slideshow'
  | 'slideshow-with-thumbnail';

export type TBackgroundMusic = {
  id: number;
  name: string;
  url: string;
};

export type TTheme = {
  id: number;
  name: string;
  cover: string;
  code: string;
  plan: TPlan;
};

export type TInvitationCategory = TTimestamp & {
  id: number;
  category_name: string;
};

export type TPlan = {
  id: number;
  name: string;
};

export type TInvitationEvent = TTimestamp & {
  id: number;
  event_label: string;
  event_start: Date | string;
  event_end: Date | string;
  event_venue: string;
  event_address: string;
  event_maps_url: string;
  event_video_url: string;
};

export type TInvitationPrivate = TTimestamp & {
  id: number;
  person_name: string;
  person_father_name: string;
  person_mother_name: string;
  person_image: TImage;
  person_child_sequence: string;
  person_instagram: string;
};

export type TInvitationGeneral = TTimestamp & {
  id: number;
  event_name: string;
  event_description: string;
};

export type TInvitation = TTimestamp & {
  id: number;
  user_id: number;
  invitation_category: TInvitationCategory;
  theme: TTheme;
  plan: TPlan;
  plan_expired_at: Date | string;
  slug: string;
  invitation_status: string;
  quote: string;
  invitation_events: Array<TInvitationEvent>;
  invitation_general?: Array<TInvitationGeneral>;
  invitation_private?: Array<TInvitationPrivate>;
  invitation_stories: Array<TInvitationStory>;
  invitation_style: TInvitationGeneralStyle | TInvitationPrivateStyle;
  invitation_galleries: Array<TInvitationGallery>;
  invitation_wishes: Array<TInvitationWish>;
};

export type TInvitationPrivateStyle = {
  cover_style?: string;
  groom_first?: boolean;
  hide_logo?: boolean;
  gallery_style?: TInvitationGalleryType;
};
export type TInvitationGeneralStyle = {
  cover_style?: string;
  groom_first?: boolean;
  hide_logo?: boolean;
  gallery_style?: TInvitationGalleryType;
};
