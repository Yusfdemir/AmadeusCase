import React from 'react'

const Ticket = ({ticket,isOneWay}) => {
  return (
    <div className='w-full align-middle  text-xl bg-white rounded-lg pl-3'>
    <p><span className="font-bold">From:</span> {ticket.from}</p>
    <p><span className="font-bold">To:</span> {ticket.to}</p>
    <p><span className="font-bold">Departure Date:</span> {ticket.departureDate} </p>
    {isOneWay?'':<p><span className="font-bold">Return Date:</span> {ticket.returnDate}</p>}
    <p><span className='font-bold'>Start Time:</span> {ticket.starttime}</p>
    <p><span className='font-bold'>Arrive Time:</span> {ticket.arrivetime}</p>
</div>
  )
}

export default Ticket