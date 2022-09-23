import React from 'react';
import ButtonBack from '../components/ButtonBack';
import '../styles/VerifiedAccount.css'

const VerifiedAccount = () => {
    return (  
        <div className='verifiedAccount-container'>
            <h2>Your email account has been verified successfully</h2>
            <div className='verifiedAccount-containerImg'>
                {/* <img src='https://cdn.icon-icons.com/icons2/656/PNG/512/check_mark_ok_good_approve_safe_icon-icons.com_59987.png'/> */}
            <img src='https://cdn.iconscout.com/icon/free/png-512/check-1912237-1617706.png' alt='ok.png'/>
            </div>
            <ButtonBack where={'/'}/>
        </div>
    );
}
 
export default VerifiedAccount;