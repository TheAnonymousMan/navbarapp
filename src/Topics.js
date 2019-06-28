import React from 'react';
import Topic from './Topic';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Do not remove the router here. I guarantee it is being used, though I am not sure where

//also, match seems to be an inbuilt variable
function Topics({match}) //{match} declares the variable, possibly
{
    //Not sure what {`${match.url}/randomlink} does.
    //I think it tells the router to match with the topicid parameter present later.
    //Indeed match.url contains the path of the current url (so to speak).
    //match.path tells it to place the string after the url in the parameter provided after the colon
    return(
        <div>
            <h1>Topics</h1>
            <br/>
            <ul>
                <li>
                    <Link to={`${match.url}/randomlink`}>Some random link here</Link> 
                </li>
                
                <li>
                    <Link to={`${match.url}/morerandomlink`}>Some more random link</Link>
                </li>
                <li>
                    <Link to={`${match.url}/otherrandomlink`}>Some other random link</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicid`} component={Topic}/>
            <Route
                exact
                path={match.path}
                render={()=><h3>Please select a topic.</h3>}
            />
        </div>
    );
}

export default Topics;