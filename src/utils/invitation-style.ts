import { COVER_STYLE } from '@/constant/cover-style.constant';

/**
 * Get cover style
 * @param slug
 * @returns
 */
export const getCoverStyle = (slug: string) => {
  const find = COVER_STYLE.find((item) => item.slug === slug);

  return find;
};
