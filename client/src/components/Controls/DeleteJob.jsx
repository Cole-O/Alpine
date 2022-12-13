import axios from 'axios';
import React from 'react'
import {useState, useRef} from 'react'

const DeleteJob = () => {
  
  const [jobID, setJobID] = useState();
  
  const jobIDRef = useRef(null);

  const submitDeleteJob = () =>{
    axios.delete(`${process.env.REACT_APP_HOST}/api/jobs/?jobID=${jobID}`)

    // Reset Field
    setJobID('')
    jobIDRef.current.value = ""
  }


  return (
    <div>
        <h1 className="text-lg">Delete:</h1>
        <div className="mt-4">
            <label htmlFor="jobID">Job ID</label>
            <input ref={jobIDRef} className="mt-2 border border-black rounded p-2 block" type="number" onChange={(e) => setJobID(e.target.value)}/>
        </div>

        <button className="mt-4 p-2 border border-black bg-red-700 rounded text-red-300" type="submit" onClick={() => {submitDeleteJob()}}>Delete Job Entry</button>
    </div>
  )
}

export default DeleteJob