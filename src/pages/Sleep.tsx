import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Moon, Clock, TrendingUp, Video } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Sleep = () => {
  const [selectedAge, setSelectedAge] = useState('adult');
  const [bedtime, setBedtime] = useState(localStorage.getItem('bedtime') || '22:30');
  const [wakeTime, setWakeTime] = useState(localStorage.getItem('wakeTime') || '06:30');

  const [durationHours, setDurationHours] = useState(7.5);
  const [efficiency, setEfficiency] = useState(87);
  const [fallAsleepMin, setFallAsleepMin] = useState(12);

  const sleepScore = Math.round((durationHours * efficiency) / 10);

  const sleepRecommendations = {
    child: { hours: "9-11", description: "Growing children need plenty of sleep for development" },
    teen: { hours: "8-10", description: "Teenagers require adequate sleep for growth and learning" },
    adult: { hours: "7-9", description: "Adults need quality sleep for optimal health and performance" },
    senior: { hours: "7-8", description: "Older adults may need slightly less sleep but quality remains important" }
  };

  const sleepStages = [
    { name: "Light Sleep", duration: "50%", color: "bg-blue-200", description: "Easy to wake up" },
    { name: "Deep Sleep", duration: "20%", color: "bg-blue-500", description: "Body repair & growth" },
    { name: "REM Sleep", duration: "25%", color: "bg-purple-500", description: "Dreaming & memory consolidation" }
  ];

  const sleepTrend = [
    { day: 'Mon', duration: 7.1 },
    { day: 'Tue', duration: 6.8 },
    { day: 'Wed', duration: 7.5 },
    { day: 'Thu', duration: 8 },
    { day: 'Fri', duration: 7.9 },
    { day: 'Sat', duration: 6.5 },
    { day: 'Sun', duration: 7.6 }
  ];

  const bedtimeVideos = [
    { title: "Guided Sleep Meditation", url: "https://www.youtube.com/embed/ZToicYcHIOU" },
    { title: "Relaxing Sounds for Deep Sleep", url: "https://www.youtube.com/embed/1ZYbU82GVz4" },
    { title: "Yoga for Better Sleep", url: "https://www.youtube.com/embed/v7AYKMP6rOE" }
  ];

  const exportData = () => {
    const data = { bedtime, wakeTime, durationHours, efficiency, fallAsleepMin, sleepScore };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sleep_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleSave = () => {
    localStorage.setItem('bedtime', bedtime);
    localStorage.setItem('wakeTime', wakeTime);
    alert('✅ Sleep schedule saved!');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      if (currentTime === bedtime) alert("🛌 It's time to go to bed!");
      else if (currentTime === wakeTime) alert("🌅 Good morning! Time to wake up!");
    }, 60000);
    return () => clearInterval(interval);
  }, [bedtime, wakeTime]);

  return (
    <div className="min-h-screen py-12 px-4 relative" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop)',
      backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-blue-900/50"></div>
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Sleep Recommendations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            Understand your sleep needs and improve your sleep quality for better health
          </p>
        </div>

        {/* Age Recommendations */}
        <Card className="mb-8 shadow-lg animate-fade-in bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Moon className="w-6 h-6 text-blue-500" />
              <span>Sleep Recommendations by Age</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(sleepRecommendations).map(([age, rec]) => (
                <Button key={age} variant={selectedAge === age ? 'default' : 'outline'}
                  onClick={() => setSelectedAge(age)}
                  className={`capitalize h-auto p-4 flex flex-col items-center space-y-2 ${
                    selectedAge === age ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : ''
                  }`}
                >
                  <span className="font-bold">{age === 'child' ? 'Child (6-13)' : age === 'teen' ? 'Teen (14-17)' : age === 'adult' ? 'Adult (18-64)' : 'Senior (65+)'}</span>
                  <span className="text-lg font-bold">{rec.hours} hrs</span>
                </Button>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Recommended Sleep: {sleepRecommendations[selectedAge as keyof typeof sleepRecommendations].hours} hours
              </h3>
              <p className="text-gray-600">
                {sleepRecommendations[selectedAge as keyof typeof sleepRecommendations].description}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sleep Cycle Stages */}
          <Card className="shadow-lg animate-fade-in bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-purple-500" />
                <span>Sleep Cycle Stages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {sleepStages.map((stage, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{stage.name}</span>
                    <Badge variant="secondary">{stage.duration}</Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                    <div className={`h-3 rounded-full ${stage.color}`} style={{ width: stage.duration }}></div>
                  </div>
                  <p className="text-sm text-gray-600">{stage.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sleep Stats with Chart */}
          <Card className="shadow-lg animate-fade-in bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <span>Your Sleep Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">{sleepScore}</div>
                <div className="text-gray-600 mb-2">Sleep Quality Score</div>
                <Progress value={sleepScore} className="w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{durationHours} hrs</div>
                  <div className="text-sm text-gray-600">Last Night</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{bedtime}</div>
                  <div className="text-sm text-gray-600">Avg Bedtime</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sleepTrend}>
                  <XAxis dataKey="day" />
                  <YAxis domain={[6, 9]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="duration" stroke="#6366f1" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
              <Button onClick={exportData} className="w-full mt-4 bg-indigo-600 text-white">
                Export Sleep Data (JSON)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Manual Entry */}
        <Card className="mt-8 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Manual Sleep Analytics Entry</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm">Sleep Duration (hrs)</label>
              <input type="number" step="0.1" value={durationHours} onChange={e => setDurationHours(+e.target.value)} className="border p-2 rounded w-full" />
            </div>
            <div>
              <label className="text-sm">Efficiency (%)</label>
              <input type="number" value={efficiency} onChange={e => setEfficiency(+e.target.value)} className="border p-2 rounded w-full" />
            </div>
            <div>
              <label className="text-sm">Time to Fall Asleep (min)</label>
              <input type="number" value={fallAsleepMin} onChange={e => setFallAsleepMin(+e.target.value)} className="border p-2 rounded w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Sleep Schedule Section */}
        <Card className="mt-8 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="text-purple-500" />
              Set Your Sleep Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Bedtime</label>
                <input type="time" value={bedtime} onChange={(e) => setBedtime(e.target.value)} className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Wake Time</label>
                <input type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} className="border p-2 rounded w-full" />
              </div>
            </div>
            <Button onClick={handleScheduleSave} className="mt-4 w-full bg-purple-600 text-white">
              Save Sleep Schedule
            </Button>
            <p className="text-xs text-gray-500">
              You'll receive alert reminders at your set sleep times.
            </p>
          </CardContent>
        </Card>

        {/* Bedtime Routine Videos */}
        <Card className="mt-8 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="text-indigo-500" />
              Bedtime Routine Videos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {bedtimeVideos.map((video, index) => (
                <div key={index} className="space-y-2">
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url}
                    title={video.title}
                    className="rounded-lg shadow"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="text-sm text-center font-medium">{video.title}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};
