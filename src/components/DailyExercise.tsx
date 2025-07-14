import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Target } from 'lucide-react';

export const DailyExercise = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [filterLevel, setFilterLevel] = useState("All");

const workouts = [
  {
    title: "Morning Cardio Blast",
    duration: "10 min",
    level: "Beginner",
    calories: "100",
    image: "https://img.youtube.com/vi/ZllXIKITzfg/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ZllXIKITzfg",
    exercises: ["Mock Jump Rope", "High Knees", "Jumping Jacks"],
    description: "Quick 10‑minute morning cardio to get your heart pumping"
  },
  {
    title: "Strength Training (Beginner)",
    duration: "15 min",
    level: "Beginner",
    calories: "150",
    image: "https://img.youtube.com/vi/L3eImBAXT7I/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/L3eImBAXT7I",
    exercises: ["Squats", "Glute Bridges", "Bent‑over Rows"],
    description: "15‑minute full‑body strength with dumbbells"
  },
  {
    title: "Gentle Yoga Flow",
    duration: "20 min",
    level: "Beginner",
    calories: "120",
    image: "https://img.youtube.com/vi/v7AYKMP6rOE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
    exercises: ["Sun Salutation", "Warrior Pose", "Child's Pose"],
    description: "Relaxing yoga flow with verified active video"
  },
  {
    title: "HIIT Circuit",
    duration: "20 min",
    level: "Advanced",
    calories: "300",
    image: "https://img.youtube.com/vi/QTDbxTT8Pm8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/QTDbxTT8Pm8",
    exercises: ["Mountain Climbers", "Jump Squats", "Burpees"],
    description: "20‑minute HIIT workout to blast calories"
  },
  {
    title: "Full Body Stretch",
    duration: "15 min",
    level: "Beginner",
    calories: "80",
    image: "https://img.youtube.com/vi/L_xrDAtykMI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/L_xrDAtykMI",
    exercises: ["Neck rolls", "Hamstring stretch", "Child's Pose"],
    description: "Improve flexibility and reduce stiffness"
  },
  {
    title: "Core Crusher",
    duration: "20 min",
    level: "Intermediate",
    calories: "200",
    image: "https://img.youtube.com/vi/1919eTCoESo/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/1919eTCoESo",
    exercises: ["Crunches", "Leg Raises", "Plank Holds"],
    description: "Tone your core with focused ab workouts"
  },
  {
    title: "30‑Minute Power Yoga Flow",
    duration: "30 min",
    level: "Intermediate",
    calories: "220",
    image: "https://img.youtube.com/vi/qXr3Dmfh8TA/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/qXr3Dmfh8TA",
    exercises: ["Sun Salutation", "Warrior II", "Balance Flow"],
    description: "Strong, dynamic power yoga for full-body strength and flexibility"
  },
  {
    title: "Pilates Core",
    duration: "30 min",
    level: "Beginner",
    calories: "180",
    image: "https://img.youtube.com/vi/lCg_gh_fppI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/lCg_gh_fppI",
    exercises: ["Roll up", "Hundred", "Leg Circles"],
    description: "Strengthen your core and improve posture"
  },
  {
    title: "Chair Workout – 15 min Seated Strength",
    duration: "15 min",
    level: "Beginner",
    calories: "100",
    image: "https://img.youtube.com/vi/HwES4OSc9H8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/HwES4OSc9H8",
    exercises: ["Seated March", "Arm Raises", "Seated Leg Lift"],
    description: "Full-body seated workout ideal for elderly or desk-bound users"
  },
  {
  title: "Low Impact Cardio Workout – 20 min",
  duration: "20 min",
  level: "Beginner",
  calories: "150",
  image: "https://img.youtube.com/vi/WjH-NQDeQ3o/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/embed/WjH-NQDeQ3o",
  exercises: ["Side Steps", "Knee Lifts", "Arm Circles"],
  description: "All‑standing, no‑jump low‑impact cardio routine" // verified active :contentReference[oaicite:1]{index=1}
},
,
  {
    title: "Knee‑Friendly Full Body Workout",
    duration: "20 min",
    level: "Beginner",
    calories: "150",
    image: "https://img.youtube.com/vi/QzQwKiIVAZM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/QzQwKiIVAZM",
    exercises: ["No Squats", "No Lunges", "Core Moves"],
    description: "Low-impact knee-friendly routine with no squats or lunges"
  },
  {
    title: "10‑Minute Posture Fix Routine",
    duration: "10 min",
    level: "Beginner",
    calories: "50",
    image: "https://img.youtube.com/vi/RqcOCBb4arc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/RqcOCBb4arc",
    exercises: ["Wall Angels", "Chin Tucks", "Shoulder Rolls"],
    description: "Daily posture correction exercise to fix rounded shoulders"
  },
  {
    title: "Balance Booster Yoga Flow – 30 min",
    duration: "30 min",
    level: "Intermediate",
    calories: "180",
    image: "https://img.youtube.com/vi/r08RtbU3-0s/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/r08RtbU3-0s",
    exercises: ["Tree Pose", "Single-leg Balance", "Heel Raises"],
    description: "Yoga flow focused on building balance and stability"
  },
  {
    title: "Full‑Body Mobility Flow – 20 min",
    duration: "20 min",
    level: "Beginner",
    calories: "130",
    image: "https://img.youtube.com/vi/tg6zZF6pRg0/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tg6zZF6pRg0",
    exercises: ["Hip Openers", "Cat-Cow", "Arm Circles"],
    description: "Daily mobility flow to loosen joints and muscles"
  },
  {
    title: "30‑Minute Beginner Zumba",
    duration: "30 min",
    level: "Beginner",
    calories: "210",
    image: "https://img.youtube.com/vi/LrTBgC0Dhsc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/LrTBgC0Dhsc",
    exercises: ["Merengue", "Cumbia Steps", "Basic Salsa"],
    description: "Fun, easy-to-follow Zumba Latin dance workout for beginners"
  },
  {
    title: "Fat Burn Express",
    duration: "20 min",
    level: "Advanced",
    calories: "300",
    image: "https://img.youtube.com/vi/VHyGqsPOUHs/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/VHyGqsPOUHs",
    exercises: ["Jump Lunges", "Speed Skaters", "Burpees"],
    description: "Intense cardio to torch calories fast"
  },
  {
    title: "Sleep Yoga",
    duration: "15 min",
    level: "Beginner",
    calories: "70",
    image: "https://img.youtube.com/vi/EmeTZGr_R5Q/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/EmeTZGr_R5Q",
    exercises: ["Legs up the Wall", "Reclining Twist", "Breathing"],
    description: "Relaxing stretches for restful sleep"
  },
  {
    title: "Walk-at-Home",
    duration: "30 min",
    level: "Beginner",
    calories: "220",
    image: "https://img.youtube.com/vi/enYITYwvPAQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/enYITYwvPAQ",
    exercises: ["Marching", "Side Steps", "Arm Pumps"],
    description: "Indoor walking for low-impact cardio"
  },
  {
  title: "25‑Minute Cardio Dance Party",
  duration: "25 min",
  level: "Intermediate",
  calories: "260",
  image: "https://img.youtube.com/vi/oCv2-yHBfs8/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/embed/oCv2-yHBfs8",
  exercises: ["Step Touch", "Dance Combos", "Arm Moves"],
  description: "High‑energy dance fitness party with modifications" // verified active :contentReference[oaicite:2]{index=2}
},
,
  {
    title: "Zumba Dance Workout 30 min",
    duration: "30 min",
    level: "Beginner",
    calories: "210",
    image: "https://img.youtube.com/vi/mZeFvX3ALKY/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/mZeFvX3ALKY",
    exercises: ["Latin Steps", "Arm Combos", "Core Moves"],
    description: "Beginner-friendly Zumba routine to boost cardio"
  }
];


  const filteredWorkouts = filterLevel === "All"
    ? workouts
    : workouts.filter(workout => workout.level === filterLevel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-indigo-200 to-blue-600 text-white">
      {/* Workout Stats */}
      <div className="px-6 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white/60 text-green-900 p-4 rounded-xl shadow-lg backdrop-blur-md mb-6">
          <div className="text-lg font-semibold">🏋️ Workouts Completed: {workoutsCompleted}</div>
          <div className="text-lg font-semibold">🔥 Calories Burned: {totalCalories} cal</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="px-6 pb-4 flex gap-4 flex-wrap justify-center">
        {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
  <Button
    key={level}
    onClick={() => setFilterLevel(level)}
    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 shadow-md
      ${filterLevel === level
        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
        : 'bg-white/70 text-gray-800 hover:bg-purple-200'}`}
  >
    {level}
  </Button>
))}

      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-10">
        {filteredWorkouts.map((workout, index) => (
          <Card
            key={index}
            className="bg-white/40 shadow-xl backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={workout.image} className="w-full h-48 object-cover" alt={workout.title} />
            <CardHeader>
              <CardTitle className="text-xl">{workout.title}</CardTitle>
              <p className="text-sm text-gray-700">{workout.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span><Clock className="inline w-4 h-4 mr-1" />{workout.duration}</span>
                <span><Target className="inline w-4 h-4 mr-1" />{workout.calories} cal</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {workout.exercises.map((e, i) => (
                  <Badge key={i} variant="secondary">{e}</Badge>
                ))}
              </div>
              <Button
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:from-green-500 hover:to-blue-600"
                onClick={() => {
                  setSelectedVideo(workout.videoUrl);
                  setWorkoutsCompleted(prev => prev + 1);
                  setTotalCalories(prev => prev + parseInt(workout.calories));
                }}
              >
                Start Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/90 rounded-2xl w-full max-w-xl h-[400px] relative shadow-xl border border-white/20">
            <button onClick={() => setSelectedVideo(null)} className="absolute top-2 right-3 text-black text-2xl hover:text-red-500">✕</button>
            <iframe
              className="w-full h-full rounded-xl"
              src={selectedVideo}
              title="Workout Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
