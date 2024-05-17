/**
 * Get firstname
 * @param fullName
 * @returns
 */
export function getFirstName(fullName: string): string {
  if (!fullName.trim()) {
    return "";
  }

  const nameParts = fullName.trim().split(" ");
  return nameParts[0];
}

/**
 * Get initial
 * @param name
 * @returns
 */
export function getInitials(name: string): string {
  if (!name) return "";

  const parts = name.split(" ");
  const initials = parts.map((part) => part.charAt(0).toUpperCase()).join("");

  return initials;
}
