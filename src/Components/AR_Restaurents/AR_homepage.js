import React from 'react'
import Header_AR from './Header_AR'
import Middle from './Middle'
import Works from './Works'
import Already from './Already'
import Products from './Products'
import AR_SignUP from './AR_SignUP'
import Journey from './journey'
import Freq from './Freq'
import Footer_end from '../Footer_end'

function AR_homepage() {
    return (
        <div>
            <Header_AR />
            <Middle />
            <Works />
            <Already />
            <Products />
            <AR_SignUP/>
            <Journey />
            <Freq />
            <Footer_end />
        </div>
    )
}

export default AR_homepage
