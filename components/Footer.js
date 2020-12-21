import React from 'react'
import Link from 'next/link'

const Footer = ({ currentDate }) => {
    return (
        <div id='footer'>
            <p>his website was built using NextJS + Vercel (as platform)<br />
            You can find the source-code of this website at:<br />
                <Link href='https://github.com/Felipe-martins1/felipe.dev'><span>https://github.com/Felipe-martins1/felipe.dev</span></Link></p>
            <p className='lasted'>Lasted version: {currentDate}</p>
        </div>
    )
}

export default Footer