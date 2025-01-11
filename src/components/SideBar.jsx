import React from 'react';

const SideBar = () => {
  return (
    <div className='sidebar bg-white'>
        <div className='company-icon d-flex just-cent al-cent f-col'>
            <img className='border-down' src={"images/Frame.png"} alt='databot'/>
            <img src={"images/Group 1437253180.png"} alt='databot'/>
            <img src={"images/Group 1437253206.png"} alt='databot'/>
            <img src={"images/Group 1437253182.png"} alt='databot'/>
        </div>
        <div className='profile-icon d-flex just-cent al-cent'>
            <img src={"images/s.png"} alt='databot'/>
        </div>
    </div>
  )
}

export default SideBar;