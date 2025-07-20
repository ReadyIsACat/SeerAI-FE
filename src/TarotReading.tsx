import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { TAROT_DECK } from './data/tarotDeck';
import type { TarotCard } from './data/tarotDeck';
import { GradientButton } from './components/GradientButton';
import cardBack from './assets/tarot-cards/card-back.png';

// Import Major Arcana card images
import theFool from './assets/tarot-cards/major-arcana/the-fool.png';
import theMagician from './assets/tarot-cards/major-arcana/the-magician.png';
import theHighPriestess from './assets/tarot-cards/major-arcana/the-high-priestess.png';
import theEmpress from './assets/tarot-cards/major-arcana/the-empress.png';
import theEmperor from './assets/tarot-cards/major-arcana/the-emperor.png';
import theHierophant from './assets/tarot-cards/major-arcana/the-hierophant.png';
import theLovers from './assets/tarot-cards/major-arcana/the-lovers.png';
import theChariot from './assets/tarot-cards/major-arcana/the-chariot.png';
import strength from './assets/tarot-cards/major-arcana/strength.png';
import theHermit from './assets/tarot-cards/major-arcana/the-hermit.png';
import wheelOfFortune from './assets/tarot-cards/major-arcana/wheel-of-fortune.png';
import justice from './assets/tarot-cards/major-arcana/justice.png';
import theHangedMan from './assets/tarot-cards/major-arcana/the-hanged-man.png';
import death from './assets/tarot-cards/major-arcana/death.png';
import temperance from './assets/tarot-cards/major-arcana/temperance.png';
import theDevil from './assets/tarot-cards/major-arcana/the-devil.png';
import theTower from './assets/tarot-cards/major-arcana/the-tower.png';
import theStar from './assets/tarot-cards/major-arcana/the-star.png';
import theMoon from './assets/tarot-cards/major-arcana/the-moon.png';
import theSun from './assets/tarot-cards/major-arcana/the-sun.png';
import judgement from './assets/tarot-cards/major-arcana/judgement.png';
import theWorld from './assets/tarot-cards/major-arcana/the-world.png';

// Import Minor Arcana - Wands card images
import aceOfWands from './assets/tarot-cards/the-wands/ace-of-wands.png';
import twoOfWands from './assets/tarot-cards/the-wands/two-of-wands.png';
import threeOfWands from './assets/tarot-cards/the-wands/three-of-wands.png';
import fourOfWands from './assets/tarot-cards/the-wands/four-of-wands.png';
import fiveOfWands from './assets/tarot-cards/the-wands/five-of-wands.png';
import sixOfWands from './assets/tarot-cards/the-wands/six-of-wands.png';
import sevenOfWands from './assets/tarot-cards/the-wands/seven-of-wands.png';
import eightOfWands from './assets/tarot-cards/the-wands/eight-of-wands.png';
import nineOfWands from './assets/tarot-cards/the-wands/nine-of-wands.png';
import tenOfWands from './assets/tarot-cards/the-wands/ten-of-wands.png';
import pageOfWands from './assets/tarot-cards/the-wands/page-of-wands.png';
import knightOfWands from './assets/tarot-cards/the-wands/knight-of-wands.png';
import queenOfWands from './assets/tarot-cards/the-wands/queen-of-wands.png';
import kingOfWands from './assets/tarot-cards/the-wands/king-of-wands.png';

// Import Minor Arcana - Cups card images
import aceOfCups from './assets/tarot-cards/the-cups/ace-of-cups.png';
import twoOfCups from './assets/tarot-cards/the-cups/two-of-cups.png';
import threeOfCups from './assets/tarot-cards/the-cups/three-of-cups.png';
import fourOfCups from './assets/tarot-cards/the-cups/four-of-cups.png';
import fiveOfCups from './assets/tarot-cards/the-cups/five-of-cups.png';
import sixOfCups from './assets/tarot-cards/the-cups/six-of-cups.png';
import sevenOfCups from './assets/tarot-cards/the-cups/seven-of-cups.png';
import eightOfCups from './assets/tarot-cards/the-cups/eight-of-cups.png';
import nineOfCups from './assets/tarot-cards/the-cups/nine-of-cups.png';
import tenOfCups from './assets/tarot-cards/the-cups/ten-of-cups.png';
import pageOfCups from './assets/tarot-cards/the-cups/page-of-cups.png';
import knightOfCups from './assets/tarot-cards/the-cups/knight-of-cups.png';
import queenOfCups from './assets/tarot-cards/the-cups/queen-of-cups.png';
import kingOfCups from './assets/tarot-cards/the-cups/king-of-cups.png';

