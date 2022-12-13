import { useState, useEffect } from 'react';
import axios from 'axios'

const DisplayDB = () => {

    const [jobsList, setJobsList] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_HOST}/api/jobs`).then((response) => {
          setJobsList(response.data)
        })
    }, [jobsList])

    const data = jobsList.map((entry, index) =>{
        return (
                <div key={index} className="mt-5 p-4 bg-slate-100 rounded">
                    <div className="">
                        <h1 className="font-medium mt-3">Job ID:</h1>
                        <p className="my-1">{entry.jobID}</p>
                    </div>
                    <div>
                        <h1 className="font-medium mt-3">Supervisor:</h1>
                        <p className="my-1">{entry.supervisorFirst} {entry.supervisorLast}</p>
                    </div>
                    <div>
                        <h1 className="font-medium mt-3">Job Title:</h1>
                        <p className="my-1">{entry.jobName}</p>
                    </div>
                    <div>
                        <h1 className="font-medium mt-3">Job Location:</h1>
                        <p className="my-1">{entry.jobLocation}</p>
                    </div>
                    <div>
                        <h1 className="font-medium mt-3">Number of Required Volunteers:</h1>
                        <p className="my-1">{entry.numVolunteersReq}</p>
                    </div>
                </div>
        )
    })

    return (
        <div className="m-5">
            <h1 className="font-bold text-2xl">Entries</h1>
            <h2 className='text-lg'>Read:</h2>
            {data}
        </div>
    )
}

export default DisplayDB;