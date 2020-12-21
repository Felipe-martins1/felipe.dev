import React from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'


const ColorMode = () => {

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
        <div className='color-mode'>
            <BiSun className='icon sun' onClick={LightcolorMode} /><BiMoon className='icon moon' onClick={DarkcolorMode} />
        </div>
    )
}

export default ColorMode