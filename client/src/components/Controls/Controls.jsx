import React from 'react'
import AddJob from './AddJob'
import DeleteJob from './DeleteJob'
import UpdateJob from './UpdateJob'

const Controls = () => {
  return (
    <div className="m-5">
        <h1 className="font-bold text-2xl">Controls</h1>
        <div className="flex gap-12 lg:gap-40">
          <AddJob />
          <UpdateJob />
          <DeleteJob />
        </div>
    </div>
  )
}

export default Controls