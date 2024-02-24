import House from './components/House'
import { houseIds } from '@/app/utils/constants' 

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-end">
      <div className="h-5/6 w-5/6 flex">
        {
          houseIds.map(houseId => <House id={houseId} key={houseId} />)
        }
      </div>
    </main>
  );
}
