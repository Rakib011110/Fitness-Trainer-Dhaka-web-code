

import React, { useState } from 'react';
import "./Details.css"
import image from "../myImg/myImg.jpg"

const Detail = (props) => {
    const [button, setButton] = useState([])
    const handleAddButton = (e) => {
        setButton(e.target.innerText)
    }


    const { details } = props
    // console.log(details)
    let total = 0;
    for (const exercise of details) {
        total = total + exercise.time
    }

    return (
        <div className='details  my-5'>

            <div className=' bg-info rounded-5 '>
                <div>

                    <h5 className=' text-center mt-2'>  <img className='img' src={image} alt="" /> Ariyan Rakib </h5>
                </div>
                <div className='d-flex  justify-content-between p-3 '>

                    <div>
                        <p className='fs-5'>60kg</p>
                        <p className=''> Weight</p></div>

                    <div>
                        <p className='fs-5'>6.5</p>
                        <p className='mt-'> Height</p></div>
                    <div>
                        <p className='fs-5'>20yrs</p>
                        <p className=' '> age</p></div>
                </div>


            </div  >

            <div className=' d-flex mt-5 justify-content-between'>  <div className=''>
                <div >

                    <button className='btn btn-info rounded-5' onClick={(e) => handleAddButton(e)} >10s </button>
                </div>
            </div>
                <div>
                    <div><button className='btn btn-info rounded-5' onClick={(e) => handleAddButton(e)} >20s </button>
                    </div>
                </div>
                <div>
                    <div><button className='btn btn-info rounded-5' onClick={(e) => handleAddButton(e)}>30s </button></div>
                </div></div>

            <div>
                <h5 className='bg-info d-flex justify-content-evenly p-2 rounded-2 mt-5 my-5'> <p> Exercise time : </p> <p> {total} </p> </h5>
            </div>

            <div className=' bg bg-info rounded-2 p-2 justify-content-evenly d-flex'> <h4> Break time {button} </h4></div>

            <button className=' p-2 w-100 fs-4 btn btn-info rounded-2 p2 mt-5'>Activity Completed</button>
        </div>
    );
};

export default Detail;