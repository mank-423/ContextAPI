import React, { useContext } from 'react'
import Details from './Details'
import UserContext from '../context/UserContext'


function Users() {
    
    const data = useContext(UserContext);

    return (
        <div>
            Users : {data}
            <Details />
        </div>
    )
}

export default Users
