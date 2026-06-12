import React, { useState, useEffect, useCallback } from 'react';
import './MemoryGame.css';

// Card types with emoji icons
const CARD_ICONS = [
  { icon: '🧠', name: 'Brain', color: '#ff6b6b' },
  { icon: '🎯', name: 'Target', color: '#4ecdc4' },
  { icon: '🔮', name: 'Crystal Ball', color: '#a855f7' },
  { icon: '🌙', name: 'Moon', color: '#fbbf24' },
  { icon: '⭐', name: 'Star', color: '#f97316' },
  { icon: '🎲', name: 'Dice', color: '#06b6d4' },
  { icon: '🧩', name: 'Puzzle', color: '#84cc16' },
  { icon: '💡', name: 'Lightbulb', color: '#eab308' },
  { icon: '🎭', name: 'Masks', color: '#ec4899' },
  { icon: '🔑', name: 'Key', color: '#14b8a6' },
  { icon: '🗝️', name: 'Old Key', color: '#d946ef' },
  { icon: '🎪', name: 'Circus', color: '#f43f5e' },
];

interface Card {
  id: number;
  iconIndex: number;
  isFlipped: boolean;
  isMatched: boolean;
}

type Difficulty = 'easy' | 'medium' | 'hard';

const DIFFICULTY_CONFIG: Record<Difficulty, { rows: number; cols: number; pairs: number }> = {
  easy: { rows: 4, cols: 4, pairs: 8 },
  medium: { rows: 5, cols: 4, pairs: 10 },
  hard: { rows: 6, cols: 6, pairs: 18 },
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createCards(difficulty: Difficulty): Card[] {
  const config = DIFFICULTY_CONFIG[difficulty];
  const icons = CARD_ICONS.slice(0, config.pairs);
  const pairs = [...icons, ...icons].map((icon, index) => ({
    id: index,
    iconIndex: icons.indexOf(icon),
    isFlipped: false,
    isMatched: false,
  }));
  return shuffleArray(pairs);
}

interface MemoryGameProps {
  onBack: () => void;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ onBack }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [cards, setCards] = useState<Card[]>(() => createCards('easy'));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  const config = DIFFICULTY_CONFIG[difficulty];
  const totalPairs = config.pairs;

  // Timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && !gameWon) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, gameWon]);

  // Check for matches
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].iconIndex === cards[second].iconIndex) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, idx) =>
              idx === first || idx === second ? { ...card, isMatched: true } : card
            )
          );
          setMatches((m) => m + 1);
          setFlippedCards([]);
        }, 500);
      } else {
        // No match - flip back
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, idx) =>
              flippedCards.includes(idx) ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves((m) => m + 1);
    }
  }, [flippedCards, cards]);

  // Check for win
  useEffect(() => {
    if (matches === totalPairs && matches > 0) {
      setIsRunning(false);
      setGameWon(true);
    }
  }, [matches, totalPairs]);

  const handleCardClick = useCallback(
    (index: number) => {
      if (gameWon || cards[index].isFlipped || cards[index].isMatched || flippedCards.length >= 2) {
        return;
      }

      if (!isRunning && matches === 0) {
        setIsRunning(true);
      }

      setCards((prev) => prev.map((card, idx) => (idx === index ? { ...card, isFlipped: true } : card)));
      setFlippedCards((prev) => [...prev, index]);
    },
    [gameWon, cards, flippedCards.length, isRunning, matches]
  );

  const resetGame = useCallback(
    (newDifficulty?: Difficulty) => {
      const diff = newDifficulty || difficulty;
      setDifficulty(diff);
      setCards(createCards(diff));
      setFlippedCards([]);
      setMoves(0);
      setMatches(0);
      setTimer(0);
      setIsRunning(false);
      setGameWon(false);
      setShowInstructions(false);
    },
    [difficulty]
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate score based on efficiency
  const efficiency = totalPairs > 0 ? Math.round((totalPairs / Math.max(moves, 1)) * 100) : 0;
  const getScoreGrade = () => {
    if (efficiency >= 90) return { grade: 'S', label: 'Exceptional!', color: '#22c55e' };
    if (efficiency >= 75) return { grade: 'A', label: 'Great memory!', color: '#10b981' };
    if (efficiency >= 60) return { grade: 'B', label: 'Good job!', color: '#3b82f6' };
    if (efficiency >= 40) return { grade: 'C', label: 'Nice try!', color: '#f59e0b' };
    return { grade: 'D', label: 'Keep practicing!', color: '#ef4444' };
  };

  const score = getScoreGrade();

  return (
    <div className="memory-game">
      {/* Header */}
      <header className="game-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Portfolio
        </button>
        <h1 className="game-title">
          <span className="title-icon">🧠</span> Memory Game
        </h1>
        <p className="game-subtitle">Un jeu de mémoire — Test your memory!</p>
      </header>

      {/* Instructions */}
      {showInstructions && (
        <div className="instructions-panel">
          <button className="close-instructions" onClick={() => setShowInstructions(false)}>×</button>
          <h3>How to Play</h3>
          <ul>
            <li>Click a card to flip it and reveal the icon</li>
            <li>Find matching pairs of icons</li>
            <li>Use your memory to remember where each icon is</li>
            <li>Complete the game in as few moves as possible!</li>
          </ul>
          <button className="start-btn" onClick={() => setShowInstructions(false)}>
            Start Playing →
          </button>
        </div>
      )}

      {/* Game Controls */}
      <div className="game-controls">
        <div className="difficulty-selector">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
            <button
              key={diff}
              className={`diff-btn ${difficulty === diff ? 'active' : ''}`}
              onClick={() => resetGame(diff)}
            >
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </button>
          ))}
        </div>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-label">Moves</span>
            <span className="stat-value">{moves}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Time</span>
            <span className="stat-value">{formatTime(timer)}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Matches</span>
            <span className="stat-value">{matches}/{totalPairs}</span>
          </div>
          <button className="reset-btn" onClick={() => resetGame()}>
            ↻ Reset
          </button>
        </div>
      </div>

      {/* Game Board */}
      <div className="game-board" style={{ gridTemplateColumns: `repeat(${config.cols}, 1fr)` }}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
            role="button"
            aria-label={card.isFlipped || card.isMatched ? `Card: ${CARD_ICONS[card.iconIndex].name}` : 'Hidden card'}
          >
            <div className="card-inner">
              <div className="card-front">
                <span className="card-icon">{CARD_ICONS[card.iconIndex].icon}</span>
              </div>
              <div className="card-back">
                <div className="card-back-pattern"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Win Modal */}
      {gameWon && (
        <div className="win-modal-overlay">
          <div className="win-modal">
            <div className="win-icon">🎉</div>
            <h2>Congratulations!</h2>
            <p>You completed the game!</p>
            <div className="score-display">
              <span className="score-grade" style={{ color: score.color }}>{score.grade}</span>
              <span className="score-label">{score.label}</span>
            </div>
            <div className="win-stats">
              <div className="win-stat">
                <span className="win-stat-value">{moves}</span>
                <span className="win-stat-label">Moves</span>
              </div>
              <div className="win-stat">
                <span className="win-stat-value">{formatTime(timer)}</span>
                <span className="win-stat-label">Time</span>
              </div>
              <div className="win-stat">
                <span className="win-stat-value">{efficiency}%</span>
                <span className="win-stat-label">Efficiency</span>
              </div>
            </div>
            <div className="win-actions">
              <button className="play-again-btn" onClick={() => resetGame()}>
                Play Again
              </button>
              <button className="change-difficulty-btn" onClick={() => {
                const nextDiff: Record<Difficulty, Difficulty> = { easy: 'medium', medium: 'hard', hard: 'easy' };
                resetGame(nextDiff[difficulty]);
              }}>
                Change Difficulty
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
