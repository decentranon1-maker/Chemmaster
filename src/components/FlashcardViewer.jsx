import React, { useState } from 'react'
import { RotateCw, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react'

function FlashcardViewer({ cards, darkMode }) {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [shuffledCards, setShuffledCards] = useState(cards)

  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'

  if (!cards || cards.length === 0) {
    return (
      <div className={`text-center py-12 ${secondaryTextClass}`}>
        <p>Flashcards will be available soon!</p>
      </div>
    )
  }

  const card = shuffledCards[currentCard]

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentCard((currentCard + 1) % shuffledCards.length)
  }

  const handlePrevious = () => {
    setIsFlipped(false)
    setCurrentCard(currentCard === 0 ? shuffledCards.length - 1 : currentCard - 1)
  }

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setShuffledCards(shuffled)
    setCurrentCard(0)
    setIsFlipped(false)
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex justify-between items-center">
        <span className={`text-sm ${secondaryTextClass}`}>
          Card {currentCard + 1} of {shuffledCards.length}
        </span>
        <button
          onClick={handleShuffle}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
          } transition-colors text-sm`}
        >
          <Shuffle size={16} />
          Shuffle
        </button>
      </div>

      {/* Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={`relative h-80 cursor-pointer perspective-1000`}
      >
        <div
          className={`w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front */}
          <div
            className={`absolute w-full h-full rounded-xl border-2 ${
              darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'
            } p-8 flex flex-col items-center justify-center backface-hidden`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-center">
              <p className={`text-sm ${secondaryTextClass} mb-4`}>Question</p>
              <p className="text-xl lg:text-2xl font-semibold">{card.front}</p>
            </div>
            <div className={`absolute bottom-8 text-sm ${secondaryTextClass} flex items-center gap-2`}>
              <RotateCw size={16} />
              <span>Click to reveal answer</span>
            </div>
          </div>

          {/* Back */}
          <div
            className={`absolute w-full h-full rounded-xl border-2 ${
              darkMode ? 'bg-blue-900 border-blue-700' : 'bg-blue-50 border-blue-300'
            } p-8 flex flex-col items-center justify-center backface-hidden`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="text-center">
              <p className={`text-sm ${secondaryTextClass} mb-4`}>Answer</p>
              <p className="text-xl lg:text-2xl font-semibold">{card.back}</p>
            </div>
            <div className={`absolute bottom-8 text-sm ${secondaryTextClass} flex items-center gap-2`}>
              <RotateCw size={16} />
              <span>Click to see question</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrevious}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
          } transition-colors font-semibold`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <div className={`h-2 flex-1 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentCard + 1) / shuffledCards.length) * 100}%` }}
          />
        </div>

        <button
          onClick={handleNext}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
          } transition-colors font-semibold`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default FlashcardViewer