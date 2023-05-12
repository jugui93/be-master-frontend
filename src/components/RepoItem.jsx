import React from 'react'
import Card from './UIElements/Card';

import './RepoItem.css'

const RepoItem = (props) => {
  return (
    <li className="repo-item">
      <Card className="repo-item__content">
        <div className="wraper">
          <div className="repo-item__image">
            <img src='https://tse1.mm.bing.net/th?id=OIP.sMTcYSgQ-22v5WnkkLn54wHaFy' alt={props.name} />
          </div>
          <div className="repo-item__info">
            <h2>Nombre: {props.name}</h2>
            <h2>Lenguaje: {props.language}</h2>
            <h3>
              url: <a href={props.url}>{props.url}</a>
            </h3>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default RepoItem