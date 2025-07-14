import React, { useEffect, useState } from 'react';
import { auth, db } from '@/firebase';
import { signOut, updateProfile } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

export const Profile: React.FC = () => {
  const [userData, setUserData] = useState<{ name: string; email: string; emailVerified: boolean } | null>(null);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData({
            name: data.name,
            email: user.email || '',
            emailVerified: user.emailVerified,
          });
        }
      }
    };
    fetchUserData();
  }, []);

  const handleNameUpdate = async () => {
    const user = auth.currentUser;
    if (user && newName.trim()) {
      try {
        await updateProfile(user, { displayName: newName });
        await updateDoc(doc(db, 'users', user.uid), { name: newName });

        setUserData((prev) =>
          prev ? { ...prev, name: newName } : null
        );
        setEditing(false);
        alert('Name updated successfully!');
      } catch (error) {
        console.error('Error updating name:', error);
        alert('Failed to update name.');
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  if (!userData) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-green-300 to-blue-500">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 backdrop-blur-md bg-opacity-90">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Profile Information</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Name:</span>
            {editing ? (
              <input
                className="border border-gray-300 rounded px-2 py-1 flex-1"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <span className="flex-1">{userData.name}</span>
            )}
            {!editing && (
              <button
                onClick={() => {
                  setEditing(true);
                  setNewName(userData.name);
                }}
                className="text-blue-500 hover:text-blue-700"
                aria-label="Edit Name"
              >
                <Pencil className="w-4 h-4" />
              </button>
            )}
          </div>

          <p><span className="font-semibold">Email:</span> {userData.email}</p>
          <p>
            <span className="font-semibold">Email Verified:</span>{" "}
            {userData.emailVerified ? "Yes" : "No"}
          </p>
        </div>

        {editing && (
          <div className="flex space-x-2 mt-4">
            <Button onClick={handleNameUpdate}>Save</Button>
            <Button
              className="bg-gray-200 text-gray-700"
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
          </div>
        )}

        <Button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
