import React from "react";

export default function page() {
  return <div>page</div>;
}

// "use client";

// import SimpleClean from "@/components/theme/simple-clean";
// import TraditionalJava from "@/components/theme/traditional-java";
// import {
//   INVITATION_GALLERY_FAKER,
//   INVITATION_STORY_FAKER,
//   INVITATION_STYLE_FAKER,
//   INVITATION_WISHES_FAKER,
// } from "@/constant/faker.constant";
// import {
//   TInvitation,
//   TInvitationGallery,
//   TInvitationStory,
//   TInvitationStyle,
//   TInvitationWish,
// } from "@/types/invitation.type";
// import { getInvitationFaker } from "@/utils/faker";
// import { useEffect, useState } from "react";

// type TPageParams = {
//   searchParams: {
//     activeSection: string | undefined;
//   };
//   params: {
//     slug: string;
//   };
// };

// export default function DemoPage({ searchParams, params }: TPageParams) {
//   // faker
//   const invitationFaker = getInvitationFaker(params.slug);
//   const [invitation, setInvitation] = useState<TInvitation>(invitationFaker!);
//   const [invitationStyle, setInvitationStyle] = useState<TInvitationStyle>(
//     INVITATION_STYLE_FAKER
//   );
//   const [invitationGalleries, setInvitationGalleries] = useState<
//     TInvitationGallery[]
//   >(INVITATION_GALLERY_FAKER);
//   const [invitationStories, setInvitationStories] = useState<
//     TInvitationStory[]
//   >(INVITATION_STORY_FAKER);
//   const [invitationWishes, setInvitationWishes] = useState<TInvitationWish[]>(
//     INVITATION_WISHES_FAKER
//   );

//   useEffect(() => {
//     window.addEventListener(
//       "message",
//       (
//         event: MessageEvent<{
//           type: string;
//           activeSection: string;
//           invitation: TInvitation;
//           invitationStyle: TInvitationStyle;
//           invitationGalleries: TInvitationGallery[];
//           invitationStories: TInvitationStory[];
//           invitationWishes: TInvitationWish[];
//         }>
//       ) => {
//         const type = event.data.type;
//         const data = event.data;
//         if (type === "invitation-updated") {
//           setInvitation(data.invitation);
//         }
//         if (type === "actived-section-updated") {
//           const container = document.querySelector("#invitation-container");
//           const el = document.getElementById(data.activeSection);
//           if (container) {
//             if (el) {
//               container.scrollTo({
//                 top: el.offsetTop,
//                 behavior: "smooth",
//               });
//             }
//           }
//         }
//         if (type === "invitation-style-updated") {
//           setInvitationStyle(data.invitationStyle);
//         }
//         if (type === "invitation-galleries-updated") {
//           setInvitationGalleries(data.invitationGalleries);
//         }
//         if (type === "invitation-stories-updated") {
//           setInvitationStories(data.invitationStories);
//         }
//         if (type === "invitation-wishes-updated") {
//           setInvitationWishes(data.invitationWishes);
//         }
//       }
//     );
//   }, []);

//   // const isFirstRender = useRef(true);

//   useEffect(() => {
//     if (searchParams.activeSection) {
//       const container = document.querySelector("#invitation-container");
//       const el = document.getElementById(searchParams.activeSection);
//       if (container) {
//         if (el) {
//           container.scrollTo({
//             top: el.offsetTop,
//             behavior: "smooth",
//           });
//         }
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (invitationStyle.theme === "traditional-java") {
//     return (
//       <TraditionalJava
//         invitation={invitation}
//         invitationStyle={invitationStyle}
//         invitationGalleries={invitationGalleries}
//         invitationStories={invitationStories}
//         invitationWishes={invitationWishes}
//       />
//     );
//   }
//   if (invitationStyle.theme === "simple-clean") {
//     return (
//       <SimpleClean
//         invitation={invitation}
//         invitationStyle={invitationStyle}
//         invitationGalleries={invitationGalleries}
//         invitationStories={invitationStories}
//         invitationWishes={invitationWishes}
//       />
//     );
//   }
// }
