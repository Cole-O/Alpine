import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios';

const UpdateJob = () => {

  const [jobID, setJobID] = useState();
  const [numReqVol, setNumReqVol] = useState();

  const jobIDRef = useRef(null);
  const numReqVolRef = useRef(null);

  const updateParams = {
    jobID: jobID,
    numVolReq: numReqVol 
  }

  const submitUpdateReqVol = () =>{
    axios.put(`${process.env.REACT_APP_HOST}/api/jobs/:numVolReq?jobID=${updateParams.jobID}&numVolReq=${updateParams.numVolReq}`)
    
    setJobID('')
    jobIDRef.current.value = ""
    setNumReqVol('')
    numReqVolRef.current.value = ""
}

  return (
    <div>
        <h1 className="text-lg">Update:</h1>
        <div className="mt-4">
            <label htmlFor="jobID">Job ID</label>
            <input ref={jobIDRef} className="mt-2 border border-black rounded p-2 block" type="number" onChange={(e) => setJobID(e.target.value)}/>
        </div>

        <div className="mt-4">
            <label htmlFor="numReqVol">Number of Required Volunteers</label>
            <input ref={numReqVolRef} className="mt-2 border border-black rounded p-2 block" type="number" onChange={(e) => setNumReqVol(e.target.value)}/>
        </div>

        <button className="mt-4 border border-black bg-yellow-200 p-2 rounded text-yellow-600" type="submit" onClick={() => {submitUpdateReqVol()}}>Update Required Volunteers</button>
    </div>
  )
}

export default UpdateJob