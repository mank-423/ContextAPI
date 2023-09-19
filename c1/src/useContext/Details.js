import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Details() {
    const { userName, updateName } = useContext(UserContext);
    return (
        <div>
            <p>User Name: {userName}</p>
            <button onClick={() => updateName('Kumar')}>Update name</button>
        </div>
    )
}

export default Details
