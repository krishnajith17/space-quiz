/**
 * AstroMobbin - Curated Space Intelligence & Quiz Missions
 * Scientifically verified database of celestial missions, rovers, astrophysics, and cosmology.
 */

const MISSIONS_DATA = [
  {
    id: "james-webb",
    title: "James Webb: Peering into the Cosmic Dawn",
    shortTitle: "James Webb Telescope",
    category: "telescopes",
    categoryLabel: "Telescopes & Observatories",
    difficulty: "commander",
    difficultyLabel: "Commander",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.96,
    playsCount: "18.4k",
    completionRate: "72%",
    featured: true,
    accentColor: "#F59E0B", // Amber gold like JWST mirrors
    tagline: "Unfold the gold mirrors at L2 and capture first light from the early universe.",
    overview: "The James Webb Space Telescope (JWST) is humanity's premier deep-space observatory. Operating at the Sun-Earth L2 Lagrange point 1.5 million kilometers from Earth, JWST uses gold-coated beryllium mirrors to observe the cosmos in high-resolution infrared.",
    tags: ["Infrared", "L2 Lagrange", "First Stars", "Exoplanet Atmospheres", "NASA/ESA/CSA"],
    objectives: [
      "Understand the mechanics of the Sun-Earth L2 orbit",
      "Decode how infrared sensors pierce cosmic dust clouds",
      "Analyze JWST's discoveries of early galaxies and exoplanet water vapor",
      "Learn the physics behind beryllium-gold mirrors and tennis-court sunshields"
    ],
    coverSvgType: "jwst",
    questions: [
      {
        id: "jwst-1",
        question: "At which gravitational equilibrium point does the James Webb Space Telescope orbit?",
        options: [
          "Sun-Earth L1 Point (between Sun and Earth)",
          "Sun-Earth L2 Point (1.5M km behind Earth)",
          "Earth-Moon L4 Trojan Point",
          "Low Earth Orbit (LEO) at 550 km"
        ],
        correctIndex: 1,
        hint: "It lies along the line connecting the Sun and Earth, approximately 1.5 million kilometers away from Earth on the night side.",
        explanation: "JWST operates in a halo orbit around the Sun-Earth L2 (second Lagrange point). This location allows Earth and the Sun to stay in the same direction, allowing the multi-layered sunshield to constantly shield its mirrors from heat and radiation."
      },
      {
        id: "jwst-2",
        question: "Why are the 18 hexagonal primary mirror segments of JWST plated with an ultra-thin layer of gold?",
        options: [
          "Gold prevents cosmic micro-meteoroid collisions",
          "Gold provides maximum reflectivity for infrared wavelengths",
          "Gold prevents mirror segments from freezing below 0 Kelvin",
          "Gold makes the telescope completely transparent to solar wind"
        ],
        correctIndex: 1,
        hint: "Webb specializes in infrared astronomy, and gold reflects red and infrared light with near 98% efficiency.",
        explanation: "Gold reflects red and infrared light far better than aluminum or silver, achieving up to 98% reflectivity between 0.6 and 28 microns. Despite covering the 21-foot mirror, only about 48 grams of pure vaporized gold (about the mass of a golf ball) was used."
      },
      {
        id: "jwst-3",
        question: "What primary mechanism keeps JWST's instruments cooled to their required operating temperature near 40 Kelvin (-233°C)?",
        options: [
          "A massive liquid nitrogen reservoir replenished by solar panels",
          "A five-layer Kapton sunshield the size of a tennis court",
          "A nuclear thermal cooling loop radiating into deep space",
          "Continuous rotation to keep mirrors in perpetual eclipse"
        ],
        correctIndex: 1,
        hint: "It consists of 5 ultra-thin membrane sheets separated by vacuum gaps, creating a 300°C temperature differential.",
        explanation: "JWST's five-layer sunshield made of aluminum-coated Kapton blocks solar heat. While the sun-facing side absorbs up to 85°C (185°F), the instrument side stays passive at -233°C (40 K). The MIRI instrument has an extra closed-cycle helium cryocooler to reach 7 Kelvin."
      },
      {
        id: "jwst-4",
        question: "Which landmark early universe deep field image was the first operational science image publicly unveiled from JWST in July 2022?",
        options: [
          "Pillars of Creation in M16",
          "SMACS 0723 Gravitational Lens Deep Field",
          "Horsehead Nebula Infrared Mosaic",
          "Sombrero Galaxy Core Cluster"
        ],
        correctIndex: 1,
        hint: "It features a massive galaxy cluster acting as a gravitational magnifying glass, distorting background galaxies from over 13 billion years ago.",
        explanation: "SMACS 0723 was revealed by President Biden and NASA as the deepest and sharpest infrared image of the distant universe so far. The foreground galaxy cluster acts as a gravitational lens, bending and magnifying galaxies that existed just a few hundred million years after the Big Bang."
      },
      {
        id: "jwst-5",
        question: "Why was infrared light chosen over visible light as JWST's primary observational spectrum?",
        options: [
          "Cosmic dust absorbs infrared light more strongly than visible light",
          "Cosmological redshift shifts light from the earliest galaxies into the infrared",
          "Infrared cameras require less power to operate in deep space",
          "The Sun does not emit any infrared radiation at the L2 point"
        ],
        correctIndex: 1,
        hint: "Because the universe has been expanding for 13.8 billion years, ancient photons have been stretched out into longer wavelengths.",
        explanation: "Due to the metric expansion of space, light emitted by the earliest stars and galaxies as visible and ultraviolet light has been stretched into longer infrared wavelengths. Infrared can also penetrate thick clouds of interstellar gas and dust, revealing stellar nurseries."
      },
      {
        id: "jwst-6",
        question: "Which of JWST's science instruments requires an active closed-cycle helium loop cryocooler to drop down to a blistering 7 Kelvin (-266°C)?",
        options: [
          "NIRCam (Near-Infrared Camera)",
          "NIRSpec (Near-Infrared Spectrograph)",
          "MIRI (Mid-Infrared Instrument)",
          "FGS/NIRISS (Fine Guidance Sensor)"
        ],
        correctIndex: 2,
        hint: "This instrument operates in the mid-infrared spectrum (5 to 28 microns), which is extremely sensitive to thermal noise from the telescope itself.",
        explanation: "MIRI (Mid-Infrared Instrument) operates at wavelengths of 5 to 28 microns. To detect mid-infrared radiation without being blinded by its own thermal glow, MIRI must be cooled down to 7 Kelvin (-266°C) using a sophisticated closed-cycle mechanical pulse-tube cryocooler."
      },
      {
        id: "jwst-7",
        question: "What groundbreaking chemical detection did JWST make in the atmosphere of exoplanet WASP-39b?",
        options: [
          "Chlorofluorocarbons produced by industrial cities",
          "Carbon dioxide and sulfur dioxide photochemistry",
          "Pure liquid metallic hydrogen clouds",
          "Chlorophyll biosignatures from surface vegetation"
        ],
        correctIndex: 1,
        hint: "It represented the first indisputable detection of CO2 and sulfur dioxide generated by sunlight photochemical reactions on a distant world.",
        explanation: "In late 2022, JWST delivered the first clear detection of carbon dioxide (CO2) and photochemically produced sulfur dioxide (SO2) in the atmosphere of exoplanet WASP-39b, confirming that atmospheric chemistry on hot gas giants can be altered by their host star's light."
      },
      {
        id: "jwst-8",
        question: "How long was the critical '29 days on the edge' deployment sequence after JWST launched on an Ariane 5 rocket on Christmas 2021?",
        options: [
          "Over 300 single-point failures had to execute with 100% precision",
          "Only 3 minor mechanical latches needed to unspring",
          "The mirror unfolded automatically in the first 10 minutes",
          "Astronauts boarded Webb to manually tension the cables"
        ],
        correctIndex: 0,
        hint: "Because the telescope was folded like origami inside a 5-meter rocket fairing, hundreds of individual pyrotechnic pins and actuators were required.",
        explanation: "Because JWST was too large to fit in any rocket fairing in an unfolded state, it had 344 single-point failures and 50 major deployments during its 1.5-million-kilometer cruise to L2. All 344 deployments completed flawlessly with zero human physical intervention."
      }
    ]
  },

  {
    id: "black-holes",
    title: "Event Horizon: The Physics of Black Holes",
    shortTitle: "Event Horizon",
    category: "deep-space",
    categoryLabel: "Deep Space & Astrophysics",
    difficulty: "commander",
    difficultyLabel: "Commander",
    duration: "8 Qs • 5 min",
    questionCount: 8,
    estimatedMinutes: 5,
    rating: 4.98,
    playsCount: "24.1k",
    completionRate: "64%",
    featured: true,
    accentColor: "#A855F7", // Cosmic purple
    tagline: "Cross the photon sphere and test your grasp of relativity, Hawking radiation, and singularities.",
    overview: "Black holes represent the most extreme laboratories in astrophysics. From the boundary where escape velocity surpasses light to the quantum evaporations predicted by Stephen Hawking, test your grasp of gravitational collapse.",
    tags: ["Singularity", "Relativity", "Hawking Radiation", "Sagittarius A*", "Event Horizon Telescope"],
    objectives: [
      "Master the definition of the Schwarzschild radius and photon sphere",
      "Understand the mechanics of gravitational time dilation",
      "Analyze the Event Horizon Telescope's imaging of M87* and Sgr A*",
      "Examine quantum virtual particles and Hawking radiation thermodynamics"
    ],
    coverSvgType: "blackhole",
    questions: [
      {
        id: "bh-1",
        question: "What is the physical boundary around a black hole beyond which nothing—not even light—can escape?",
        options: [
          "Accretion Boundary",
          "Event Horizon",
          "Photon Degeneracy Limit",
          "Chandrasekhar Limit"
        ],
        correctIndex: 1,
        hint: "It represents the mathematical surface where the escape velocity exactly equals the speed of light (c).",
        explanation: "The Event Horizon is the threshold where gravitational escape velocity equals the speed of light. Any matter or radiation that crosses this boundary is inevitably pulled toward the central gravitational singularity."
      },
      {
        id: "bh-2",
        question: "If the Sun were compressed into a black hole without losing mass, what would its Schwarzschild radius be?",
        options: [
          "Approximately 3 kilometers",
          "Approximately 700,000 kilometers",
          "Approximately 1 astronomical unit",
          "Zero (a mathematical point)"
        ],
        correctIndex: 0,
        hint: "Using the formula R_s = 2GM/c^2 for a solar mass (2 × 10^30 kg), the radius is remarkably small, about the size of a small town.",
        explanation: "Using Schwarzschild's formula Rs = 2GM/c², compressing our Sun's mass into a black hole yields a radius of about 2.95 kilometers (approx 3 km). Planetary orbits would remain completely unchanged gravitationally at 1 AU."
      },
      {
        id: "bh-3",
        question: "What occurs to time as an outside observer watches a clock fall toward a black hole's event horizon?",
        options: [
          "The clock speeds up exponentially and emits blue flashes",
          "The clock appears to slow down continuously and infinitely redshifts",
          "The clock runs backwards into the past",
          "The clock ticks at the exact same rate regardless of gravity"
        ],
        correctIndex: 1,
        hint: "Einstein's general relativity dictates that strong gravitational potential causes extreme gravitational time dilation.",
        explanation: "To a distant observer, gravitational time dilation makes the falling clock appear to tick slower and slower as it nears the event horizon. The photons emitted also undergo gravitational redshift, stretching to infinite wavelength so the object fades out before crossing."
      },
      {
        id: "bh-4",
        question: "What process theoretical physicist Stephen Hawking proposed causes black holes to slowly lose mass and eventually evaporate?",
        options: [
          "Cosmic ray tunneling",
          "Hawking Radiation through quantum vacuum fluctuations",
          "Tidal friction with cosmic background microwaves",
          "Magnetic field reconnection at the ergosphere"
        ],
        correctIndex: 1,
        hint: "At the event horizon, virtual particle-antiparticle pairs spontaneously form; one falls in while the other escapes with positive energy.",
        explanation: "Hawking radiation arises from quantum field theory in curved spacetime: virtual particle-antiparticle pairs form near the horizon. When one particle with negative energy relative to infinity falls into the black hole and the other escapes, the black hole loses mass."
      },
      {
        id: "bh-5",
        question: "What supermassive black hole sits at the exact gravitational center of our own Milky Way galaxy?",
        options: [
          "Cygnus X-1",
          "Sagittarius A*",
          "Messier 87*",
          "Centaurus A"
        ],
        correctIndex: 1,
        hint: "It contains roughly 4.1 million solar masses and was photographed by the Event Horizon Telescope in 2022.",
        explanation: "Sagittarius A* (pronounced Sagittarius A-star) is the supermassive black hole at the center of the Milky Way. Andrea Ghez and Reinhard Genzel won the 2020 Nobel Prize in Physics for tracking stars orbiting this compact 4.1-million-solar-mass anchor."
      },
      {
        id: "bh-6",
        question: "What is the extreme vertical stretching and horizontal compression of an object falling into a steep gravitational gradient called?",
        options: [
          "Gravitational Lensing",
          "Spaghettification (Tidal Disruption)",
          "Frame Dragging",
          "Hydrodynamic Shear"
        ],
        correctIndex: 1,
        hint: "The tidal force on your feet is dramatically higher than on your head, pulling you into a long, thin noodle shape.",
        explanation: "Spaghettification (or the noodle effect) occurs because the gravitational pull on the part of your body closest to the black hole is drastically stronger than on the part furthest away, vertically stretching the object while horizontally compressing it."
      },
      {
        id: "bh-7",
        question: "In a spinning (Kerr) black hole, what is the region outside the event horizon where spacetime itself is dragged in rotation called?",
        options: [
          "The Ergosphere",
          "The Oort Sphere",
          "The Roche Lobe",
          "The Penrose Horizon"
        ],
        correctIndex: 0,
        hint: "In this zone, an observer cannot stand still relative to a distant observer because of the frame-dragging effect.",
        explanation: "The Ergosphere is an oblate spheroidal region outside a rotating black hole's event horizon. Here, frame-dragging (the Lense-Thirring effect) is so powerful that spacetime itself rotates faster than light, and energy can be extracted via the Penrose process."
      },
      {
        id: "bh-8",
        question: "In 2019, which global array of radio telescopes produced the first-ever direct image of a black hole's shadow (in galaxy M87)?",
        options: [
          "Hubble Space Telescope",
          "Event Horizon Telescope (EHT)",
          "Very Large Array (VLA)",
          "James Webb Space Telescope"
        ],
        correctIndex: 1,
        hint: "It used Very Long Baseline Interferometry (VLBI) combining radio dishes from Hawaii, Chile, Spain, and the South Pole.",
        explanation: "The Event Horizon Telescope (EHT) is a planetary-scale array of synchronized radio observatories. In April 2019, they released the historic first image of M87*, showing the dark silhouette shadow surrounded by an asymmetric ring of glowing plasma."
      }
    ]
  },

  {
    id: "apollo-artemis",
    title: "Apollo to Artemis: The Lunar Chronicles",
    shortTitle: "Lunar Chronicles",
    category: "rockets",
    categoryLabel: "Rockets & Spaceflight",
    difficulty: "cadet",
    difficultyLabel: "Cadet",
    duration: "8 Qs • 3 min",
    questionCount: 8,
    estimatedMinutes: 3,
    rating: 4.92,
    playsCount: "31.2k",
    completionRate: "89%",
    featured: true,
    accentColor: "#38BDF8", // Sky blue
    tagline: "From Apollo 11's Sea of Tranquility to Artemis III's South Pole water ice expeditions.",
    overview: "Relive humanity's greatest voyages beyond Earth orbit. Learn the engineering behind the Saturn V and SLS, the Apollo guidance computers, and NASA's modern Artemis lunar architecture.",
    tags: ["Apollo 11", "Artemis", "SLS", "Saturn V", "Lunar Gateway", "Moon Landing"],
    objectives: [
      "Understand the key milestones of Apollo 11 and lunar landings",
      "Compare the propulsion of Saturn V and the Space Launch System (SLS)",
      "Explore the scientific significance of the Moon's South Pole water ice",
      "Learn how Lunar Gateway will support sustainable human presence"
    ],
    coverSvgType: "moon",
    questions: [
      {
        id: "apollo-1",
        question: "On which lunar plain did Apollo 11's Lunar Module 'Eagle' touch down on July 20, 1969?",
        options: [
          "Ocean of Storms (Oceanus Procellarum)",
          "Sea of Tranquility (Mare Tranquillitatis)",
          "Sea of Serenity (Mare Serenitatis)",
          "Tycho Crater Basin"
        ],
        correctIndex: 1,
        hint: "Neil Armstrong radioed: 'Houston, Tranquility Base here. The Eagle has landed.'",
        explanation: "Apollo 11 landed in Mare Tranquillitatis (Sea of Tranquility), chosen for its relatively flat, boulder-free topography suitable for the first crewed touchdown."
      },
      {
        id: "apollo-2",
        question: "What colossal rocket, engineered by Wernher von Braun, sent Apollo astronauts to the Moon?",
        options: [
          "Titan II",
          "Saturn V",
          "Atlas-Centaur",
          "Space Shuttle Orbiter"
        ],
        correctIndex: 1,
        hint: "Standing 363 feet tall with 5 massive F-1 kerosene engines in its first stage producing 7.5 million pounds of thrust.",
        explanation: "The Saturn V was a three-stage liquid-fueled super-heavy-lift rocket. To this day, it holds a 100% mission launch success record across 13 flights between 1967 and 1973."
      },
      {
        id: "apollo-3",
        question: "Why is NASA's Artemis program specifically targeting the Lunar South Pole for future astronaut landings?",
        options: [
          "It has the thickest atmosphere on the Moon",
          "Water ice deposits survive inside permanently shadowed craters",
          "It is directly facing Mars at all times",
          "It is the only region with Earth-like gravity"
        ],
        correctIndex: 1,
        hint: "Water can be melted for drinking and electrolyzed into liquid hydrogen and oxygen rocket propellant.",
        explanation: "Permanently Shadowed Regions (PSRs) at the lunar south pole never see sunlight and act as cold traps preserving billions of tons of water ice. This ice can provide life support and be processed into rocket propellant for deep-space travel."
      },
      {
        id: "apollo-4",
        question: "What is the name of the crew spacecraft flown on Artemis I around the Moon in late 2022?",
        options: [
          "Dragon 2",
          "Orion",
          "Starliner",
          "Cygnus"
        ],
        correctIndex: 1,
        hint: "Named after one of the most recognizable constellations, with a European Service Module providing power and propulsion.",
        explanation: "The Orion spacecraft carried three mannequins on a 25.5-day uncrewed lunar orbit test during Artemis I, breaking Apollo 13's record for maximum distance traveled from Earth by a spacecraft designed for humans (432,210 km)."
      },
      {
        id: "apollo-5",
        question: "What planned mini-space station will orbit the Moon in a Near-Rectilinear Halo Orbit to support Artemis missions?",
        options: [
          "Skylab II",
          "Lunar Gateway",
          "Mir-2 Orbit Station",
          "Copernicus Outpost"
        ],
        correctIndex: 1,
        hint: "An international outpost serving as a staging point for lunar surface expeditions and future Mars missions.",
        explanation: "The Lunar Gateway is an international space station project led by NASA, ESA, JAXA, and CSA. It will serve as a communications hub, science laboratory, and staging port for lunar surface landers."
      },
      {
        id: "apollo-6",
        question: "What sharp, abrasive material covers the lunar surface, formed from billions of years of meteorite pulverization?",
        options: [
          "Pumice Ash",
          "Lunar Regolith",
          "Obsidian Sand",
          "Basaltic Silt"
        ],
        correctIndex: 1,
        hint: "Without wind or water erosion to round its edges, its microscopic glass shards stick to spacesuits and degrade seals.",
        explanation: "Lunar regolith consists of fine dust, rock fragments, and impact glass beads. Because the Moon has no atmosphere or weather to erode the grains, the dust particles remain razor-sharp and electrostatically charged."
      },
      {
        id: "apollo-7",
        question: "Who was the last human to walk on the lunar surface during Apollo 17 in December 1972?",
        options: [
          "Buzz Aldrin",
          "Gene Cernan",
          "Alan Shepard",
          "Pete Conrad"
        ],
        correctIndex: 1,
        hint: "Commander of Apollo 17, who traced his daughter Tracy's initials into the lunar soil before climbing up the ladder.",
        explanation: "Commander Gene Cernan stepped back onto the Lunar Module ladder on December 14, 1972, leaving the last footprint of the Apollo era with the famous words: 'We leave as we came and, God willing, as we shall return, with peace and hope for all mankind.'"
      },
      {
        id: "apollo-8",
        question: "What vehicle has NASA contracted with SpaceX to serve as the Human Landing System (HLS) for Artemis III?",
        options: [
          "Falcon Heavy Upper Stage",
          "Starship HLS",
          "Crew Dragon Cargo",
          "Red Dragon Capsule"
        ],
        correctIndex: 1,
        hint: "A modified 50-meter-tall spacecraft using Raptor engines, refueling in low Earth orbit before flying to lunar orbit.",
        explanation: "NASA selected SpaceX's Starship HLS to land the Artemis III crew on the lunar surface. Starship HLS will dock with Orion or Gateway in lunar orbit, carry two astronauts to the South Pole for a week-long mission, and return them to orbit."
      }
    ]
  },

  {
    id: "voyager",
    title: "Voyager 1 & 2: The Interstellar Voyagers",
    shortTitle: "Voyager Missions",
    category: "deep-space",
    categoryLabel: "Deep Space & Astrophysics",
    difficulty: "astronaut",
    difficultyLabel: "Astronaut",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.95,
    playsCount: "16.8k",
    completionRate: "81%",
    featured: false,
    accentColor: "#10B981", // Emerald green
    tagline: "47+ years of continuous flight into true interstellar space carrying humanity's Golden Record.",
    overview: "Launched in 1977 during a rare planetary alignment occurring once every 175 years, the twin Voyager probes revolutionized our knowledge of Jupiter, Saturn, Uranus, and Neptune, and are now traversing interstellar space.",
    tags: ["Voyager 1", "Golden Record", "Interstellar Space", "Heliopause", "Jupiter & Saturn"],
    objectives: [
      "Track the grand planetary alignment that made the mission possible",
      "Examine discoveries including Io's volcanoes and Titan's atmosphere",
      "Analyze the boundary of the solar bubble: the Heliopause",
      "Decode the contents and playback instructions on the Golden Record"
    ],
    coverSvgType: "voyager",
    questions: [
      {
        id: "voy-1",
        question: "What rare astronomical alignment in the late 1970s allowed Voyager 1 and 2 to visit all four outer gas giants with a single launch?",
        options: [
          "Planetary alignment occurring once every 175 years",
          "Conjunction occurring every 12 years",
          "Solar minimum occurring every 50 years",
          "Super-Jupiter perihelion passage"
        ],
        correctIndex: 0,
        hint: "Jupiter, Saturn, Uranus, and Neptune lined up along a geometric curve allowing consecutive gravity assists.",
        explanation: "Every 175 years, Jupiter, Saturn, Uranus, and Neptune align in a trajectory allowing a spacecraft to use gravitational slingshots from one planet to propel it to the next without requiring impossible fuel loads."
      },
      {
        id: "voy-2",
        question: "In August 2012, Voyager 1 became the first human-made object to cross which boundary into true interstellar space?",
        options: [
          "The Kuiper Belt inner cliff",
          "The Heliopause",
          "The Oort Cloud outer edge",
          "The Asteroid Belt"
        ],
        correctIndex: 1,
        hint: "The boundary where the solar wind's outward pressure is halted by the interstellar medium of our galaxy.",
        explanation: "The Heliopause marks the outer boundary of the heliosphere, where the solar wind is stopped by the cold matter and magnetic fields of the interstellar medium. Voyager 1 crossed it at 121 AU (18 billion km) from the Sun."
      },
      {
        id: "voy-3",
        question: "Which moon of Jupiter stunned scientists when Voyager 1 photographed active sulfur volcanoes erupting plumes into space?",
        options: [
          "Europa",
          "Ganymede",
          "Io",
          "Callisto"
        ],
        correctIndex: 2,
        hint: "It is the most volcanically active body in our solar system, subjected to extreme tidal flexing from Jupiter.",
        explanation: "Navigator Linda Morabito spotted an umbrella-shaped plume erupting 300 km above Io. Io is the most volcanically active body in the Solar System, driven by immense gravitational tidal friction between Jupiter, Europa, and Ganymede."
      },
      {
        id: "voy-4",
        question: "What power source has kept both Voyager spacecraft operating continuously for over 46 years?",
        options: [
          "High-efficiency triple-junction solar panels",
          "Radioisotope Thermoelectric Generators (RTGs) fueled by Plutonium-238",
          "Lithium-sulfur deep storage fuel cells",
          "Cosmic microwave harvesting antennas"
        ],
        correctIndex: 1,
        hint: "They convert the decay heat of an artificial radioactive isotope directly into electricity via thermocouples.",
        explanation: "In deep space far beyond the reach of meaningful sunlight, Voyagers rely on RTGs containing pellets of Plutonium-238. The heat of radioactive decay is converted into electricity using silicon-germanium thermocouples."
      },
      {
        id: "voy-5",
        question: "What iconic photograph was captured by Voyager 1 in 1990 at the suggestion of astronomer Carl Sagan from 6 billion km away?",
        options: [
          "The Pillars of Creation",
          "The Pale Blue Dot",
          "Earthrise",
          "The Blue Marble"
        ],
        correctIndex: 1,
        hint: "Carl Sagan described Earth as 'a mote of dust suspended in a sunbeam'.",
        explanation: "Before turning off Voyager 1's cameras to conserve power, NASA turned the probe around to snap a 'family portrait' of the Solar System. Earth appeared as a tiny pixel (0.12 pixels in size) inside a scattered ray of sunlight—the immortal 'Pale Blue Dot'."
      },
      {
        id: "voy-6",
        question: "What artifact is affixed to both Voyager spacecraft containing sounds, greetings in 55 languages, and music of Earth?",
        options: [
          "The Silicon Micro-disk",
          "The Golden Record",
          "The Pioneer Titanium Plaque",
          "The Sagan Holo-crystal"
        ],
        correctIndex: 1,
        hint: "A gold-plated copper phonograph record accompanied by a stylus and symbolic playback instructions.",
        explanation: "Chaired by Carl Sagan, NASA placed a 12-inch gold-plated copper phonograph record on both probes containing 115 images, natural sounds, spoken greetings in 55 languages, and 90 minutes of eclectic world music."
      },
      {
        id: "voy-7",
        question: "Which Voyager probe is the ONLY human spacecraft to have completed flybys of both ice giants Uranus and Neptune?",
        options: [
          "Voyager 1",
          "Voyager 2",
          "Pioneer 10",
          "New Horizons"
        ],
        correctIndex: 1,
        hint: "Voyager 1 was diverted after Saturn to study Titan's thick atmosphere, leaving its twin to continue the outer tour.",
        explanation: "Voyager 2 flew by Uranus in January 1986 and Neptune in August 1989. To this day, Voyager 2 remains the only spacecraft to have visited these enigmatic ice giant worlds."
      },
      {
        id: "voy-8",
        question: "Approximately how long does it take for a radio signal sent from Voyager 1 at ~163 AU to reach Earth at the speed of light?",
        options: [
          "About 8 minutes",
          "About 3 hours",
          "Over 22 hours",
          "Almost 2 weeks"
        ],
        correctIndex: 2,
        hint: "At a distance of more than 24 billion kilometers, light traveling at 300,000 km/s takes nearly an entire Earth day.",
        explanation: "At over 24.3 billion kilometers from Earth (163 AU), round-trip light time is nearly 45 hours. A command radioed by NASA's Deep Space Network takes approximately 22.5 hours just to travel one way to the probe."
      }
    ]
  },

  {
    id: "mars-expeditions",
    title: "Red Planet Odyssey: Perseverance & Curiosity",
    shortTitle: "Mars Rovers",
    category: "telescopes",
    categoryLabel: "Telescopes & Planetary Rovers",
    difficulty: "astronaut",
    difficultyLabel: "Astronaut",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.91,
    playsCount: "22.7k",
    completionRate: "79%",
    featured: false,
    accentColor: "#EF4444", // Mars crimson
    tagline: "Drive across Jezero Crater, unleash Ingenuity, and search for ancient microbial biosignatures.",
    overview: "Mars has been explored by generations of rovers. Explore how Curiosity revolutionized our understanding of Gale Crater's ancient lakes and how Perseverance is caching core samples for Earth return.",
    tags: ["Perseverance", "Curiosity", "Ingenuity Helicopter", "Jezero Crater", "Sample Return"],
    objectives: [
      "Examine evidence for past liquid water in Jezero and Gale craters",
      "Understand the sky crane landing system and entry descent landing (EDL)",
      "Learn about the Ingenuity Mars helicopter's 72 historic flights",
      "Discover the MOXIE instrument converting CO2 into breathable oxygen"
    ],
    coverSvgType: "mars",
    questions: [
      {
        id: "mars-1",
        question: "In which geological feature did NASA's Perseverance rover land in February 2021 to search for ancient biosignatures?",
        options: [
          "Gale Crater",
          "Jezero Crater",
          "Valles Marineris",
          "Olympus Mons Caldera"
        ],
        correctIndex: 1,
        hint: "A 45-km-wide impact basin that once hosted a deep lake fed by an ancient river delta.",
        explanation: "Jezero Crater was chosen because orbital data revealed an ancient river delta that deposited rich clay minerals billions of years ago when liquid water flowed, creating ideal conditions to preserve fossilized microbial life."
      },
      {
        id: "mars-2",
        question: "What small robotic technology demonstration hitched a ride under Perseverance's belly and achieved 72 historic powered flights in Mars' thin atmosphere?",
        options: [
          "Sojourner",
          "Ingenuity Helicopter",
          "Sky-Flyer 1",
          "Opportunity Glider"
        ],
        correctIndex: 1,
        hint: "Weighing just 1.8 kg (4 lbs) with twin counter-rotating carbon-fiber blades spinning at 2,400 RPM.",
        explanation: "Ingenuity became the first human craft to achieve powered, controlled aerodynamic flight on another planet. Originally planned for just 5 technology-demonstration flights, it operated for nearly 3 years, logging 72 flights over 17 kilometers."
      },
      {
        id: "mars-3",
        question: "What experimental instrument on Perseverance successfully extracted pure oxygen from the Martian carbon dioxide atmosphere?",
        options: [
          "PIXL",
          "MOXIE (Mars Oxygen ISRU Experiment)",
          "SHERLOC",
          "MEDA"
        ],
        correctIndex: 1,
        hint: "It uses solid oxide electrolysis at 800°C to split CO2 molecules into carbon monoxide and oxygen.",
        explanation: "MOXIE demonstrated In-Situ Resource Utilization (ISRU) by stripping oxygen atoms from CO2 molecules, producing 122 grams of breathable oxygen—enough to keep a small dog alive for 10 hours—critical proof for future human Mars exploration."
      },
      {
        id: "mars-4",
        question: "Why does Mars appear reddish-orange to the naked eye from Earth?",
        options: [
          "Reflective copper and sulfur crystals in the upper atmosphere",
          "High concentrations of iron oxide (rust) in the planetary regolith",
          "Volcanic sulfur lava flows covering the northern plains",
          "Atmospheric methane refracting red sunlight"
        ],
        correctIndex: 1,
        hint: "The same compound that gives rust and blood their red color (Fe2O3).",
        explanation: "Mars' surface is blanketed in fine dust rich in iron oxide (rust). When iron-rich rocks weathered in the planet's ancient damp environment, the iron oxidized and formed ferric oxide dust that coats the surface and is kicked into the atmosphere by dust devils."
      },
      {
        id: "mars-5",
        question: "What is the tallest volcano and mountain in the entire Solar System, located in Mars' Tharsis volcanic plateau?",
        options: [
          "Mauna Kea",
          "Olympus Mons",
          "Ascraeus Mons",
          "Elysium Mons"
        ],
        correctIndex: 1,
        hint: "It stands approximately 22 km (72,000 ft) high—nearly three times the height of Mount Everest.",
        explanation: "Olympus Mons is a gargantuan shield volcano standing 21.9 km (13.6 miles) high and 600 km wide. Because Mars has no plate tectonics, the stationary crust sat over a volcanic mantle hotspot for hundreds of millions of years."
      },
      {
        id: "mars-6",
        question: "During the famous '7 Minutes of Terror' Entry, Descent, and Landing (EDL), what innovative system lowered Curiosity and Perseverance onto Mars?",
        options: [
          "Inflatable multi-layer bouncing airbags",
          "Sky Crane rocket-powered descent stage",
          "Gliding paraglider wing",
          "Solid fuel retro-rocket landing legs"
        ],
        correctIndex: 1,
        hint: "A rocket backpack hovered with hydrazine thrusters and reeled the 1-ton rover down on nylon tether cables.",
        explanation: "Because both Curiosity and Perseverance weigh around 1 ton—far too heavy for the airbags used on Spirit and Opportunity—NASA developed the Sky Crane: a rocket platform that hovers and gently lowers the rover onto its wheels with nylon tethers."
      },
      {
        id: "mars-7",
        question: "What is the enormous canyon system on Mars that spans over 4,000 km—stretching the distance across North America?",
        options: [
          "Grand Canyon",
          "Valles Marineris",
          "Chryse Planitia",
          "Cerberus Fossae"
        ],
        correctIndex: 1,
        hint: "Named in honor of the Mariner 9 orbiter which discovered it in 1971.",
        explanation: "Valles Marineris is a tectonic rift valley over 4,000 km long, 200 km wide, and up to 7 km deep. It dwarfs Earth's Grand Canyon, making it the largest canyon system known in the Solar System."
      },
      {
        id: "mars-8",
        question: "What critical task is Perseverance executing that sets the stage for the international Mars Sample Return (MSR) mission?",
        options: [
          "Constructing an underground habitat dome",
          "Drilling and sealing pristine rock core samples in titanium tubes",
          "Melting the northern polar dry ice cap",
          "Laying fiber optic communication cables across Jezero"
        ],
        correctIndex: 1,
        hint: "The rover leaves hermetically sealed metal cylinders deposited on the ground to be collected by a future retrieval lander.",
        explanation: "Perseverance's core mission is caching rock and regolith samples. It drills cylindrical cores and seals them in ultra-clean titanium tubes, dropping some in a depot at 'Three Forks' to be returned to Earth by a future joint NASA/ESA campaign."
      }
    ]
  },

  {
    id: "exoplanets",
    title: "Exoplanet Hunters: Kepler, TESS & Goldilocks Worlds",
    shortTitle: "Exoplanet Worlds",
    category: "exoplanets",
    categoryLabel: "Exoplanets & Alien Worlds",
    difficulty: "astronaut",
    difficultyLabel: "Astronaut",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.88,
    playsCount: "14.3k",
    completionRate: "76%",
    featured: false,
    accentColor: "#06B6D4", // Cyan
    tagline: "Detect alien worlds through light transit curves, radial wobbles, and habitable zone biosignatures.",
    overview: "Over 5,500 exoplanets have been confirmed orbiting stars beyond our solar system. Explore the ingenious detection methods and study extraordinary worlds like TRAPPIST-1, Proxima Centauri b, and lava planets.",
    tags: ["Kepler", "TESS", "Transit Method", "Habitable Zone", "TRAPPIST-1", "Biosignatures"],
    objectives: [
      "Master the transit photometry and radial velocity detection techniques",
      "Define the astronomical Goldilocks / Habitable Zone",
      "Examine the 7 rocky worlds of the TRAPPIST-1 red dwarf system",
      "Understand biosignatures and technosignature search methods"
    ],
    coverSvgType: "exoplanet",
    questions: [
      {
        id: "exo-1",
        question: "What primary detection method did NASA's Kepler Space Telescope use to discover over 2,600 exoplanets?",
        options: [
          "Direct optical photography with optical zoom",
          "Transit Photometry (measuring dips in stellar brightness)",
          "Radar echo imaging from deep space dishes",
          "Gravitational micro-pulsar timing"
        ],
        correctIndex: 1,
        hint: "As a planet crosses in front of its parent star, it temporarily blocks a microscopic fraction of the star's light.",
        explanation: "Transit photometry monitors thousands of stars simultaneously with ultra-sensitive sensors. When an orbiting planet transits between the telescope and the star, it creates a periodic dip in the star's observed light curve."
      },
      {
        id: "exo-2",
        question: "What is the astronomical term for the circumstellar orbital region where temperatures allow liquid water to pool on a rocky planet's surface?",
        options: [
          "The Kuiper Belt",
          "The Habitable (or Goldilocks) Zone",
          "The Oort Sphere",
          "The Magnetopause"
        ],
        correctIndex: 1,
        hint: "Where it is neither 'too hot' nor 'too cold'—just right for liquid water.",
        explanation: "The Habitable Zone (often called the Goldilocks Zone) is the orbital distance around a star where atmospheric pressure and stellar irradiance could permit liquid water on a rocky planet's surface."
      },
      {
        id: "exo-3",
        question: "Which ultra-cool red dwarf system, located 40 light-years away, made global headlines for hosting 7 Earth-sized rocky planets?",
        options: [
          "Alpha Centauri",
          "TRAPPIST-1",
          "Barnard's Star",
          "Gliese 581"
        ],
        correctIndex: 1,
        hint: "Named after the Belgian Transiting Planets and Planetesimals Small Telescope that first detected it.",
        explanation: "The TRAPPIST-1 system contains seven Earth-sized rocky planets orbiting an ultra-cool red dwarf star. Three of these planets (TRAPPIST-1 e, f, and g) reside within the star's habitable zone."
      },
      {
        id: "exo-4",
        question: "What is the closest known exoplanet to our Solar System, orbiting in the habitable zone of a red dwarf star 4.24 light-years away?",
        options: [
          "Sirius B",
          "Proxima Centauri b",
          "Kepler-452b",
          "HD 209458 b"
        ],
        correctIndex: 1,
        hint: "It orbits the smallest star in the Alpha Centauri triple star system.",
        explanation: "Proxima Centauri b is a terrestrial exoplanet orbiting our Sun's nearest stellar neighbor, Proxima Centauri, just 4.24 light-years (25 trillion miles) away. It completes an orbit every 11.2 Earth days."
      },
      {
        id: "exo-5",
        question: "What exoplanet class describes gas giants that orbit astonishingly close to their parent stars (often completing orbits in just 2-3 days)?",
        options: [
          "Sub-Neptunes",
          "Hot Jupiters",
          "Super-Earths",
          "Chthonian cores"
        ],
        correctIndex: 1,
        hint: "Massive gas worlds like 51 Pegasi b with surface temperatures exceeding 1,000°C due to their extreme proximity to stars.",
        explanation: "Hot Jupiters are Jupiter-like gas giants with extremely short orbital periods (<10 days). Their unexpected discovery shattered early solar system formation models, revealing that massive planets can migrate inward."
      },
      {
        id: "exo-6",
        question: "What detection technique measures the subtle Doppler wobble of a star induced by an orbiting planet's gravitational tug?",
        options: [
          "Astrometric Parallax",
          "Radial Velocity Method",
          "Interferometric Scintillation",
          "Luminosity Pulsation"
        ],
        correctIndex: 1,
        hint: "As the star wobbles back and forth toward and away from Earth, its spectral lines shift between blue and red.",
        explanation: "The Radial Velocity (Doppler) method measures shifts in a star's spectrum. As a star and planet orbit their common center of mass, the star's light blueshifts as it moves toward Earth and redshifts as it moves away."
      },
      {
        id: "exo-7",
        question: "What telescope launched in 2018 as Kepler's successor, conducting an all-sky survey of bright nearby stars for transiting planets?",
        options: [
          "Spitzer",
          "TESS (Transiting Exoplanet Survey Satellite)",
          "Chandra",
          "Gaia"
        ],
        correctIndex: 1,
        hint: "Equipped with four wide-field optical cameras scanning 85% of the entire celestial sphere in 24×96-degree sectors.",
        explanation: "TESS (Transiting Exoplanet Survey Satellite) monitors hundreds of thousands of the brightest, closest stars. Unlike Kepler which focused on a single patch of sky, TESS surveyed nearly the entire sky."
      },
      {
        id: "exo-8",
        question: "What potential atmospheric gas combination on an exoplanet is considered a prime 'biosignature' indicative of biological equilibrium disruption?",
        options: [
          "Carbon dioxide and Nitrogen",
          "Oxygen (or Ozone) and Methane co-existing",
          "Pure Argon and Xenon",
          "Helium and Hydrogen gas"
        ],
        correctIndex: 1,
        hint: "Methane and oxygen react rapidly to form water and CO2, so having both continuously present requires active replenishment.",
        explanation: "Because oxygen and methane chemically destroy each other quickly, finding significant amounts of both simultaneously in an atmosphere indicates ongoing active sources—on Earth, living organisms—preventing chemical equilibrium."
      }
    ]
  },

  {
    id: "saturn-cassini",
    title: "The Ringed Giant: Secrets of Saturn & Cassini",
    shortTitle: "Saturn & Cassini",
    category: "solar-system",
    categoryLabel: "Solar System Exploration",
    difficulty: "cadet",
    difficultyLabel: "Cadet",
    duration: "8 Qs • 3 min",
    questionCount: 8,
    estimatedMinutes: 3,
    rating: 4.94,
    playsCount: "19.5k",
    completionRate: "88%",
    featured: false,
    accentColor: "#EAB308", // Golden yellow
    tagline: "Explore Saturn's icy rings, Titan's methane seas, and Enceladus' hydrothermal geysers.",
    overview: "For 13 years, the NASA/ESA/ASI Cassini-Huygens mission orbited Saturn, landing a probe on hydrocarbon-rich Titan and discovering water vapor plumes venting from the ocean world Enceladus.",
    tags: ["Saturn", "Cassini", "Titan", "Enceladus", "Huygens Probe", "Planetary Rings"],
    objectives: [
      "Understand what Saturn's rings are made of and how thick they are",
      "Discover the lakes of liquid methane and nitrogen atmosphere on Titan",
      "Investigate Enceladus' subsurface ocean and hydrothermal vents",
      "Learn about Cassini's dramatic Grand Finale plunge into Saturn"
    ],
    coverSvgType: "saturn",
    questions: [
      {
        id: "sat-1",
        question: "What are Saturn's iconic rings predominantly composed of?",
        options: [
          "Solid slabs of reflective titanium and nickel",
          "Billions of chunks of water ice and rock-dust particles",
          "Glowing frozen methane gas blocks",
          "Liquid ammonia droplets suspended in vacuum"
        ],
        correctIndex: 1,
        hint: "Ranging in size from microscopic dust grains up to house-sized boulders, over 99% pure frozen H2O.",
        explanation: "Saturn's rings are composed of 99% pure water ice particles, with traces of rock dust. While the ring system stretches up to 282,000 km across, it is astonishingly thin—averaging only about 10 to 30 meters in thickness."
      },
      {
        id: "sat-2",
        question: "Which European Space Agency probe detached from Cassini in 2005 to make history's first landing on Saturn's giant moon Titan?",
        options: [
          "Philae",
          "Huygens Probe",
          "Giotto",
          "Beagle 2"
        ],
        correctIndex: 1,
        hint: "Named after the Dutch astronomer Christiaan Huygens who discovered Titan in 1655.",
        explanation: "The Huygens probe descended through Titan's dense, opaque nitrogen atmosphere on January 14, 2005. It transmitted images for 72 minutes from the surface, revealing round ice pebbles and drainage channels."
      },
      {
        id: "sat-3",
        question: "What liquid fills the lakes, rivers, and seas (such as Kraken Mare) found across the polar regions of Titan?",
        options: [
          "Liquid water and ammonia",
          "Liquid hydrocarbons (methane and ethane)",
          "Liquid sulfur",
          "Liquid carbon dioxide"
        ],
        correctIndex: 1,
        hint: "With a surface temperature of -179°C (-290°F), water is frozen solid like granite, while natural gas condenses as liquid rain.",
        explanation: "Titan is the only body in our solar system other than Earth with stable surface liquids. However, due to its frigid -179°C surface, the hydrologic cycle is based on hydrocarbons: clouds rain methane that flows into lakes of liquid methane and ethane."
      },
      {
        id: "sat-4",
        question: "Which small icy moon of Saturn stunned planetary scientists when Cassini flew through geysers erupting from 'tiger stripe' fractures?",
        options: [
          "Mimas",
          "Enceladus",
          "Dione",
          "Iapetus"
        ],
        correctIndex: 1,
        hint: "Venting water vapor, silica nanograins, and organic molecules from a warm global ocean beneath an ice shell.",
        explanation: "Enceladus has an ocean of liquid water beneath its icy crust. Tidal forces flex the moon, creating hydrothermal vents that spray geysers of salty water and organic molecules into space through fractures at the south pole."
      },
      {
        id: "sat-5",
        question: "What bizarre, long-lasting geometric atmospheric weather pattern exists at Saturn's north pole?",
        options: [
          "The Perfect Equilateral Triangle",
          "The Hexagonal Jet Stream",
          "The Great Square of Saturn",
          "The Octagonal Vortex"
        ],
        correctIndex: 1,
        hint: "A six-sided cloud jet stream wide enough that nearly four Earths could fit inside it.",
        explanation: "Saturn's north pole features a persistent six-sided hexagonal jet stream first spotted by Voyager and studied in detail by Cassini. Atmospheric physicists have replicated this phenomenon in fluid dynamic lab tanks with rotating fluids."
      },
      {
        id: "sat-6",
        question: "Why did NASA deliberately steer Cassini to burn up in Saturn's atmosphere in its 2017 'Grand Finale'?",
        options: [
          "To test the maximum heat resistance of its beryllium thrusters",
          "To prevent contaminating potentially habitable moons Enceladus and Titan",
          "Because its radio transmitter broke down completely",
          "To photograph the core of Saturn with optical flashlights"
        ],
        correctIndex: 1,
        hint: "Planetary protection protocols dictate that spent probes with radioactive RTGs must not crash on pristine ocean worlds.",
        explanation: "Under strict planetary protection protocols, NASA could not risk Cassini running out of fuel and accidentally crashing into Titan or Enceladus, potentially contaminating their prebiotic environments with terrestrial microbes. The safe suicide plunge ended on Sept 15, 2017."
      },
      {
        id: "sat-7",
        question: "Saturn has the lowest average density of all planets in the solar system. What would theoretically happen if you could place Saturn in a giant cosmic bathtub?",
        options: [
          "It would sink like a stone because of its metallic hydrogen",
          "It would float on water because its density is less than 1 g/cm³",
          "It would instantly explode into hydrogen gas",
          "It would freeze into a solid ball within seconds"
        ],
        correctIndex: 1,
        hint: "Its mean density is roughly 0.687 g/cm³, compared to water's 1.0 g/cm³.",
        explanation: "Saturn's mean density is only about 0.687 g/cm³—less than water (1.0 g/cm³). Composed largely of light hydrogen and helium gases, Saturn is the only planet in our solar system less dense than water."
      },
      {
        id: "sat-8",
        question: "Which moon of Saturn resembles the fictional 'Death Star' due to the colossal Herschel impact crater covering one-third of its diameter?",
        options: [
          "Titan",
          "Mimas",
          "Rhea",
          "Hyperion"
        ],
        correctIndex: 1,
        hint: "The impact was so massive that any larger impact would likely have shattered the small icy moon completely.",
        explanation: "Mimas features the giant Herschel Crater, 130 km wide with a central mountain peak 6 km high. The crater gives Mimas an uncanny resemblance to the Star Wars Death Star."
      }
    ]
  },

  {
    id: "rocketry-propulsion",
    title: "Rockets of the Century: Saturn V to Starship",
    shortTitle: "Rocketry & Propulsion",
    category: "rockets",
    categoryLabel: "Rockets & Spaceflight",
    difficulty: "astronaut",
    difficultyLabel: "Astronaut",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.89,
    playsCount: "21.0k",
    completionRate: "77%",
    featured: false,
    accentColor: "#F97316", // Rocket flame orange
    tagline: "Specific impulse, staged combustion, propulsive landing, and the Tsiolkovsky equation.",
    overview: "From the raw kerosene power of the F-1 engine to the full-flow staged combustion methane Raptor engines, explore the bleeding edge of orbital rocketry and reusable space exploration.",
    tags: ["Rockets", "Starship", "Falcon 9", "Specific Impulse", "Raptor Engine", "Tsiolkovsky"],
    objectives: [
      "Master the Tsiolkovsky rocket equation and mass fraction principles",
      "Compare rocket fuels: RP-1 kerosene, Liquid Methane (Methalox), and Hydrogen (Hydrolox)",
      "Understand engine cycles: Gas generator vs Full-flow staged combustion",
      "Examine autonomous propulsive landing and reusable thermal protection"
    ],
    coverSvgType: "rocket",
    questions: [
      {
        id: "roc-1",
        question: "What fundamental equation relates a rocket's change in velocity (Δv) to its effective exhaust velocity and initial-to-final mass ratio?",
        options: [
          "Bernoulli Equation",
          "Tsiolkovsky Rocket Equation",
          "Navier-Stokes Conservation Law",
          "Schrödinger Wave Equation"
        ],
        correctIndex: 1,
        hint: "Formulated by Russian spaceflight pioneer Konstantin Tsiolkovsky in 1903: Δv = v_e * ln(m_0 / m_f).",
        explanation: "The Tsiolkovsky rocket equation (Δv = Isp * g0 * ln(m0 / mf)) governs rocketry. It dictates that to gain velocity, a rocket must expel mass at high exhaust speeds, explaining why ~90% of a rocket's launch mass must be propellant."
      },
      {
        id: "roc-2",
        question: "What parameter measures rocket engine fuel efficiency—representing how many seconds one pound of propellant produces one pound of thrust?",
        options: [
          "Specific Impulse (Isp)",
          "Thrust-to-Weight Ratio (TWR)",
          "Volumetric Expansion Rate",
          "Thermal Knudsen Number"
        ],
        correctIndex: 0,
        hint: "Expressed in seconds (s), higher values mean more thrust produced per unit of fuel consumed.",
        explanation: "Specific Impulse (Isp) is the measure of rocket engine fuel efficiency. An engine with high Isp (such as hydrogen-oxygen SSME at ~452 seconds in vacuum) extracts more velocity per kilogram of propellant than lower Isp engines."
      },
      {
        id: "roc-3",
        question: "Why did SpaceX choose cryogenic liquid methane (Methalox) instead of RP-1 kerosene for its Starship Raptor engines?",
        options: [
          "Methane can be synthesized on Mars via the Sabatier reaction and does not leave heavy soot",
          "Methane is heavier than lead and packs more mass into smaller tanks",
          "Methane burns without needing any liquid oxygen oxidizer",
          "Methane is completely non-cryogenic and stores at room temperature"
        ],
        correctIndex: 0,
        hint: "Think about reusable engine cleaning (no coking) and refueling on the surface of Mars using atmospheric CO2 and subsurface water ice.",
        explanation: "Methane burns very cleanly without depositing sticky soot/coke in the engine turbomachinery, enabling rapid reusability. Crucially, methane can be synthesized on Mars from atmospheric CO2 and water ice using the Sabatier reaction."
      },
      {
        id: "roc-4",
        question: "What engine cycle does SpaceX's Raptor engine use—a Holy Grail of rocketry never before flown on an operational launch vehicle?",
        options: [
          "Gas-Generator Open Cycle",
          "Full-Flow Staged Combustion Cycle (FFSCC)",
          "Expander Bleed Cycle",
          "Pressure-Fed Monopropellant"
        ],
        correctIndex: 1,
        hint: "It uses separate oxygen-rich and fuel-rich preburners so that 100% of both propellants pass through turbines as gases before entering the main chamber.",
        explanation: "Full-flow staged combustion uses two separate preburners: one fuel-rich and one oxygen-rich. All propellant passes through the turbines as hot gas, allowing cooler turbine operating temperatures and astonishing chamber pressures over 350 bar."
      },
      {
        id: "roc-5",
        question: "In December 2015, which launch vehicle made history by achieving the first-ever vertical propulsive landing of an orbital booster stage?",
        options: [
          "SpaceX Falcon 9 (Flight 20)",
          "Space Shuttle Atlantis",
          "Blue Origin New Shepard",
          "Saturn IB"
        ],
        correctIndex: 0,
        hint: "It touched down on Landing Zone 1 at Cape Canaveral after sending 11 Orbcomm satellites to orbit.",
        explanation: "Falcon 9 Flight 20 launched on December 21, 2015. While New Shepard landed suborbitally earlier that year, Falcon 9 became the first orbital-class rocket stage in history to boost back from space and land vertically."
      },
      {
        id: "roc-6",
        question: "What material is Starship's primary hull constructed from, chosen over carbon fiber for its superior strength at extreme cryo and re-entry temperatures?",
        options: [
          "Titanium-Aluminide Alloy",
          "304L/301 Stainless Steel",
          "Beryllium-Copper Composite",
          "Aramid Kevlar Fiber"
        ],
        correctIndex: 1,
        hint: "A common metal that becomes substantially stronger at cryogenic temps (-196°C) and can withstand temperatures up to 800°C before melting.",
        explanation: "Elon Musk switched Starship from carbon fiber to 300-series stainless steel. Stainless steel costs a fraction of carbon composite ($3/kg vs $130/kg), gets stronger at cryogenic propellant temperatures, and has a high melting point requiring fewer heat shield tiles."
      },
      {
        id: "roc-7",
        question: "What aerodynamic maneuver does Starship perform upon re-entering the atmosphere before flipping vertical for touchdown?",
        options: [
          "Supersonic Spiral Dive",
          "Belly-Flop Skydiver Maneuver",
          "Parachute Spin Deceleration",
          "Winged Glider Runway Landing"
        ],
        correctIndex: 1,
        hint: "Falling horizontally through the air like a skydiver using four actuated flap fins to control drag and descent rate.",
        explanation: "Starship enters belly-first in a horizontal 'belly-flop' attitude at a 60-70 degree angle of attack. Using four actuated flaps to control roll and pitch, it maximizes atmospheric drag before lighting its Raptor engines to flip vertical seconds before landing."
      },
      {
        id: "roc-8",
        question: "What is the launch tower catching mechanism nicknamed at Starbase that catches the Super Heavy booster mid-air out of the sky?",
        options: [
          "The Sky Claws",
          "Mechazilla Chopsticks",
          "The Titan Crane",
          "The Net Launcher"
        ],
        correctIndex: 1,
        hint: "Giant steel hydraulic arms mounted on the launch tower that pinch the booster under its forward grid fins.",
        explanation: "Super Heavy has no landing legs to save payload mass; instead, the launch tower (nicknamed 'Mechazilla') uses two giant robotic arms called 'chopsticks' to catch the descending booster out of the air right at the launch mount."
      }
    ]
  },

  {
    id: "cosmic-origins",
    title: "Cosmic Microwave Background & The Big Bang",
    shortTitle: "Cosmic Origins",
    category: "cosmology",
    categoryLabel: "Cosmology & Early Universe",
    difficulty: "commander",
    difficultyLabel: "Commander",
    duration: "8 Qs • 5 min",
    questionCount: 8,
    estimatedMinutes: 5,
    rating: 4.97,
    playsCount: "13.2k",
    completionRate: "61%",
    featured: false,
    accentColor: "#6366F1", // Indigo
    tagline: "Read the oldest baby picture of the universe encoded in the 2.7 Kelvin cosmic microwave background.",
    overview: "380,000 years after the Big Bang, the universe cooled enough for electrons and protons to form neutral hydrogen, setting ancient light free. Decode cosmic inflation, the CMB, and cosmological parameters.",
    tags: ["Big Bang", "CMB", "Planck Satellite", "Dark Energy", "Cosmic Inflation", "Hubble Constant"],
    objectives: [
      "Understand recombination and the surface of last scattering",
      "Decode temperature fluctuations in the Cosmic Microwave Background (CMB)",
      "Analyze the composition of the universe: Dark Energy, Dark Matter, Normal Matter",
      "Examine the cosmic expansion and Hubble-Lemaître law"
    ],
    coverSvgType: "cosmology",
    questions: [
      {
        id: "cos-1",
        question: "Approximately what is the temperature of the Cosmic Microwave Background (CMB) radiation permeating all of space today?",
        options: [
          "Absolute Zero (0.00 Kelvin)",
          "2.73 Kelvin (-270.4°C)",
          "15.4 Kelvin (-257.7°C)",
          "77.2 Kelvin (liquid nitrogen)"
        ],
        correctIndex: 1,
        hint: "Just 2.7 degrees above absolute zero, stretched out by 13.8 billion years of spatial expansion.",
        explanation: "The CMB was released at a temperature of about 3,000 Kelvin during the recombination epoch. Over 13.8 billion years of universal expansion, this thermal blackbody radiation has redshifted down to 2.7255 Kelvin."
      },
      {
        id: "cos-2",
        question: "What epoch in the early universe occurred when electrons bound with protons to form neutral hydrogen, allowing photons to travel freely?",
        options: [
          "The Hadron Era",
          "Recombination (Decoupling)",
          "Stellar Nucleosynthesis",
          "The Electroweak Phase Transition"
        ],
        correctIndex: 1,
        hint: "Occurred approximately 380,000 years after the Big Bang, creating the 'surface of last scattering'.",
        explanation: "Before recombination (around 380,000 years after the Big Bang), the universe was an opaque plasma of ionized protons, electrons, and photons. Once temperature cooled below 3,000 K, neutral atoms formed and light decoupled, creating the CMB."
      },
      {
        id: "cos-3",
        question: "In 1965, which two Bell Labs radio astronomers accidentally discovered the CMB while trying to eliminate persistent static noise from their horn antenna?",
        options: [
          "Edwin Hubble and Milton Humason",
          "Arno Penzias and Robert Wilson",
          "Carl Sagan and Frank Drake",
          "Georges Lemaître and Alexander Friedmann"
        ],
        correctIndex: 1,
        hint: "They even scrubbed pigeon droppings off their Holmdel horn antenna before realizing the signal came equally from every direction in the sky.",
        explanation: "Arno Penzias and Robert Wilson won the 1978 Nobel Prize in Physics for discovering the CMB. They thought their antenna had pigeon poop interference, until Princeton physicists confirmed they were hearing the remnant whisper of the Big Bang."
      },
      {
        id: "cos-4",
        question: "According to data from ESA's Planck space observatory, what percentage of the total energy-matter content of the universe is made of Dark Energy?",
        options: [
          "About 5%",
          "About 27%",
          "About 68%",
          "Over 99%"
        ],
        correctIndex: 2,
        hint: "Normal baryonic matter (stars, planets, atoms) makes up only ~5%, Dark Matter is ~27%, and the mysterious repulsive force dominates the rest.",
        explanation: "Planck satellite measurements revealed the cosmos consists of roughly 68.3% Dark Energy (driving accelerated expansion), 26.8% Dark Matter, and only 4.9% ordinary baryonic matter (atoms, gas, stars, and humans)."
      },
      {
        id: "cos-5",
        question: "What theoretical theory proposes that in the first fraction of a second (10^-36 s) after the Big Bang, the universe underwent exponential expansion faster than light?",
        options: [
          "String Landscape Theory",
          "Cosmic Inflation",
          "Steady State Theory",
          "Ekpyrotic Collision"
        ],
        correctIndex: 1,
        hint: "Pioneered by Alan Guth in 1980, it solves the horizon problem, the flatness problem, and the magnetic monopole problem.",
        explanation: "Cosmic Inflation postulates that during 10^-36 to 10^-32 seconds after the singularity, the fabric of spacetime expanded exponentially by a factor of at least 10^26, explaining why the universe is so remarkably flat, homogeneous, and isotropic on large scales."
      },
      {
        id: "cos-6",
        question: "What law in astrophysics states that distant galaxies are moving away from us at speeds proportional to their distance?",
        options: [
          "Kepler's Third Law",
          "Hubble-Lemaître Law",
          "Chandrasekhar Limit",
          "Stefan-Boltzmann Law"
        ],
        correctIndex: 1,
        hint: "v = H_0 * d, where H_0 is the expansion rate constant.",
        explanation: "The Hubble-Lemaître Law shows that galaxies are receding with a velocity proportional to their distance: v = H0 * d. This is not galaxies speeding through space, but rather the fabric of space itself expanding between them."
      },
      {
        id: "cos-7",
        question: "What is the unresolved tension between local measurements of the expansion rate (via Cepheid variables/supernovae) and early universe CMB predictions called?",
        options: [
          "The Fermi Paradox",
          "The Hubble Tension",
          "The Baryon Asymmetry Dilemma",
          "The Cosmological Constant Catastrophe"
        ],
        correctIndex: 1,
        hint: "Late-universe measurements yield ~73 km/s/Mpc, while CMB measurements yield ~67.4 km/s/Mpc, with statistically incompatible error margins.",
        explanation: "The Hubble Tension refers to the 5-sigma discrepancy between the expansion rate derived from early universe physics (Planck CMB: ~67.4 km/s/Mpc) versus late-universe cosmic distance ladders (HST/JWST supernovae: ~73.0 km/s/Mpc), suggesting unknown physics."
      },
      {
        id: "cos-8",
        question: "What microscopic temperature variations (fluctuations) in the CMB provided the gravitational seeds that grew into all galaxies and cosmic webs today?",
        options: [
          "10 Kelvin fluctuations",
          "Fluctuations of only 1 part in 100,000 (microkelvins)",
          "1,000 Kelvin thermal flares",
          "Complete uniformity with 0.000000000% variance"
        ],
        correctIndex: 1,
        hint: "Quantum fluctuations stretched by inflation created tiny density differences of mere tens of microkelvins.",
        explanation: "The CMB is smooth to 1 part in 100,000 (roughly 18 microkelvin temperature variations). These tiny quantum density fluctuations stretched by inflation were amplified by gravity over billions of years into galaxies, stars, and galaxy filaments."
      }
    ]
  },

  {
    id: "solar-physics",
    title: "The Solar Furnace: Parker Probe & Solar Dynamics",
    shortTitle: "The Sun & Parker Probe",
    category: "solar-system",
    categoryLabel: "Solar System Exploration",
    difficulty: "astronaut",
    difficultyLabel: "Astronaut",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.87,
    playsCount: "11.9k",
    completionRate: "82%",
    featured: false,
    accentColor: "#F59E0B",
    tagline: "Touch the Sun at 430,000 mph inside the million-degree corona with Parker Solar Probe.",
    overview: "Our Sun is a raging nuclear engine fusing 600 million tons of hydrogen every second. Dive into the coronal heating paradox, solar flares, geomagnetic storms, and NASA's daredevil Parker Solar Probe.",
    tags: ["The Sun", "Parker Probe", "Coronal Mass Ejections", "Solar Wind", "Nuclear Fusion"],
    objectives: [
      "Explore the proton-proton chain nuclear fusion core",
      "Investigate the Coronal Heating Problem (why the atmosphere is hotter than the surface)",
      "Understand the mechanics of solar flares and geomagnetic storms",
      "Learn how Parker Solar Probe survives 1,400°C temperatures"
    ],
    coverSvgType: "sun",
    questions: [
      {
        id: "sun-1",
        question: "What nuclear fusion process powers our Sun, fusing hydrogen nuclei into helium in its 15,000,000°C core?",
        options: [
          "Carbon-Nitrogen-Oxygen (CNO) Cycle",
          "Proton-Proton (p-p) Chain Reaction",
          "Triple-Alpha Helium Flash",
          "Silicon Burning Process"
        ],
        correctIndex: 1,
        hint: "In stars of one solar mass or less, the primary pathway fuses four individual hydrogen protons into one helium-4 nucleus.",
        explanation: "In main-sequence stars with solar mass like our Sun, the proton-proton (p-p) chain generates 99% of its energy. Four protons fuse into one helium nucleus, converting 0.7% of mass into pure energy via E = mc²."
      },
      {
        id: "sun-2",
        question: "What enduring mystery in solar physics describes why the Sun's outer corona reaches millions of degrees, while its visible photosphere is only ~5,500°C?",
        options: [
          "The Neutrino Deficit Anomaly",
          "The Coronal Heating Problem",
          "The Solar Minimum Enigma",
          "The Alfven Wave Paradox"
        ],
        correctIndex: 1,
        hint: "Like a campfire where the air 10 feet away is boiling hotter than the coals themselves.",
        explanation: "The Coronal Heating Problem remains a key puzzle: the visible surface (photosphere) is roughly 5,500°C (9,900°F), but the tenuous corona reaches 1 to 3 million degrees Celsius, heated by magnetic reconnection and Alfvén plasma waves."
      },
      {
        id: "sun-3",
        question: "Which NASA spacecraft launched in 2018 became the first human-made probe to 'touch the Sun' by dipping into the solar corona?",
        options: [
          "SOHO",
          "Parker Solar Probe",
          "Solar Dynamics Observatory",
          "Genesis"
        ],
        correctIndex: 1,
        hint: "Named after solar physicist Eugene Parker who predicted the supersonic solar wind in 1958.",
        explanation: "The Parker Solar Probe dipped below the Alfvén critical surface into the solar corona in April 2021. Reaching speeds over 430,000 mph (700,000 km/h), it is the fastest human-made object in history."
      },
      {
        id: "sun-4",
        question: "What innovative heat shield technology protects Parker Solar Probe's instruments from 1,400°C (2,500°F) solar radiation?",
        options: [
          "A 4.5-inch carbon-composite foam shield coated in white ceramic",
          "Active liquid lead heat exchangers",
          "A solid sheet of polished gold",
          "Magnetic plasma deflection coils"
        ],
        correctIndex: 0,
        hint: "A lightweight carbon foam core sandwiched between carbon-composite face sheets, keeping instruments at a pleasant 28°C (85°F).",
        explanation: "Parker's Thermal Protection System (TPS) is an 11.4 cm (4.5 inch) thick carbon-composite foam shield with white reflective alumina ceramic paint. While the front absorbs 1,400°C, the payload behind it stays at comfortable room temperature (28°C)."
      },
      {
        id: "sun-5",
        question: "What historic 1859 solar superstorm induced telegraph line fires and caused auroras visible in tropical Cuba and Hawaii?",
        options: [
          "The Tunguska Event",
          "The Carrington Event",
          "The Maunder Minimum",
          "The Halloween Solar Storm"
        ],
        correctIndex: 1,
        hint: "Observed independently by amateur British astronomer Richard Carrington after a blinding white-light flare.",
        explanation: "The Carrington Event of September 1859 was the most powerful geomagnetic storm in recorded history. Coronal mass ejections sparked telegraph line currents that shocked operators and caught paper on fire, producing nighttime auroras so bright people read newspapers by them."
      },
      {
        id: "sun-6",
        question: "How long does it take for a photon generated by nuclear fusion in the Sun's core to bounce its way out through the dense radiative zone to the surface?",
        options: [
          "8 minutes and 20 seconds",
          "About 3 days",
          "Between 10,000 to 100,000+ years",
          "Exactly 11 years (one solar cycle)"
        ],
        correctIndex: 2,
        hint: "Because the core and radiative zone are unimaginably dense plasma, the photon undergoes an endless 'random walk' scattering billions of times.",
        explanation: "While a photon takes only 8 minutes and 20 seconds to travel through the vacuum of space from the Sun's surface to Earth, it takes 10,000 to over 100,000 years to escape the Sun's interior because of constant Thomson scattering in the dense plasma."
      },
      {
        id: "sun-7",
        question: "What is the periodic cycle over which the Sun's magnetic poles flip and sunspot activity ebbs and flows?",
        options: [
          "Approximately 11 years",
          "Approximately 24 hours",
          "Approximately 76 years",
          "Approximately 100,000 years"
        ],
        correctIndex: 0,
        hint: "Sunspots and solar flares reach a peak at 'solar maximum' roughly once every decade.",
        explanation: "The solar magnetic activity cycle lasts roughly 11 years (with a full 22-year magnetic reversal cycle). During solar maximum, sunspots, solar flares, and coronal mass ejections peak before declining toward solar minimum."
      },
      {
        id: "sun-8",
        question: "What vast coronal eruptions release billions of tons of magnetized plasma at millions of miles per hour toward interplanetary space?",
        options: [
          "Coronal Mass Ejections (CMEs)",
          "Solar Granulation Cells",
          "Spicules",
          "Photospheric Prominences"
        ],
        correctIndex: 0,
        hint: "Often triggered by magnetic reconnection above complex sunspot groups.",
        explanation: "Coronal Mass Ejections (CMEs) are colossal expulsions of magnetized plasma from the corona. When directed toward Earth, they distort our magnetosphere, creating geomagnetic storms and vibrant auroras."
      }
    ]
  },

  {
    id: "ocean-moons",
    title: "Ocean Moons: Europa, Ganymede & Alien Seas",
    shortTitle: "Ocean Moons",
    category: "solar-system",
    categoryLabel: "Solar System Exploration",
    difficulty: "cadet",
    difficultyLabel: "Cadet",
    duration: "8 Qs • 3 min",
    questionCount: 8,
    estimatedMinutes: 3,
    rating: 4.93,
    playsCount: "17.1k",
    completionRate: "85%",
    featured: false,
    accentColor: "#3B82F6",
    tagline: "Drill beneath the ice shells of Jupiter's moons harboring more liquid water than all Earth's oceans combined.",
    overview: "Beyond the asteroid belt, life's greatest hopes may lie not on planets, but beneath the frozen surfaces of icy moons heated by intense gravitational tides.",
    tags: ["Europa", "Ganymede", "Europa Clipper", "Subsurface Oceans", "Astrobiology"],
    objectives: [
      "Understand tidal heating mechanics around gas giants",
      "Explore Europa's subterranean ocean and chaos terrain",
      "Learn about NASA's Europa Clipper and ESA's JUICE missions",
      "Discover Ganymede's unique intrinsic magnetic field"
    ],
    coverSvgType: "europa",
    questions: [
      {
        id: "eur-1",
        question: "Which of Jupiter's Galilean moons has an ice shell covering a liquid saltwater ocean holding twice as much water as all of Earth's oceans combined?",
        options: [
          "Io",
          "Europa",
          "Callisto",
          "Amalthea"
        ],
        correctIndex: 1,
        hint: "Its smooth, crisscrossed surface is etched with reddish-brown fractures called lineae.",
        explanation: "Beneath Europa's 15-to-25-kilometer-thick ice crust lies a global saltwater ocean up to 100 kilometers deep. It contains an estimated two to three times more liquid water than all of Earth's oceans combined."
      },
      {
        id: "eur-2",
        question: "What physical process generates enough interior heat to keep Europa's subsurface ocean completely liquid so far from the Sun?",
        options: [
          "Strong greenhouse heating in its atmosphere",
          "Tidal Heating from Jupiter's gravitational resonance",
          "Pure solar irradiance absorption",
          "Direct thermonuclear mantle core fusion"
        ],
        correctIndex: 1,
        hint: "Gravitational tug-of-war between Jupiter and neighboring moons Io and Ganymede continuously kneads Europa's core.",
        explanation: "Europa is locked in an orbital resonance with Io and Ganymede. As its eccentric orbit takes it closer and farther from Jupiter, immense gravitational tidal forces stretch and flex the moon like a rubber ball, generating tidal friction heat."
      },
      {
        id: "eur-3",
        question: "What flagship NASA mission launched in October 2024 to determine if Europa has environments suitable for life?",
        options: [
          "Europa Clipper",
          "Juno Extended",
          "Galileo II",
          "New Horizons Europa"
        ],
        correctIndex: 0,
        hint: "The largest planetary spacecraft NASA has ever built, equipped with giant solar wings and ice-penetrating radar.",
        explanation: "Europa Clipper launched in October 2024 on a Falcon Heavy rocket. It will execute nearly 50 close flybys of Europa, dipping to within 25 km of the surface to analyze its ice shell, ocean composition, and geology."
      },
      {
        id: "eur-4",
        question: "Which Jovian moon is the largest moon in the Solar System—larger even than the planet Mercury?",
        options: [
          "Titan",
          "Ganymede",
          "Callisto",
          "Triton"
        ],
        correctIndex: 1,
        hint: "With a diameter of 5,268 km, it is also the only moon known to generate its own internal magnetic field.",
        explanation: "Ganymede is the largest moon in the Solar System (diameter 5,268 km), surpassing Mercury (4,879 km) and Pluto. It possesses an internal convective liquid iron core generating an intrinsic magnetic field."
      },
      {
        id: "eur-5",
        question: "What European Space Agency (ESA) mission launched in April 2023 to explore Jupiter and its three icy moons Ganymede, Callisto, and Europa?",
        options: [
          "JUICE (Jupiter Icy Moons Explorer)",
          "Rosetta",
          "BepiColombo",
          "Solar Orbiter"
        ],
        correctIndex: 0,
        hint: "An acronym sounding like a breakfast beverage.",
        explanation: "JUICE (Jupiter Icy Moons Explorer) launched in April 2023. It will arrive at the Jupiter system in 2031, performing flybys of Europa and Callisto before entering orbit around Ganymede—the first spacecraft to orbit a moon other than Earth's."
      },
      {
        id: "eur-6",
        question: "What feature on Europa's surface provides evidence of warm ice plumes welling up from below to break apart frozen rafts?",
        options: [
          "Impact crater basins",
          "Chaos Terrain",
          "Sand dune ridges",
          "Lava caldera sinks"
        ],
        correctIndex: 1,
        hint: "Jumbled puzzle-piece blocks of ice that look like terrestrial icebergs that broke apart, drifted, and refroze.",
        explanation: "Chaos terrain consists of broken plate-like slabs of crust that appear to have detached, rotated, and refrozen in slushy matrix, suggesting warm ocean convective upwelling or shallow subsurface brine pockets."
      },
      {
        id: "eur-7",
        question: "Why are hydrothermal vents on the floor of Europa's ocean considered the prime candidate location for alien life?",
        options: [
          "They receive direct sunlight through transparent ice lenses",
          "They supply chemical energy, minerals, and heat independent of solar light",
          "They produce liquid methane required for biological photosynthesis",
          "They eliminate all radiation from Jupiter completely"
        ],
        correctIndex: 1,
        hint: "Just like deep hydrothermal vent ecosystems on Earth where tubeworms and bacteria thrive without any sunlight via chemosynthesis.",
        explanation: "On Earth, hydrothermal vents support teeming biological ecosystems through chemosynthesis without any sunlight. If Europa's rocky ocean floor meets hydrothermal volcanic activity, life could thrive on chemical energy."
      },
      {
        id: "eur-8",
        question: "Which heavily cratered Jovian moon has the oldest, most heavily cratered surface in the Solar System, acting as a geological time capsule?",
        options: [
          "Amalthea",
          "Callisto",
          "Thebe",
          "Europa"
        ],
        correctIndex: 1,
        hint: "Because it experiences the least tidal heating of the Galilean moons, its crust has remained undisturbed for 4 billion years.",
        explanation: "Callisto has the oldest, most cratered surface known in the solar system. Because it has experienced almost no volcanic or tectonic activity for 4 billion years, it preserves a pristine record of the early solar system's impacts."
      }
    ]
  },

  {
    id: "galactic-milky-way",
    title: "Milky Way & Galactic Collision: Andromeda's Rendezvous",
    shortTitle: "Milky Way & Andromeda",
    category: "cosmology",
    categoryLabel: "Cosmology & Early Universe",
    difficulty: "astronaut",
    difficultyLabel: "Astronaut",
    duration: "8 Qs • 4 min",
    questionCount: 8,
    estimatedMinutes: 4,
    rating: 4.90,
    playsCount: "15.6k",
    completionRate: "75%",
    featured: false,
    accentColor: "#8B5CF6",
    tagline: "The architecture of our spiral home and our inevitable dance with Andromeda in 4.5 billion years.",
    overview: "Our solar system orbits within the Orion Arm of a barred spiral galaxy 100,000 light-years across. Examine the galactic structure, stellar motions, and the epic future merger with Andromeda.",
    tags: ["Milky Way", "Andromeda", "Galactic Merger", "Orion Arm", "Astrophysics"],
    objectives: [
      "Identify the barred spiral architecture of our home galaxy",
      "Calculate the Sun's cosmic year (orbit around Sagittarius A*)",
      "Analyze the mechanics of the Milkomeda galactic collision",
      "Understand why individual stars almost never collide during galaxy mergers"
    ],
    coverSvgType: "galaxy",
    questions: [
      {
        id: "gal-1",
        question: "What specific morphological type of galaxy is our Milky Way classified as in modern astronomy?",
        options: [
          "Elliptical galaxy (E0)",
          "Barred spiral galaxy (SBbc)",
          "Irregular dwarf galaxy (Irr)",
          "Lenticular disc galaxy (S0)"
        ],
        correctIndex: 1,
        hint: "It features a distinct elongated central bar of stars extending from its core, from which its spiral arms trail outward.",
        explanation: "Infrared space surveys (particularly Spitzer) confirmed that the Milky Way is a barred spiral galaxy (classification SBbc) with a central bar of stars about 27,000 light-years long."
      },
      {
        id: "gal-2",
        question: "In which spiral arm or spur of the Milky Way is our Solar System located?",
        options: [
          "Perseus Arm",
          "Orion-Cygnus Arm (Local Spur)",
          "Scutum-Centaurus Arm",
          "Sagittarius Arm"
        ],
        correctIndex: 1,
        hint: "A minor spiral spur situated between the Sagittarius Arm and the Perseus Arm.",
        explanation: "Our Solar System resides in the Orion Arm (also known as the Orion-Cygnus Arm or Local Spur), about 26,000 to 28,000 light-years from the galactic core."
      },
      {
        id: "gal-3",
        question: "How long is a 'Cosmic Year' (Galactic Year)—the time it takes our Sun to complete one orbit around the galactic center?",
        options: [
          "365,000 Earth years",
          "10 million years",
          "225 to 250 million years",
          "4.5 billion years"
        ],
        correctIndex: 2,
        hint: "Traveling at roughly 828,000 km/h (514,000 mph), the last time our Sun was at this spot in the galaxy, dinosaurs were just emerging.",
        explanation: "The Sun orbits the center of the Milky Way at approximately 230 km/s (514,000 mph). A single complete orbit takes between 225 and 250 million Earth years—meaning our Solar System has completed only about 20 orbits in its entire 4.6-billion-year existence."
      },
      {
        id: "gal-4",
        question: "What neighboring spiral galaxy is hurtling toward the Milky Way at 110 km/s, destined to collide with us in ~4.5 billion years?",
        options: [
          "Triangulum Galaxy (M33)",
          "Andromeda Galaxy (M31)",
          "Large Magellanic Cloud",
          "Whirlpool Galaxy (M51)"
        ],
        correctIndex: 1,
        hint: "The largest galaxy in our Local Group, visible as a faint smudge in dark skies with the naked eye.",
        explanation: "The Andromeda Galaxy (Messier 31) is approaching the Milky Way at roughly 110 kilometers per second (250,000 mph). In approximately 4.5 billion years, the two titans will begin an epic collision and merger."
      },
      {
        id: "gal-5",
        question: "What is the expected fate of individual stars (like our Sun) when the Milky Way and Andromeda collide?",
        options: [
          "Most stars will crash directly into each other and explode",
          "Individual stars will almost NEVER collide because distances between stars are so colossal",
          "All stars will be swallowed by Sagittarius A* within 48 hours",
          "Stars will lose their planets to the interstellar vacuum"
        ],
        correctIndex: 1,
        hint: "Galaxies are mostly empty space; two galaxies colliding is like two swarms of bees flying through each other without any bee bumping into another.",
        explanation: "Because stars are separated by trillions of kilometers of empty space, the probability of any two stars physically colliding during the merger is virtually zero. However, their orbits will be scrambled by gravitational tides into a giant elliptical galaxy dubbed 'Milkomeda'."
      },
      {
        id: "gal-6",
        question: "What type of galaxy will the Milky Way and Andromeda eventually merge to create?",
        options: [
          "A giant ring galaxy",
          "A giant elliptical galaxy ('Milkomeda')",
          "A flat lenticular disc",
          "An irregular hyper-cluster"
        ],
        correctIndex: 1,
        hint: "The ordered spiral discs will be disrupted by mutual gravitational tidal interaction, settling into a smooth football-shaped cloud of stars.",
        explanation: "Computer simulations demonstrate that after several close passes over 1-2 billion years, the Milky Way and Andromeda will coalesce into a single giant elliptical galaxy, affectionately termed 'Milkomeda' or 'Milkdromeda'."
      },
      {
        id: "gal-7",
        question: "What mysterious celestial structure was discovered by the Fermi Gamma-ray Space Telescope in 2010—two giant bubbles extending 25,000 light-years above and below the galactic plane?",
        options: [
          "Oort Clouds",
          "Fermi Bubbles",
          "Kardashev Rings",
          "Lagrange Jets"
        ],
        correctIndex: 1,
        hint: "Giant lobes of high-energy gamma-ray and X-ray emission caused by past past energetic outbursts from Sagittarius A*.",
        explanation: "The Fermi Bubbles are two gigantic lobes of gamma-ray and X-ray emission spanning 50,000 light-years from end to end, erupting perpendicular to the galactic disc from the supermassive black hole's past accretion outbursts millions of years ago."
      },
      {
        id: "gal-8",
        question: "What two dwarf satellite galaxies visible from the Southern Hemisphere are currently interacting gravitationally with the Milky Way?",
        options: [
          "Barnard's Ring and Wolf-Rayet 104",
          "Large and Small Magellanic Clouds",
          "M81 and M82",
          "Centaurus A and B"
        ],
        correctIndex: 1,
        hint: "Named after explorer Ferdinand Magellan whose crew recorded them during their 1519 global circumnavigation.",
        explanation: "The Large Magellanic Cloud (LMC) and Small Magellanic Cloud (SMC) are irregular dwarf satellite galaxies orbiting the Milky Way. Gas is actively being stripped from them into the 'Magellanic Stream' by tidal forces."
      }
    ]
  }
];

// Quick statistics and helper functions
const QUIZ_STATS = {
  totalMissions: MISSIONS_DATA.length,
  totalQuestions: MISSIONS_DATA.reduce((acc, m) => acc + m.questions.length, 0),
  categories: [
    { id: "all", label: "All Missions", icon: "orbit" },
    { id: "solar-system", label: "Solar System", icon: "planet" },
    { id: "deep-space", label: "Deep Space & Black Holes", icon: "blackhole" },
    { id: "rockets", label: "Rockets & Human Flight", icon: "rocket" },
    { id: "telescopes", label: "Telescopes & Rovers", icon: "telescope" },
    { id: "cosmology", label: "Cosmology & Origins", icon: "galaxy" },
    { id: "exoplanets", label: "Exoplanets & Aliens", icon: "alien" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MISSIONS_DATA, QUIZ_STATS };
}
