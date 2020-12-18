import React, { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
    const [NewDate, setNewDate] = useState({
        currentDate: new Date().toString()
    })
    return (
        <div id='footer'>
            <p>his website was built using NextJS + Vercel (as platform)<br />
            You can find the source-code of this website at:<br />
                <Link href='https://github.com/Felipe-martins1/felipe.dev'><span>https://github.com/Felipe-martins1/felipe.dev</span></Link></p>
            <p className='lasted'>Lasted version: {NewDate.currentDate}</p>
        </div>
    )
}

export default Footer