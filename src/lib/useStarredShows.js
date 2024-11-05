import { useEffect, useReducer } from 'react';

//custom hook
const usePersistedReducer = (reducerFn, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducerFn, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};

const starredShow = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(id => id !== action.showId);
  }
  return currentStarred;
};

export const useStarredShows = () => {
  return usePersistedReducer(starredShow, [], 'starredShows');
};