// Import Minor Arcana - Swords card images
import aceOfSwords from './assets/tarot-cards/the-swords/ace-of-swords.png';
import twoOfSwords from './assets/tarot-cards/the-swords/two-of-swords.png';
import threeOfSwords from './assets/tarot-cards/the-swords/three-of-swords.png';
import fourOfSwords from './assets/tarot-cards/the-swords/four-of-swords.png';
import fiveOfSwords from './assets/tarot-cards/the-swords/five-of-swords.png';
import sixOfSwords from './assets/tarot-cards/the-swords/six-of-swords.png';
import sevenOfSwords from './assets/tarot-cards/the-swords/seven-of-swords.png';
import eightOfSwords from './assets/tarot-cards/the-swords/eight-of-swords.png';
import nineOfSwords from './assets/tarot-cards/the-swords/nine-of-swords.png';
import tenOfSwords from './assets/tarot-cards/the-swords/ten-of-swords.png';
import pageOfSwords from './assets/tarot-cards/the-swords/page-of-swords.png';
import knightOfSwords from './assets/tarot-cards/the-swords/knight-of-swords.png';
import queenOfSwords from './assets/tarot-cards/the-swords/queen-of-swords.png';
import kingOfSwords from './assets/tarot-cards/the-swords/king-of-swords.png';

// Import Minor Arcana - Coins card images
import aceOfCoins from './assets/tarot-cards/the-coins/ace-of-coins.png';
import twoOfCoins from './assets/tarot-cards/the-coins/two-of-coins.png';
import threeOfCoins from './assets/tarot-cards/the-coins/three-of-coins.png';
import fourOfCoins from './assets/tarot-cards/the-coins/four-of-coins.png';
import fiveOfCoins from './assets/tarot-cards/the-coins/five-of-coins.png';
import sixOfCoins from './assets/tarot-cards/the-coins/six-of-coins.png';
import sevenOfCoins from './assets/tarot-cards/the-coins/seven-of-coins.png';
import eightOfCoins from './assets/tarot-cards/the-coins/eight-of-coins.png';
import nineOfCoins from './assets/tarot-cards/the-coins/nine-of-coins.png';
import tenOfCoins from './assets/tarot-cards/the-coins/ten-of-coins.png';
import pageOfCoins from './assets/tarot-cards/the-coins/page-of-coins.png';
import knightOfCoins from './assets/tarot-cards/the-coins/knight-of-coins.png';
import queenOfCoins from './assets/tarot-cards/the-coins/queen-of-coins.png';
import kingOfCoins from './assets/tarot-cards/the-coins/king-of-coins.png';

