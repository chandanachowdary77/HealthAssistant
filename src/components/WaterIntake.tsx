import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Droplet, Plus, Minus } from 'lucide-react';

export const WaterIntake = () => {
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [currentIntake, setCurrentIntake] = useState(1200);
  
  const calculateDailyGoal = () => {
    let baseAmount = weight * 35; // 35ml per kg
    const activityMultiplier = {
      'low': 1.0,
      'moderate': 1.2,
      'high': 1.5
    };
    return Math.round(baseAmount * activityMultiplier[activityLevel as keyof typeof activityMultiplier]);
  };

  const dailyGoal = calculateDailyGoal();
  const progressPercentage = Math.min((currentIntake / dailyGoal) * 100, 100);

  const addWater = (amount: number) => {
    setCurrentIntake(prev => Math.max(0, prev + amount));
  };

  const quickAddAmounts = [250, 500, 750];

  return (
    <div 
      className="min-h-screen py-12 px-4 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-teal-900/40"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Water Intake Tracker
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            Stay hydrated and healthy by tracking your daily water consumption
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Section */}
          <Card className="shadow-lg animate-fade-in bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Droplet className="w-6 h-6 text-blue-500" />
                <span>Daily Water Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Activity Level</Label>
                <div className="grid grid-cols-3 gap-2">
                  {['low', 'moderate', 'high'].map((level) => (
                    <Button
                      key={level}
                      variant={activityLevel === level ? 'default' : 'outline'}
                      onClick={() => setActivityLevel(level)}
                      className={`capitalize ${
                        activityLevel === level 
                          ? 'bg-blue-500 hover:bg-blue-600' 
                          : ''
                      }`}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-2">Your Daily Goal</p>
                <p className="text-3xl font-bold text-blue-600">{dailyGoal}ml</p>
                <p className="text-sm text-gray-500">({Math.round(dailyGoal / 250)} glasses)</p>
              </div>
            </CardContent>
          </Card>

          {/* Progress Section */}
          <Card className="shadow-lg animate-fade-in bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Water Bottle Visualization */}
              <div className="relative mx-auto w-32 h-64 bg-blue-100 rounded-full border-4 border-blue-200 overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 to-blue-300 transition-all duration-500 ease-out rounded-full"
                  style={{ height: `${progressPercentage}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-blue-800 font-bold">
                    <div className="text-lg">{Math.round(progressPercentage)}%</div>
                    <div className="text-xs">Complete</div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-2xl font-bold text-gray-800">{currentIntake}ml</p>
                <p className="text-gray-600">of {dailyGoal}ml goal</p>
                <Progress value={progressPercentage} className="w-full" />
              </div>

              {/* Quick Add Buttons */}
              <div className="space-y-4">
                <p className="font-medium text-gray-700">Quick Add</p>
                <div className="grid grid-cols-3 gap-2">
                  {quickAddAmounts.map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => addWater(amount)}
                      className="flex flex-col items-center p-4 h-auto bg-gradient-to-r from-blue-50 to-green-50 text-blue-600 border border-blue-200 hover:from-blue-100 hover:to-green-100"
                      variant="outline"
                    >
                      <Droplet className="w-5 h-5 mb-1" />
                      <span className="text-sm">{amount}ml</span>
                    </Button>
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    onClick={() => addWater(-250)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-gray-600">Adjust intake</span>
                  <Button
                    onClick={() => addWater(250)}
                    variant="outline"
                    size="sm"
                    className="text-green-600 border-green-200 hover:bg-green-50"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => setCurrentIntake(0)}
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Hydration Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Start your day with a glass of water",
                "Keep a water bottle at your desk",
                "Set hourly reminders to drink water",
                "Eat water-rich foods like fruits"
              ].map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Droplet className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
