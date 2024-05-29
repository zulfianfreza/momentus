import { useCallback, useState } from 'react';

/**
 * hook for create toggle
 * @param initialState
 * @returns
 */
const useToggle = (initialState: boolean) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};

export default useToggle;