// Card image mapping
const CARD_IMAGES: Record<string, string> = {
  // Major Arcana
  'The Fool': theFool,
  'The Magician': theMagician,
  'The High Priestess': theHighPriestess,
  'The Empress': theEmpress,
  'The Emperor': theEmperor,
  'The Hierophant': theHierophant,
  'The Lovers': theLovers,
  'The Chariot': theChariot,
  'Strength': strength,
  'The Hermit': theHermit,
  'Wheel of Fortune': wheelOfFortune,
  'Justice': justice,
  'The Hanged Man': theHangedMan,
  'Death': death,
  'Temperance': temperance,
  'The Devil': theDevil,
  'The Tower': theTower,
  'The Star': theStar,
  'The Moon': theMoon,
  'The Sun': theSun,
  'Judgement': judgement,
  'The World': theWorld,
  // Minor Arcana - Wands
  'Ace of Wands': aceOfWands,
  'Two of Wands': twoOfWands,
  'Three of Wands': threeOfWands,
  'Four of Wands': fourOfWands,
  'Five of Wands': fiveOfWands,
  'Six of Wands': sixOfWands,
  'Seven of Wands': sevenOfWands,
  'Eight of Wands': eightOfWands,
  'Nine of Wands': nineOfWands,
  'Ten of Wands': tenOfWands,
  'Page of Wands': pageOfWands,
  'Knight of Wands': knightOfWands,
  'Queen of Wands': queenOfWands,
  'King of Wands': kingOfWands,
  // Minor Arcana - Cups
  'Ace of Cups': aceOfCups,
  'Two of Cups': twoOfCups,
  'Three of Cups': threeOfCups,
  'Four of Cups': fourOfCups,
  'Five of Cups': fiveOfCups,
  'Six of Cups': sixOfCups,
  'Seven of Cups': sevenOfCups,
  'Eight of Cups': eightOfCups,
  'Nine of Cups': nineOfCups,
  'Ten of Cups': tenOfCups,
  'Page of Cups': pageOfCups,
  'Knight of Cups': knightOfCups,
  'Queen of Cups': queenOfCups,
  'King of Cups': kingOfCups,
  // Minor Arcana - Swords
  'Ace of Swords': aceOfSwords,
  'Two of Swords': twoOfSwords,
  'Three of Swords': threeOfSwords,
  'Four of Swords': fourOfSwords,
  'Five of Swords': fiveOfSwords,
  'Six of Swords': sixOfSwords,
  'Seven of Swords': sevenOfSwords,
  'Eight of Swords': eightOfSwords,
  'Nine of Swords': nineOfSwords,
  'Ten of Swords': tenOfSwords,
  'Page of Swords': pageOfSwords,
  'Knight of Swords': knightOfSwords,
  'Queen of Swords': queenOfSwords,
  'King of Swords': kingOfSwords,
  // Minor Arcana - Coins
  'Ace of Coins': aceOfCoins,
  'Two of Coins': twoOfCoins,
  'Three of Coins': threeOfCoins,
  'Four of Coins': fourOfCoins,
  'Five of Coins': fiveOfCoins,
  'Six of Coins': sixOfCoins,
  'Seven of Coins': sevenOfCoins,
  'Eight of Coins': eightOfCoins,
  'Nine of Coins': nineOfCoins,
  'Ten of Coins': tenOfCoins,
  'Page of Coins': pageOfCoins,
  'Knight of Coins': knightOfCoins,
  'Queen of Coins': queenOfCoins,
  'King of Coins': kingOfCoins,
};

// API Configuration
const API_BASE_URL = 'http://localhost:3000';
// Alternative: Use CORS proxy for testing
// const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:3000';
const API_ENDPOINTS = {
  health: '/api/tarot/health',
  reading: '/api/tarot/reading'
} as const;

// API Interfaces
interface APITarotCard {
  id: number;
  name: string;
  suit?: string;
  arcana: 'major' | 'minor';
  description: string;
}

interface TarotReadingRequest {
  question: string;
  selectedCards: APITarotCard[];
}

interface TarotReadingResponse {
  reading: string;
  interpretation: string;
  advice: string;
  cards: TarotCardReading[];
}

interface TarotCardReading {
  name: string;
  position: 'past' | 'present' | 'future';
  meaning: string;
}

