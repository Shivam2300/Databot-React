import React from 'react'
import RightPanelHeader from './RightPanelHeader';
import DataOverview from './DataOverview';
import DataQuality from './DataQuality';

const RightPanel = () => {
  return (
    <div className='right-panel bg-white'>
      <RightPanelHeader />
      <DataOverview />
      <DataQuality />
    </div>
  )
}

export default RightPanel;