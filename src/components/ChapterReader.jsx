import React, { useState, useEffect } from 'react'
import { ChevronLeft, Bookmark, Type, Sun, Moon, RotateCcw } from 'lucide-react'
import { chapterContent } from '../data/chapterContent'
import InteractiveTool from './InteractiveTool'
import PracticeQuiz from './PracticeQuiz'
import FlashcardViewer from './FlashcardViewer'

function ChapterReader({ chapter, book, darkMode, fontSize, onBack, onBookmark, onProgress }) {
  const [activeSection, setActiveSection] = useState('introduction')
  const [readingProgress, setReadingProgress] = useState(0)
  const [showFontSize, setShowFontSize] = useState(false)

  const contentKey = `${book.id}-${chapter.id}`
  const content = chapterContent[contentKey] || {}

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = scrollHeight > 0 ? Math.min((scrolled / scrollHeight) * 100, 100) : 0
      setReadingProgress(progress)
      onProgress(book.id, chapter.id, progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [book.id, chapter.id, onProgress])

  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'
  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'

  const sections = [
    { id: 'introduction', name: 'Introduction' },
    { id: 'theory', name: 'Theory' },
    { id: 'diagrams', name: 'Diagrams' },
    { id: 'calculations', name: 'Calculations' },
    { id: 'interactive', name: 'Interactive' },
    { id: 'practice', name: 'Practice' },
    { id: 'summary', name: 'Summary' },
    { id: 'flashcards', name: 'Flashcards' },
    { id: 'applications', name: 'Applications' }
  ]

  const renderSection = () => {
    const sectionData = content[activeSection]

    if (!sectionData) {
      return (
        <div className="text-center py-12">
          <p className={secondaryTextClass}>
            Content for this section is being prepared. Check back soon!
          </p>
        </div>
      )
    }

    switch (activeSection) {
      case 'interactive':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">{sectionData.title}</h2>
            <div className="space-y-4">
              {sectionData.tools?.map((tool) => (
                <InteractiveTool key={tool.id} tool={tool} darkMode={darkMode} />
              ))}
            </div>
          </div>
        )

      case 'practice':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">{sectionData.title}</h2>
            <PracticeQuiz questions={sectionData.questions || []} darkMode={darkMode} />
          </div>
        )

      case 'flashcards':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">{sectionData.title}</h2>
            <FlashcardViewer cards={sectionData.cards || []} darkMode={darkMode} />
          </div>
        )

      default:
        return (
          <div>
            <div
              className="prose max-w-none"
              style={{ fontSize: `${fontSize}px` }}
              dangerouslySetInnerHTML={{ __html: sectionData.content || '' }}
            />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header */}
      <div className={`sticky top-0 z-40 border-b ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="p-4 lg:p-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className={`flex items-center gap-2 ${secondaryTextClass} hover:${textClass} transition-colors`}
            >
              <ChevronLeft size={20} />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFontSize(!showFontSize)}
                className={`p-2 rounded-lg ${secondaryTextClass} hover:${textClass} transition-colors`}
              >
                <Type size={20} />
              </button>
              <button
                onClick={() => onBookmark({ bookId: book.id, chapterId: chapter.id, section: activeSection })}
                className={`p-2 rounded-lg ${secondaryTextClass} hover:${textClass} transition-colors`}
              >
                <Bookmark size={20} />
              </button>
            </div>
          </div>

          {showFontSize && (
            <div className={`mb-4 p-4 rounded-lg border ${cardClass}`}>
              <p className="text-sm mb-2">Font Size: {fontSize}px</p>
              <input
                type="range"
                min="14"
                max="24"
                value={fontSize}
                onChange={(e) => {
                  const size = parseInt(e.target.value)
                  const data = JSON.parse(localStorage.getItem('chemistryMasterData') || '{}')
                  data.fontSize = size
                  localStorage.setItem('chemistryMasterData', JSON.stringify(data))
                  window.location.reload()
                }}
                className="w-full"
              />
            </div>
          )}

          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-1">{chapter.title}</h1>
            <p className={`text-sm ${secondaryTextClass}`}>{book.title}</p>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="overflow-x-auto">
          <div className="flex gap-2 px-4 lg:px-6 pb-4 max-w-5xl mx-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8 max-w-4xl mx-auto">
        <div className={`${textClass}`}>
          {renderSection()}
        </div>
      </div>
    </div>
  )
}

export default ChapterReader