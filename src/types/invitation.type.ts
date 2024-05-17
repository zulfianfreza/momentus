export type TInvitation = {
  bride_name: string;
  bride_instagram: string;
  bride_child_sequence: string;
  bride_father_name: string;
  bride_mother_name: string;
  groom_name: string;
  groom_instagram: string;
  groom_child_sequence: string;
  groom_father_name: string;
  groom_mother_name: string;
  wedding_date: Date;
  wedding_location: string;
  wedding_reception_date: Date;
  wedding_reception_location: string;
};

export type TInvitationStyle = {
  theme: string;
  groom_first: boolean;
  hide_logo: boolean;
};

export type TInvitationGallery = {
  id: number;
  url: string;
};

export type TInvitationStory = {
  title: string;
  description: string;
  image: string;
};

export type TInvitationWish = {
  id: number;
  name: string;
  location: string;
  message: string;
};
