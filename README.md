# CNJAA Aviation Academy Website

A fully responsive, cinematic 3D aviation academy website for **CNJAA – Capt. Nikkhiel Jadhav Aviation Academy Pvt. Ltd.**

Built with React, Three.js, GSAP, and Tailwind CSS to create an immersive experience that feels like "entering an airline cockpit — not a school."

![CNJAA Hero](https://github.com/user-attachments/assets/2aa87496-cec0-408c-8b26-3ee1925d21cc)

## 🎨 Brand System

### Colors
- **Primary Gold**: `#B28E4A`
- **Champagne Gold**: `#D6A240`
- **Deep Grey**: `#5D5B58`
- **Soft Ivory**: `#F4F1E8`

### Typography
- **Marcellus**: Headings, navigation, hero text
- **Georgia Serif**: Body text

## ✨ Features

### 3D Aircraft Integration
- Persistent 3D aircraft model using Three.js and React Three Fiber
- Scroll-driven flight path animations with GSAP ScrollTrigger
- GPU-optimized rendering with shadows, reflections, and soft lighting
- Gold accents on aircraft wings and tail

### Sections
1. **Hero Section**: Full viewport with gradient background, animated clouds, 3D aircraft scene
2. **About CNJAA**: Glass card UI with gold outlines showcasing DGCA approval, captain-led training
3. **Pilot Training Programs**: 3D floating cards with hover effects (CPL, DGCA Ground School, Multi Engine, Instrument Rating, Airline Prep)
4. **Aircraft Fleet**: 3D hangar-style presentation with aircraft specifications
5. **Training Journey**: Runway timeline showing the path from enrollment to airline career
6. **Campus & Facilities**: Parallax visuals showcasing world-class infrastructure
7. **Instructors**: Gold-framed cards highlighting experienced captains
8. **Admissions**: Interactive form with runway-style progress bar
9. **Contact**: 3D hangar background with contact information and form

### Scroll-Driven Aircraft Animation
The aircraft smoothly transitions between sections:
- **Hero**: Flies forward slowly
- **About**: Stabilizes
- **Programs**: Tilts
- **Fleet**: Circles
- **Campus**: Gains altitude
- **Admissions**: Aligns to runway
- **Contact**: Lands

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 19**: UI framework
- **Vite**: Build tool and dev server
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for R3F
- **GSAP**: Animation library with ScrollTrigger
- **Tailwind CSS**: Utility-first CSS framework
- **Lottie React**: Animation support for mobile fallbacks

## 📱 Mobile Optimization

- Fully responsive design across all breakpoints
- Lightweight WebGL implementation
- Aircraft fallback options for mobile devices
- Touch-friendly navigation and interactions

## 🎯 Performance

- Optimized 3D rendering with reduced shadow map sizes
- Code splitting for efficient loading
- Lazy loading of images and components
- GPU-accelerated animations

## 📂 Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   ├── Aircraft.jsx          # 3D aircraft model
│   │   └── Scene3D.jsx           # Three.js scene setup
│   ├── sections/
│   │   ├── Hero.jsx              # Hero section
│   │   ├── About.jsx             # About section
│   │   ├── Programs.jsx          # Training programs
│   │   ├── Fleet.jsx             # Aircraft fleet
│   │   ├── Journey.jsx           # Training journey
│   │   ├── Campus.jsx            # Campus facilities
│   │   ├── Instructors.jsx       # Instructor profiles
│   │   ├── Admissions.jsx        # Admissions form
│   │   └── Contact.jsx           # Contact section
│   ├── Navigation.jsx            # Main navigation
│   ├── Footer.jsx                # Footer component
│   └── Clouds.jsx                # Animated clouds
├── context/
│   └── AircraftContext.jsx       # Global aircraft state
├── hooks/
│   └── useAircraftAnimation.js   # Scroll-driven animations
├── App.jsx                       # Main app component
└── main.jsx                      # App entry point
```

## 🎨 Customization

### Updating Aircraft Model
The placeholder aircraft can be replaced with a real GLTF/GLB model:

1. Place your `.gltf` or `.glb` file in `src/assets/models/`
2. Update `src/components/3d/Aircraft.jsx` to load the model using `useGLTF`
3. Adjust positioning and scale as needed

### Brand Colors
Update colors in `tailwind.config.js`:

```js
colors: {
  'primary-gold': '#B28E4A',
  'champagne-gold': '#D6A240',
  'deep-grey': '#5D5B58',
  'soft-ivory': '#F4F1E8',
}
```

## 📄 License

This project is proprietary to CNJAA - Capt. Nikkhiel Jadhav Aviation Academy Pvt. Ltd.

## 🙏 Acknowledgments

- DGCA (Directorate General of Civil Aviation) for certification standards
- All the aspiring pilots choosing CNJAA for their aviation journey
