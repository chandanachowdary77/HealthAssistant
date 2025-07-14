import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Heart } from 'lucide-react';

export const Yoga = () => {
  const [selectedAge, setSelectedAge] = useState('adults');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

const yogaPrograms = {
  kids: [
    {
      id: 1,
      name: "Animal Yoga Adventure",
      duration: "10 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/3Aqeclxgxb0/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=3Aqeclxgxb0",
      poses: ["Cat Pose", "Dog Pose", "Butterfly Pose"],
      benefits: ["Improves flexibility", "Enhances focus", "Builds confidence"],
      description: "Explore the jungle through fun animal-inspired yoga."
    },
    {
      id: 3,
      name: "Superhero Yoga",
      duration: "5 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/UNcM89BJrOs/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=UNcM89BJrOs",
      poses: ["Hero Pose", "Power Pose", "Flying Warrior"],
      benefits: ["Boosts confidence", "Enhances imagination", "Improves strength"],
      description: "Cosmic Kids Yoga Club – small superhero-inspired session."
    },
    {
      id: 4,
      name: "Under the Sea Yoga",
      duration: "15 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/qC83oFEeVZA/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=qC83oFEeVZA",
      poses: ["Fish Pose", "Starfish Stretch", "Seaweed Sway"],
      benefits: ["Inspires creativity", "Relaxes body", "Teaches breathing"],
      description: "Dive into an underwater yoga adventure"
    },
    {
      id: 5,
      name: "Rainbow Yoga",
      duration: "13 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/dF7O6-QabIo/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=dF7O6-QabIo",
      poses: ["Rainbow Arch", "Sun Salutation", "Color Stretch"],
      benefits: ["Improves mood", "Adds positivity", "Increases flexibility"],
      description: "Follow the rainbow with joyful yoga movements"
    },
    {
      id: 6,
      name: "Dinosaur Adventure Yoga",
      duration: "5 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/Sjq2OPw3AMQ/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=Sjq2OPw3AMQ",
      poses: ["T-Rex Stomp", "Bronto Stretch", "Raptor Run"],
      benefits: ["Burns energy", "Encourages movement", "Enhances imagination"],
      description: "Cosmic Kids Dinosaur Yoga Adventure!"
    },
    {
      id: 7,
      name: "Star Wars Yoga",
      duration: "18 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/coC0eUSm-pc/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=coC0eUSm-pc",
      poses: ["Lightsaber Pose", "Jedi Flow", "Yoda Balance"],
      benefits: ["Teaches focus", "Fun for fans", "Enhances coordination"],
      description: "A galaxy-themed yoga for young Padawans"
    },
    {
      id: 8,
      name: "Frozen Yoga (Inspired)",
      duration: "10 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/1ogrBDaVJLU/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=1ogrBDaVJLU",
      poses: ["Elsa Pose", "Snowflake Stretch", "Ice Slide"],
      benefits: ["Improves balance", "Creative movement", "Joyful play"],
      description: "Magical Frozen yoga journey with kids"
    },
    {
      id: 9,
      name: "Yoga for Focus",
      duration: "10 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/buzZ_BQpeCw/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=buzZ_BQpeCw",
      poses: ["Tree Pose", "Eagle Pose", "Candle Breath"],
      benefits: ["Improves concentration", "Sharpens attention", "Promotes calm"],
      description: "Kids yoga for focus & concentration"
    },
    {
      id: 10,
      name: "Yoga in the Garden",
      duration: "14 min",
      difficulty: "Fun",
      image: "https://img.youtube.com/vi/U9Q6FKF12Qs/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=U9Q6FKF12Qs",
      poses: ["Flower Stretch", "Butterfly Pose", "Tree Pose"],
      benefits: ["Connects with nature", "Calms mind", "Builds strength"],
      description: "Move with nature in a peaceful garden"
    }
  ],
adults: [
  {
    id: 11,
    name: "15‑Minute Morning Yoga Flow",
    duration: "15 min",
    difficulty: "Intermediate",
    image: "https://img.youtube.com/vi/r7xsYgTeM2Q/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=r7xsYgTeM2Q",
    poses: ["Sun Salutation", "High Lunge", "Standing Stretch"],
    benefits: ["Boosts morning energy", "Improves flexibility", "Sharpens focus"],
    description: "A refreshing morning yoga to energize your body and mind."
  },
  {
    id: 12,
    name: "Yoga for Relaxation – Beginner Stress Relief Flow",
    duration: "15 min",
    difficulty: "Beginner",
    image: "https://img.youtube.com/vi/U_68GChh3Qs/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=U_68GChh3Qs",
    poses: ["Cat‑Cow", "Child’s Pose", "Seated Forward Fold"],
    benefits: ["Calms the mind", "Releases tension", "Supports mental well‑being"],
    description: "Gentle stress relief flow for unwinding and relaxation."
  },
  {
    id: 13,
    name: "Power Yoga Full‑Body Challenge (45 min)",
    duration: "45 min",
    difficulty: "Advanced",
    image: "https://img.youtube.com/vi/lDbJdJWX82M/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=lDbJdJWX82M",
    poses: ["Sun Salutation", "Plank Flow", "Warrior Series", "Balance Series"],
    benefits: ["Builds strength", "Enhances endurance", "Increases flexibility"],
    description: "A full-body power yoga flow with Ally Maz for strength and sweat."
  },
  {
    id: 14,
    name: "Office Break Yoga – 10 min",
    duration: "10 min",
    difficulty: "Beginner",
    image: "https://img.youtube.com/vi/GorX0MF6pLk/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=GorX0MF6pLk",
    poses: ["Neck Rolls", "Seated Twist", "Wrist/Flexor Stretch"],
    benefits: ["Eases tension", "Improves posture", "Boosts energy"],
    description: "Quick desk-friendly yoga to reset mid-day stress."
  },
  {
    id: 15,
    name: "Evening Relax & Stretch – 30 min",
    duration: "30 min",
    difficulty: "Beginner",
    image: "https://img.youtube.com/vi/ssaMwhZlIeE/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=ssaMwhZlIeE",
    poses: ["Forward Fold", "Butterfly Stretch", "Supine Twist"],
    benefits: ["Releases tension", "Calms mind", "Improves flexibility"],
    description: "Gentle evening flow to unwind and stretch before bed."
  },
  {
    id: 16,
    name: "Bedtime Restorative Yoga – 20 min",
    duration: "20 min",
    difficulty: "Gentle",
    image: "https://img.youtube.com/vi/v7SN-d4qXx0/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=v7SN-d4qXx0",
    poses: ["Reclining Bound Angle", "Legs‑Up Wall", "Savasana"],
    benefits: ["Promotes sleep", "Calms nervous system", "Releases physical tension"],
    description: "A gentle bedtime yoga practice for better sleep."
  },
  {
    id: 17,
    name: "15‑Minute Anxiety Relief Yoga",
    duration: "15 min",
    difficulty: "Gentle",
    image: "https://img.youtube.com/vi/FtyIfyz4qKM/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=FtyIfyz4qKM",
    poses: ["Child's Pose", "Cat‑Cow", "Seated Forward Fold"],
    benefits: ["Calms mind", "Releases tension", "Lowers stress levels"],
    description: "A gentle, stress-reducing flow to help ease anxiety."
  },
  {
    id: 18,
    name: "30‑Minute Fat‑Burning Yoga Flow",
    duration: "30 min",
    difficulty: "Advanced",
    image: "https://img.youtube.com/vi/IYSkQLXbtHE/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=IYSkQLXbtHE",
    poses: ["Chair Pose", "Chaturanga", "Boat Pose"],
    benefits: ["Burns calories", "Improves stamina", "Tones body"],
    description: "High‑energy Vinyasa flow for fat‑burning and strength."
  },
  {
    id: 19,
    name: "Restorative Sleep Yoga – 20 min",
    duration: "20 min",
    difficulty: "Gentle",
    image: "https://img.youtube.com/vi/oFYRWZ9xpHE/hqdefault.jpg",
    video: "https://www.youtube.com/watch?v=oFYRWZ9xpHE",
    poses: ["Legs‑Up Wall", "Supported Bridge", "Savasana"],
    benefits: ["Encourages rest", "Relaxes body", "Prepares for sleep"],
    description: "Restore and unwind with a restorative evening yoga class."
  }
],
  seniors: [
    {
      id: 20,
      name: "30‑Minute Gentle Chair Yoga",
      duration: "30 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/1YHjBYcqJ5c/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=1YHjBYcqJ5c",
      poses: ["Neck Rolls", "Arm Lifts", "Side Stretches"],
      benefits: ["Promotes flexibility", "Strengthens muscles", "Improves posture"],
      description: "Therapist-led chair yoga routine for seniors"
    },
    {
      id: 21,
  name: "Chair Yoga For Seniors | Improve Strength & Flexibility",
  duration: "30 min",
  difficulty: "Gentle",
  image: "https://img.youtube.com/vi/-Ts01MC2mIo/hqdefault.jpg",
  video: "https://www.youtube.com/embed/-Ts01MC2mIo",
  poses: ["Seated Twists", "Shoulder Rolls", "Leg Extensions", "Side Stretches"],
  benefits: ["Improves strength", "Increases flexibility", "Enhances balance", "Relieves tension"],
  description: "A 30-minute chair yoga session designed for seniors to improve strength, flexibility, and overall mobility."
    },
    {
      id: 22,
      name: "Clearing Arthritis Yoga – 28 min",
      duration: "28 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/kFhG-ZzLNN4/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=kFhG-ZzLNN4",
      poses: ["Wrist/Open-Hand Stretches", "Elbow/Shoulder Rolls"],
      benefits: ["Eases joint pain", "Increases hand mobility"],
      description: "Gentle, arthritis-friendly chair yoga with Adriene"
    },
    {
      id: 23,
      name: "Yoga Over 60 – 30 min Gentle Flow",
      duration: "30 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/Lh6TGetqbiM/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=Lh6TGetqbiM",
      poses: ["Breathing Warm‑up", "Gentle Flow Sequence", "Seated Stretch"],
      benefits: ["Supports joint mobility", "Improves flexibility", "Boosts wellness"],
      description: "Yoga Over 60 – 30 Minute Practice with Sharon Goldhirsch"
    },
    {
      id: 24,
      name: "Evening Bed Stretch Yoga – 10 min",
      duration: "10 min",
      difficulty: "Very Gentle",
      image: "https://img.youtube.com/vi/WisaiUma9pA/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=WisaiUma9pA",
      poses: ["Supine Opening", "Hamstring Stretch", "Neck Ease"],
      benefits: ["Promotes relaxation", "Prepares for sleep", "Stretches gently"],
      description: "Relaxing stretch before bed"
    },
    {
      id: 25,
      name: "30‑Minute Sit & Be Fit Chair Yoga",
      duration: "30 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/pciXaO4wtug/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=pciXaO4wtug",
      poses: ["Seated Warm‑ups", "Arm/Leg Movements", "Spinal Mobility"],
      benefits: ["Enhances circulation", "Strengthens core", "Mobile joints"],
      description: "Therapist-led chair exercise for seniors"
    },
    {
      id: 26,
      name: "Evening Bedtime Yoga for Seniors – 10 min",
      duration: "10 min",
      difficulty: "Very Gentle",
      image: "https://img.youtube.com/vi/4plfdMhM4F8/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=4plfdMhM4F8",
      poses: ["Leg Stretch", "Calm Breathing", "Relaxed Supine"],
      benefits: ["Calms mind", "Prepares for sleep", "Eases tension"],
      description: "10 min evening yoga to wind down"
    },
    {
      id: 27,
      name: "Relaxing Chair Yoga for Seniors",
      duration: "20 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/kFhG-ZzLNN4/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=kFhG-ZzLNN4",
      poses: ["Wrist Rolls", "Spinal Flex", "Foot Pumps"],
      benefits: ["Enhances blood flow", "Calms body", "Boosts joint range"],
      description: "Perfect to start or end the day"
    },
    {
      id: 28,
      name: "Supine Yoga for Limited Mobility – 15 min",
      duration: "15 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/H2PXYa1Kkpk/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=H2PXYa1Kkpk",
      poses: ["Supine Stretch", "Gentle Hip Openers", "Neck Release"],
      benefits: ["Accessible supine movements", "Gentle on joints"],
      description: "Yoga lying down for beginners/over 50"
    },
    {
      id: 29,
      name: "34-Minute Gentle Yoga for Flexibility & Stress Relief",
      duration: "34 min",
      difficulty: "Gentle",
      image: "https://img.youtube.com/vi/rJZw__B-RmY/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=rJZw__B-RmY",
      poses: ["Flow sequence", "Deep stretch", "Relaxation"],
      benefits: ["Reduces stress", "Enhances flexibility"],
      description: "Gentle yoga class suitable for seniors"
    },
    {
      id: 30,
      name: "Power & Balance 30-Min Yoga",
      duration: "30 min",
      difficulty: "Intermediate",
      image: "https://img.youtube.com/vi/WltkvVB_lfM/hqdefault.jpg",
      video: "https://www.youtube.com/watch?v=WltkvVB_lfM",
      poses: ["Balance Flow", "Controlled Standing Poses"],
      benefits: ["Improves balance", "Enhances strength"],
      description: "Power and Balance yoga session"
    }
  ]

};


  const currentPrograms = yogaPrograms[selectedAge as keyof typeof yogaPrograms];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'fun': return 'bg-yellow-500';
      case 'gentle': return 'bg-green-500';
      case 'beginner': return 'bg-blue-500';
      case 'intermediate': return 'bg-orange-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div 
      className="min-h-screen py-12 px-4 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-green-900/30 to-blue-900/40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-green-200 to-purple-200 bg-clip-text text-transparent mb-4">
            Age-Based Yoga
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            Discover yoga practices tailored for every stage of life, from playful kids' yoga to gentle senior sessions
          </p>
        </div>

        {/* Age Selection */}
        <Card className="mb-8 shadow-lg animate-fade-in bg-white/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
                {[
                  { key: 'kids', label: 'Kids (5-12)', icon: '🧒', color: 'from-yellow-400 to-orange-400' },
                  { key: 'adults', label: 'Adults (18-64)', icon: '🧘‍♀️', color: 'from-blue-400 to-green-400' },
                  { key: 'seniors', label: 'Seniors (65+)', icon: '🧓', color: 'from-purple-400 to-pink-400' }
                ].map(({ key, label, icon, color }) => (
                  <Button
                    key={key}
                    variant={selectedAge === key ? 'default' : 'outline'}
                    onClick={() => setSelectedAge(key)}
                    className={`h-auto p-6 flex flex-col items-center space-y-3 ${
                      selectedAge === key 
                        ? `bg-gradient-to-r ${color} text-white shadow-lg transform scale-105` 
                        : 'hover:bg-gray-50'
                    } transition-all duration-300`}
                  >
                    <span className="text-3xl">{icon}</span>
                    <span className="font-bold text-center">{label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yoga Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPrograms.map((program, index) => (
            <Card key={program.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-white/90 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <Button
                  size="sm"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-gray-800 hover:bg-white rounded-full w-12 h-12 p-0"
                >
                  <Play className="w-5 h-5" />
                </Button>
                <Badge className={`absolute top-4 right-4 ${getDifficultyColor(program.difficulty)}`}>
                  {program.difficulty}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{program.name}</CardTitle>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedAge.charAt(0).toUpperCase() + selectedAge.slice(1)}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Poses:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.poses.map((pose, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {pose}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>Benefits:</span>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  onClick={() => setSelectedVideo(program.video)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                >
                  Start Practice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Yoga Benefits Section */}
        <Card className="mt-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Practice Yoga?</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Yoga offers incredible benefits for people of all ages, from improving flexibility and strength to reducing stress and enhancing mental well-being.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "💪", title: "Physical Strength", description: "Build core strength and muscle tone" },
                { icon: "🧘‍♀️", title: "Mental Clarity", description: "Improve focus and reduce stress" },
                { icon: "❤️", title: "Heart Health", description: "Support cardiovascular wellness" },
                { icon: "🌙", title: "Better Sleep", description: "Promote restful and quality sleep" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal Video Player */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-1 z-50"
            >
              ✕
            </button>
            <iframe
              className="w-full aspect-video"
              src={selectedVideo.replace("watch?v=", "embed/")}
              title="Yoga Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
