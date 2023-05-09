import React from 'react'
import CustomNav from '../CustomNav/customnav'
import { userData } from '../../helper'

const Home = () =>
{
    const {username} = userData();
    return (
        <div>
            <CustomNav /> 
            <div className='home'>
                <h2>
                    Welcome {username}
                </h2>
            </div>
        </div>
    )
}

export default Home;