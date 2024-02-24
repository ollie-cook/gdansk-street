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
  setWindow: (newValue: number) => void;
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
          <Slider defaultValue={[props.details.height]} max={100} step={1} onValueChange={newValue => props.setHeight(newValue[0])}/>
          <label>Windows</label>
          <Slider defaultValue={[props.details.windows]} min={3} max={9} step={1} onValueChange={newValue => props.setWindow(newValue[0])}/>
        </form>
      </PopoverContent>
    </Popover>
  )
}