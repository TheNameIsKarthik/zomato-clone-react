# 🍽️ Zomato Clone - React Application

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-Markup-red.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen.svg)](https://zomato-livid.vercel.app/)

## 🌐 Live Demo

**[Visit the Live Application](https://zomato-livid.vercel.app/)**

## 📖 Overview

A modern, responsive Zomato clone built with React that replicates the core functionality of the popular food delivery platform. This project showcases a clean, professional UI with smooth interactions and a comprehensive restaurant browsing experience.

## ✨ Features

### 🏠 **Multi-Section Navigation**
- **Delivery**: Food delivery with restaurant listings and filters
- **Dining Out**: Restaurant discovery for dine-in experiences
- **Nightlife**: Bars, pubs, and nightlife venues

### 🔍 **Advanced Search & Filtering**
- Location-based search (Bengaluru, India)
- Restaurant search by name, cuisine, or dish
- Multiple filter options:
  - Rating filters (4.0+ ratings)
  - Pure vegetarian options
  - Delivery time sorting
  - Great offers filter
  - Alcohol serving venues (for nightlife)

### 🎨 **Rich UI Components**
- **Header**: Logo, location selector, search bar, and user profile
- **Tab Navigation**: Interactive tab switching with visual feedback
- **Collections**: Curated restaurant collections with carousel
- **Restaurant Cards**: Detailed cards with ratings, cuisine, pricing, and offers
- **Filters**: Dynamic filtering system with icons and categories
- **Carousel**: Smooth sliding components for collections and food categories

### 📱 **Responsive Design**
- Mobile-friendly interface
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Modern CSS with CSS variables for consistent theming

### 🎯 **Key Functionalities**
- **Restaurant Browsing**: Browse through extensive restaurant listings
- **Category Exploration**: Explore different food categories and cuisines
- **Collection Discovery**: Curated collections like "Trending this week", "Newly Opened", "Best of Bengaluru"
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations

## 🛠️ Technology Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and functional components
- **JavaScript (ES6+)** - Modern JavaScript features and syntax
- **CSS3** - Custom styling with CSS variables and flexbox/grid
- **HTML5** - Semantic HTML structure

### Libraries & Dependencies
- **react-slick** - Carousel/slider functionality
- **Flaticon Icons** - Professional icon library
- **Google Fonts (Nunito)** - Clean, modern typography

### Development Tools
- **Create React App** - Development environment and build tools
- **ESLint** - Code quality and consistency
- **Git** - Version control

## 📁 Project Structure

```
zomato-clone-react/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # App icon
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components
│   │   │   ├── header/     # Navigation header
│   │   │   ├── footer/     # Footer component
│   │   │   ├── tabOptions/ # Tab navigation
│   │   │   ├── filters/    # Filter components
│   │   │   ├── collection/ # Collection carousel
│   │   │   ├── carousel/   # Carousel arrows
│   │   │   └── exploreSection/ # Restaurant cards
│   │   ├── delivery/       # Delivery section
│   │   ├── diningOut/      # Dining out section
│   │   └── nightLife/      # Nightlife section
│   ├── data/               # Static data files
│   │   ├── restaurants.js  # Restaurant data
│   │   ├── diningOut.js    # Dining data
│   │   └── nightLife.js    # Nightlife data
│   ├── pages/              # Page components
│   │   └── home/           # Home page
│   ├── styles/             # Global styles
│   │   ├── variable.css    # CSS variables
│   │   └── commonClasses.css # Utility classes
│   ├── App.js              # Main app component
│   └── index.js            # App entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zomato-clone-react.git
   cd zomato-clone-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Features

### Color Scheme
- **Primary Red**: `#ff7e8b` (Zomato brand color)
- **Gray**: `#828282` (Text and secondary elements)
- **White**: `#ffffff` (Background and cards)
- **Green**: `#267e3e` (Rating badges)
- **Blue**: `#256fef` (Discount tags)

### Typography
- **Font Family**: Nunito (Google Fonts)
- **Clean, modern design** with excellent readability
- **Consistent spacing** and typography hierarchy

### Interactive Elements
- **Hover effects** on cards and buttons
- **Smooth transitions** for tab switching
- **Visual feedback** for user interactions
- **Responsive carousels** with custom navigation

## 📊 Data Structure

The application uses comprehensive restaurant data including:
- Restaurant names, images, and ratings
- Cuisine types and pricing information
- Delivery times and offers
- Location details and contact information
- User reviews and ratings

## 🌟 Key Components

### Header Component
- Zomato logo and branding
- Location selector (Bengaluru, India)
- Search functionality
- User profile section

### Tab Navigation
- Three main sections: Delivery, Dining Out, Nightlife
- Interactive tab switching with visual indicators
- Smooth transitions between sections

### Restaurant Cards
- High-quality restaurant images
- Rating display with star icons
- Cuisine information and pricing
- Delivery time and special offers
- Hover effects and interactions

### Collections
- Curated restaurant collections
- Horizontal scrolling carousels
- Beautiful imagery with gradient overlays
- Collection descriptions and place counts

## 🔧 Customization

### Styling
The project uses CSS variables for easy customization:
```css
:root {
  --zomato-red: #ff7e8b;
  --zomato-gray: #828282;
  --primary-bg: #ffffff;
  /* ... more variables */
}
```

### Adding New Features
- Extend the data structure in `src/data/`
- Create new components in `src/components/`
- Add new pages in `src/pages/`
- Update routing in `src/App.js`

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and reliability.

### Deployment Features
- **Automatic deployments** from Git repository
- **Global CDN** for fast loading worldwide
- **SSL certificate** for secure connections
- **Custom domain** support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**SK** - *Made with 🔥 by SK*

## 🙏 Acknowledgments

- **Zomato** for the original design inspiration
- **React Community** for the amazing framework
- **Flaticon** for the beautiful icons
- **Google Fonts** for the typography

## 📞 Support

If you have any questions or need support, please feel free to:
- Open an issue on GitHub
- Contact the developer directly

---

⭐ **Star this repository if you found it helpful!**
