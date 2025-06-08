import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from './Details'

function Header() {
    return (
        <>
            <header className="container w-[1000px] mx-auto flex justify-between items-center px-2 pb-3 border-b-2 mt-4">
                <nav>
                    <ul className="flex gap-3 text-gray-600">
                        <li><a href="">Individual</a></li>
                        <li><a href="" />Business</li>
                        <li><a href="" />Services &amp; Payments</li>
                        <li><a href="" />nBank</li>
                    </ul>
                </nav>
                <div>
                    <ul className="flex gap-3 text-gray-600">
                        <li><a href>+977 1 5971871, +977 1 5970015</a></li>
                        <i className="bi bi-caret-down-fill text-gray-500" />
                        <li><a href> Quick Links</a></li>
                        <i className="bi bi-caret-down-fill  text-gray-500" />
                        <li><a href> EN</a></li>
                        <i className="bi bi-caret-down-fill  text-gray-500" />
                    </ul>
                </div>
            </header>
            
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<Details/>}/>   
</Routes>

        </>
    )
}

export default Header
