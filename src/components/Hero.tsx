import React, { useEffect, useState } from 'react';
import { auth, db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserName(data.name);
        }
      }
    };
    fetchUserName();
  }, []);

  const quote = "Every step you take is a step away from where you were yesterday.";

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Welcome, <span className="text-blue-600">{userName || 'User'}</span> 👋
              </h1>
              <p className="text-lg text-gray-600 italic">"{quote}"</p>
              <p className="text-md text-gray-700 mt-2">
                Your wellness journey starts today. Let's take the next step together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-lg shadow-md">
                Start Your Journey
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/background.jpg"
                alt="Wellness"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
