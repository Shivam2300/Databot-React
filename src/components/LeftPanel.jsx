import React from 'react'
import Header from './Header';
import Summary from './Summary';
import SearchInput from './SearchInput';

const LeftPanel = () => {
  return (
    <div className='left-panel bg-white'>
        <Header/>
        <Summary/>
        <SearchInput />
    </div>
  )
}

export default LeftPanel;