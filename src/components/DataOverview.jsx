import React from 'react'

const DataOverview = () => {
  return (
    <div className='data-overview'>
        <h1>Data Overview</h1>
        <div className='data-overview-container'>
            <div className='rows'>
                <div className='rows-1'>
                    <img src='images/Icon.png' alt='Image'/>
                    <div>
                        <span className='num-rows'>Total Number of rows</span>
                        <span className='num-cols'>34.1M</span>
                    </div>
                </div>
                <div className='cols-1'>
                    <img src='images/Icon1.png' alt='Image'/>
                        <div>
                            <span className='num-rows'>Total No of Columns</span>
                            <span className='num-cols'>2</span>
                        </div>
                    </div>
            </div>
            <div className='metadata'>
                <h5>Metadata</h5>
                <div className='metadata-data'>
                    <div className='metadata-data-data'>
                        <span className='data-1'>
                            Name
                        </span>
                        <span className='data-2'>
                            Samples
                        </span>
                    </div>
                    <div className='metadata-data-data'>
                        <span className='data-1'>Created at</span>
                        <span className='data-2'>20 July 2022</span>
                    </div>
                    <div className='metadata-data-data'>
                        <span className='data-1'>Relates to</span>
                        <span className='data-2'>dim_books</span>
                    </div>
                    <div className='metadata-data-data'>
                        <span className='data-1'>Connection</span>
                        <span className='data-2'>Postgresql</span>
                    </div>
                </div>
            </div>
            <div className='sla'>
                <h6>SLA</h6>
                <div className='sla-2'>
                    <div className='progress-bar'>

                    </div>
                    <span>5/5</span>
                </div>
                <div className='sla-3'>
                    <h6>Test report</h6>
                    <span>See all</span>
                </div>
                <div className='sla-4'>
                    <h6>100% Score</h6>
                    <span>5 Test</span>
                </div>
                <div className='sla-5'>
                    <div className='progress-bar-2'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataOverview;
