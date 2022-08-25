import React from 'react'
import { clients } from '../constants'

const Clients = () => (
    <div className='flex md:justify-between md:flex-row flex-col flex-wrap justify-center items-center px-20'>
      {clients.map((client, index) => (
        <img key={index} src={client.logo} alt="client" className={`w-[192px] h-[60px] object-contain `} />
      ))}
    </div>
  )

export default Clients