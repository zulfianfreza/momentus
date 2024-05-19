"use client";

import SimpleClean from "@/components/theme/simple-clean";
import TraditionalJava from "@/components/theme/traditional-java";
import {
  INVITATION_FAKER,
  INVITATION_GALLERY_FAKER,
  INVITATION_STYLE_FAKER,
} from "@/constant/faker.constant";
import {
  TInvitation,
  TInvitationGallery,
  TInvitationStory,
  TInvitationStyle,
  TInvitationWish,
} from "@/types/invitation.type";
import { useEffect, useRef, useState } from "react";

type TPageParams = {
  searchParams: {
    activeSection: string | undefined;
  };
};

export default function DemoPage({ searchParams }: TPageParams) {
  // faker
  const [invitation, setInvitation] = useState<TInvitation>(INVITATION_FAKER);

  const [invitationStyle, setInvitationStyle] = useState<TInvitationStyle>(
    INVITATION_STYLE_FAKER
  );

  const [invitationGalleries, setInvitationGalleries] = useState<
    TInvitationGallery[]
  >(INVITATION_GALLERY_FAKER);

  const [invitationStories, setInvitationStories] = useState<
    TInvitationStory[]
  >([
    {
      title: "2019",
      description: "First time we meet.",
      image: "/images/traditional-java/story-image-1.jpg",
    },
    {
      title: "2021",
      description: "We decided to get engaged.",
      image: "/images/traditional-java/story-image-2.jpg",
    },
    {
      title: "2022",
      description: "Finally, we are husband and wife.",
      image: "/images/traditional-java/story-image-3.jpg",
    },
    {
      title: "Finally",
      description:
        "Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita.",
      image: "/images/traditional-java/story-image-4.jpg",
    },
  ]);

  const [invitationWishes, setInvitationWishes] = useState<TInvitationWish[]>([
    {
      id: 1,
      name: "Dee",
      location: "Bogor",
      message: "Beautiful 💕",
    },
    {
      id: 2,
      name: "Momentus",
      location: "Bekasi",
      message:
        "Beatiful design matters. happy for all of you that want going to married",
    },
  ]);

  useEffect(() => {
    window.addEventListener(
      "message",
      (
        event: MessageEvent<{
          type: string;
          activeSection: string;
          invitation: TInvitation;
          invitationStyle: TInvitationStyle;
          invitationGalleries: TInvitationGallery[];
          invitationStories: TInvitationStory[];
          invitationWishes: TInvitationWish[];
        }>
      ) => {
        const type = event.data.type;
        const data = event.data;
        if (type === "invitation-updated") {
          setInvitation(data.invitation);
        }
        if (type === "actived-section-updated") {
          const container = document.querySelector("#invitation-container");
          const el = document.getElementById(data.activeSection);
          if (container) {
            if (el) {
              container.scrollTo({
                top: el.offsetTop,
                behavior: "smooth",
              });
            }
          }
        }
        if (type === "invitation-style-updated") {
          setInvitationStyle(data.invitationStyle);
        }
        if (type === "invitation-galleries-updated") {
          setInvitationGalleries(data.invitationGalleries);
        }
        if (type === "invitation-stories-updated") {
          setInvitationStories(data.invitationStories);
        }
        if (type === "invitation-wishes-updated") {
          setInvitationWishes(data.invitationWishes);
        }
      }
    );
  }, []);

  // const isFirstRender = useRef(true);

  useEffect(() => {
    if (searchParams.activeSection) {
      const container = document.querySelector("#invitation-container");
      const el = document.getElementById(searchParams.activeSection);
      if (container) {
        if (el) {
          container.scrollTo({
            top: el.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (invitationStyle.theme === "traditional-java") {
    return (
      <TraditionalJava
        invitation={invitation}
        invitationStyle={invitationStyle}
        invitationGalleries={invitationGalleries}
        invitationStories={invitationStories}
        invitationWishes={invitationWishes}
      />
    );
  }
  if (invitationStyle.theme === "simple-clean") {
    return (
      <SimpleClean
        invitation={invitation}
        invitationStyle={invitationStyle}
        invitationGalleries={invitationGalleries}
        invitationStories={invitationStories}
        invitationWishes={invitationWishes}
      />
    );
  }
}
