import React from 'react'

import '../styles/index.css'
import '../styles/footer.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <div id='content' className='content'>
                <Component {...pageProps} />
            </div>

        </div>
    )
}

export default MyApp