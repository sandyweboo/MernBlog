import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSearch } from "react-icons/fa";
import '../index.css';
export default function Header() {
    return (
        <Navbar className='border-b-2'>
            <Link to="/" >
                <span className='px-2 py-1 text-emerald'>Sandy's</span>
                Blog
            </Link>
            <form >
                <TextInput 
                    type='text'
                    placeholder='Search..'
                    rightIcon={FaSearch}
                    className='md:inline-block hidden'

                />
            </form>


            <Navbar.Collapse>
                <Navbar.Link>
                    <Link to="/About" >
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/Dashboard" >
                        Dashboard
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to="/Dashboard" >
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
            
            <div className='flex gap-2'>
                <Button className='w-12 h-10  sm:inline'>
                    <FaMoon />
                </Button>
                <Link to="/singin" >
                    <Button gradientDuoTone='purpleToBlue' outline className='w-12 h-10  sm:inline'>
                        SingIn
                    </Button>
                </Link>
                <Navbar.Toggle/>
            </div>
        </Navbar>

    )
    
}
