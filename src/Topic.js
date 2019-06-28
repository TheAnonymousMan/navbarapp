import React from 'react';

function Topic({match})
{
    return(
        <div>
            <ol>
                <li><h2>{match.params.topicid}</h2></li>
                <li><h3>{match.params.topicid}</h3></li>
                <li><h4>{match.params.topicid}</h4></li>
            </ol>
        </div>
    )
}

export default Topic;