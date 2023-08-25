"use client"
import '../styles/card/styles.css'
import React from "react"
import HomeProjects from "../Views/HomeProjects"
import Nav from "../component/Nav/Nav"
import Cursor from "../component/Cursor/Cursor"
export default function Home() {

  return (
    <main>
      <Cursor/>
      <HomeProjects/>
    </main>
  )
}
