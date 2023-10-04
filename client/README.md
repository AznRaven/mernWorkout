# React Workout Tracker

React Workout Tracker is a simple web application for tracking your workout sessions. It allows you to create, view, and delete workout records.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Context](#context)
- [Contributing](#contributing)

## Installation

### Clone the repository:

```shell
git clone https://github.com/AznRaven/mernWorkout.git
cd react-workout-tracker
```

### Install dependencies:

```
npm install
```

### Start the development server:

```
npm start
```

Open your web browser and navigate to http://localhost:3000 to access the application.

## Usage

### Add a New Workout:

Fill in the exercise title, load (in kg), and number of reps in the provided form.
Click the "Add Workout" button to create a new workout record.

### View Workouts:

Your workouts will be displayed on the homepage.
Each workout includes details like the exercise title, load, reps, and a timestamp that updates every second.

### Delete Workouts:

To delete a workout, click the "delete" button on the workout card.
Confirm the deletion when prompted.

## Components

### WorkoutForm

The WorkoutForm component allows users to add new workout records. It includes input fields for exercise title, load, and reps.

### WorkoutDetails

The WorkoutDetails component displays individual workout records. It includes details such as exercise title, load, reps, and a timestamp that updates in real-time.

## Context

The application uses React context to manage the state of workout records. The context provides global access to workout data and allows components to interact with it.

## Contributing

Contributions to this project are welcome! If you would like to contribute, please follow these steps:

## Fork the repository.

Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your fork.
Create a pull request.
