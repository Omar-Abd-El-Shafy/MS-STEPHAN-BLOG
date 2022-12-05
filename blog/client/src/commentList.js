import React from 'react';

export default (props) => {
   
    const renderedComments = Object.values(props.comments).map(comment => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })
    return <ul>
        {renderedComments}
    </ul>
}