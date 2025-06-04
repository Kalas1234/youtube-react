import React from 'react'
import Button from './Button';
import { List } from '../constants';


const Buttonlist = () => {
    return (
        <div className='flex'>
            {List.map((item, index) => {
                return (

                    <Button key={index} name={item} />
                );
            })}
        </div>
    );
};

export default Buttonlist;