// API Functions
const checkAPIHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.health}`);
    if (response.ok) {
      const healthData = await response.json();
      console.log('Backend health check response:', healthData);
    }
    return response.ok;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
};

const getTarotReading = async (request: TarotReadingRequest): Promise<TarotReadingResponse> => {
  try {
    // Debug: Log the request being sent
    console.log('Sending request to backend:', JSON.stringify(request, null, 2));
    
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.reading}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('CORS Error: Backend server is not allowing requests from this origin. Please check your backend CORS configuration.');
    }
    throw error;
  }
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const TarotReading: FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [deck, setDeck] = useState(() => shuffleArray(TAROT_DECK));
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [readingResult, setReadingResult] = useState<TarotReadingResponse | null>(null);
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [error, setError] = useState<string | null>(null); 
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const deckRef = useRef<HTMLDivElement>(null);

  // Detect if carousel is scrollable
  useEffect(() => {
    const checkScroll = () => {
      const el = deckRef.current;
      if (!el) return;
      setShowLeftArrow(el.scrollLeft > 0);
      setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    checkScroll();
    const el = deckRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [deck]);

  // Hide scroll hint after user scrolls or after 4s
  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    const hideHint = () => setShowScrollHint(false);
    el.addEventListener('scroll', hideHint);
    const timer = setTimeout(hideHint, 4000);
    return () => {
      el.removeEventListener('scroll', hideHint);
      clearTimeout(timer);
    };
  }, []);

  const scrollDeck = (dir: 'left' | 'right') => {
    const el = deckRef.current;
    if (!el) return;
    const scrollAmount = 200;
    el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  // Check API health on component mount
  useEffect(() => {
    const checkHealth = async () => {
      const isHealthy = await checkAPIHealth();
      setApiStatus(isHealthy ? 'online' : 'offline');
    };
    checkHealth();
  }, []);

  const handleReset = () => {
    setSelected([]);
    setShowResult(false);
    setDeck(shuffleArray(TAROT_DECK));
    setQuestion('');
    setReadingResult(null);
    setError(null);
  };

  const handleSelect = (id: number) => {
    if (showResult) return;
    if (selected.length < 3 && !selected.includes(id)) {
      setSelected((prev) => [...prev, id]);
    }
  };

  const handleReveal = async () => {
    if (selected.length === 3 && question.trim()) {
      setIsLoading(true);
      setError(null);
      try {
        // Clean the card data to match backend expectations
        const cleanedCards: APITarotCard[] = selectedCards.map(card => ({
          id: card.id,
          name: card.name,
          suit: card.suit,
          arcana: card.arcana,
          description: card.description
        }));
        
        const request: TarotReadingRequest = {
          question: question.trim(),
          selectedCards: cleanedCards
        };
        
        const result = await getTarotReading(request);
        setReadingResult(result);
        setShowResult(true);
      } catch (error) {
        console.error('Error getting reading:', error);
        setError(error instanceof Error ? error.message : 'Failed to get reading');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const selectedCards = selected
    .map((id) => TAROT_DECK.find((c) => c.id === id))
    .filter(Boolean) as TarotCard[];
    
  return (
    <div
      style={{
        padding: 32,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <h1 style={{ color: '#fff', marginBottom: 8 }}>🔮 Tarot Reading</h1>
      
      {/* API Status Indicator */}
      <div style={{ marginBottom: 16 }}>
        <span style={{ 
          color: apiStatus === 'online' ? '#2ecc71' : apiStatus === 'offline' ? '#e74c3c' : '#f39c12',
          fontSize: 14,
          fontWeight: 'bold'
        }}>
          {apiStatus === 'checking' ? '🔄 Checking API...' : 
           apiStatus === 'online' ? '✅ API Connected' : '❌ API Offline'}
        </span>
      </div>
      
      <p style={{ color: '#fff', marginBottom: 16 }}>
        Share your question or concern, then select 3 cards for your reading:
      </p>
      
      <div style={{ marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
        <style>{`
          /* Custom placeholder color for the question textarea */
          textarea.tarot-question::placeholder {
            color: #b3b8e0;
            opacity: 1;
          }
        `}</style>
        <textarea
          className="tarot-question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What would you like to know? Share your question, concern, or what's on your mind..."
          style={{
            width: '100%',
            minHeight: 100,
            padding: 16,
            borderRadius: 12,
            border: '2px solid rgba(255, 245, 245, 0.3)',
            background: 'rgba(255,255,255,0.1)',
            color: '#fff',
            fontSize: 16,
            fontFamily: 'inherit',
            resize: 'vertical',
            backdropFilter: 'blur(10px)',
          }}
        />
        <div style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
          {question.length}/500 characters
        </div>
      </div>

      <div style={{ position: 'relative', marginBottom: 24 }}>
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            aria-label="Scroll left"
            onClick={() => scrollDeck('left')}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              background: 'rgba(0,0,0,0.3)',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {/* Unicode left arrow */}
            
          </button>
        )}
        {/* Right Arrow */}
        {showRightArrow && (
          <button
            aria-label="Scroll right"
            onClick={() => scrollDeck('right')}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              background: 'rgba(0,0,0,0.3)',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 22,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {/* Unicode right arrow */}
            
          </button>
        )}
        {/* Scroll Hint */}
        {showScrollHint && showRightArrow && (
          <div style={{
            position: 'absolute',
            right: 48,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.15)',
            color: '#fff',
            padding: '6px 16px',
            borderRadius: 16,
            fontSize: 14,
            zIndex: 10,
            pointerEvents: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            animation: 'fadeInOut 4s linear',
          }}>
            ← Scroll to see more cards →
          </div>
        )}
        <div
          ref={deckRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            padding: '20px',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgb(255, 255, 255) #eee',
          }}
        >
        {deck.map((card, index) => {
          const isSelected = selected.includes(card.id);
          const revealed = isSelected || showResult;
          return (
            <div
              key={card.id}
              onClick={() => handleSelect(card.id)}
              style={{
                position: 'relative',
                flexShrink: 0,
                width: 120,
                height: 180,
                marginLeft: index === 0 ? 0 : -60,
                borderRadius: 8,
                overflow: 'hidden',
                border: isSelected
                  ? '3px solid #ffee9c'
                  : '2px solid rgba(255,255,255,0.3)',
                boxShadow: isSelected
                  ? '0 0 20px #ffee9c'
                  : '0 4px 12px rgba(0,0,0,0.3)',
                cursor: revealed ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                background: revealed ? '#fff' : 'transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-10px) scale(1.05)';
                (e.currentTarget as HTMLDivElement).style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLDivElement).style.zIndex = '0';
              }}
            >
              {revealed ? (
                CARD_IMAGES[card.name] ? (
                  <img
                    src={CARD_IMAGES[card.name]}
                    alt={card.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 6,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      padding: 4,
                      textAlign: 'center',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}
                  >
                    {card.name}
                  </div>
                )
              ) : (
                <img
                  src={cardBack}
                  alt="Card Back"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          );
        })}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div style={{ 
          margin: '16px auto', 
          maxWidth: 600, 
          padding: 16, 
          background: 'rgba(231, 76, 60, 0.1)', 
          border: '2px solid #e74c3c', 
          borderRadius: 8,
          color: '#e74c3c'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ margin: '24px 0' }}>
        <GradientButton
          onClick={handleReveal}
          disabled={selected.length !== 3 || showResult || !question.trim() || isLoading || apiStatus !== 'online'}
          variant="primary"
          style={{ marginRight: 12 }}
        >
          {isLoading ? '🔮 Reading Cards...' : '🔮 Reveal Reading'}
        </GradientButton>
        <GradientButton
          onClick={handleReset}
          variant="secondary"
        >
          🔄 Reset
        </GradientButton>
      </div>

      {showResult && readingResult && (
        <div
          style={{
            marginTop: 32,
            padding: 32,
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 16,
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h2 style={{ color: '#2c3e50', marginBottom: 16 }}>✨ Your Reading</h2>
          
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#34495e', marginBottom: 8 }}>Question:</h3>
            <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>"{question}"</p>
          </div>
          
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#34495e', marginBottom: 8 }}>Reading:</h3>
            <p style={{ color: '#34495e', lineHeight: 1.6 }}>{readingResult.reading}</p>
          </div>
          
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#34495e', marginBottom: 8 }}>Interpretation:</h3>
            <p style={{ color: '#34495e', lineHeight: 1.6 }}>{readingResult.interpretation}</p>
          </div>
          
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: '#34495e', marginBottom: 8 }}>Advice:</h3>
            <p style={{ color: '#34495e', lineHeight: 1.6, fontWeight: 'bold' }}>{readingResult.advice}</p>
          </div>
          
          <div style={{ marginTop: 32 }}>
            <h3 style={{ color: '#34495e', marginBottom: 16, textAlign: 'center' }}>Your Cards</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
              {readingResult.cards.map((cardInfo, index) => (
                <div key={index} style={{ textAlign: 'center', maxWidth: 200 }}>
                  <div
                    style={{
                      width: 80,
                      height: 120,
                      background: '#fff',
                      border: '3px solid #f39c12',
                      borderRadius: 8,
                      marginBottom: 12,
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    <img
                      src={CARD_IMAGES[cardInfo.name]}
                      alt={cardInfo.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 'bold', color: '#f39c12', marginBottom: 4 }}>
                    {cardInfo.position.charAt(0).toUpperCase() + cardInfo.position.slice(1)}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 'bold', color: '#2c3e50', marginBottom: 6 }}>
                    {cardInfo.name}
                  </div>
                  <div style={{ fontSize: 10, color: '#7f8c8d', lineHeight: 1.4 }}>
                    {cardInfo.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
