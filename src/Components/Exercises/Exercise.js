

import React, { useEffect, useState } from 'react';
import Detail from '../Details/Detail';
import Gym from '../Gym/Gym';

import "./Exercise.css"

const Exercise = () => {
    const [exercises, setExercise] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercise(data))

    }, [])

    const handleClickToGym = (exercise) => {
        console.log(exercise);
        const newDetails = [...details, exercise]
        setDetails(newDetails)
    }
    return (
        <div className='exercise-container' >



            <div className="exercise-list">


                {
                    exercises.map(exercise => <Gym key={exercise.id}
                        exercise={exercise}
                        handleClickToGym={handleClickToGym}

                    ></Gym>)
                }

            </div>


            <div className="exercise-break-list">
                <Detail details={details} ></Detail>
            </div>
        </div>
    );
};

export default Exercise;