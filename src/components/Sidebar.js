import React, { useContext } from 'react'
import styled from 'styled-components'
import Logo from '../images/konexio.png'

import { Link } from "react-router-dom"
import { VolunteerContext } from '../contexts/Volunteer'

const Nav = styled.nav`
    padding: 0;
    margin: 0;
    background-color: #0375BB;
    top: 0;
    left: 0;
    width: 390px;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    padding-inline: 100px; 
    width: 190px;
    align-self: center;
    align-content: center;
    justify-content: center;    
    background-color: #fff;
    margin-bottom: 20px;

`

const H1 = styled.h1`
    font-family: 'Poppins';
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 15px 0;
    text-decoration: none;
    color: #fff;
`

const Sidebar = () => {
    const { logout } = useContext(VolunteerContext)
    const { user } = useContext(VolunteerContext)

    return (
        <Nav>
            <Img src={Logo} />
            <Link to='/sessions' className="link nav">
                <H1>Sessions</H1>
            </Link>
            <Link to='/news' className="link nav">
                <H1>News</H1>
            </Link>
            <Link to='/messagerie' className="link nav">
                <H1>Messagerie</H1>
            </Link>
            <Link to='/profile' className="link nav">
                <H1>Profil</H1>
            </Link>
            <Link to='/faq' className="link nav">
                <H1>F.A.Q</H1>
            </Link>
            <div onClick={() => logout()} className="link nav">
                <H1>Se déconnecter</H1>
            </div>
        </Nav>
    )
}

export default Sidebar