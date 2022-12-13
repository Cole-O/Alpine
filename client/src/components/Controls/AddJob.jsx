import axios from 'axios'
import React from 'react'
import { useState, useRef } from 'react';

const AddJob = () => {

  const [jobName, setJobName] = useState();
  const [supervisorFirst, setSupervisorFirst] = useState();
  const [supervisorLast, setSupervisorLast] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [numReqVol, setNumReqVol] = useState();

  const jobNameRef = useRef(null);
  const supervisorFirstRef = useRef(null);
  const supervisorLastRef = useRef(null);
  const jobLocationRef = useRef(null);
  const numReqVolRef = useRef(null);

  const postParams = {
    jobName: jobName,
    supervisorFirst: supervisorFirst,
    supervisorLast: supervisorLast,
    numVolunteersReq: numReqVol,
    jobLocation: jobLocation
  }

  const submitJobEntry = () =>{
    axios.post(`${process.env.REACT_APP_HOST}/api/jobs/?jobName=${postParams.jobName}&supervisorFirst=${postParams.supervisorFirst}&supervisorLast=${postParams.supervisorLast}&numVolunteersReq=${postParams.numVolunteersReq}&jobLocation=${postParams.jobLocation}`)

    // Reset Form
    jobNameRef.current.value = ""
    setJobName('')
    supervisorFirstRef.current.value = ""
    setSupervisorFirst('')
    supervisorLastRef.current.value = ""
    setSupervisorLast('')
    jobLocationRef.current.value = ""
    setJobLocation('')
    numReqVolRef.current.value = ""
    setNumReqVol('')
  }

  return (
    <div>
      <h1 className="text-lg">Create:</h1>

      <div className="mt-4">
        <label htmlFor="jobName">Job Title</label>
        <input ref={jobNameRef} className="mt-2 border border-black rounded p-2 block" type="text" name="jobName" onChange={(e) => setJobName(e.target.value)} />
      </div>

      <div className="mt-4">
        <label htmlFor="supervisorFirst">Supervisor First</label>
        <input ref={supervisorFirstRef} className="mt-2 border border-black rounded p-2 block" type="text" name="supervisorFirst" onChange={(e) => setSupervisorFirst(e.target.value)}/>
      </div>

      <div className="mt-4">
        <label htmlFor="supervisorLast">Supervisor Last</label>
        <input ref={supervisorLastRef} className="mt-2 border border-black rounded p-2 block" type="text" name="supervisorLast" onChange={(e) => setSupervisorLast(e.target.value)} />
      </div>

      <div className="mt-4">
        <label htmlFor="jobLocation">Job Location</label>
        <input ref={jobLocationRef} className="mt-2 border border-black rounded p-2 block" type="text" name="jobLocation" onChange={(e) => setJobLocation(e.target.value)}/>
      </div>

      <div className="mt-4">
        <label htmlFor="numReqVolunteers">Number of Required Volunteers</label>
        <input ref={numReqVolRef} className="mt-2 border border-black rounded p-2 block" type="number" name="numReqVolunteers" onChange={(e) => setNumReqVol(e.target.value)}/>
      </div>

      <button className="mt-4 border border-black bg-green-700 text-green-200 p-2 rounded" type="submit" onClick={() => submitJobEntry()}>Add Job</button>
    </div>
  )
}

export default AddJob