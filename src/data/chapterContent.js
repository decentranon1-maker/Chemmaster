export const chapterContent = {
  'inorganic-atomic-structure': {
    introduction: {
      title: 'Introduction to Atomic Structure',
      content: `
        <h2>Welcome to Atomic Structure</h2>
        <p>The atom is the fundamental building block of all matter. Understanding atomic structure is crucial for mastering chemistry, as it explains how elements behave and interact with one another.</p>
        
        <h3>What You Will Learn</h3>
        <ul>
          <li>Historical development of atomic theory</li>
          <li>Subatomic particles and their properties</li>
          <li>Quantum mechanical model of the atom</li>
          <li>Electronic configuration and orbital diagrams</li>
          <li>Quantum numbers and their significance</li>
        </ul>

        <h3>Why This Matters</h3>
        <p>Atomic structure explains why elements have specific chemical properties, why the periodic table is organized the way it is, and how chemical bonds form. This knowledge is foundational for all subsequent chemistry topics.</p>
      `
    },
    theory: {
      title: 'Theory and Concepts',
      content: `
        <h2>Historical Development</h2>
        
        <h3>Basic Level: Early Atomic Models</h3>
        <p><strong>Dalton's Atomic Theory (1808)</strong></p>
        <ul>
          <li>All matter is composed of indivisible atoms</li>
          <li>All atoms of an element are identical</li>
          <li>Atoms combine in simple whole-number ratios</li>
          <li>Atoms cannot be created or destroyed</li>
        </ul>

        <p><strong>Thomson's Plum Pudding Model (1897)</strong></p>
        <p>After discovering the electron, J.J. Thomson proposed that atoms were positively charged spheres with electrons embedded throughout, like plums in a pudding.</p>

        <p><strong>Rutherford's Nuclear Model (1911)</strong></p>
        <p>Through his famous gold foil experiment, Rutherford discovered that atoms have a tiny, dense, positively charged nucleus with electrons orbiting around it.</p>

        <h3>Undergraduate Level: Bohr Model</h3>
        <p><strong>Bohr's Atomic Model (1913)</strong></p>
        <p>Niels Bohr refined the atomic model with these key concepts:</p>
        <ul>
          <li>Electrons orbit the nucleus in specific energy levels</li>
          <li>Electrons can only occupy certain allowed orbits</li>
          <li>Energy is absorbed or emitted when electrons jump between levels</li>
          <li>The energy of these transitions is quantized: E = hν</li>
        </ul>

        <p><strong>Energy Level Formula:</strong></p>
        <p>E<sub>n</sub> = -13.6 eV / n² (for hydrogen atom)</p>
        <p>Where n is the principal quantum number (1, 2, 3, ...)</p>

        <h3>Advanced Level: Quantum Mechanical Model</h3>
        <p><strong>Wave-Particle Duality</strong></p>
        <p>Louis de Broglie proposed that electrons exhibit both wave and particle properties:</p>
        <p>λ = h/p (de Broglie wavelength)</p>
        <p>Where λ is wavelength, h is Planck's constant, and p is momentum.</p>

        <p><strong>Heisenberg Uncertainty Principle</strong></p>
        <p>Δx · Δp ≥ ℏ/2</p>
        <p>We cannot simultaneously know both the exact position and momentum of an electron.</p>

        <p><strong>Schrödinger Wave Equation</strong></p>
        <p>The modern quantum mechanical model describes electrons as probability waves. The solution to the Schrödinger equation gives us atomic orbitals - regions where electrons are likely to be found.</p>

        <h2>Subatomic Particles</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: rgba(128, 128, 128, 0.1);">
            <th style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Particle</th>
            <th style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Symbol</th>
            <th style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Charge</th>
            <th style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Mass (amu)</th>
            <th style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Location</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Proton</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">p⁺</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">+1</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">1.007</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Nucleus</td>
          </tr>
          <tr style="background-color: rgba(128, 128, 128, 0.1);">
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Neutron</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">n⁰</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">0</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">1.009</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Nucleus</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Electron</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">e⁻</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">-1</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">0.0005</td>
            <td style="padding: 12px; border: 1px solid rgba(128, 128, 128, 0.3);">Electron cloud</td>
          </tr>
        </table>

        <h2>Quantum Numbers</h2>
        <p>Four quantum numbers describe each electron in an atom:</p>

        <h3>1. Principal Quantum Number (n)</h3>
        <ul>
          <li>Values: 1, 2, 3, 4, ...</li>
          <li>Determines the energy level and size of orbital</li>
          <li>Higher n = higher energy, larger orbital</li>
        </ul>

        <h3>2. Angular Momentum Quantum Number (l)</h3>
        <ul>
          <li>Values: 0 to (n-1)</li>
          <li>Determines orbital shape</li>
          <li>l = 0 (s orbital), 1 (p orbital), 2 (d orbital), 3 (f orbital)</li>
        </ul>

        <h3>3. Magnetic Quantum Number (m<sub>l</sub>)</h3>
        <ul>
          <li>Values: -l to +l</li>
          <li>Determines orbital orientation in space</li>
          <li>For p orbitals (l=1): m<sub>l</sub> = -1, 0, +1 (three p orbitals)</li>
        </ul>

        <h3>4. Spin Quantum Number (m<sub>s</sub>)</h3>
        <ul>
          <li>Values: +½ or -½</li>
          <li>Determines electron spin direction</li>
          <li>Pauli Exclusion Principle: No two electrons can have identical quantum numbers</li>
        </ul>

        <h2>Electronic Configuration</h2>
        
        <h3>Aufbau Principle</h3>
        <p>Electrons fill orbitals from lowest to highest energy:</p>
        <p>1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d < 7p</p>

        <h3>Hund's Rule</h3>
        <p>When filling degenerate orbitals (same energy), electrons occupy empty orbitals singly with parallel spins before pairing up.</p>

        <h3>Pauli Exclusion Principle</h3>
        <p>Maximum of two electrons per orbital, with opposite spins.</p>

        <h3>Example Configurations:</h3>
        <ul>
          <li>Hydrogen (Z=1): 1s¹</li>
          <li>Carbon (Z=6): 1s² 2s² 2p²</li>
          <li>Nitrogen (Z=7): 1s² 2s² 2p³</li>
          <li>Neon (Z=10): 1s² 2s² 2p⁶</li>
          <li>Iron (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</li>
        </ul>
      `
    },
    diagrams: {
      title: 'Diagrams and Visualizations',
      content: `
        <h2>Visual Representations</h2>

        <h3>Atomic Structure Diagram</h3>
        <div style="background: rgba(128, 128, 128, 0.1); padding: 40px; border-radius: 12px; margin: 20px 0; text-align: center;">
          <svg viewBox="0 0 400 400" style="max-width: 400px; width: 100%;">
            <circle cx="200" cy="200" r="20" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
            <text x="200" y="205" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Nucleus</text>
            
            <ellipse cx="200" cy="200" rx="80" ry="30" fill="none" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,5"/>
            <circle cx="280" cy="200" r="8" fill="#ef4444"/>
            <circle cx="120" cy="200" r="8" fill="#ef4444"/>
            
            <ellipse cx="200" cy="200" rx="140" ry="50" fill="none" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,5"/>
            <circle cx="340" cy="200" r="8" fill="#10b981"/>
            <circle cx="60" cy="200" r="8" fill="#10b981"/>
            
            <ellipse cx="200" cy="200" rx="180" ry="70" fill="none" stroke="#6b7280" stroke-width="2" stroke-dasharray="5,5"/>
            <circle cx="380" cy="200" r="8" fill="#f59e0b"/>
            <circle cx="20" cy="200" r="8" fill="#f59e0b"/>
          </svg>
          <p style="margin-top: 20px; color: rgba(128, 128, 128, 0.8);">Classical representation of electron orbits (Bohr model)</p>
        </div>

        <h3>Orbital Shapes</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin: 20px 0;">
          <div style="background: rgba(128, 128, 128, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
            <svg viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto;">
              <circle cx="50" cy="50" r="30" fill="#3b82f6" opacity="0.6"/>
            </svg>
            <p style="margin-top: 10px; font-weight: bold;">s orbital</p>
            <p style="font-size: 0.9em; color: rgba(128, 128, 128, 0.8);">Spherical</p>
          </div>
          
          <div style="background: rgba(128, 128, 128, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
            <svg viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto;">
              <ellipse cx="30" cy="50" rx="20" ry="30" fill="#10b981" opacity="0.6"/>
              <ellipse cx="70" cy="50" rx="20" ry="30" fill="#10b981" opacity="0.6"/>
            </svg>
            <p style="margin-top: 10px; font-weight: bold;">p orbital</p>
            <p style="font-size: 0.9em; color: rgba(128, 128, 128, 0.8);">Dumbbell</p>
          </div>
          
          <div style="background: rgba(128, 128, 128, 0.1); padding: 20px; border-radius: 12px; text-align: center;">
            <svg viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto;">
              <ellipse cx="25" cy="25" rx="15" ry="20" fill="#f59e0b" opacity="0.6"/>
              <ellipse cx="75" cy="25" rx="15" ry="20" fill="#f59e0b" opacity="0.6"/>
              <ellipse cx="75" cy="75" rx="15" ry="20" fill="#f59e0b" opacity="0.6"/>
              <ellipse cx="25" cy="75" rx="15" ry="20" fill="#f59e0b" opacity="0.6"/>
            </svg>
            <p style="margin-top: 10px; font-weight: bold;">d orbital</p>
            <p style="font-size: 0.9em; color: rgba(128, 128, 128, 0.8);">Complex</p>
          </div>
        </div>

        <h3>Electron Configuration Diagram (Nitrogen)</h3>
        <div style="background: rgba(128, 128, 128, 0.1); padding: 30px; border-radius: 12px; margin: 20px 0;">
          <div style="margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 10px;">1s²</p>
            <div style="display: flex; gap: 10px;">
              <div style="width: 60px; height: 60px; border: 2px solid #6b7280; border-radius: 8px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; top: 5px;">↑</div>
                <div style="position: absolute; bottom: 5px;">↓</div>
              </div>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 10px;">2s²</p>
            <div style="display: flex; gap: 10px;">
              <div style="width: 60px; height: 60px; border: 2px solid #6b7280; border-radius: 8px; display: flex; align-items: center; justify-content: center; position: relative;">
                <div style="position: absolute; top: 5px;">↑</div>
                <div style="position: absolute; bottom: 5px;">↓</div>
              </div>
            </div>
          </div>
          
          <div>
            <p style="font-weight: bold; margin-bottom: 10px;">2p³ (following Hund's rule)</p>
            <div style="display: flex; gap: 10px;">
              <div style="width: 60px; height: 60px; border: 2px solid #6b7280; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <div>↑</div>
              </div>
              <div style="width: 60px; height: 60px; border: 2px solid #6b7280; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <div>↑</div>
              </div>
              <div style="width: 60px; height: 60px; border: 2px solid #6b7280; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <div>↑</div>
              </div>
            </div>
          </div>
        </div>

        <h3>Energy Level Diagram</h3>
        <div style="background: rgba(128, 128, 128, 0.1); padding: 40px; border-radius: 12px; margin: 20px 0;">
          <svg viewBox="0 0 400 300" style="max-width: 500px; width: 100%;">
            <line x1="50" y1="250" x2="150" y2="250" stroke="#3b82f6" stroke-width="3"/>
            <text x="100" y="270" text-anchor="middle" fill="currentColor" font-size="12">1s</text>
            
            <line x1="50" y1="200" x2="150" y2="200" stroke="#10b981" stroke-width="3"/>
            <text x="100" y="220" text-anchor="middle" fill="currentColor" font-size="12">2s</text>
            
            <line x1="200" y1="180" x2="350" y2="180" stroke="#10b981" stroke-width="3"/>
            <text x="275" y="200" text-anchor="middle" fill="currentColor" font-size="12">2p</text>
            
            <line x1="50" y1="130" x2="150" y2="130" stroke="#f59e0b" stroke-width="3"/>
            <text x="100" y="150" text-anchor="middle" fill="currentColor" font-size="12">3s</text>
            
            <line x1="200" y1="110" x2="350" y2="110" stroke="#f59e0b" stroke-width="3"/>
            <text x="275" y="130" text-anchor="middle" fill="currentColor" font-size="12">3p</text>
            
            <text x="20" y="260" fill="currentColor" font-size="14" font-weight="bold">E</text>
            <text x="20" y="280" fill="currentColor" font-size="14" font-weight="bold">↑</text>
          </svg>
          <p style="margin-top: 20px; text-align: center; color: rgba(128, 128, 128, 0.8);">Relative energy levels of atomic orbitals</p>
        </div>
      `
    },
    calculations: {
      title: 'Worked Calculations',
      content: `
        <h2>Example Problems and Solutions</h2>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>Problem 1: Energy of Electron Transitions (Bohr Model)</h3>
          <p><strong>Question:</strong> Calculate the energy released when an electron in a hydrogen atom transitions from n=3 to n=2.</p>
          
          <p><strong>Given:</strong></p>
          <ul>
            <li>E<sub>n</sub> = -13.6 eV / n²</li>
            <li>Initial state: n<sub>i</sub> = 3</li>
            <li>Final state: n<sub>f</sub> = 2</li>
          </ul>

          <p><strong>Solution:</strong></p>
          <p>Step 1: Calculate energy at n=3</p>
          <p>E<sub>3</sub> = -13.6 eV / 3² = -13.6 / 9 = -1.51 eV</p>

          <p>Step 2: Calculate energy at n=2</p>
          <p>E<sub>2</sub> = -13.6 eV / 2² = -13.6 / 4 = -3.40 eV</p>

          <p>Step 3: Calculate energy change</p>
          <p>ΔE = E<sub>2</sub> - E<sub>3</sub> = -3.40 - (-1.51) = -1.89 eV</p>

          <p><strong>Answer:</strong> The energy released is 1.89 eV (negative sign indicates energy is released)</p>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>Problem 2: Wavelength of Emitted Photon</h3>
          <p><strong>Question:</strong> What is the wavelength of light emitted in the transition from Problem 1?</p>
          
          <p><strong>Given:</strong></p>
          <ul>
            <li>E = 1.89 eV</li>
            <li>h = 6.626 × 10⁻³⁴ J·s (Planck's constant)</li>
            <li>c = 3.00 × 10⁸ m/s (speed of light)</li>
            <li>1 eV = 1.602 × 10⁻¹⁹ J</li>
          </ul>

          <p><strong>Solution:</strong></p>
          <p>Step 1: Convert energy to Joules</p>
          <p>E = 1.89 eV × 1.602 × 10⁻¹⁹ J/eV = 3.03 × 10⁻¹⁹ J</p>

          <p>Step 2: Use E = hc/λ, solve for λ</p>
          <p>λ = hc/E</p>
          <p>λ = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) / (3.03 × 10⁻¹⁹)</p>
          <p>λ = 6.56 × 10⁻⁷ m = 656 nm</p>

          <p><strong>Answer:</strong> The wavelength is 656 nm (visible red light - part of the Balmer series)</p>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>Problem 3: Number of Orbitals</h3>
          <p><strong>Question:</strong> How many orbitals are possible in the n=4 energy level?</p>
          
          <p><strong>Solution:</strong></p>
          <p>For n=4, the possible values of l are: 0, 1, 2, 3</p>

          <p>For each l value:</p>
          <ul>
            <li>l = 0 (s orbital): m<sub>l</sub> = 0 → 1 orbital</li>
            <li>l = 1 (p orbitals): m<sub>l</sub> = -1, 0, +1 → 3 orbitals</li>
            <li>l = 2 (d orbitals): m<sub>l</sub> = -2, -1, 0, +1, +2 → 5 orbitals</li>
            <li>l = 3 (f orbitals): m<sub>l</sub> = -3, -2, -1, 0, +1, +2, +3 → 7 orbitals</li>
          </ul>

          <p>Total orbitals = 1 + 3 + 5 + 7 = 16 orbitals</p>

          <p><strong>Alternative method:</strong> Number of orbitals = n²</p>
          <p>For n=4: 4² = 16 orbitals</p>

          <p><strong>Answer:</strong> There are 16 orbitals in the n=4 energy level</p>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>Problem 4: Electronic Configuration</h3>
          <p><strong>Question:</strong> Write the complete electronic configuration for Chromium (Z=24) and explain any anomaly.</p>
          
          <p><strong>Expected configuration (following Aufbau principle):</strong></p>
          <p>1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁴</p>

          <p><strong>Actual configuration:</strong></p>
          <p>1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵</p>

          <p><strong>Explanation:</strong></p>
          <p>Chromium is an exception to the Aufbau principle. The actual configuration has a half-filled d subshell (3d⁵) and a half-filled s subshell (4s¹), which is more stable due to:</p>
          <ul>
            <li>Exchange energy stabilization from having maximum unpaired electrons</li>
            <li>Symmetry of half-filled subshell</li>
            <li>Lower electron-electron repulsion</li>
          </ul>

          <p><strong>Answer:</strong> Cr: [Ar] 4s¹ 3d⁵ or 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵</p>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>Problem 5: de Broglie Wavelength</h3>
          <p><strong>Question:</strong> Calculate the de Broglie wavelength of an electron traveling at 2.0 × 10⁶ m/s.</p>
          
          <p><strong>Given:</strong></p>
          <ul>
            <li>v = 2.0 × 10⁶ m/s</li>
            <li>m<sub>e</sub> = 9.109 × 10⁻³¹ kg</li>
            <li>h = 6.626 × 10⁻³⁴ J·s</li>
          </ul>

          <p><strong>Solution:</strong></p>
          <p>Step 1: Calculate momentum</p>
          <p>p = mv = (9.109 × 10⁻³¹ kg)(2.0 × 10⁶ m/s)</p>
          <p>p = 1.82 × 10⁻²⁴ kg·m/s</p>

          <p>Step 2: Apply de Broglie equation</p>
          <p>λ = h/p = (6.626 × 10⁻³⁴) / (1.82 × 10⁻²⁴)</p>
          <p>λ = 3.64 × 10⁻¹⁰ m = 0.364 nm</p>

          <p><strong>Answer:</strong> The de Broglie wavelength is 3.64 × 10⁻¹⁰ m or 0.364 nm</p>
          <p><em>Note: This is comparable to atomic dimensions, which is why electron diffraction effects are observable.</em></p>
        </div>
      `
    },
    interactive: {
      title: 'Interactive Tools',
      tools: [
        {
          id: 'energy-calculator',
          name: 'Electron Transition Energy Calculator',
          description: 'Calculate energy changes for electron transitions in hydrogen'
        },
        {
          id: 'orbital-visualizer',
          name: 'Orbital Shape Visualizer',
          description: 'Visualize different atomic orbital shapes and orientations'
        },
        {
          id: 'configuration-builder',
          name: 'Electronic Configuration Builder',
          description: 'Build electron configurations step-by-step'
        }
      ]
    },
    practice: {
      title: 'Practice Questions',
      questions: [
        {
          id: 1,
          question: 'What is the maximum number of electrons that can occupy the n=3 energy level?',
          options: ['8', '10', '18', '32'],
          correct: 2,
          explanation: 'The maximum number of electrons in an energy level is given by 2n². For n=3: 2(3)² = 2(9) = 18 electrons.'
        },
        {
          id: 2,
          question: 'Which of the following sets of quantum numbers is NOT possible?',
          options: [
            'n=3, l=2, m_l=0, m_s=+½',
            'n=2, l=1, m_l=-1, m_s=-½',
            'n=2, l=2, m_l=0, m_s=+½',
            'n=4, l=3, m_l=-2, m_s=+½'
          ],
          correct: 2,
          explanation: 'For n=2, l can only be 0 or 1 (l must be less than n). Therefore, n=2, l=2 is impossible.'
        },
        {
          id: 3,
          question: 'What is the ground state electronic configuration of oxygen (Z=8)?',
          options: [
            '1s² 2s² 2p⁴',
            '1s² 2s² 2p⁶',
            '1s² 2s³ 2p³',
            '1s² 2p⁶'
          ],
          correct: 0,
          explanation: 'Oxygen has 8 electrons: 2 in 1s, 2 in 2s, and 4 in 2p, giving 1s² 2s² 2p⁴.'
        },
        {
          id: 4,
          question: 'How many unpaired electrons does nitrogen (Z=7) have in its ground state?',
          options: ['1', '2', '3', '4'],
          correct: 2,
          explanation: 'Nitrogen configuration is 1s² 2s² 2p³. Following Hund\'s rule, the three 2p electrons occupy separate orbitals with parallel spins, giving 3 unpaired electrons.'
        },
        {
          id: 5,
          question: 'Which transition in hydrogen atom releases the most energy?',
          options: ['n=2 to n=1', 'n=3 to n=2', 'n=4 to n=3', 'n=5 to n=4'],
          correct: 0,
          explanation: 'The energy difference between levels decreases as n increases. The n=2 to n=1 transition has the largest energy gap and releases the most energy.'
        },
        {
          id: 6,
          question: 'What shape is a p orbital?',
          options: ['Spherical', 'Dumbbell-shaped', 'Cloverleaf-shaped', 'Linear'],
          correct: 1,
          explanation: 'P orbitals have a dumbbell or figure-eight shape with two lobes on opposite sides of the nucleus.'
        },
        {
          id: 7,
          question: 'Which element has the electron configuration [Ar] 4s² 3d¹⁰ 4p¹?',
          options: ['Aluminum', 'Gallium', 'Indium', 'Germanium'],
          correct: 1,
          explanation: 'Argon has 18 electrons. Adding 2+10+1=13 more gives 31 electrons total, which is Gallium (Ga).'
        },
        {
          id: 8,
          question: 'What principle states that no two electrons can have the same four quantum numbers?',
          options: ['Aufbau Principle', 'Hund\'s Rule', 'Pauli Exclusion Principle', 'Heisenberg Uncertainty Principle'],
          correct: 2,
          explanation: 'The Pauli Exclusion Principle states that no two electrons in an atom can have identical sets of four quantum numbers.'
        }
      ]
    },
    summary: {
      title: 'Quick Revision Summary',
      content: `
        <h2>Key Concepts at a Glance</h2>

        <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Subatomic Particles</h3>
          <ul>
            <li><strong>Protons:</strong> +1 charge, ~1 amu, in nucleus</li>
            <li><strong>Neutrons:</strong> neutral, ~1 amu, in nucleus</li>
            <li><strong>Electrons:</strong> -1 charge, ~0.0005 amu, electron cloud</li>
          </ul>
        </div>

        <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Quantum Numbers</h3>
          <ul>
            <li><strong>n (principal):</strong> 1, 2, 3, ... → energy level & size</li>
            <li><strong>l (angular):</strong> 0 to (n-1) → orbital shape (s, p, d, f)</li>
            <li><strong>m<sub>l</sub> (magnetic):</strong> -l to +l → orbital orientation</li>
            <li><strong>m<sub>s</sub> (spin):</strong> +½ or -½ → electron spin</li>
          </ul>
        </div>

        <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Electronic Configuration Rules</h3>
          <ul>
            <li><strong>Aufbau Principle:</strong> Fill orbitals from lowest to highest energy</li>
            <li><strong>Pauli Exclusion:</strong> Max 2 electrons per orbital, opposite spins</li>
            <li><strong>Hund's Rule:</strong> Fill degenerate orbitals singly before pairing</li>
          </ul>
        </div>

        <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Important Formulas</h3>
          <ul>
            <li><strong>Bohr Energy:</strong> E<sub>n</sub> = -13.6/n² eV (hydrogen)</li>
            <li><strong>de Broglie:</strong> λ = h/p</li>
            <li><strong>Photon Energy:</strong> E = hν = hc/λ</li>
            <li><strong>Max Electrons:</strong> In level n = 2n²</li>
            <li><strong>Number of Orbitals:</strong> In level n = n²</li>
          </ul>
        </div>

        <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Common Exceptions</h3>
          <ul>
            <li><strong>Chromium (24):</strong> [Ar] 4s¹ 3d⁵ (not 4s² 3d⁴)</li>
            <li><strong>Copper (29):</strong> [Ar] 4s¹ 3d¹⁰ (not 4s² 3d⁹)</li>
            <li>Reason: Half-filled and fully-filled d subshells are more stable</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Quick Reference: Orbital Capacity</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: rgba(128, 128, 128, 0.2);">
              <th style="padding: 10px; text-align: left;">Subshell</th>
              <th style="padding: 10px; text-align: left;">Number of Orbitals</th>
              <th style="padding: 10px; text-align: left;">Max Electrons</th>
            </tr>
            <tr>
              <td style="padding: 10px;">s (l=0)</td>
              <td style="padding: 10px;">1</td>
              <td style="padding: 10px;">2</td>
            </tr>
            <tr style="background: rgba(128, 128, 128, 0.1);">
              <td style="padding: 10px;">p (l=1)</td>
              <td style="padding: 10px;">3</td>
              <td style="padding: 10px;">6</td>
            </tr>
            <tr>
              <td style="padding: 10px;">d (l=2)</td>
              <td style="padding: 10px;">5</td>
              <td style="padding: 10px;">10</td>
            </tr>
            <tr style="background: rgba(128, 128, 128, 0.1);">
              <td style="padding: 10px;">f (l=3)</td>
              <td style="padding: 10px;">7</td>
              <td style="padding: 10px;">14</td>
            </tr>
          </table>
        </div>
      `
    },
    flashcards: {
      title: 'Flashcards',
      cards: [
        { front: 'What is the charge of a proton?', back: '+1 (or +1.602 × 10⁻¹⁹ C)' },
        { front: 'What is the mass of an electron in amu?', back: '0.0005 amu (or 9.109 × 10⁻³¹ kg)' },
        { front: 'What does the principal quantum number (n) determine?', back: 'Energy level and orbital size' },
        { front: 'How many orbitals are in a d subshell?', back: '5 orbitals' },
        { front: 'What is Hund\'s Rule?', back: 'Electrons occupy degenerate orbitals singly with parallel spins before pairing' },
        { front: 'What is the electron configuration of Carbon (Z=6)?', back: '1s² 2s² 2p²' },
        { front: 'What is the maximum number of electrons in n=2?', back: '8 electrons (2n² = 2(4) = 8)' },
        { front: 'What shape is an s orbital?', back: 'Spherical' },
        { front: 'What is the Pauli Exclusion Principle?', back: 'No two electrons can have identical quantum numbers' },
        { front: 'What is the de Broglie wavelength formula?', back: 'λ = h/p (wavelength = Planck\'s constant / momentum)' },
        { front: 'For n=3, what are the possible l values?', back: 'l = 0, 1, 2 (s, p, d orbitals)' },
        { front: 'What is the Aufbau Principle?', back: 'Electrons fill orbitals from lowest to highest energy' }
      ]
    },
    applications: {
      title: 'Real-World Applications',
      content: `
        <h2>How Atomic Structure Impacts Our World</h2>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>🔬 Spectroscopy and Analytical Chemistry</h3>
          <p><strong>Application:</strong> Identifying elements in stars, forensics, and quality control</p>
          <p>When electrons transition between energy levels, they emit or absorb specific wavelengths of light. Each element has a unique spectral "fingerprint."</p>
          <ul>
            <li><strong>Astronomy:</strong> Determining composition of distant stars and galaxies</li>
            <li><strong>Forensics:</strong> Identifying trace elements in crime scene evidence</li>
            <li><strong>Environmental:</strong> Detecting pollutants in water and air</li>
            <li><strong>Medical:</strong> Analyzing blood and tissue samples</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>💡 Light Emitting Diodes (LEDs)</h3>
          <p><strong>Application:</strong> Energy-efficient lighting and displays</p>
          <p>LEDs work based on electron transitions in semiconductors. Understanding energy levels allows engineers to design LEDs that emit specific colors:</p>
          <ul>
            <li>Red LEDs: Smaller energy gap (1.8-2.0 eV)</li>
            <li>Blue LEDs: Larger energy gap (2.5-3.0 eV)</li>
            <li>White LEDs: Combination of blue LED with phosphor coating</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>🎆 Fireworks and Flame Colors</h3>
          <p><strong>Application:</strong> Creating colorful displays</p>
          <p>Firework colors come from electron transitions in metal atoms:</p>
          <ul>
            <li><strong>Red:</strong> Strontium or lithium compounds</li>
            <li><strong>Orange:</strong> Calcium compounds</li>
            <li><strong>Yellow:</strong> Sodium compounds</li>
            <li><strong>Green:</strong> Barium compounds</li>
            <li><strong>Blue:</strong> Copper compounds</li>
            <li><strong>Purple:</strong> Potassium compounds</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>🔋 Battery Technology</h3>
          <p><strong>Application:</strong> Energy storage systems</p>
          <p>Understanding electron configurations helps design better batteries:</p>
          <ul>
            <li><strong>Lithium-ion:</strong> Lithium's single valence electron makes it ideal for batteries</li>
            <li><strong>Transition metals:</strong> Variable oxidation states enable redox reactions</li>
            <li><strong>Electrode materials:</strong> Designed based on electron transfer capabilities</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>🏥 Medical Imaging (MRI)</h3>
          <p><strong>Application:</strong> Non-invasive diagnostic imaging</p>
          <p>MRI exploits nuclear spin (a quantum property) of hydrogen atoms in water molecules:</p>
          <ul>
            <li>Hydrogen nuclei act like tiny magnets</li>
            <li>Radio waves excite these "magnets" to higher energy states</li>
            <li>As they relax, they emit signals detected by the scanner</li>
            <li>Different tissues have different hydrogen densities, creating contrast</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>🌞 Solar Cells</h3>
          <p><strong>Application:</strong> Converting sunlight to electricity</p>
          <p>Photovoltaic cells use quantum principles:</p>
          <ul>
            <li>Photons excite electrons from valence to conduction band</li>
            <li>Energy gap in semiconductor determines which wavelengths are absorbed</li>
            <li>Silicon's electron configuration makes it ideal for solar cells</li>
            <li>Doping (adding impurities) creates p-type and n-type semiconductors</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>🔬 Electron Microscopy</h3>
          <p><strong>Application:</strong> Imaging at atomic resolution</p>
          <p>Uses wave nature of electrons (de Broglie wavelength):</p>
          <ul>
            <li>Accelerated electrons have very short wavelengths</li>
            <li>Can resolve features much smaller than light microscopes</li>
            <li>Essential for nanotechnology and materials science</li>
            <li>Can achieve magnifications over 10,000,000×</li>
          </ul>
        </div>

        <div style="background: rgba(128, 128, 128, 0.1); padding: 24px; border-radius: 12px; margin: 20px 0;">
          <h3>💻 Quantum Computing</h3>
          <p><strong>Application:</strong> Next-generation computing</p>
          <p>Exploits quantum properties of particles:</p>
          <ul>
            <li><strong>Superposition:</strong> Qubits can be in multiple states simultaneously</li>
            <li><strong>Entanglement:</strong> Quantum correlation between particles</li>
            <li><strong>Electron spin:</strong> Used as basis for quantum bits</li>
            <li>Potential to solve problems impossible for classical computers</li>
          </ul>
        </div>

        <h3 style="margin-top: 40px;">Key Takeaway</h3>
        <p style="font-size: 1.1em; line-height: 1.6;">Understanding atomic structure isn't just theoretical - it's the foundation for modern technology, from smartphones to medical diagnostics, from renewable energy to advanced materials. Every time you use an LED light, see fireworks, or undergo an MRI scan, you're witnessing quantum mechanics in action!</p>
      `
    }
  }
}