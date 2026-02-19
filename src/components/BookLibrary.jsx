import React, { useState } from 'react'
import { BookOpen, Search, Filter } from 'lucide-react'
import { booksData } from '../data/books'

function BookLibrary({ darkMode, onBookSelect }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('all')

  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (difficultyFilter === 'all') return matchesSearch
    
    return matchesSearch && book.chapters.some(ch => ch.difficulty === difficultyFilter)
  })

  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'
  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
  }

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Chemistry Library</h1>
        <p className={`text-lg ${secondaryTextClass}`}>
          Browse all available chemistry books and chapters
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${secondaryTextClass}`} size={20} />
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${
              darkMode ? 'bg-gray-900 border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Filter size={20} className={secondaryTextClass} />
          <button
            onClick={() => setDifficultyFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              difficultyFilter === 'all'
                ? 'bg-blue-500 text-white'
                : darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            All Levels
          </button>
          <button
            onClick={() => setDifficultyFilter('easy')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              difficultyFilter === 'easy'
                ? 'bg-green-500 text-white'
                : darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setDifficultyFilter('medium')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              difficultyFilter === 'medium'
                ? 'bg-yellow-500 text-white'
                : darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setDifficultyFilter('advanced')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              difficultyFilter === 'advanced'
                ? 'bg-red-500 text-white'
                : darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            Advanced
          </button>
        </div>
      </div>

      {/* Books List */}
      <div className="space-y-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className={`rounded-xl border ${cardClass} overflow-hidden`}
          >
            <div className={`h-24 bg-gradient-to-br ${colorClasses[book.color]} p-6 flex items-center gap-4`}>
              <BookOpen size={32} className="text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">{book.title}</h2>
                <p className="text-white opacity-90 text-sm">{book.chapters.length} chapters</p>
              </div>
            </div>

            <div className="p-6">
              <p className={`${secondaryTextClass} mb-6`}>{book.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {book.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => onBookSelect(book)}
                    className={`text-left p-4 rounded-lg border ${
                      darkMode ? 'border-gray-800 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-50'
                    } transition-colors group`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm group-hover:text-blue-500 transition-colors">
                        {chapter.title}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        chapter.difficulty === 'easy' 
                          ? darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                          : chapter.difficulty === 'medium'
                          ? darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                          : darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-700'
                      }`}>
                        {chapter.difficulty}
                      </span>
                    </div>
                    <p className={`text-xs ${secondaryTextClass}`}>{chapter.summary}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-lg ${secondaryTextClass}`}>
            No books found matching your criteria
          </p>
        </div>
      )}
    </div>
  )
}

export default BookLibrary