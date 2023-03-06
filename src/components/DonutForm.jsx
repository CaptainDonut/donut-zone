import React, {useState} from 'react'
import { databases } from '../appwrite/appwriteConf'

function DonutForm() {
    const [list, setList] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument("6406468874a62f5d047e", "6406469a133a9b2410b5", 'unique()', { list }) //appwrite database id, collection id, unique identifier, state

        //Do this as a method instead
        promise.then(
            function(response) {
                console.log(response);
            },
            function(error) {
                console.log(error);
            }
        )

        //Clean state.. May handle differently
        e.target.reset();
    }
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={handleSubmit} //it is a form, so this is onSubmit
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter list"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => { //on change event
setList(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add List
        </button>
      </form>
    </div>
  )
}

export default DonutForm