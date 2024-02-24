'use client'

import { useState } from "react";
import { CompactPicker } from 'react-color';
import { IoIosColorPalette } from "react-icons/io";
import { type House } from "@/app/utils/types"

interface ColourPickerProps {
  details: House;
  setColour: (newValue: string) => void;
}

export default function ColourPicker(props: ColourPickerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateColour = (colour: any, event: any) => {
    event.preventDefault()
    props.setColour(colour.hex)
  }

  return (
    <div className="relative h-6">
      <button onClick={(e) => {e.preventDefault(); setIsOpen(!isOpen);}}><IoIosColorPalette className="h-6 w-6"/></button>
      {
        isOpen == true && 
        <CompactPicker 
          color={ props.details.colour }
          onChangeComplete={ updateColour }
          className="absolute top-2 right-1/2 translate-x-1/2 bg-white border border-gray-300 z-10" 
        />
      }
      </div>
  )
}