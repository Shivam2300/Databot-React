import React from 'react'

const SearchInput = () => {
  return (
    <div className='search-input'>
        <div>
            <input placeholder='Ask your AI for data summary.......' />
            <button className='search-btn'>
                <img src='images/Generate B.png' alt='Image'/>
                <span>Search</span>
            </button>
        </div>
    </div>
  )
}

export default SearchInput;