'use client'

import { useState, useEffect } from 'react'
import { type House } from '@/app/utils/types'
import Cookies from 'js-cookie'
import Edit from './Edit'
import WindowGrid from './WindowGrid'

interface HouseProps {
  id: string;
}

export default function House({ id }: HouseProps) {
  const [details, setDetails] = useState<House>(
    {
      id: id,
      height: 70,
      colour: '#62ac98',
      windows: 6
    }
  )

  const width=20;

  useEffect(() => {
    const cookies = Cookies.get(id)
    if (cookies == undefined) {
      const emptyHouse = {
        id: id,
        height: 70,
        colour: '#62ac98',
        windows: 6
      }

      Cookies.set(id, JSON.stringify(emptyHouse), { expires: 365 })
    } else {
      setDetails(JSON.parse(cookies))
    }
  }, [])

  const handleHeightChange = (newValue: number) => {
    const prev = details;
    const newDetails = {...prev, height: newValue}
    setDetails(newDetails)
    Cookies.set(id, JSON.stringify(newDetails), { expires: 365 })
  }

  const handleColourChange = (newValue: string) => {
    const prev = details;
    const newDetails = {...prev, colour: newValue}
    setDetails(newDetails)
    Cookies.set(id, JSON.stringify(newDetails), { expires: 365 })
  }

  const handleWindowChange = (newValue: number) => {
    const prev = details;
    const newDetails = {...prev, windows: newValue}
    setDetails(newDetails)
    Cookies.set(id, JSON.stringify(newDetails), { expires: 365 })
  }

  return (
    <div 
      className="h-full"
      style={{width: `${width}%`}}
    >
      <div 
        className="w-0 h-0"
        style={{
          borderLeft: `${100*(5/6)*(width/100)/2}vw solid transparent`,
          borderRight: `${100*(5/6)*(width/100)/2}vw solid transparent`,
          borderBottom: `${100*(5/6)*((100-details.height)/100)}vh solid ${details.colour}`
        }}  
      >

      </div>
      <div 
        className="w-full relative flex justify-center items-center"
        style={{
          height: `${details.height}%`,
          backgroundColor: details.colour
        }}
      >
        <WindowGrid amount={details.windows}/>
        <Edit 
          details={details} 
          setHeight={handleHeightChange} 
          setColour={handleColourChange} 
          setWindow={handleWindowChange}
        />
      </div>
    </div>
  )
}