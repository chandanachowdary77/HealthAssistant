class MessageParser {
  actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const lower = message.toLowerCase();

    const healthKeywords: Record<string, string[]> = {
      diabetes: ["diabetes"],
      anemia: ["anemia", "iron deficiency"],
      obesity: ["obesity", "overweight"],
      stress: ["stress", "anxiety", "mental pressure"],
      hypertension: ["hypertension", "high bp", "high blood pressure"],
      constipation: ["constipation"],
      migraine: ["migraine", "headache"],
      acidity: ["acidity", "acid reflux"],
      cold: ["cold", "running nose"],
      cough: ["cough"],
      fatigue: ["fatigue", "tiredness", "exhaustion"],
      indigestion: ["indigestion"],
      back_pain: ["back pain"],
      insomnia: ["insomnia", "can't sleep", "sleepless"],
      dry_skin: ["dry skin"],
      skin_allergy: ["skin allergy", "itchy skin", "rashes"],
      eye_strain: ["eye strain", "tired eyes", "digital eye"],
      pcod: ["pcod", "pcos"],
      thyroid: ["thyroid"],
      arthritis: ["arthritis", "joint pain"],
      gas: ["gas", "bloating"],
      acidity_reflux: ["reflux", "acidity reflux"],
      dehydration: ["dehydration", "less water"],
      mouth_ulcers: ["mouth ulcers", "ulcers"],
      motion_sickness: ["motion sickness", "nausea"],
      jaundice: ["jaundice"],
      dengue: ["dengue"],
      covid: ["covid", "corona", "covid-19"],
      tuberculosis: ["tuberculosis", "tb"],
      pneumonia: ["pneumonia"],
      fever: ["fever", "high temperature", "body temperature"],

    };

    for (const condition in healthKeywords) {
      const keywords = healthKeywords[condition];
      for (const keyword of keywords) {
        if (lower.includes(keyword)) {
          this.actionProvider.respond(condition);
          return;
        }
      }
    }

    this.actionProvider.defaultReply();
  }
}

export default MessageParser;
