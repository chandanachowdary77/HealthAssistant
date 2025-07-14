import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Plus, Minus, Sun, Moon } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export const Nutrition = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [diary, setDiary] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);
  const [healthProblem, setHealthProblem] = useState('');
  const [customFood, setCustomFood] = useState({
    name: '', calories: '', protein: '', carbs: '', fats: '', category: '', image: ''
  });

  const nutritionData = [
    { id: 1, name: "Banana", image: "/images/banana.jpg", calories: 105, protein: 1.3, carbs: 27, fats: 0.4, category: "Fruit" },
    { id: 2, name: "Chicken Breast", image: "/images/chicken.jpg", calories: 231, protein: 43.5, carbs: 0, fats: 5, category: "Protein" },
    { id: 3, name: "Avocado", image: "/images/avocado.jpg", calories: 234, protein: 2.9, carbs: 12, fats: 21, category: "Healthy Fats" },
    { id: 4, name: "Almonds", image: "/images/almonds.jpg", calories: 164, protein: 6, carbs: 6, fats: 14, category: "Healthy Fats" },
    { id: 5, name: "Oats", image: "/images/oats.jpg", calories: 150, protein: 5, carbs: 27, fats: 3, category: "Grain" },
    { id: 6, name: "Broccoli", image: "/images/broccoli.jpg", calories: 55, protein: 3.7, carbs: 11, fats: 0.6, category: "Vegetable" },
    { id: 7, name: "Brown Rice", image: "/images/brown.jpg", calories: 216, protein: 5, carbs: 45, fats: 1.8, category: "Grain" },
    { id: 8, name: "Greek Yogurt", image: "/images/yogurt.jpg", calories: 100, protein: 10, carbs: 6, fats: 4, category: "Dairy" },
    { id: 9, name: "Apple", image: "/images/apple.jpg", calories: 95, protein: 0.5, carbs: 25, fats: 0.3, category: "Fruit" },
    { id: 10, name: "Egg", image: "/images/egg.jpg", calories: 78, protein: 6, carbs: 0.6, fats: 5, category: "Protein" },
    { id: 11, name: "Tofu", image: "/images/tofu.jpg", calories: 144, protein: 15, carbs: 3.9, fats: 8.7, category: "Protein" },
    { id: 12, name: "Sweet Potato", image: "/images/sweet.jpg", calories: 103, protein: 2, carbs: 24, fats: 0.2, category: "Vegetable" },
    { id: 13, name: "Spinach", image: "/images/spinach.jpg", calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, category: "Vegetable" },
    { id: 14, name: "Cottage Cheese", image: "/images/cheese.jpg", calories: 98, protein: 11, carbs: 3, fats: 4.3, category: "Dairy" },
    { id: 15, name: "Peanut Butter", image: "/images/peanut.jpg", calories: 188, protein: 8, carbs: 6, fats: 16, category: "Healthy Fats" },
    { id: 16, name: "Quinoa", image: "/images/quinoa.jpg", calories: 222, protein: 8, carbs: 39, fats: 3.6, category: "Grain" },
    { id: 17, name: "Orange", image: "/images/orange.jpg", calories: 62, protein: 1.2, carbs: 15.4, fats: 0.2, category: "Fruit" },
    { id: 18, name: "Salmon", image: "/images/salmon.jpg", calories: 206, protein: 22, carbs: 0, fats: 13, category: "Protein" },
    { id: 19, name: "Blueberries", image: "/images/blue.jpg", calories: 84, protein: 1.1, carbs: 21, fats: 0.5, category: "Fruit" },
    { id: 20, name: "Carrot", image: "/images/carrot.jpg", calories: 41, protein: 0.9, carbs: 10, fats: 0.2, category: "Vegetable" }
  ];

  const healthFoodMap = {
    anemia: {
      foods: ["Spinach", "Tofu", "Almonds", "Egg"],
      extras: ["Lentils", "Beef Liver", "Pumpkin Seeds", "Fortified Cereals"]
    },
    diabetes: {
      foods: ["Oats", "Broccoli", "Quinoa", "Avocado"],
      extras: ["Barley", "Chia Seeds", "Flaxseeds", "Bitter Gourd"]
    },
    obesity: {
      foods: ["Apple", "Carrot", "Brown Rice", "Greek Yogurt"],
      extras: ["Zucchini", "Cauliflower Rice", "Green Tea", "Lentil Soup"]
    },
    hypertension: {
      foods: ["Banana", "Salmon", "Sweet Potato", "Spinach"],
      extras: ["Beetroot", "Garlic", "Low-fat Milk", "Dark Chocolate (in moderation)"]
    },
    cholesterol: {
      foods: ["Oats", "Avocado", "Almonds", "Blueberries"],
      extras: ["Barley", "Okra", "Fatty Fish", "Olive Oil"]
    },
    constipation: {
      foods: ["Banana", "Carrot", "Spinach", "Apple"],
      extras: ["Prunes", "Pears", "Whole Wheat Bread", "Chia Seeds"]
    },
    thyroid: {
      foods: ["Egg", "Greek Yogurt", "Broccoli", "Quinoa"],
      extras: ["Seaweed", "Brazil Nuts", "Fish (Tuna)", "Iodized Salt"]
    },
    bone_health: {
      foods: ["Cottage Cheese", "Broccoli", "Tofu", "Almonds"],
      extras: ["Sardines", "Kale", "Fortified Orange Juice", "Yogurt"]
    },
    vision: {
      foods: ["Carrot", "Spinach", "Sweet Potato", "Egg"],
      extras: ["Bell Peppers","Corn", "Sunflower Seeds"]
    },
    pregnancy: {
      foods: ["Banana", "Avocado", "Tofu", "Greek Yogurt"],
      extras: ["Lentils", "Eggs", "Leafy Greens", "Berries"]
    },
    immunity: {
      foods: ["Blueberries", "Spinach", "Carrot", "Orange"],
      extras: ["Ginger", "Turmeric", "Garlic", "Mushrooms"]
    },
    heart_disease: {
      foods: ["Oats", "Salmon", "Almonds", "Avocado"],
      extras: ["Walnuts", "Berries", "Whole Grains", "Green Leafy Veggies"]
    },
    liver_health: {
      foods: ["Apple", "Spinach", "Carrot", "Tofu"],
      extras: ["Garlic", "Grapefruit", "Green Tea", "Cruciferous Vegetables"]
    },
    muscle_gain: {
      foods: ["Chicken Breast", "Egg", "Quinoa", "Greek Yogurt"],
      extras: ["Cottage Cheese", "Milk", "Whey Protein", "Peanut Butter"]
    }
  };

  
  const inputKey = healthProblem.toLowerCase().replace(/\s+/g, '_');
  const extraRecommendations = healthFoodMap[inputKey]?.extras || [];

  const recommendedFoods = nutritionData.filter(f =>
    healthFoodMap[inputKey]?.foods?.includes(f.name)
  );

  const categories = ['All', ...new Set(nutritionData.map(f => f.category))];

  const filteredFoods = nutritionData.filter(f =>
    (categoryFilter === 'All' || f.category === categoryFilter) &&
    (f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const addToDiary = (food) => {
    const exists = diary.find(item => item.id === food.id);
    if (exists) {
      setDiary(diary.map(item =>
        item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setDiary([...diary, { ...food, quantity: 1 }]);
    }
  };

  const removeFromDiary = (id) => {
    const updated = diary.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setDiary(updated);
  };

  const resetDiary = () => setDiary([]);

  const downloadCSV = () => {
    const csv = [
      ['Name', 'Quantity', 'Calories', 'Protein', 'Carbs', 'Fats'],
      ...diary.map(i => [i.name, i.quantity, i.calories * i.quantity, (i.protein * i.quantity).toFixed(1), (i.carbs * i.quantity).toFixed(1), (i.fats * i.quantity).toFixed(1)])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'diary.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const summaryData = [
    { name: 'Protein', value: diary.reduce((acc, i) => acc + i.protein * i.quantity, 0) },
    { name: 'Carbs', value: diary.reduce((acc, i) => acc + i.carbs * i.quantity, 0) },
    { name: 'Fats', value: diary.reduce((acc, i) => acc + i.fats * i.quantity, 0) }
  ];

  const colors = ['#EF4444', '#F59E0B', '#8B5CF6'];

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleCustomAdd = () => {
  if (!customFood.name.trim()) return;

  const nameTrimmed = customFood.name.trim();
  const lowerName = nameTrimmed.toLowerCase();

  const matchInNutrition = nutritionData.find(f => f.name.toLowerCase() === lowerName);

  // Case-insensitive match from extraImages
  const matchedExtraImageKey = Object.keys(extraImages).find(key => key.toLowerCase() === lowerName);
  const imageFromExtras = matchedExtraImageKey ? extraImages[matchedExtraImageKey] : '/images/placeholder.jpg';

  const newItem = {
    ...customFood,
    id: nutritionData.length + diary.length + 1,
    name: nameTrimmed,
    category: customFood.category || matchInNutrition?.category || 'Other',
    calories: parseFloat(customFood.calories) || matchInNutrition?.calories || 0,
    protein: parseFloat(customFood.protein) || matchInNutrition?.protein || 0,
    carbs: parseFloat(customFood.carbs) || matchInNutrition?.carbs || 0,
    fats: parseFloat(customFood.fats) || matchInNutrition?.fats || 0,
    image: customFood.image || matchInNutrition?.image || imageFromExtras
  };

  addToDiary(newItem);
  setCustomFood({ name: '', calories: '', protein: '', carbs: '', fats: '', category: '', image: '' });
};


  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const extraImages = {
  "Lentils": "/images/lentils.jpg",
  "Beef Liver": "/images/beef_liver.jpg",
  "Pumpkin Seeds": "/images/pumpkin_seeds.jpg",
  "Fortified Cereals": "/images/fortified_cereals.jpg",
  "Barley": "/images/barley.jpg",
  "Chia Seeds": "/images/chia_seeds.jpg",
  "Flaxseeds": "/images/flaxseeds.jpg",
  "Bitter Gourd": "/images/bitter_gourd.jpg",
  "Zucchini": "/images/zucchini.jpg",
  "Cauliflower Rice": "/images/cauliflower_rice.jpg",
  "Green Tea": "/images/green_tea.jpg",
  "Lentil Soup": "/images/lentil_soup.jpg",
  "Beetroot": "/images/beetroot.jpg",
  "Garlic": "/images/garlic.jpg",
  "Low-fat Milk": "/images/low_fat_milk.jpg",
  "Dark Chocolate (in moderation)": "/images/dark_chocolate.jpg",
  "Okra": "/images/okra.jpg",
  "Fatty Fish": "/images/fatty_fish.jpg",
  "Olive Oil": "/images/olive_oil.jpg",
  "Prunes": "/images/prunes.jpg",
  "Pears": "/images/pears.jpg",
  "Whole Wheat Bread": "/images/whole_wheat_bread.jpg",
  "Seaweed": "/images/seaweed.jpg",
  "Brazil Nuts": "/images/brazil_nuts.jpg",
  "Fish (Tuna)": "/images/tuna.jpg",
  "Iodized Salt": "/images/iodized_salt.jpg",
  "Sardines": "/images/sardines.jpg",
  "Kale": "/images/kale.jpg",
  "Fortified Orange Juice": "/images/fortified_orange_juice.jpg",
  "Yogurt": "/images/yogurt.jpg",
  "Bell Peppers": "/images/bell_peppers.jpg",
  "Corn": "/images/corn.jpg",
  "Sunflower Seeds": "/images/sunflower_seeds.jpg",
  "Eggs": "/images/egg.jpg",
  "Leafy Greens": "/images/leafy_greens.jpg",
  "Berries": "/images/blue.jpg",
  "Ginger": "/images/ginger.jpg",
  "Turmeric": "/images/turmeric.jpg",
  "Mushrooms": "/images/mushrooms.jpg",
  "Walnuts": "/images/walnuts.jpg",
  "Whole Grains": "/images/whole_grains.jpg",
  "Green Leafy Veggies": "/images/green_leafy_veggies.jpg",
  "Grapefruit": "/images/grapefruit.jpg",
  "Cruciferous Vegetables": "/images/cruciferous_veggies.jpg",
  "Milk": "/images/milk.jpg",
  "Whey Protein": "/images/whey_protein.jpg",
  "Peanut Butter": "/images/peanut.jpg"
};



  return (
    <div className="min-h-screen px-4 py-10 transition-colors duration-300 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('/images/nutrition.jpg')` }}>
      <div className="max-w-6xl mx-auto space-y-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Nutrition Tracker</h1>
          <Button onClick={toggleTheme} className="bg-gray-200 dark:bg-gray-700">{darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}</Button>
        </div>

        {/* Health Section */}
        <Card className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-6 backdrop-blur-sm shadow-md mt-6">
          <CardHeader><CardTitle>Get Food Suggestions by Health Problem</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter health problem (e.g. anemia, diabetes)" value={healthProblem} onChange={(e) => setHealthProblem(e.target.value)} />

            {healthProblem && recommendedFoods.length === 0 && (
              <p className="text-sm text-red-500 mt-2">No foods found for "{healthProblem}". Try another condition.</p>
            )}

            {recommendedFoods.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mt-4">Recommended Foods:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                  {recommendedFoods.map(food => (
                    <Card key={food.id} className="bg-white/90 dark:bg-gray-800/80 shadow-md">
                      <img src={food.image} alt={food.name} className="w-full h-32 object-cover rounded-t" />
                      <CardContent className="p-3">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{food.name}</h4>
                          <Badge>{food.category}</Badge>
                        </div>
                        <p className="text-sm">Calories: {food.calories}</p>
                        <div className="text-xs mt-1 space-y-1">
                          <div>Protein: {food.protein}g</div>
                          <div>Carbs: {food.carbs}g</div>
                          <div>Fats: {food.fats}g</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {extraRecommendations.length > 0 && (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Other Recommended Foods:</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {extraRecommendations.map((item, index) => (
        <Card key={index} className="bg-black text-white shadow-md">
          <img
            src={extraImages[item] || "/images/placeholder.jpg"}
            alt={item}
            className="w-full h-32 object-cover rounded-t"
          />
          <CardContent className="p-3">
            <h4 className="font-medium text-sm">{item}</h4>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)}

              </div>
            )}
          </CardContent>
        </Card>
                    {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search foods..." className="w-full md:w-2/3" />
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="border rounded-md p-2 bg-white dark:bg-gray-800 dark:text-white">
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map(food => (
            <Card key={food.id} className="hover:scale-105 transition-transform bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md text-gray-800 dark:text-white">
              <img src={food.image} alt={food.name} className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent className="p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{food.name}</h3>
                  <Badge>{food.category}</Badge>
                </div>
                <p className="text-sm">Calories: {food.calories}</p>
                <div className="text-xs mt-2 mb-4 space-y-1">
                  <div>Protein: {food.protein}g</div>
                  <div>Carbs: {food.carbs}g</div>
                  <div>Fats: {food.fats}g</div>
                </div>
                <Button onClick={() => addToDiary(food)} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Plus className="w-4 h-4 mr-2" /> Add
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Food Form */}
        <Card className="bg-white/80 dark:bg-gray-800/80 p-4 backdrop-blur-sm text-gray-800 dark:text-white shadow-md">
          <CardTitle className="mb-4">Add Custom Food</CardTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Input placeholder="Name" value={customFood.name} onChange={e => setCustomFood({ ...customFood, name: e.target.value })} />
            <Input placeholder="Category" value={customFood.category} onChange={e => setCustomFood({ ...customFood, category: e.target.value })} />
            <Input placeholder="Calories" value={customFood.calories} onChange={e => setCustomFood({ ...customFood, calories: e.target.value })} />
            <Input placeholder="Protein (g)" value={customFood.protein} onChange={e => setCustomFood({ ...customFood, protein: e.target.value })} />
            <Input placeholder="Carbs (g)" value={customFood.carbs} onChange={e => setCustomFood({ ...customFood, carbs: e.target.value })} />
            <Input placeholder="Fats (g)" value={customFood.fats} onChange={e => setCustomFood({ ...customFood, fats: e.target.value })} />
          </div>
          <Button onClick={handleCustomAdd} className="mt-4 bg-green-600 hover:bg-green-700 text-white">Add to Diary</Button>
        </Card>

        {/* Diary Section */}
        {diary.length > 0 && (
          <Card className="bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white p-6 backdrop-blur-sm shadow-md">
            <CardHeader><CardTitle>Your Food Diary</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {diary.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm">{item.quantity}x · {item.calories * item.quantity} cal</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Protein: {(item.protein * item.quantity).toFixed(1)}g ·
                        Carbs: {(item.carbs * item.quantity).toFixed(1)}g ·
                        Fats: {(item.fats * item.quantity).toFixed(1)}g
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" onClick={() => addToDiary(item)}><Plus className="w-4 h-4" /></Button>
                    <Button size="icon" onClick={() => removeFromDiary(item.id)}><Minus className="w-4 h-4" /></Button>
                  </div>
                </div>
              ))}

              {/* Pie Chart */}
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={summaryData} dataKey="value" nameKey="name" outerRadius={80} label>
                    {summaryData.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button onClick={resetDiary} className="bg-red-500 hover:bg-red-600 text-white">Reset</Button>
                <Button onClick={downloadCSV} className="bg-blue-500 hover:bg-blue-600 text-white">Export CSV</Button>
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
};
