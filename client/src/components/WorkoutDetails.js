import React, { useState, useEffect } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const [timestamp, setTimestamp] = useState(new Date(workout.createdAt));

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the timestamp every second
      setTimestamp(new Date(workout.createdAt));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [workout.createdAt]);

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
      <p>{formatDistanceToNow(timestamp, { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
}
