"use client"
import React from 'react'
import styles from './navbar.module.css'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from 'next/navigation';

const navbar = () => {
  const pathanme = usePathname()

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathanme}</div>
    </div>
  ) 
}

export default navbar