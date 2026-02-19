import React, { useState } from 'react'
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react'

function InteractiveTool({ tool, darkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [n1, setN1] = useState(3)
  const [n2, setN2] = useState(2)

  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'

  const calculateEnergy = () => {
    const E1 = -13.6 / (n1 * n1)
    const E2 = -13.6 / (n2 * n2)
    const deltaE = E2 - E1
    return {
      E1: E1.toFixed(3),
      E2: E2.toFixed(3),
      deltaE: Math.abs(deltaE).toFixed(3),
      wavelength: (1240 / Math.abs(deltaE)).toFixed(1)
    }
  }

  const result = calculateEnergy()

  return (
    <div className={`rounded-xl border ${cardClass} overflow-hidden`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 flex items-center justify-between hover:${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        } transition-colors`}
      >
        <div className="flex items-center gap-3">
          <Calculator className="text-blue-500" size={24} />
          <div className="text-left">
            <h3 className="font-semibold mb-1">{tool.name}</h3>
            <p className={`text-sm ${secondaryTextClass}`}>{tool.description}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className={`p-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          {tool.id === 'energy-calculator' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                    Initial level (n₁)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={n1}
                    onChange={(e) => setN1(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-blue-500">
                    {n1}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${textClass}`}>
                    Final level (n₂)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={n2}
                    onChange={(e) => setN2(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-blue-500">
                    {n2}
                  </div>
                </div>
              </div>

              <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className="font-semibold mb-3">Results:</h4>
                <div className="space-y-2 text-sm">
                  <p>E₁ (n={n1}): <span className="font-mono">{result.E1} eV</span></p>
                  <p>E₂ (n={n2}): <span className="font-mono">{result.E2} eV</span></p>
                  <p className="text-blue-500 font-semibold">
                    ΔE: <span className="font-mono">{result.deltaE} eV</span>
                  </p>
                  <p className="text-green-500 font-semibold">
                    Wavelength: <span className="font-mono">{result.wavelength} nm</span>
                  </p>
                </div>
              </div>

              <p className={`text-sm ${secondaryTextClass}`}>
                {n1 > n2 
                  ? `Energy is released (emission) when electron drops from n=${n1} to n=${n2}`
                  : `Energy is absorbed when electron jumps from n=${n1} to n=${n2}`
                }
              </p>
            </div>
          )}

          {tool.id === 'orbital-visualizer' && (
            <div className="text-center py-8">
              <p className={secondaryTextClass}>
                Interactive 3D orbital visualization will be rendered here
              </p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <button className={`p-4 rounded-lg border ${cardClass} hover:bg-blue-500 hover:text-white transition-colors`}>
                  s orbital
                </button>
                <button className={`p-4 rounded-lg border ${cardClass} hover:bg-blue-500 hover:text-white transition-colors`}>
                  p orbital
                </button>
                <button className={`p-4 rounded-lg border ${cardClass} hover:bg-blue-500 hover:text-white transition-colors`}>
                  d orbital
                </button>
              </div>
            </div>
          )}

          {tool.id === 'configuration-builder' && (
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Enter atomic number (Z)"
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <p className={`text-sm ${secondaryTextClass}`}>
                Electronic configuration builder - input atomic number to generate configuration
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default InteractiveTool