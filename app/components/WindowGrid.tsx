import Window from "./Window"

export default function WindowGrid({ amount }: { amount: number}) {
  return (
    <div className="w-5/6 h-5/6 grid grid-cols-3 gap-4">
      {
        Array(amount).fill(0).map((_, index) => <Window key={index} />)
      }

    </div>
  )
}