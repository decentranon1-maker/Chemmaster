import React, { useState } from 'react'
import { Calculator, Atom, Beaker, Zap, ThermometerSun, Activity } from 'lucide-react'

function ToolsHub({ darkMode }) {
  const [activeTool, setActiveTool] = useState('mole-calculator')

  // Mole Calculator State
  const [mass, setMass] = useState('')
  const [molarMass, setMolarMass] = useState('')

  // pH Calculator State
  const [concentration, setConcentration] = useState('')
  const [isAcid, setIsAcid] = useState(true)

  // Gas Laws Calculator State
  const [pressure, setPressure] = useState('')
  const [volume, setVolume] = useState('')
  const [temperature, setTemperature] = useState('')
  const [moles, setMoles] = useState('')

  const textClass = darkMode ? 'text-white' : 'text-gray-900'
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600'
  const cardClass = darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
  const inputClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'

  const tools = [
    { id: 'mole-calculator', name: 'Mole Calculator', icon: Beaker },
    { id: 'ph-calculator', name: 'pH Calculator', icon: Activity },
    { id: 'gas-laws', name: 'Gas Laws', icon: ThermometerSun },
    { id: 'equation-balancer', name: 'Equation Balancer', icon: Atom },
    { id: 'electrochemistry', name: 'Electrochemistry', icon: Zap },
    { id: 'unit-converter', name: 'Unit Converter', icon: Calculator }
  ]

  const calculateMoles = () => {
    if (!mass || !molarMass) return null
    return (parseFloat(mass) / parseFloat(molarMass)).toFixed(4)
  }

  const calculatePH = () => {
    if (!concentration) return null
    const conc = parseFloat(concentration)
    if (isAcid) {
      return (-Math.log10(conc)).toFixed(2)
    } else {
      const pOH = -Math.log10(conc)
      return (14 - pOH).toFixed(2)
    }
  }

  const calculateIdealGas = () => {
    const R = 0.0821 // L·atm/(mol·K)
    const values = [pressure, volume, temperature, moles]
    const nullIndex = values.findIndex(v => !v)
    
    if (values.filter(v => !v).length !== 1) return null

    const P = parseFloat(pressure) || null
    const V = parseFloat(volume) || null
    const T = parseFloat(temperature) || null
    const n = parseFloat(moles) || null

    switch (nullIndex) {
      case 0: // Calculate P
        return { var: 'P', value: ((n * R * T) / V).toFixed(3), unit: 'atm' }
      case 1: // Calculate V
        return { var: 'V', value: ((n * R * T) / P).toFixed(3), unit: 'L' }
      case 2: // Calculate T
        return { var: 'T', value: ((P * V) / (n * R)).toFixed(2), unit: 'K' }
      case 3: // Calculate n
        return { var: 'n', value: ((P * V) / (R * T)).toFixed(4), unit: 'mol' }
      default:
        return null
    }
  }

  const renderToolContent = () => {
    switch (activeTool) {
      case 'mole-calculator':
        const molesResult = calculateMoles()
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Mole Calculator</h2>
            <p className={secondaryTextClass}>
              Calculate the number of moles from mass and molar mass.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Mass (g)</label>
                <input
                  type="number"
                  value={mass}
                  onChange={(e) => setMass(e.target.value)}
                  placeholder="Enter mass in grams"
                  className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Molar Mass (g/mol)</label>
                <input
                  type="number"
                  value={molarMass}
                  onChange={(e) => setMolarMass(e.target.value)}
                  placeholder="Enter molar mass"
                  className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            {molesResult && (
              <div className={`rounded-xl p-6 ${darkMode ? 'bg-blue-900 bg-opacity-20' : 'bg-blue-50'}`}>
                <p className="text-sm mb-2">Result:</p>
                <p className="text-3xl font-bold text-blue-500">
                  {molesResult} mol
                </p>
                <p className={`text-sm mt-2 ${secondaryTextClass}`}>
                  Formula: n = mass / molar mass
                </p>
              </div>
            )}
          </div>
        )

      case 'ph-calculator':
        const pHResult = calculatePH()
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">pH Calculator</h2>
            <p className={secondaryTextClass}>
              Calculate pH from concentration of acids or bases.
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setIsAcid(true)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  isAcid ? 'bg-blue-500 text-white' : darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                Acid
              </button>
              <button
                onClick={() => setIsAcid(false)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                  !isAcid ? 'bg-blue-500 text-white' : darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
              >
                Base
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Concentration (M)
              </label>
              <input
                type="number"
                value={concentration}
                onChange={(e) => setConcentration(e.target.value)}
                placeholder="Enter concentration in molarity"
                step="0.0001"
                className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {pHResult && (
              <div className={`rounded-xl p-6 ${darkMode ? 'bg-blue-900 bg-opacity-20' : 'bg-blue-50'}`}>
                <p className="text-sm mb-2">pH Value:</p>
                <p className="text-3xl font-bold text-blue-500">
                  {pHResult}
                </p>
                <p className={`text-sm mt-2 ${secondaryTextClass}`}>
                  {parseFloat(pHResult) < 7 ? 'Acidic' : parseFloat(pHResult) > 7 ? 'Basic' : 'Neutral'}
                </p>
              </div>
            )}
          </div>
        )

      case 'gas-laws':
        const gasResult = calculateIdealGas()
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Ideal Gas Law Calculator</h2>
            <p className={secondaryTextClass}>
              PV = nRT - Enter 3 values to calculate the 4th
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pressure (atm)</label>
                <input
                  type="number"
                  value={pressure}
                  onChange={(e) => setPressure(e.target.value)}
                  placeholder="P"
                  className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Volume (L)</label>
                <input
                  type="number"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="V"
                  className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Temperature (K)</label>
                <input
                  type="number"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  placeholder="T"
                  className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Moles (mol)</label>
                <input
                  type="number"
                  value={moles}
                  onChange={(e) => setMoles(e.target.value)}
                  placeholder="n"
                  className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            {gasResult && (
              <div className={`rounded-xl p-6 ${darkMode ? 'bg-blue-900 bg-opacity-20' : 'bg-blue-50'}`}>
                <p className="text-sm mb-2">Calculated Value:</p>
                <p className="text-3xl font-bold text-blue-500">
                  {gasResult.var} = {gasResult.value} {gasResult.unit}
                </p>
                <p className={`text-sm mt-2 ${secondaryTextClass}`}>
                  R = 0.0821 L·atm/(mol·K)
                </p>
              </div>
            )}
          </div>
        )

      case 'equation-balancer':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Chemical Equation Balancer</h2>
            <p className={secondaryTextClass}>
              Balance chemical equations automatically
            </p>
            <div className="text-center py-12">
              <p className={secondaryTextClass}>
                Chemical equation balancer coming soon!
              </p>
            </div>
          </div>
        )

      case 'electrochemistry':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Electrochemistry Calculator</h2>
            <p className={secondaryTextClass}>
              Calculate electrode potentials and cell voltage
            </p>
            <div className="text-center py-12">
              <p className={secondaryTextClass}>
                Electrochemistry calculator coming soon!
              </p>
            </div>
          </div>
        )

      case 'unit-converter':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Unit Converter</h2>
            <p className={secondaryTextClass}>
              Convert between different units
            </p>
            <div className="text-center py-12">
              <p className={secondaryTextClass}>
                Unit converter coming soon!
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-2">Chemistry Tools</h1>
        <p className={`text-lg ${secondaryTextClass}`}>
          Interactive calculators and utilities for chemistry problems
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tool Selection */}
        <div className="lg:col-span-1 space-y-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`w-full text-left p-4 rounded-xl border transition-colors ${
                  activeTool === tool.id
                    ? 'bg-blue-500 text-white border-blue-500'
                    : cardClass + ' ' + (darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50')
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span className="font-medium text-sm">{tool.name}</span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Tool Content */}
        <div className="lg:col-span-3">
          <div className={`rounded-xl border ${cardClass} p-6 lg:p-8`}>
            {renderToolContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolsHub