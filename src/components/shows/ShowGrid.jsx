import { useEffect, useReducer } from 'react';
import ShowCard from './ShowCard';

//custom hook
const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
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

export default function ShowGrid({ show }) {
  const [starred, dispatchStarred] = usePersistedReducer(starredShow, [],"starredShows");

  console.log(starred);

  const onStarClick = showId => {
    const isStarred = starred.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId: showId });
    } else {
      dispatchStarred({ type: 'STAR', showId: showId });
    }
  };

  return show.map(data => (
    <ShowCard
      key={data.show.id}
      name={data.show.name}
      img={data.show.image ? data.show.image.medium : '/not-found-image.png'}
      id={data.show.id}
      summary={data.show.summary}
      onStarClick={onStarClick}
    />
  ));
}
