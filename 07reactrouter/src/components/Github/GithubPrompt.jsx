import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function GithubPrompt() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username) {
      navigate(`/github/${username}`)
    }
  }

  return (
    <div className='text-center m-4 p-4 text-xl'>
      <p>Please enter your GitHub username:</p>
      <form onSubmit={handleSubmit} className='mt-4'>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="e.g., hiteshchoudhary"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default GithubPrompt
