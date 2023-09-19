import React, { useState } from 'react'
import Users from './Users'
import UserContext from '../context/UserContext'

function UserDashboard() {

    const [userName, setUserName] = useState("Mayank");
    const users = {
        userName,
        updateName: setUserName
    }
    
    return (
        <UserContext.Provider value={users.userName}>
            <h4>UserContext Hook</h4>
            <Users />
        </UserContext.Provider>
    )
}

export default UserDashboard
