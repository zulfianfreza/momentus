import React from "react";

export default function Client() {
  return <div>client-page</div>;
}

// "use client";

// import SimpleClean from "@/components/theme/simple-clean";
// import TraditionalJava from "@/components/theme/traditional-java";
// import {
//   TInvitation,
//   TInvitationGallery,
//   TInvitationGeneralStyle,
//   TInvitationPrivateStyle,
//   TInvitationStory,
//   TInvitationWish,
// } from "@/types/invitation.type";
// import { getInvitationFaker } from "@/utils/faker";
// import { useEffect, useRef, useState } from "react";

// type TPageProps = {
//   invitation: TInvitation;
// };

// export default function InvitationClient({ invitation }: TPageProps) {
//   const [invitationData, setInvitationData] = useState<TInvitation>(invitation);

//   useEffect(() => {
//     window.addEventListener(
//       "message",
//       (
//         event: MessageEvent<{
//           type: string;
//           activeSection: string;
//           invitation: TInvitation;
//           invitationStyle: TInvitationGeneralStyle | TInvitationPrivateStyle;
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
