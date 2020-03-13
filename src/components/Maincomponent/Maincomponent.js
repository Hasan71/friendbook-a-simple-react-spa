import Biodata from '../Biodata/Biodata'
import Result from '../Result/Result'
import React, { useState } from 'react'
import dataset from '../../dataset/user'
import './Maincomponent.css'

const Maincomponent = () => {
    const users = []
    const [userData, setUserData] = useState(users)
    const [friends, setFriend] = useState([]);
    const friendHandler= (user) =>{
        const totalFriend = [...friends, user]
        setFriend(totalFriend)
    }
    

    formattedData(dataset)
    function formattedData(userArray){
        for (let index = 0; index < userArray.length; index++) {
            const user = userArray[index];
            const formatUser={
                name : user.name.first + " " + user.name.last,
                email : user.email,
                img : user.picture.large ,
                username : user.login.username,
                phone : user.phone,
                address : user.location,
                gender : user.gender,
                income : Math.floor((Math.random() * (1000 - 500) + 500)),
            }
    
            users.push(formatUser)
    
        }
    }

    return (
        <div className="main-body">
            <div className="all-user">
                {
                    userData.map(user => <Biodata user={user} friendHandler={friendHandler}></Biodata>)
                }
            </div>
            <div className="friends-status">
                <Result friends={friends}></Result>
            </div>
        </div>
    );
};

export default Maincomponent;