export interface TarotCard {
  id: number;
  name: string;
  suit?: string;
  arcana: 'major' | 'minor';
  imageUrl: string;
  description: string;
}

export const TAROT_DECK: TarotCard[] = [
  // Major Arcana (22 cards)
  { id: 0, name: 'The Fool', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-fool.png', description: 'New beginnings, innocence, spontaneity' },
  { id: 1, name: 'The Magician', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-magician.png', description: 'Manifestation, resourcefulness, power' },
  { id: 2, name: 'The High Priestess', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-high-priestess.png', description: 'Intuition, sacred knowledge, divine feminine' },
  { id: 3, name: 'The Empress', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-empress.png', description: 'Femininity, beauty, nature, abundance' },
  { id: 4, name: 'The Emperor', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-emperor.png', description: 'Authority, structure, control, fatherhood' },
  { id: 5, name: 'The Hierophant', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-hierophant.png', description: 'Spiritual wisdom, religious beliefs, conformity' },
  { id: 6, name: 'The Lovers', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-lovers.png', description: 'Love, harmony, relationships, choices' },
  { id: 7, name: 'The Chariot', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-chariot.png', description: 'Control, willpower, determination, success' },
  { id: 8, name: 'Strength', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/strength.png', description: 'Inner strength, courage, persuasion, influence' },
  { id: 9, name: 'The Hermit', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-hermit.png', description: 'Soul-searching, introspection, solitude' },
  { id: 10, name: 'Wheel of Fortune', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/wheel-of-fortune.png', description: 'Good luck, karma, life cycles, destiny' },
  { id: 11, name: 'Justice', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/justice.png', description: 'Justice, fairness, truth, cause and effect' },
  { id: 12, name: 'The Hanged Man', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-hanged-man.png', description: 'Surrender, letting go, new perspectives' },
  { id: 13, name: 'Death', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/death.png', description: 'Endings, change, transformation, transition' },
  { id: 14, name: 'Temperance', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/temperance.png', description: 'Balance, moderation, patience, purpose' },
  { id: 15, name: 'The Devil', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-devil.png', description: 'Shadow self, attachment, addiction, materialism' },
  { id: 16, name: 'The Tower', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-tower.png', description: 'Sudden change, upheaval, chaos, revelation' },
  { id: 17, name: 'The Star', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-star.png', description: 'Hope, faith, purpose, renewal, spirituality' },
  { id: 18, name: 'The Moon', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-moon.png', description: 'Illusion, fear, anxiety, subconscious, intuition' },
  { id: 19, name: 'The Sun', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-sun.png', description: 'Positivity, fun, warmth, success, vitality' },
  { id: 20, name: 'Judgement', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/judgement.png', description: 'Judgement, rebirth, inner calling, absolution' },
  { id: 21, name: 'The World', arcana: 'major', imageUrl: '/src/assets/tarot-cards/major-arcana/the-world.png', description: 'Completion, integration, accomplishment, travel' },

  // Minor Arcana - Wands (22-35)
  { id: 22, name: 'Ace of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/ace-of-wands.png', description: 'Creation, willpower, inspiration, desire' },
  { id: 23, name: 'Two of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/two-of-wands.png', description: 'Planning, making decisions, leaving comfort zone' },
  { id: 24, name: 'Three of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/three-of-wands.png', description: 'Looking ahead, expansion, rapid growth' },
  { id: 25, name: 'Four of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/four-of-wands.png', description: 'Celebration, joy, harmony, relaxation, homecoming' },
  { id: 26, name: 'Five of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/five-of-wands.png', description: 'Conflict, disagreements, competition, tension' },
  { id: 27, name: 'Six of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/six-of-wands.png', description: 'Success, public recognition, progress, self-confidence' },
  { id: 28, name: 'Seven of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/seven-of-wands.png', description: 'Perseverance, defensive position, maintaining control' },
  { id: 29, name: 'Eight of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/eight-of-wands.png', description: 'Rapid action, movement, quick decisions, air travel' },
  { id: 30, name: 'Nine of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/nine-of-wands.png', description: 'Resilience, courage, persistence, test of faith' },
  { id: 31, name: 'Ten of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/ten-of-wands.png', description: 'Burden, extra responsibility, hard work, completion' },
  { id: 32, name: 'Page of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/page-of-wands.png', description: 'Exploration, excitement, freedom, adventure' },
  { id: 33, name: 'Knight of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/knight-of-wands.png', description: 'Energy, passion, lust, action, adventure, impulsiveness' },
  { id: 34, name: 'Queen of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/queen-of-wands.png', description: 'Courageous, determined, independent, vivacious, sassy' },
  { id: 35, name: 'King of Wands', suit: 'Wands', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-wands/king-of-wands.png', description: 'Natural-born leader, vision, entrepreneur, honour' },

  // Minor Arcana - Cups (36-49)
  { id: 36, name: 'Ace of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/ace-of-cups.png', description: 'New feelings, spirituality, intuition, love' },
  { id: 37, name: 'Two of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/two-of-cups.png', description: 'Unity, partnership, connection, attraction' },
  { id: 38, name: 'Three of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/three-of-cups.png', description: 'Friendship, creativity, collaborations, joy' },
  { id: 39, name: 'Four of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/four-of-cups.png', description: 'Meditation, contemplation, apathy, reevaluation' },
  { id: 40, name: 'Five of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/five-of-cups.png', description: 'Loss, grief, self-pity, disappointment' },
  { id: 41, name: 'Six of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/six-of-cups.png', description: 'Revisiting the past, childhood memories, innocence' },
  { id: 42, name: 'Seven of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/seven-of-cups.png', description: 'Opportunities, choices, wishful thinking, illusion' },
  { id: 43, name: 'Eight of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/eight-of-cups.png', description: 'Disappointment, abandonment, withdrawal, escapism' },
  { id: 44, name: 'Nine of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/nine-of-cups.png', description: 'Contentment, satisfaction, gratitude, wish come true' },
  { id: 45, name: 'Ten of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/ten-of-cups.png', description: 'Divine love, blissful relationships, harmony, alignment' },
  { id: 46, name: 'Page of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/page-of-cups.png', description: 'Creative opportunities, intuitive messages, curiosity' },
  { id: 47, name: 'Knight of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/knight-of-cups.png', description: 'Creativity, romance, charm, imagination, beauty' },
  { id: 48, name: 'Queen of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/queen-of-cups.png', description: 'Compassionate, caring, emotionally stable, intuitive, calm' },
  { id: 49, name: 'King of Cups', suit: 'Cups', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-cups/king-of-cups.png', description: 'Emotional balance and control, generosity, diplomatic' },

  // Minor Arcana - Swords (50-63)
  { id: 50, name: 'Ace of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/ace-of-swords.png', description: 'Breakthrough, clarity, sharp mind, new ideas' },
  { id: 51, name: 'Two of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/two-of-swords.png', description: 'Difficult decisions, weighing up options, an impasse' },
  { id: 52, name: 'Three of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/three-of-swords.png', description: 'Heartbreak, emotional pain, sorrow, grief' },
  { id: 53, name: 'Four of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/four-of-swords.png', description: 'Rest, relaxation, meditation, contemplation' },
  { id: 54, name: 'Five of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/five-of-swords.png', description: 'Conflict, disagreements, competition, defeat' },
  { id: 55, name: 'Six of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/six-of-swords.png', description: 'Transition, change, rite of passage, releasing baggage' },
  { id: 56, name: 'Seven of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/seven-of-swords.png', description: 'Betrayal, deception, getting away with something' },
  { id: 57, name: 'Eight of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/eight-of-swords.png', description: 'Negative thoughts, self-imposed restriction, imprisonment' },
  { id: 58, name: 'Nine of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/nine-of-swords.png', description: 'Anxiety, worry, fear, depression, nightmares' },
  { id: 59, name: 'Ten of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/ten-of-swords.png', description: 'Painful endings, deep wounds, betrayal, loss' },
  { id: 60, name: 'Page of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/page-of-swords.png', description: 'New ideas, curiosity, thirst for knowledge, new ways of communicating' },
  { id: 61, name: 'Knight of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/knight-of-swords.png', description: 'Ambitious, action-oriented, driven to succeed, fast-thinking' },
  { id: 62, name: 'Queen of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/queen-of-swords.png', description: 'Independent, unbiased judgement, clear boundaries, direct communication' },
  { id: 63, name: 'King of Swords', suit: 'Swords', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-swords/king-of-swords.png', description: 'Mental clarity, intellectual power, authority, truth' },

  // Minor Arcana - Coins (64-77)
  { id: 64, name: 'Ace of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/ace-of-coins.png', description: 'New financial opportunity, abundance, prosperity' },
  { id: 65, name: 'Two of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/two-of-coins.png', description: 'Multiple priorities, time management, prioritization' },
  { id: 66, name: 'Three of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/three-of-coins.png', description: 'Teamwork, collaboration, building, learning' },
  { id: 67, name: 'Four of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/four-of-coins.png', description: 'Conservation, security, frugality, protection' },
  { id: 68, name: 'Five of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/five-of-coins.png', description: 'Financial loss, poverty, lack mindset, isolation' },
  { id: 69, name: 'Six of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/six-of-coins.png', description: 'Giving, receiving, sharing wealth, generosity' },
  { id: 70, name: 'Seven of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/seven-of-coins.png', description: 'Long-term view, sustainable results, perseverance' },
  { id: 71, name: 'Eight of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/eight-of-coins.png', description: 'Apprenticeship, repetitive tasks, skill development' },
  { id: 72, name: 'Nine of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/nine-of-coins.png', description: 'Abundance, luxury, self-sufficiency, financial independence' },
  { id: 73, name: 'Ten of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/ten-of-coins.png', description: 'Wealth, financial security, family, long-term success' },
  { id: 74, name: 'Page of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/page-of-coins.png', description: 'Manifestation, financial opportunity, new job' },
  { id: 75, name: 'Knight of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/knight-of-coins.png', description: 'Hard work, productivity, routine, conservatism' },
  { id: 76, name: 'Queen of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/queen-of-coins.png', description: 'Nurturing, practical, providing financially, a working parent' },
  { id: 77, name: 'King of Coins', suit: 'Coins', arcana: 'minor', imageUrl: '/src/assets/tarot-cards/the-coins/king-of-coins.png', description: 'Wealth, business, leadership, security, discipline' },
];

export const getRandomCards = (count: number): TarotCard[] => {
  const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}; 