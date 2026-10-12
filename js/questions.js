/**
 * AstroMobbin Quiz — Question Bank
 * 30 questions: long descriptive prompts, one-word MCQ answers, Easy → Hard
 */

const QUESTION_BANK = [

  /* ======================== EASY (10) ======================== */
  {
    id: 1, difficulty: "easy",
    question: "Scientists discovered that Saturn's iconic rings, which extend hundreds of thousands of kilometers from the planet and are clearly visible through even a basic telescope, are primarily composed of tiny particles of this frozen substance that is also essential for all life on Earth.",
    options: ["Ice", "Rock", "Metal", "Gas"],
    correct: 0
  },
  {
    id: 2, difficulty: "easy",
    question: "The Latin word 'Proxima' gives its name to the nearest star to our solar system located 4.24 light-years away in the Alpha Centauri system — and this Latin word translates to what single English word meaning 'closest'?",
    options: ["Nearest", "Brightest", "Smallest", "Oldest"],
    correct: 0
  },
  {
    id: 3, difficulty: "easy",
    question: "When Neil Armstrong stepped onto the lunar surface on July 20, 1969, during the Apollo 11 mission, he famously described Earth as appearing like a beautiful blue — and this common round toy name became one of the most iconic phrases in space exploration history.",
    options: ["Marble", "Ball", "Orb", "Globe"],
    correct: 0
  },
  {
    id: 4, difficulty: "easy",
    question: "Venus rotates so incredibly slowly on its axis that a single rotation takes longer than Venus completes one full orbit around the Sun, making it the solar system planet with the longest solar — of any planet.",
    options: ["Day", "Year", "Season", "Night"],
    correct: 0
  },
  {
    id: 5, difficulty: "easy",
    question: "Our Sun generates its enormous energy by smashing pairs of hydrogen nuclei together under extreme pressure in its 15-million-degree core to form helium atoms, releasing vast quantities of light and heat in a process called nuclear — what?",
    options: ["Fusion", "Fission", "Decay", "Combustion"],
    correct: 0
  },
  {
    id: 6, difficulty: "easy",
    question: "Isaac Newton is credited with discovering the invisible attractive force between all objects with mass, which keeps our feet on the ground, holds the Moon in orbit around Earth, and keeps all planets orbiting the Sun — this force is called — what?",
    options: ["Gravity", "Magnetism", "Inertia", "Friction"],
    correct: 0
  },
  {
    id: 7, difficulty: "easy",
    question: "Our solar system lies within a specific spiral arm of the Milky Way galaxy, which is named after a famous winter constellation visible from Earth that depicts a great hunter figure from ancient Greek mythology.",
    options: ["Orion", "Perseus", "Cygnus", "Gemini"],
    correct: 0
  },
  {
    id: 8, difficulty: "easy",
    question: "When the Moon passes directly between the Earth and the Sun during its monthly orbit, perfectly blocking the Sun's disk and creating a brief period of unexpected daytime darkness visible from certain locations on Earth, the dramatic event is called a solar — what?",
    options: ["Eclipse", "Transit", "Occultation", "Alignment"],
    correct: 0
  },
  {
    id: 9, difficulty: "easy",
    question: "The atmospheric process where carbon dioxide, methane, and water vapor absorb heat that radiates from Earth's surface and prevent it from escaping to space, thus warming the planet in a manner similar to the glass panels of a garden enclosure, is called the greenhouse — what?",
    options: ["Effect", "Cycle", "Layer", "Zone"],
    correct: 0
  },
  {
    id: 10, difficulty: "easy",
    question: "The most abundant gas in Earth's atmosphere, making up approximately 78 percent of the air we breathe and participating in the biological cycle that sustains plant and animal life through soil bacteria and root nodules, is the element — what?",
    options: ["Nitrogen", "Oxygen", "Argon", "Carbon"],
    correct: 0
  },

  /* ======================== MEDIUM (10) ======================== */
  {
    id: 11, difficulty: "medium",
    question: "The James Webb Space Telescope, launched on Christmas Day 2021 and positioned at the Lagrange point L2 some 1.5 million kilometers from Earth, primarily observes the universe using this type of electromagnetic radiation that is invisible to human eyes but reveals the heat signatures of ancient, distant objects.",
    options: ["Infrared", "Ultraviolet", "Microwave", "X-ray"],
    correct: 0
  },
  {
    id: 12, difficulty: "medium",
    question: "When a massive star many times the size of our Sun exhausts all of its nuclear fuel and collapses catastrophically under its own gravity, the resulting explosion of its outer layers is so enormously bright it can temporarily outshine every other star in an entire galaxy combined.",
    options: ["Supernova", "Pulsar", "Quasar", "Nebula"],
    correct: 0
  },
  {
    id: 13, difficulty: "medium",
    question: "The world's very first artificial satellite, launched into Earth's orbit by the Soviet Union in October 1957 at the dawn of the space age, transmitted a simple repetitive radio beep back to Earth and was named — what?",
    options: ["Sputnik", "Vostok", "Mir", "Cosmos"],
    correct: 0
  },
  {
    id: 14, difficulty: "medium",
    question: "Surrounding every black hole is a theoretical boundary in space from which nothing — not even light traveling at 300,000 kilometers per second — can escape once it crosses inward due to the overwhelming gravitational force, and this boundary is called the event — what?",
    options: ["Horizon", "Boundary", "Limit", "Threshold"],
    correct: 0
  },
  {
    id: 15, difficulty: "medium",
    question: "The NASA Mars rover that successfully landed in ancient Jezero Crater in February 2021, carrying a miniature helicopter as a technology demonstration and actively drilling core rock samples to be eventually returned to Earth for analysis, is named — what?",
    options: ["Perseverance", "Curiosity", "Opportunity", "Spirit"],
    correct: 0
  },
  {
    id: 16, difficulty: "medium",
    question: "The twin spacecraft launched in 1977 during a rare planetary alignment that occurs only once every 175 years flew past all four outer gas giants and eventually became the first human-made objects in history to enter true interstellar space beyond the solar bubble.",
    options: ["Voyager", "Pioneer", "Cassini", "Ulysses"],
    correct: 0
  },
  {
    id: 17, difficulty: "medium",
    question: "The four-pound experimental helicopter carried beneath the Perseverance rover to Mars made history on April 19, 2021 as the first powered, controlled aircraft to achieve flight on another planet, completing dozens of flights across the Martian terrain — its name is — what?",
    options: ["Ingenuity", "Courage", "Pioneer", "Liberty"],
    correct: 0
  },
  {
    id: 18, difficulty: "medium",
    question: "Saturn's small icy moon Enceladus spectacularly shoots geysers of water vapor, organic molecules, and salt particles into space through fractures at its south pole, indicating a warm liquid ocean beneath the ice kept from freezing by gravitational tidal — what?",
    options: ["Heating", "Melting", "Friction", "Energy"],
    correct: 0
  },
  {
    id: 19, difficulty: "medium",
    question: "Astronomers searching for exoplanets around distant stars commonly use a technique that detects the tiny, periodic dimming of starlight that occurs precisely when a planet crosses in front of its host star as seen from Earth — this is called the transit — what?",
    options: ["Method", "Technique", "Survey", "Detection"],
    correct: 0
  },
  {
    id: 20, difficulty: "medium",
    question: "The astronomical distance measurement representing how far light — traveling at approximately 300,000 kilometers per second through the vacuum of space — can travel in a full twelve-month period, equaling approximately 9.46 trillion kilometers, is called a light — what?",
    options: ["Year", "Minute", "Second", "Parsec"],
    correct: 0
  },

  /* ======================== HARD (10) ======================== */
  {
    id: 21, difficulty: "hard",
    question: "Observations of distant Type Ia supernovae in 1998 revealed the astonishing discovery that the universe's expansion is accelerating rather than slowing down, driven by a mysterious repulsive force that permeates all of space and makes up approximately 68 percent of the universe's total energy budget — called dark — what?",
    options: ["Energy", "Matter", "Force", "Pressure"],
    correct: 0
  },
  {
    id: 22, difficulty: "hard",
    question: "The Cambridge-based theoretical physicist who mathematically proved in 1974 that black holes are not completely black but slowly emit thermal radiation due to quantum vacuum fluctuations near the event horizon — a discovery bridging quantum mechanics and general relativity — had what last name?",
    options: ["Hawking", "Penrose", "Schwarzschild", "Einstein"],
    correct: 0
  },
  {
    id: 23, difficulty: "hard",
    question: "The faint cosmic microwave background radiation that permeates all of space at a temperature of about 2.7 Kelvin was created 380,000 years after the Big Bang when the universe cooled enough for electrons to bind to protons, forming neutral hydrogen and releasing photons — this epoch is called — what?",
    options: ["Recombination", "Nucleosynthesis", "Inflation", "Reionization"],
    correct: 0
  },
  {
    id: 24, difficulty: "hard",
    question: "When a massive foreground object such as a galaxy cluster distorts the fabric of spacetime so severely that it bends and magnifies the light from objects far behind it — sometimes creating multiple distorted images or luminous arcs around the foreground mass — the phenomenon is called gravitational — what?",
    options: ["Lensing", "Bending", "Focusing", "Warping"],
    correct: 0
  },
  {
    id: 25, difficulty: "hard",
    question: "Albert Einstein's landmark 1915 theory describes gravity not as an instantaneous force acting across empty space as Newton proposed, but instead as the curvature of four-dimensional spacetime caused by the presence of mass and energy — this framework is called general — what?",
    options: ["Relativity", "Gravity", "Mechanics", "Dynamics"],
    correct: 0
  },
  {
    id: 26, difficulty: "hard",
    question: "The Parker Solar Probe uses multiple Venus gravity-assist flybys to progressively tighten its orbit around the Sun, allowing it to plunge directly into the Sun's outer atmosphere — traveling at over 690,000 kilometers per hour through the region known as the solar — what?",
    options: ["Corona", "Chromosphere", "Photosphere", "Heliosphere"],
    correct: 0
  },
  {
    id: 27, difficulty: "hard",
    question: "The mathematical framework pioneered by Niels Bohr, Werner Heisenberg, Erwin Schrödinger, and others in the 1920s, describing subatomic particles in terms of probability wave functions and irreducible uncertainty in position and momentum, forms the foundation of all modern physics and chemistry — it is called quantum — what?",
    options: ["Mechanics", "Physics", "Theory", "Dynamics"],
    correct: 0
  },
  {
    id: 28, difficulty: "hard",
    question: "The standard unit astronomers use when measuring distances within our solar system, defined precisely as the mean Earth-Sun distance of 149,597,870.7 kilometers and commonly abbreviated as AU, is technically called an astronomical — what?",
    options: ["Unit", "Measure", "Standard", "Constant"],
    correct: 0
  },
  {
    id: 29, difficulty: "hard",
    question: "In orbital mechanics, the specific point in any elliptical orbit around the Sun at which an orbiting body is closest to the Sun — the opposite of aphelion — and which Earth reaches every year in early January while in the Northern Hemisphere's winter, is called — what?",
    options: ["Perihelion", "Aphelion", "Zenith", "Nadir"],
    correct: 0
  },
  {
    id: 30, difficulty: "hard",
    question: "Rapidly rotating neutron stars that emit tightly collimated beams of radio waves or X-rays like cosmic lighthouses, and whose pulses arrive with such extraordinary regularity — rivaling atomic clocks in precision — that arrays of them are being used as a galactic — what?",
    options: ["Clock", "Beacon", "Compass", "Ruler"],
    correct: 0
  }
];

/** Fisher-Yates shuffle utility */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Get 10 randomized questions: 3 easy, 4 medium, 3 hard
 * Each question has its options freshly shuffled with correct index remapped.
 */
function getRandomizedQuiz() {
  const easy   = shuffleArray(QUESTION_BANK.filter(q => q.difficulty === "easy")).slice(0, 3);
  const medium = shuffleArray(QUESTION_BANK.filter(q => q.difficulty === "medium")).slice(0, 4);
  const hard   = shuffleArray(QUESTION_BANK.filter(q => q.difficulty === "hard")).slice(0, 3);

  const selected = [...easy, ...medium, ...hard];

  // Shuffle the options for each question (track correct answer)
  return selected.map(q => {
    const correctWord = q.options[q.correct];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIdx = shuffledOptions.indexOf(correctWord);
    return {
      ...q,
      options: shuffledOptions,
      correct: newCorrectIdx
    };
  });
}
