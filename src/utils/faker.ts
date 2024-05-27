import { INVITATION_FAKER } from "@/constant/faker.constant";

/**
 * Get invitation faker
 * @param slug
 * @returns
 */
export const getInvitationFaker = (slug: string) => {
  const find = INVITATION_FAKER.find((invitation) => invitation.slug === slug);

  return find;
};
