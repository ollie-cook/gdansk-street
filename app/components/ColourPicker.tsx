import { CompactPicker } from 'react-color';
import { IoIosColorPalette } from "react-icons/io";
import { type House } from "@/app/utils/types"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ColourPickerProps {
  details: House;
  setColour: (newValue: string) => void;
}

export default function ColourPicker(props: ColourPickerProps) {
  const updateColour = (colour: any, event: any) => {
    event.preventDefault()
    props.setColour(colour.hex)
  }

  return (
    <Popover>
      <PopoverTrigger className="">
        <IoIosColorPalette className="h-6 w-6"/>
      </PopoverTrigger>
      <PopoverContent className="p-0 pr-0 w-fit">
        <CompactPicker 
          color={ props.details.colour }
          onChangeComplete={ updateColour }
          className="" 
        />
      </PopoverContent>
    </Popover>
  )
}