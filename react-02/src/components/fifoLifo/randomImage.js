import React from 'react'
import img1 from '../../images/FIFO_LIFO/1.gif';
import img2 from '../../images/FIFO_LIFO/2.gif';
import img3 from '../../images/FIFO_LIFO/3.gif';
import img4 from '../../images/FIFO_LIFO/4.gif';
import img5 from '../../images/FIFO_LIFO/5.gif';
import img6 from '../../images/FIFO_LIFO/6.gif';
import img7 from '../../images/FIFO_LIFO/7.gif';
import img8 from '../../images/FIFO_LIFO/8.gif';

const arr = [img1, img2, img3, img4, img5, img6, img7, img8]
const length = arr.length;
const min = Math.ceil(0);
const max = Math.floor(length - 1);

export const RandomImage = () => {
    // Random index of array from array length
    const randomItem = arr[Math.floor(Math.random() * (max - min + 1)) + min];
    return  (  
        <div>
            <img src={randomItem} alt="Random Item"/>
        </div>
    )
}