import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'
import {handleEmail} from './handleEmailClipboard'

class Footer extends Component {

    render () {
        return (
            <>
            <div className='footer'>
                <div className='social-links'>
                    <ExternalLink className='social-link' href="https://www.linkedin.com/in/paul-khoza-9956b020a">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" >
                            <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M4.7,21H.347V6.98H4.7ZM2.521,5.068A2.533,2.533,0,1,1,5.043,2.522,2.543,2.543,0,0,1,2.521,5.068ZM21,21H16.651V14.176c0-1.627-.033-3.713-2.264-3.713-2.264,0-2.611,1.767-2.611,3.6V21H7.428V6.98H11.6V8.893h.061a4.575,4.575,0,0,1,4.119-2.264C20.19,6.629,21,9.53,21,13.3V21Z" transform="translate(0.5 0.499)" fill="#f2e529" stroke="#f2e529" stroke-width="1"/>
                        </svg>
                    </ExternalLink>
                    <ExternalLink href='https://github.com/psk-98' className='social-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.794" height="24.021" viewBox="0 0 22.794 24.021">
                            <path id="Icon_feather-github" data-name="Icon feather-github" d="M9.991,19.464C5,20.962,5,16.967,3,16.467M16.982,22.46V18.595a3.366,3.366,0,0,0-.939-2.607c3.136-.35,6.432-1.538,6.432-6.991a5.432,5.432,0,0,0-1.5-3.744,5.064,5.064,0,0,0-.091-3.766s-1.178-.35-3.905,1.478a13.363,13.363,0,0,0-6.991,0C7.265,1.137,6.086,1.487,6.086,1.487A5.064,5.064,0,0,0,6,5.252,5.433,5.433,0,0,0,4.5,9.027c0,5.413,3.3,6.6,6.432,6.991a3.366,3.366,0,0,0-.939,2.577V22.46" transform="translate(-1.181 0.061)" fill="#f2e529" stroke="#f2e529" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        </svg>
                    </ExternalLink>
                    <div className='social-link' title='copy email' onClick={() => handleEmail()}>
                        <svg xmlns="http://www.w3.org/2000/svg"  height="22" viewBox="0 0 27.25 22">
                            <path id="Icon_material-email" data-name="Icon material-email" d="M26.625,6h-21A2.621,2.621,0,0,0,3.013,8.625L3,24.375A2.633,2.633,0,0,0,5.625,27h21a2.633,2.633,0,0,0,2.625-2.625V8.625A2.633,2.633,0,0,0,26.625,6Zm0,5.25-10.5,6.563L5.625,11.25V8.625l10.5,6.563,10.5-6.562Z" transform="translate(-2.5 -5.5)" fill="#f2e529" stroke="#f2e529" stroke-width="1"/>
                        </svg>
                    </div>
                </div>
                <div className='copyright-sec'>
                    <span>
                        © 2022 Design and Built by Paul Khoza
                    </span>
                </div>
            </div>
            </>
        )
    }
}

export default  Footer