import React from 'react';
import "./Gym.css"

const Gym = (props) => {
    // console.log(props)
    const { exercise, handleClickToGym } = props
    const { name, img, age, time } = props.exercise


    return (
        <div className='gym'>


            <img src={img} alt="" />
            <div className='gym-info'>
                <h2> {name}</h2>
                <p> {age} </p>
                <h6> Time required : {time}s </h6>

            </div>
            <button onClick={() => handleClickToGym(exercise)} className='btn-list'><p>Add To List </p></button>



        </div>
    );
};

export default Gym;