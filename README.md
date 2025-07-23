# 🎲 Genshin Impact Wishing Simulator

A comprehensive TypeScript-based gacha simulation that recreates the Genshin Impact wishing experience in your terminal. Experience the thrill of pulling for your favorite characters with authentic pity mechanics, multiple banner types, and a complete inventory management system.

## ✨ Features

### 🎯 **Authentic Gacha System**
- **Pity System**: Realistic 4-star (10 pulls) and 5-star (90 pulls) pity counters
- **Guaranteed System**: 50/50 mechanics for limited banner characters
- **Multiple Banners**: Switch between Limited Character and Standard banners
- **Rarity Distribution**: Accurate drop rates matching the original game

### 🏠 **Complete Game Simulation**
- **Character Inventory**: View and manage your collected characters
- **Constellation System**: Duplicate characters increase constellation levels (C0-C6)
- **Primogem Economy**: Earn and spend primogems just like in-game
- **Top-Up System**: Multiple purchase options with bonus primogems

### 🎨 **Enhanced Visual Experience**
- **Colorized Output**: Element-specific colors for better visual appeal
- **Rarity Indicators**: Golden 5-star and purple 4-star visual distinctions
- **Interactive Menus**: Easy-to-navigate console interface
- **Real-time Statistics**: Track your primogems, pity counters, and spending

### 📊 **Character Management**
- **Element System**: All 7 Genshin elements (Pyro, Hydro, Electro, Cryo, Anemo, Geo, Dendro)
- **Character Database**: Extensive roster including both limited and standard characters
- **Constellation Tracking**: Visual representation of character constellation levels

## 🚀 Installation

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Setup
1. **Clone or download** the project
2. **Navigate** to the project directory:
   ```bash
   cd gacha-system-main
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## 🎮 Usage

### Starting the Application
```bash
npm run start
```

### Navigation Menu
The simulator features a main menu with the following options:

1. **🏠 Home** - Welcome screen and overview
2. **🎲 Wishing** - Access the gacha system
3. **📦 Inventory** - View your character collection
4. **💰 Top Up** - Purchase primogems
5. **🚪 Exit** - Close the application

### Wishing System
- **Single Wish**: Costs 160 primogems
- **10 Wishes**: Costs 1,600 primogems (10% discount)
- **Banner Switching**: Toggle between Limited and Standard banners
- **Pity Tracking**: Real-time pity counter display

### Top-Up Options
| Package | Primogems | Bonus | Price |
|---------|-----------|-------|-------|
| Blessing of the Welkin Moon | 300 | +30 | $4.99 |
| Gnostic Hymn | 980 | +110 | $14.99 |
| Gnostic Chorus | 1,980 | +260 | $29.99 |
| Crystallize Tier 1 | 3,280 | +600 | $49.99 |
| Crystallize Tier 2 | 6,480 | +1,600 | $99.99 |

## 🎨 Character Rarity Colors

- **⭐⭐⭐⭐⭐ 5-Star**: Gold display with special effects
- **⭐⭐⭐⭐ 4-Star**: Purple display
- **Element Colors**: Each element has its distinctive color:
  - 🔥 **Pyro**: Red
  - 💧 **Hydro**: Cyan
  - ⚡ **Electro**: Magenta
  - ❄️ **Cryo**: White
  - 💨 **Anemo**: Green
  - 🪨 **Geo**: Yellow
  - 🌿 **Dendro**: Bright Green

## 📋 Available Characters

### Limited Banner Characters
- **Mauvika** (5⭐ Pyro)
- **Emile** (5⭐ Dendro)

### Standard Banner Characters
**5-Star Characters:**
- Diluc (Pyro), Jean (Anemo), Keqing (Electro)
- Mona (Hydro), Qiqi (Cryo), Tighnari (Dendro), Dehya (Pyro)

**4-Star Characters:**
- 27 unique 4-star characters spanning all elements
- Includes popular characters like Bennett, Fischl, Xingqiu, and more

## 🛠️ Technical Details

### Built With
- **TypeScript** - Type-safe JavaScript development
- **Node.js** - Runtime environment
- **Chalk** - Terminal styling and colors
- **Readline** - Interactive command-line interface

### Project Structure
```
gacha-system-main/
├── src/
│   ├── data/
│   │   └── characterList.ts    # Character database
│   └── pulls.ts                # Main application logic
├── package.json                # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎯 Game Mechanics

### Pity System
- **4-Star Pity**: Guaranteed 4-star character or weapon every 10 pulls
- **5-Star Pity**: Guaranteed 5-star character every 90 pulls
- **Soft Pity**: Increased rates starting at pull 74 for 5-stars

### Banner System
- **Limited Character Banner**: Features rate-up characters with 50/50 system
- **Standard Banner**: Permanent pool of characters and weapons
- **Guaranteed System**: Losing 50/50 guarantees next 5-star is featured character

### Constellation System
- Characters can be pulled multiple times to increase constellation level
- Maximum constellation level: C6
- Each constellation provides gameplay benefits (simulated)

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new characters to the database
- Implementing additional features
- Improving the user interface
- Fixing bugs or optimizing code

## 📜 License

This project is for educational and entertainment purposes. Genshin Impact is a trademark of miHoYo/HoYoverse.

## 🎊 Enjoy Your Pulls!

May your wishes be blessed with golden light! Good luck pulling for your favorite characters! ✨

---

*"In the name of the Anemo Archon, may your pulls be ever in your favor!"* 🍃 