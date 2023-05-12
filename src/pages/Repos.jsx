import React, { useEffect, useState } from 'react'
import RepoList from '../components/RepoList';
import LoadingSpinner from '../components/UIElements/LoadingSpinner';

const Repos = () => {
    const [loadedRepos, setLoadedRepos] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const userRepos = "google";

    useEffect(()=>{
        const fetchRepos = async () => {
            try {
                const URL = `http://localhost:5000/api/repos/${userRepos}`;

                const response = await fetch(URL);
                const responseData = await response.json();
                setLoadedRepos(responseData);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        };

        fetchRepos();
    },[])


  return (
    <>
        <h2 className='center'>Ejercicio 1: Consumo de APIs</h2>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedRepos && <RepoList items={loadedRepos} />}
    </>
  );
}

export default Repos