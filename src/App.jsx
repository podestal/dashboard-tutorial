import { Card } from "@tremor/react"
import { DialogHero } from "./components/DialogHero"
import CreateSomething from "./components/CreateSomething"


const CardStat = () => {
  return (
    <Card
    className="mx-auto max-w-xs"
    decoration="top"
    decorationColor="indigo"
  >
    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
    <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
  </Card>
  )
}

const App = () => {

  return (
    <>
      <DialogHero />
    </>
  )
}

export default App
