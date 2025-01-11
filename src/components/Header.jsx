import React, { useState } from 'react'

const Header = () => {
    const [list,setList]=useState(['SUPPLIER_references','NATION_references_Region'
        ,'ORDER_references_CUSTOMER','data_lake']);

    const [open,setOpen] = useState(true);
                
  return (
    <div className='left-panel-header border-down'>
      <div className='heading'>
        <h3>Databot</h3>
        <img src='/images/AI Generate A lined.png' alt='Image'/>
      </div>
      <div className='dropdown'>
        <p>Connected Data: <span>Clothing Sales</span><img onClick={()=>{setOpen(!open)}} src='images/Polygon 19.png'/></p>
        {open && <div className='dropdown-list'>
            <input placeholder='search data' />
            {list.map((i,idx)=>{
                return <div className={`item ${idx === 2?'highlighted': ''}`} key={idx}>{i} {idx === 2  && <p className='tick-selected'>&#10003;</p>}</div>
            })}
        </div>}
      </div>
      
    </div>
  )
}

export default Header;
