import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare,faDollarSign, faPlusCircle,faUserFriends, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Biodata.css'

const Biodata = (props) => {
    const {name, img, email, address, income, phone} = props.user;
    const [btnInfo, setBtnInfo] = useState({btnText: "Add Now", disable: false, icon: faPlusCircle, btnClass: "add-friend-btn"});
    
    

    function butttonHandler(){
        props.friendHandler(props.user) ;
        btnInfo.btnText = "Added" 
        btnInfo.disable = true 
        btnInfo.icon = faUserFriends
        btnInfo.btnClass = "friend-btn"
        
    } 
    
    return (
        <div className="user">
            <div className="user-img">
                <img  src={img} alt=""/>
            </div>
            <div className="user-container">
                
                <div className="user-info">
                    <div>
                        <h2>{name}</h2>
                       
                        <p><FontAwesomeIcon icon={faDollarSign} /> {income}</p>
                        <button className={btnInfo.btnClass} disabled={btnInfo.disable} onClick={butttonHandler}><FontAwesomeIcon icon={btnInfo.icon} /> {btnInfo.btnText}</button>
                    </div>
                    <div>
                        <p><small><strong><FontAwesomeIcon icon={faPhoneSquare} /></strong> {phone} <br/><strong><FontAwesomeIcon icon={faEnvelope} /></strong> {email}</small></p>                     
                        <h5>Address </h5>
                        <address>{address.street.number}, {address.street.name}<br/>
                        {address.city},<br/> {address.state}, {address.country}</address>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Biodata;