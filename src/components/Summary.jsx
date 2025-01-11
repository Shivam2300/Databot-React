import React, { useState } from 'react'
import Card from './Card'

const Summary = () => {

    const [cards,setCards] = useState(['Give me the summary of the data source.',
         'User duration engagement Change vs last week?',
        'Provide an overview of this week IAP revenue performance.',
    'What are the factors of drop in our Sales revenue this week?'])
  return (
    <div className='summary'>
        <div className='brand-name'>
            <h1 className='brand-name-heading'><span>AI Conversational</span> Data Analyst</h1>
            <p>
            Your personal AI data assistant. Seamlessly integrate your database for rapid, informed decision-making. Get instant analysis and answers, optimizing growth metrics daily. Ask anything, get analyst-grade responses.
            </p>
        </div>
        <div className='cards'>
            <div className='cards-child'>
                {cards.map((curr,idx)=>{
                    return <Card key={idx} content={curr}/>
                })}
            </div>
        </div>
        <div className='summary-description'>
            <div>
                <h2 className='sum-head'>Summary</h2>
                <p className='sum-para'>Supplier references refer to information provided by 
                a supplier that can be used to verify their capabilities and experience. T
                his information is typically used during the procurement process to
                 evaluate potential vendors. Here are some samples of supplier references:</p>
                <h5 className='basic-class'>Basic Reference:</h5>
                <ul>
                    <li>Supplier Name: Acme Corporation</li>
                    <li>Contact Name: John Smith, Sales Manager</li>
                    <li>Phone Number: (555) 555-5555</li>
                    <li>Email Address: [email address removed]</li>
                    <li>Relationship: Supplied office furniture for our headquarters in 2023.</li>
                </ul>
                <h5 className='basic-class'>Detailed Reference: </h5>
                <ul>
                    <li>Supplier Name: Global Tech Solutions</li>
                    <li>Contact Name: Jane Doe, Account Manager</li>
                    <li>Phone Number: (555) 555-1234</li>
                    <li>Email Address: [email address removed]</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Summary;