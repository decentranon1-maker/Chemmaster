import React, { useState } from 'react'
import { Trash2, Download, Upload, Database } from 'lucide-react'

function SettingsPage({ darkMode, fontSize, setFontSize, bookmarks, removeBookmark, notes, highlights }) {
  const [activeTab, setActiveTab] = useState('general')

  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'
  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'

  const handleExportData = () => {
    const data = localStorage.getItem('chemistryMasterData')
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'chemistry-master-backup.json'
    a.click()
  }

  const handleImportData = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          localStorage.setItem('chemistryMasterData', e.target.result)
          alert('Data imported successfully! Please refresh the page.')
        } catch (error) {
          alert('Error importing data. Please check the file format.')
        }
      }
      reader.readAsText(file)
    }
  }

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all your data? This cannot be undone.')) {
      localStorage.removeItem('chemistryMasterData')
      alert('All data cleared. Please refresh the page.')
    }
  }

  const tabs = [
    { id: 'general', name: 'General' },
    { id: 'bookmarks', name: 'Bookmarks' },
    { id: 'data', name: 'Data Management' }
  ]

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Settings</h1>
        <p className={`text-lg ${secondaryTextClass}`}>
          Customize your learning experience
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className={`rounded-xl border ${cardClass} p-6`}>
            <h2 className="text-xl font-bold mb-4">Reading Preferences</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Font Size: {fontSize}px
              </label>
              <input
                type="range"
                min="14"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: secondaryTextClass }}>
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <p style={{ fontSize: `${fontSize}px` }}>
                This is how your text will appear in chapter readings.
              </p>
            </div>
          </div>

          <div className={`rounded-xl border ${cardClass} p-6`}>
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className={`text-sm ${secondaryTextClass} mb-1`}>Bookmarks</p>
                <p className="text-2xl font-bold text-blue-500">{bookmarks.length}</p>
              </div>
              <div>
                <p className={`text-sm ${secondaryTextClass} mb-1`}>Notes</p>
                <p className="text-2xl font-bold text-green-500">{notes.length}</p>
              </div>
              <div>
                <p className={`text-sm ${secondaryTextClass} mb-1`}>Highlights</p>
                <p className="text-2xl font-bold text-yellow-500">{highlights.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div className={`rounded-xl border ${cardClass} p-6`}>
          <h2 className="text-xl font-bold mb-4">Your Bookmarks</h2>
          
          {bookmarks.length === 0 ? (
            <p className={`text-center py-12 ${secondaryTextClass}`}>
              No bookmarks yet. Start reading and bookmark important sections!
            </p>
          ) : (
            <div className="space-y-3">
              {bookmarks.map((bookmark) => (
                <div
                  key={bookmark.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}
                >
                  <div>
                    <p className="font-semibold">{bookmark.bookId}</p>
                    <p className={`text-sm ${secondaryTextClass}`}>
                      {bookmark.chapterId} - {bookmark.section}
                    </p>
                  </div>
                  <button
                    onClick={() => removeBookmark(bookmark.id)}
                    className="p-2 text-red-500 hover:bg-red-500 hover:bg-opacity-10 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Data Management */}
      {activeTab === 'data' && (
        <div className="space-y-6">
          <div className={`rounded-xl border ${cardClass} p-6`}>
            <h2 className="text-xl font-bold mb-4">Backup & Restore</h2>
            <p className={`${secondaryTextClass} mb-6`}>
              Export your progress, bookmarks, and notes to keep them safe, or import from a previous backup.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleExportData}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Download size={20} />
                Export All Data
              </button>

              <label className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                <Upload size={20} />
                Import Data
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className={`rounded-xl border ${cardClass} p-6`}>
            <h2 className="text-xl font-bold mb-4 text-red-500">Danger Zone</h2>
            <p className={`${secondaryTextClass} mb-6`}>
              Clear all your data including progress, bookmarks, notes, and highlights. This action cannot be undone.
            </p>

            <button
              onClick={handleClearData}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Database size={20} />
              Clear All Data
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SettingsPage