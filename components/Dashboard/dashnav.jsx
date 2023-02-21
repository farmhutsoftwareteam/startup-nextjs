"use client"
import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Image } from "@nextui-org/react";

export default function DashNav() {

    

    return(
        <Navbar isBordered  variant="sticky">
            <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" />
                    
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                <Navbar.Link href='#'>Dashboard</Navbar.Link>
                <Navbar.Link href='#'>Profile</Navbar.Link>
                <Navbar.Link href='#'>Settings</Navbar.Link>
                <Navbar.Link href='#'>Help</Navbar.Link>
                <Navbar.Link href="#!">Logout</Navbar.Link>
            </Navbar.Content>
            <Navbar.Collapse>
                <Navbar.CollapseItem>Dashboard</Navbar.CollapseItem>
                <Navbar.CollapseItem>Profile</Navbar.CollapseItem>
                <Navbar.CollapseItem>Settings</Navbar.CollapseItem>
                <Navbar.CollapseItem>Help</Navbar.CollapseItem>

            </Navbar.Collapse>


        </Navbar>
    )
}