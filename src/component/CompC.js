import React,{useContext} from 'react'
import { appState} from '../App'

const CompC = () => {
    const appdata=useContext(appState)
  return (
    <div className='comp'>
    <h4>CompC</h4>
    <h1>{appdata.info}</h1>
    <h1>{appdata.name.name}</h1>
    <h1>{appdata.name.age}</h1>
    </div>
  )
}

export default CompC