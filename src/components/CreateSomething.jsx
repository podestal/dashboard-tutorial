import { TextInput ,Button } from "@tremor/react"

const CreateSomething = () => {
  return (
    <div className="mx-auto max-w-sm space-y-8">
        <TextInput placeholder="Name ..." />
        <TextInput placeholder="Lastname ..." />
        <TextInput placeholder="Phone ..." />
        <div className="flex justify-center">
            <Button onClick={() => {}} variant="primary">Search</Button>
        </div>
    </div>
  )
}

export default CreateSomething