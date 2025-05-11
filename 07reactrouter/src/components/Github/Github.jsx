import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <p>Username: {data.login}</p>
            <p>Followers: {data.followers}</p>
            <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto mt-4" />
        </div>
    )
}

export default Github

// 👇 Pass the params to loader
export const githubInfoLoader = async ({ params }) => {
    const { username } = params
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) {
        throw new Error("Failed to load GitHub data")
    }
    return response.json()
}
