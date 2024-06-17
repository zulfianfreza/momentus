import { useState, useEffect } from 'react';

/**
 * A custom hook that returns a boolean indicating whether the specified media query matches the current viewport.
 *
 * @param query - The media query string to match against the viewport.
 * @returns A boolean value indicating whether the media query matches the current viewport.
 */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addListener(listener);
    listener(); // Initialize the state

    // Cleanup function
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
