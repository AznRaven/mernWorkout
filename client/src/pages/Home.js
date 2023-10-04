import React, { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import axios from "axios"; // Import Axios
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    // const fetchWorkouts = async () => {
    //   const response = await fetch('/api/workouts')
    //   const json = await response.json()

    //   if (response.ok) {
    //     setWorkouts(json)
    //   }
    // }
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts"); // Use Axios to make the GET request
        if (response.status === 200) {
          // console.log(response.data)
          // Assuming the JSON response is in response.data
          // setWorkouts(response.data);
          dispatch({type:'SET_WORKOUTS', payload: response.data})
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}
