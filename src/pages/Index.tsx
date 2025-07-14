import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { DailyExercise } from '@/components/DailyExercise';
import { WaterIntake } from '@/components/WaterIntake';
import { Nutrition } from '@/components/Nutrition';
import { Sleep } from '@/pages/Sleep';
import { Yoga } from '@/components/Yoga';
import { Profile } from '@/components/Profile'; // ✅ Import your Profile component

const Index = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'exercise':
        return <DailyExercise />;
      case 'water':
        return <WaterIntake />;
      case 'nutrition':
        return <Nutrition />;
      case 'sleep':
        return <Sleep />;
      case 'yoga':
        return <Yoga />;
      case 'profile':
        return <Profile />; // ✅ Added Profile section
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="transition-all duration-500 ease-in-out">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
