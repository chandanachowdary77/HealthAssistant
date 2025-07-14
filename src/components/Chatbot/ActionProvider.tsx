import { createChatBotMessage } from 'react-chatbot-kit';

const healthRecommendations: Record<string, string> = {
  diabetes: `🥗 Food: Oats, leafy greens, nuts\n🏃 Exercise: Brisk walking\n🧘 Yoga: Pranayama, Surya Namaskar\n💧 Water: 3 liters/day\n😴 Sleep: 7–8 hours`,
  anemia: `🥗 Food: Spinach, beets, red meat\n🏃 Exercise: Light walking\n🧘 Yoga: Cobra pose, Legs-up-the-wall\n💧 Water: 2.5 liters/day\n😴 Sleep: 8–9 hours`,
  obesity: `🥗 Food: High protein, avoid sugar\n🏃 Exercise: HIIT, walking\n🧘 Yoga: Warrior pose, Plank\n💧 Water: 3–4 liters/day\n😴 Sleep: 7 hours`,
  stress: `🥗 Food: Dark chocolate, nuts, herbal tea\n🏃 Exercise: Jogging\n🧘 Yoga: Meditation, Child’s pose\n💧 Water: 2.5–3 liters/day\n😴 Sleep: 8 hours`,
  hypertension: `🥗 Food: Low-sodium, fruits, fish\n🏃 Exercise: Walking, cycling\n🧘 Yoga: Anulom Vilom, Meditation\n💧 Water: 3 liters/day\n😴 Sleep: 7–8 hours`,
  constipation: `🥗 Food: Fiber-rich food, fruits\n🏃 Exercise: Light jogging\n🧘 Yoga: Pawanmuktasana\n💧 Water: 3–4 liters/day\n😴 Sleep: 7–8 hours`,
  migraine: `🥗 Food: Magnesium-rich food\n🏃 Exercise: Walking\n🧘 Yoga: Forward bends\n💧 Water: 3 liters/day\n😴 Sleep: 8 hours`,
  acidity: `🥗 Food: Banana, oats, yogurt\n🏃 Exercise: Walking\n🧘 Yoga: Vajrasana\n💧 Water: 3 liters/day\n😴 Sleep: 7–8 hours`,
  cold: `🥗 Food: Warm soups, turmeric milk\n🏃 Exercise: Rest\n🧘 Yoga: Deep breathing\n💧 Water: Warm water often\n😴 Sleep: 8+ hours`,
  cough: `🥗 Food: Honey, ginger, tulsi\n🏃 Exercise: Light indoor movement\n🧘 Yoga: Pranayama\n💧 Water: Warm sips\n😴 Sleep: 8 hours`,
  fatigue: `🥗 Food: Nuts, fruits, protein\n🏃 Exercise: Light stretching\n🧘 Yoga: Savasana\n💧 Water: 2.5 liters/day\n😴 Sleep: 8 hours`,
  indigestion: `🥗 Food: Probiotics, ginger\n🏃 Exercise: Post-meal walk\n🧘 Yoga: Vajrasana\n💧 Water: 3 liters/day\n😴 Sleep: 7–8 hours`,
  back_pain: `🥗 Food: Anti-inflammatory foods\n🏃 Exercise: Stretching\n🧘 Yoga: Cobra, Cat-cow\n💧 Water: 2.5 liters/day\n😴 Sleep: Firm mattress`,
  insomnia: `🥗 Food: Warm milk, almonds\n🏃 Exercise: Walking\n🧘 Yoga: Yoga Nidra\n💧 Water: 2 liters/day\n😴 Sleep: 8–9 hours`,
  dry_skin: `🥗 Food: Omega-3s, avocado\n🏃 Exercise: Light cardio\n🧘 Yoga: Gentle stretches\n💧 Water: 3–4 liters/day\n😴 Sleep: 7–8 hours`,
  skin_allergy: `🥗 Food: Anti-inflammatory, vitamin C\n🏃 Exercise: Avoid sweat triggers\n🧘 Yoga: Calm breathing\n💧 Water: 3 liters/day\n😴 Sleep: 7 hours`,
  eye_strain: `🥗 Food: Carrots, leafy greens\n🏃 Exercise: Eye breaks\n🧘 Yoga: Palming, Tratak\n💧 Water: 3 liters/day\n😴 Sleep: 8 hours`,
  pcod: `🥗 Food: Whole grains, low sugar\n🏃 Exercise: Brisk walking\n🧘 Yoga: Butterfly pose\n💧 Water: 3 liters/day\n😴 Sleep: 8 hours`,
  thyroid: `🥗 Food: Iodine-rich foods\n🏃 Exercise: Moderate cardio\n🧘 Yoga: Shoulder stand (under guidance)\n💧 Water: 3 liters/day\n😴 Sleep: 8 hours`,
  arthritis: `🥗 Food: Anti-inflammatory foods\n🏃 Exercise: Joint movement\n🧘 Yoga: Chair yoga\n💧 Water: 2.5–3 liters/day\n😴 Sleep: 8 hours`,
  gas: `🥗 Food: Fennel, ginger tea\n🏃 Exercise: Walking\n🧘 Yoga: Wind-relieving pose\n💧 Water: 3 liters/day\n😴 Sleep: 7–8 hours`,
  acidity_reflux: `🥗 Food: Bananas, aloe vera juice\n🏃 Exercise: Post-meal walk\n🧘 Yoga: Vajrasana\n💧 Water: 3 liters/day\n😴 Sleep: 7 hours`,
  dehydration: `🥗 Food: Fruits, cucumbers\n🏃 Exercise: Avoid mid-day heat\n🧘 Yoga: Gentle stretches\n💧 Water: 4+ liters/day\n😴 Sleep: 7–8 hours`,
  mouth_ulcers: `🥗 Food: Coconut water, curd\n🏃 Exercise: Light activity\n🧘 Yoga: Relaxing poses\n💧 Water: 3+ liters/day\n😴 Sleep: 8 hours`,
  motion_sickness: `🥗 Food: Ginger, light meals\n🏃 Exercise: N/A\n🧘 Yoga: Deep breathing\n💧 Water: Sip small amounts\n😴 Sleep: 8 hours`,
  fever: `🥗 Food: Warm fluids, fruits, soups\n🏃 Exercise: Rest only\n🧘 Yoga: Deep breathing, no exertion\n💧 Water: 3–4 liters/day\n😴 Sleep: 9+ hours, full rest`,


  // ⚠️ 5 uncommon / serious conditions (not normal)
  jaundice: `⚠️ Serious condition: Consult a doctor immediately.\n🥗 Food: Sugarcane juice, fruits\n🧘 Yoga: Light breathing only\n💧 Water: 3+ liters\n😴 Sleep: As much as possible`,
  dengue: `⚠️ Critical condition: Hospital care recommended.\n🥗 Food: Papaya leaf juice, fluids\n💧 Water: 4+ liters/day\n😴 Sleep: Complete rest`,
  covid: `⚠️ Infectious disease: Isolate & follow medical advice.\n🥗 Food: Protein, citrus fruits\n🏃 Exercise: Avoid until recovered\n💧 Water: Stay hydrated\n😴 Sleep: Full rest`,
  tuberculosis: `⚠️ Infectious: Must be treated by a doctor.\n🥗 Food: High protein diet\n💧 Water: 3+ liters/day\n😴 Sleep: Long & uninterrupted`,
  pneumonia: `⚠️ Respiratory infection: Medical attention needed.\n🥗 Food: Broth, soft food\n💧 Water: Warm fluids\n😴 Sleep: Rest, warm bedding`,
};

class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  respond = (condition: string) => {
    const key = condition.toLowerCase().replace(/\s+/g, '_');
    const messageText = healthRecommendations[key];
    const message = this.createChatBotMessage(
      messageText
        ? `Here’s what I suggest for *${condition}*:\n\n${messageText}`
        : `I'm still learning! Please mention common conditions like diabetes, anemia, stress, or obesity.`
    );
    this.setState((prev: any) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  defaultReply = () => {
    const message = this.createChatBotMessage("I'm still learning! Please mention a known health condition.");
    this.setState((prev: any) => ({ ...prev, messages: [...prev.messages, message] }));
  };
}

export default ActionProvider;
