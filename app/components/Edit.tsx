import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaEdit } from "react-icons/fa";
import { Slider } from "@/components/ui/slider"
import ColourPicker from "./ColourPicker";
import { type House } from "@/app/utils/types"

interface EditProps {
  details: House;
  setHeight: (newValue: number) => void;
  setColour: (newValue: string) => void;
}

export default function Edit(props: EditProps) {
  return (
    <Popover>
      <PopoverTrigger className="absolute bottom-4 right-4">
        <FaEdit className="h-6 w-6" />
      </PopoverTrigger>
      <PopoverContent align="end">
        <form className="flex flex-col ">
          <ColourPicker details={props.details} setColour={props.setColour} />
          <label>Height</label>
          <Slider defaultValue={[33]} max={100} step={1} onValueChange={newValue => props.setHeight(newValue[0])}/>
        </form>
      </PopoverContent>
    </Popover>
  )
}