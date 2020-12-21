import React from 'react'

import getUser from '../utils/getUser'
import PageHead from '../components/PageHead'
import Hero from '../components/hero'
import AboutMe from '../components/AboutMe'
import Repos from '../components/repos'
import Footer from '../components/Footer'


const Index = ({ currentDate, repos }) => {
    return (
        <div>
            <PageHead />
            <Hero />
            <AboutMe />
            <Repos repos={repos} />
            <Footer currentDate={currentDate} />
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