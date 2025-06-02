import React from 'react'

const Sidebar = () => {

    return (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li>Home</li>
                <li>shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li>Akshay saini</li>
                <li>tmkoc</li>
                <li>Tech Viser</li>
                <li>sonyliv</li>
            </ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>tmkoc</li>
                <li>cricket</li>
                <li>cid</li>
                <li>sonyliv</li>
            </ul>
        </div>
    )
}

export default Sidebar;