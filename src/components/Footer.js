import React, { Component } from 'react';
import { Link } from "react-router-dom";

// style
import '../assets/style/footer.scss';

// Icon
import Shield from '../assets/icons/Shield.svg';
import SupportOne from '../assets/icons/footer/support__item-1.svg';
import SupportTwo from '../assets/icons/footer/support__item-2.svg';

// Icon Social
import Linkedin from '../assets/icons/footer/linkedin.svg';
import Twitter from '../assets/icons/footer/twitter.svg';
import Youtube from '../assets/icons/footer/youtube.svg';
import Instagram from '../assets/icons/footer/instagram.svg';
import Book from '../assets/icons/footer/book.svg';

class Footer extends Component {

    render() {
        return (
            <footer className='footer'>
                <div className='footer__container flex justify-between items-center w-full flex-wrap border-b border-gray-700'>
                    <div className='title mb-8 w-full'>
                        <p className='w-6/12'>Make or request payments with a single click from within your ERP, connected to your bank account.</p>
                    </div>
                    <div className='footer__container__left w-auto'>
                        <div className='support flex items-center'>
                            <div className='support__title text-xs leading-4 font-medium uppercase'>
                                Support for:
                            </div>
                            <div className='support__list flex ml-4'>
                                <div className='support__list__item mr-1'>
                                    <Link to='/' target='_blank'>
                                        <SupportOne className='grayscale hover:grayscale-0'/>
                                    </Link>
                                </div>
                                <div className='support__list__item'>
                                    <Link to='/' target='_blank'>
                                        <SupportTwo className='grayscale hover:grayscale-0'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer__container__right w-auto'>
                        <div className='media flex items-center justify-end'>
                            <div className='media__title text-xs leading-4 font-medium uppercase'>
                                WE’re social
                            </div>
                            <div className='media__list ml-6 flex items-center flex-row'>
                                <div className='media__list__item mr-2.5'>
                                    <Link to='/' target='_blank'>
                                        <Linkedin className='grayscale hover:grayscale-0' />
                                    </Link>
                                </div>
                                <div className='media__list__item mr-2.5'>
                                    <Link to='/' target='_blank'>
                                        <Twitter className='grayscale hover:grayscale-0' />
                                    </Link>
                                </div>
                                <div className='media__list__item mr-2.5'>
                                    <Link to='/' target='_blank'>
                                        <Youtube className='grayscale hover:grayscale-0' />
                                    </Link>
                                </div>
                                <div className='media__list__item mr-2.5'>
                                    <Link to='/' target='_blank'>
                                        <Instagram className='grayscale hover:grayscale-0' />
                                    </Link>
                                </div>
                                <div className='media__list__item mr-2.5'>
                                    <Link to='/' target='_blank'>
                                        <Book className='grayscale hover:grayscale-0' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom mt-9 flex items-center justify-between">
                    <div className='copyright'>
                        Copyright 2022 Transcard Payments. All Rights Reserved.
                    </div>
                    <Link to="/" className='powered flex flex-nowrap items-center'>
                        <Shield className='mr-1.5'/>
                        <span>POWERED BY TRANSCARD</span>
                    </Link>
                </div>
            </footer>
        )
    }
}

export default Footer;