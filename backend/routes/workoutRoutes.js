const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workouts
router.get("/:id", getWorkout);

// POST single workouts
router.post("/", createWorkout);

// DELETE new workout
router.delete("/:id", deleteWorkout);

// UPDATE new workout
router.patch("/:id", updateWorkout);

module.exports = router;
