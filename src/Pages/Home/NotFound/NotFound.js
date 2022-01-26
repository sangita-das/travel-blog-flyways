import React from 'react';
import notfound from '../../../images/notfound-img.jpg'
import Footer from '../../Shared/Footer/Footer';

const Notfound = () => {
    return (
        <div>
            <img className='img-fluid' src={notfound} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Notfound;