import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvMaze';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    // getShowById(showId)
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        // console.log(data);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }
    fetchData();
  }, [showId]);
  return { showData, showError };
};

export default function Show() {
  const { showId } = useParams();

  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <div>Got an Error : {showError.message}</div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading</div>;
}
