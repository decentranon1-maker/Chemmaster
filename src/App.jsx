import React, { useState, useEffect } from 'react'
import { Home, Book, Calculator, Table, Settings, Search, BookOpen, ChevronRight, Moon, Sun, Menu, X } from 'lucide-react'
import HomePage from './components/HomePage'
import BookLibrary from './components/BookLibrary'
import ChapterReader from './components/ChapterReader'
import ToolsHub from './components/ToolsHub'
import SettingsPage from './components/SettingsPage'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedBook, setSelectedBook] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const [bookmarks, setBookmarks] = useState([])
  const [highlights, setHighlights] = useState([])
  const [notes, setNotes] = useState([])
  const [progress, setProgress] = useState({})
  const [lastRead, setLastRead] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('chemistryMasterData')
    if (saved) {
      const data = JSON.parse(saved)
      setDarkMode(data.darkMode || false)
      setFontSize(data.fontSize || 16)
      setBookmarks(data.bookmarks || [])
      setHighlights(data.highlights || [])
      setNotes(data.notes || [])
      setProgress(data.progress || {})
      setLastRead(data.lastRead || null)
    }
  }, [])

  useEffect(() => {
    const data = {
      darkMode,
      fontSize,
      bookmarks,
      highlights,
      notes,
      progress,
      lastRead
    }
    localStorage.setItem('chemistryMasterData', JSON.stringify(data))
  }, [darkMode, fontSize, bookmarks, highlights, notes, progress, lastRead])

  const handleBookSelect = (book) => {
    setSelectedBook(book)
    setCurrentView('chapters')
    setMobileMenuOpen(false)
  }

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter)
    setLastRead({ bookId: selectedBook.id, chapterId: chapter.id })
    setCurrentView('reader')
    setMobileMenuOpen(false)
  }

  const handleBack = () => {
    if (currentView === 'reader') {
      setCurrentView('chapters')
      setSelectedChapter(null)
    } else if (currentView === 'chapters') {
      setCurrentView('home')
      setSelectedBook(null)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, { ...bookmark, id: Date.now() }])
  }

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id))
  }

  const addHighlight = (highlight) => {
    setHighlights([...highlights, { ...highlight, id: Date.now() }])
  }

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }])
  }

  const updateProgress = (bookId, chapterId, percentage) => {
    setProgress({
      ...progress,
      [`${bookId}-${chapterId}`]: percentage
    })
  }

  const bgClass = darkMode ? 'bg-black' : 'bg-white'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-200`}>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Chemistry Master</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="flex h-screen pt-16 lg:pt-0">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 
          ${bgClass} border-r ${darkMode ? 'border-gray-800' : 'border-gray-200'}
          transform transition-transform duration-200 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          mt-16 lg:mt-0
        `}>
          <div className="flex flex-col h-full p-6">
            <div className="mb-8 hidden lg:block">
              <h1 className="text-2xl font-bold">Chemistry Master</h1>
              <p className={`text-sm ${secondaryTextClass} mt-1`}>Offline Chemistry Learning</p>
            </div>

            <nav className="flex-1 space-y-2">
              <button
                onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === 'home' 
                    ? darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                    : secondaryTextClass
                }`}
              >
                <Home size={20} />
                <span>Home</span>
              </button>

              <button
                onClick={() => { setCurrentView('library'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === 'library' 
                    ? darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                    : secondaryTextClass
                }`}
              >
                <Book size={20} />
                <span>Library</span>
              </button>

              <button
                onClick={() => { setCurrentView('tools'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === 'tools' 
                    ? darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                    : secondaryTextClass
                }`}
              >
                <Calculator size={20} />
                <span>Tools</span>
              </button>

              <button
                onClick={() => { setCurrentView('settings'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === 'settings' 
                    ? darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                    : secondaryTextClass
                }`}
              >
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </nav>

            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg ${secondaryTextClass} hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden mt-16"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {currentView === 'home' && (
            <HomePage
              darkMode={darkMode}
              onBookSelect={handleBookSelect}
              lastRead={lastRead}
              progress={progress}
              bookmarks={bookmarks}
            />
          )}

          {currentView === 'library' && (
            <BookLibrary
              darkMode={darkMode}
              onBookSelect={handleBookSelect}
            />
          )}

          {currentView === 'chapters' && selectedBook && (
            <div className="p-6 lg:p-8 max-w-5xl mx-auto">
              <button
                onClick={handleBack}
                className={`mb-6 ${secondaryTextClass} hover:${textClass} transition-colors`}
              >
                ← Back to Library
              </button>

              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">{selectedBook.title}</h1>
                <p className={secondaryTextClass}>{selectedBook.description}</p>
              </div>

              <div className="space-y-3">
                {selectedBook.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => handleChapterSelect(chapter)}
                    className={`w-full text-left p-6 rounded-xl border ${
                      darkMode ? 'border-gray-800 hover:bg-gray-900' : 'border-gray-200 hover:bg-gray-50'
                    } transition-colors group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            chapter.difficulty === 'easy' 
                              ? darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                              : chapter.difficulty === 'medium'
                              ? darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                              : darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700'
                          }`}>
                            {chapter.difficulty}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{chapter.title}</h3>
                        <p className={`text-sm ${secondaryTextClass}`}>{chapter.summary}</p>
                      </div>
                      <ChevronRight className={`${secondaryTextClass} group-hover:${textClass} transition-colors`} />
                    </div>
                    
                    {progress[`${selectedBook.id}-${chapter.id}`] > 0 && (
                      <div className="mt-4">
                        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
                          <div
                            className={`h-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} transition-all duration-300`}
                            style={{ width: `${progress[`${selectedBook.id}-${chapter.id}`]}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentView === 'reader' && selectedChapter && (
            <ChapterReader
              chapter={selectedChapter}
              book={selectedBook}
              darkMode={darkMode}
              fontSize={fontSize}
              onBack={handleBack}
              onBookmark={addBookmark}
              onHighlight={addHighlight}
              onNote={addNote}
              onProgress={updateProgress}
              bookmarks={bookmarks}
              highlights={highlights}
              notes={notes}
            />
          )}

          {currentView === 'tools' && (
            <ToolsHub darkMode={darkMode} />
          )}

          {currentView === 'settings' && (
            <SettingsPage
              darkMode={darkMode}
              fontSize={fontSize}
              setFontSize={setFontSize}
              bookmarks={bookmarks}
              removeBookmark={removeBookmark}
              notes={notes}
              highlights={highlights}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default App