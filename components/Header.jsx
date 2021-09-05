import React from "react";
import styles from '../styles/Header.module.css'
import Image from 'next/image'

export default function Header(props) {
    return (
        <header className={props.black ? styles.black : ''}>
            <div className={styles.headerTopo}>
                <a href="#">
                    <Image src={'/../public/logo-netflix.png'} alt={'Logo'} width={100} height={25}/>
                </a>
            </div>

            <div className={styles.headerUser}>
                <a href="#">
                    <Image src={'/../public/avatar-netflix.png'} alt={'Avatar'} width={50} height={50}/>
                </a>
            </div>
        </header>
    )
}