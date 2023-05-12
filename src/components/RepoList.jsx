import React from 'react'
import Card from './UIElements/Card';
import RepoItem from './RepoItem';
import './RepoList.css';

const RepoList = (props) => {
    if (props.items.length === 0){
        return (
          <div className="center">
            <Card>
              <h2>No se encontraron repositorios.</h2>
            </Card>
          </div>
        );
    }

    return (
    <ul className='repos-list'>
        { props.items.map( repo => ( 
            <RepoItem 
            key={repo.id} 
            id={repo.id} 
            url={repo.html_url} 
            name={repo.name}
            language={repo.language}
            />
        ))}
    </ul>
    );
}

export default RepoList