import React, { Component } from 'react';
import InfoHeading from './InfoHeading';
import { Button } from './Button';

// style
import '../assets/style/cta.scss';

import HeroImage from '../assets/images/cta-image.png';

class Cta extends Component {

    render() {
        return (
            <div className='cta bg-cta rounded-1.5xl'>
                <div className='flex justify-between flex-row items-center w-10/12 mx-auto'>
                    <div className='w-5/12'>
                        <InfoHeading
                            badge='SMART Hub'
                            title='A smarter way to make and receive payments'
                            descrpt='Make or request payments with a single click from within your ERP.'
                        />
                        <div className='flex items-center mt-13'>
                            <Button className='mr-3 hover:bg-opacity-70' variant='dark' size='default' to="/">
                                Request full demo
                            </Button>
                            <Button className='hover:bg-gray-700 hover:bg-opacity-10 hover:text-white' variant='light-border' size='default' to="/">
                                Discover SMART Hub
                            </Button>
                        </div>
                    </div>
                    <div className='w-6/12'>
                        <img src={HeroImage} alt='smart hub' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cta;