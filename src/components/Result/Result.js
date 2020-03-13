import React from 'react';
import './Result.css'

const Result = (props) => {
    const friends = props.friends;
    const friendIncome = friends.reduce(((total, friend) => Number(total)+Number(friend.income)),0 );
    
    
    
    return (
        <div className="friend-container">
            <h3>Friends Added: {friends.length}</h3>
            <h3>Their Income: ${friendIncome}</h3>
            <table>

            {
                friends.map(user => <React.Fragment>
                    <tr>
                        <td><img src={user.img} alt=""/></td>
                        <td>{user.name}</td>
                    </tr>
                </React.Fragment>)
            }
            </table>
        </div>
    );
};

export default Result;