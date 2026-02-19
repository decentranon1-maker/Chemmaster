import React, { useState } from 'react'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'

function PracticeQuiz({ questions, darkMode }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'
  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'

  if (!questions || questions.length === 0) {
    return (
      <div className={`text-center py-12 ${secondaryTextClass}`}>
        <p>Practice questions will be available soon!</p>
      </div>
    )
  }

  const question = questions[currentQuestion]

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    if (index === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <div className={`rounded-xl border ${cardClass} p-8 text-center`}>
        <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
        <div className="mb-6">
          <div className={`text-6xl font-bold mb-2 ${
            percentage >= 80 ? 'text-green-500' : percentage >= 60 ? 'text-yellow-500' : 'text-red-500'
          }`}>
            {percentage}%
          </div>
          <p className={secondaryTextClass}>
            You got {score} out of {questions.length} questions correct
          </p>
        </div>

        <div className="mb-6">
          {percentage >= 80 && (
            <p className="text-green-500 text-lg">Excellent work! You've mastered this topic.</p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="text-yellow-500 text-lg">Good job! Review the material to improve further.</p>
          )}
          {percentage < 60 && (
            <p className="text-red-500 text-lg">Keep practicing! Review the theory section.</p>
          )}
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <RotateCcw size={20} />
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm ${secondaryTextClass}`}>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className={`text-sm ${secondaryTextClass}`}>
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className={`rounded-xl border ${cardClass} p-6`}>
        <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === question.correct
            const showResult = showExplanation

            let buttonClass = `w-full text-left p-4 rounded-lg border transition-all ${
              darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-50'
            }`

            if (showResult) {
              if (isCorrect) {
                buttonClass = 'w-full text-left p-4 rounded-lg border-2 border-green-500 bg-green-500 bg-opacity-10'
              } else if (isSelected && !isCorrect) {
                buttonClass = 'w-full text-left p-4 rounded-lg border-2 border-red-500 bg-red-500 bg-opacity-10'
              }
            } else if (isSelected) {
              buttonClass = `w-full text-left p-4 rounded-lg border-2 border-blue-500 bg-blue-500 bg-opacity-10`
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && isCorrect && <CheckCircle className="text-green-500" size={24} />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-red-500" size={24} />}
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={`mt-6 p-4 rounded-lg ${
            selectedAnswer === question.correct
              ? darkMode ? 'bg-green-900 bg-opacity-20' : 'bg-green-50'
              : darkMode ? 'bg-red-900 bg-opacity-20' : 'bg-red-50'
          }`}>
            <p className="font-semibold mb-2">
              {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            <p className={secondaryTextClass}>{question.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      {showExplanation && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      )}
    </div>
  )
}

export default PracticeQuiz