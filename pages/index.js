import React from 'react'
import Link from 'next/link'
import getUser from '../utils/getUser'
import Head from 'next/head'

import { BiChevronsDown, BiSun, BiMoon } from "react-icons/bi"
import { AiOutlineStar, AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { GoRepo } from "react-icons/go"
const Index = (props) => {
    const scroll = () => {
        window.scrollTo(0, 1000, 'smooth')
    }

    const LightcolorMode = () => {
        const $html = document.querySelector('html')
        $html.classList.remove('dark-mode')

        const buttonRemoved = document.querySelector('.moon')
        buttonRemoved.classList.remove('selected')

        const button = document.querySelector('.sun')
        button.classList.add('selected')
    }
    const DarkcolorMode = () => {
        const $html = document.querySelector('html')
        $html.classList.add('dark-mode')

        const buttonRemoved = document.querySelector('.sun')
        buttonRemoved.classList.remove('selected')

        const button = document.querySelector('.moon')
        button.classList.add('selected')
    }
    return (
        <div>
            <Head>
                <title>Felipe.dev</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <div className='color-mode'>
                <BiSun className='icon sun' onClick={LightcolorMode} /><BiMoon className='icon moon' onClick={DarkcolorMode} />
            </div>
            <div id='main'>
                <div className='title'>
                    <h1>
                        Hi! <br />
                    i'm <span>Felipe</span>
                    </h1>
                    <h2>Fullstack Developer</h2>
                    <h2 className='contact'>
                        <Link href='https://github.com/Felipe-martins1'><span><AiFillGithub /></span></Link>
                        <Link href='https://linkedin.com/in/felipemartins1'><span><AiFillLinkedin /></span></Link>
                    </h2>
                    <p><AiOutlineMail /> felipe.dom.martins@gmail.com</p>
                </div>
                <BiChevronsDown onClick={scroll} className='BiChevronsDown' />
            </div>
            <div id='about-me'>
                <h1>About me</h1>
                <div>
                    <p>Fullstack developer passionate about technology, and how it transforms things.<br />
                    My first experience in the area was with embedded systems, I was part of an international community (IC4)<br />
                    I participated in projects and hackathons in the robotics area. However, I decided to follow the web development area<br />
                    and today I already have several published projects
                    </p>
                </div>
            </div>
            <div id='projects'>
                <div className='title'>
                    <h1>Tech Contributions</h1>
                    <GoRepo /><span> {props.repos.length}</span>
                </div>
                <div className='repos'>
                    {props.repos.map(repo => {
                        return (
                            <div key={repo.id} className='repo'>
                                <Link href={repo.html_url}>
                                    <div>
                                        <h1>{repo.full_name}</h1>
                                        <p>Language: {repo.language} / <AiOutlineStar />{repo.stargazers_count}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div >
    )
}

export async function getServerSideProps(context) {
    const repos = await getUser('Felipe-martins1')
    return {
        props: {
            currentDate: new Date().toString(),
            repos
        }
    }
}
export default Index