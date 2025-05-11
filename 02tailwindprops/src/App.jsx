import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myobj = {
    username: "pushpek",
    age: false
  }
  let newArray = [1, 2, 3]
  return (
  <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'> bg green</h1>
   <Card username = "disco"/>
   <Card />
   <Card />
   <Card />
   <Card />
    </>
  )
}

export default App
