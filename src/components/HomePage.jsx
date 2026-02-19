import React, { useState } from 'react'
import { BookOpen, Search, TrendingUp, Clock, Bookmark } from 'lucide-react'
import { booksData } from '../data/books'

function HomePage({ darkMode, onBookSelect, lastRead, progress, bookmarks }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getBookProgress = (bookId) => {
    const bookChapters = booksData.find(b => b.id === bookId)?.chapters || []
    if (bookChapters.length === 0) return 0
    
    const totalProgress = bookChapters.reduce((sum, chapter) => {
      return sum + (progress[`${bookId}-${chapter.id}`] || 0)
    }, 0)
    
    return Math.round(totalProgress / bookChapters.length)
  }

  const lastReadBook = lastRead ? booksData.find(b => b.id === lastRead.bookId) : null
  const lastReadChapter = lastReadBook?.chapters.find(c => c.id === lastRead?.chapterId)

  const bgClass = darkMode ? 'bg-black' : 'bg-white'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'
  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome to Chemistry Master</h1>
        <p className={`text-lg ${secondaryTextClass}`}>
          Your complete offline chemistry learning companion
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${secondaryTextClass}`} size={20} />
        <input
          type="text"
          placeholder="Search books, chapters, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
            darkMode ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
        />
      </div>

      {/* Continue Reading */}
      {lastReadBook && lastReadChapter && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock size={24} />
            Continue Reading
          </h2>
          <button
            onClick={() => onBookSelect(lastReadBook)}
            className={`w-full text-left p-6 rounded-xl border ${cardClass} hover:${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            } transition-all group`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1">{lastReadBook.title}</h3>
                <p className={secondaryTextClass}>{lastReadChapter.title}</p>
              </div>
              <BookOpen className={secondaryTextClass} size={24} />
            </div>
            <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress[`${lastReadBook.id}-${lastReadChapter.id}`] || 0}%` }}
              />
            </div>
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className={`p-6 rounded-xl border ${cardClass}`}>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold">{booksData.length}</h3>
          </div>
          <p className={secondaryTextClass}>Books Available</p>
        </div>

        <div className={`p-6 rounded-xl border ${cardClass}`}>
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-green-500" size={24} />
            <h3 className="text-2xl font-bold">
              {booksData.reduce((sum, book) => sum + book.chapters.length, 0)}
            </h3>
          </div>
          <p className={secondaryTextClass}>Total Chapters</p>
        </div>

        <div className={`p-6 rounded-xl border ${cardClass}`}>
          <div className="flex items-center gap-3 mb-2">
            <Bookmark className="text-purple-500" size={24} />
            <h3 className="text-2xl font-bold">{bookmarks.length}</h3>
          </div>
          <p className={secondaryTextClass}>Bookmarks</p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Chemistry Library</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => {
          const bookProgress = getBookProgress(book.id)
          const colorClasses = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            purple: 'from-purple-500 to-purple-600',
            orange: 'from-orange-500 to-orange-600',
            red: 'from-red-500 to-red-600',
          }

          return (
            <button
              key={book.id}
              onClick={() => onBookSelect(book)}
              className={`text-left rounded-xl border ${cardClass} overflow-hidden hover:shadow-lg transition-all group`}
            >
              <div className={`h-32 bg-gradient-to-br ${colorClasses[book.color]} p-6 flex items-end`}>
                <BookOpen size={32} className="text-white opacity-90" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                  {book.title}
                </h3>
                <p className={`text-sm ${secondaryTextClass} mb-4 line-clamp-2`}>
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className={secondaryTextClass}>
                    {book.chapters.length} chapters
                  </span>
                  {bookProgress > 0 && (
                    <span className="text-blue-500 font-medium">
                      {bookProgress}% complete
                    </span>
                  )}
                </div>

                {bookProgress > 0 && (
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} overflow-hidden`}>
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${bookProgress}%` }}
                    />
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-lg ${secondaryTextClass}`}>
            No books found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  )
}

export default HomePage