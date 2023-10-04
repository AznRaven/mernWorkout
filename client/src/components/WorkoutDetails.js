import React from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch("http://localhost:8080/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      console.log('workout deleted ',json)
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
}
