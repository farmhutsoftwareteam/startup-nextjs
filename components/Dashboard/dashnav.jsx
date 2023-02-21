"use client"
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Image } from "@nextui-org/react";
import Cookies from "js-cookie";
import ThemeToggler from "../Header/ThemeToggler";
//we need to add the theme provider from next themes to this component to enable dark mode, omiited it at first because it ws taking time for me to figure out(munyamakosa)

export default function DashNav() {

    const handleLogout = () => {
       Cookies.remove('jwt');
         Cookies.remove('username');
         Cookies.remove('id')
            window.location.href = '/signin';
    }
    

    return(
        <Navbar disableBlur  variant="floating"
        css={{
            
          
        }}
        >
            <Navbar.Brand>
                <Navbar.Toggle hideIn="xlMax" aria-label="toggle navigation" />
                <Image src="https://res.cloudinary.com/vambo/image/upload/v1675953341/mundalogo_2_sdm9lb.png" width="100px" height="100px" />
                    
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                <Navbar.Link href='#'>Dashboard</Navbar.Link>
                <Navbar.Link href='#'>Events</Navbar.Link>
                <Navbar.Link href='#'>Production Guides</Navbar.Link>
                <Navbar.Link href='#'>Online Agronomist</Navbar.Link>
                <Button onClick={handleLogout} css={{
                    background: "Green",
                }} >Logout</Button>
               
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>Dashboard</Navbar.CollapseItem>
                <Navbar.CollapseItem>Profile</Navbar.CollapseItem>
                <Navbar.CollapseItem>Settings</Navbar.CollapseItem>
                <Navbar.CollapseItem>Help</Navbar.CollapseItem>
                <Button onClick={handleLogout}  color='success' >Logout</Button>

            </Navbar.Collapse>


        </Navbar>
    )
}