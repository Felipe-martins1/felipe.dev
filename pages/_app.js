import React from 'react'
import Footer from '../components/footer/footer'

import '../styles/index.css'
import '../styles/footer.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <div id='content' className='content'>
                <Component {...pageProps} />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MyApp