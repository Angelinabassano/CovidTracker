import React from 'react'
import SideBar from '../../layout/sidebar/SideBar'
import CovidTable from '../../components/tableTracker2/Table'
import '../pageTwo/tracker2.css'


const Tracker2 = () => {
  return (
    <>
      <SideBar/>
      <div className='container-tracker2'>
              <CovidTable/>
      </div>
    </>
  )
}

export default Tracker2