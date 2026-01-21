# Neural Quake Arena

A browser-based arena shooter where AI agents learn to fight through neuroevolution. Two teams of neural network-controlled agents battle in real-time, evolving their strategies over time.

## Live Demo

https://rayengmark.github.io/neural-quakelike/

## Game Modes

### Rounds Mode
Traditional generation-based evolution. Teams fight until time runs out or kill limit is reached. After each round, agents evolve based on performance. Best for structured training with clear generational progress.

### Persistent Mode
Continuous evolution without rounds. When an agent dies, it immediately respawns with an evolved brain based on the Hall of Fame. No waiting for rounds to end. Best for watching real-time adaptation.

## How It Works

Red team vs blue team. Each agent has a neural network brain (26 inputs, 16 hidden neurons, 5 outputs) that controls movement, aiming, and shooting. Over time, agents develop combat strategies through evolution.

### Neural Network Inputs
- 16 raycast sensors detecting walls, enemies, and allies
- Health and armor levels
- Weapon cooldown status
- Nearest enemy/ally angle and distance
- Current weapon type

### Neural Network Outputs
- Turn direction
- Movement speed
- Whether to shoot
- Strafe direction
- Whether to dodge

## Weapons

All agents spawn with a **Rocket Launcher** (explosive projectiles with splash damage).

Special weapons spawn at map center when enabled:
- **Laser** - Charge-up hitscan beam. Instant kill on full charge.
- **Energy Sword** - Hold to aim, release to lunge. One-hit kill melee.

## Features

Toggle on/off in the settings panel:
- **Health Packs** - Spawn around the map. +50 HP instant, +50 HP regen over 5s.
- **Armor Pickups** - +50 armor per pickup, max 100.
- **Laser/Sword Spawns** - Special weapons at map center.
- **Dodging** - Dash in any direction. 6 second cooldown.
- **Teleporters** - Portals that activate randomly for 30 seconds.
- **Friendly Fire** - Rockets damage teammates.
- **Ricochet** - Friendly fire reflects back to shooter.

## Controls

### Floating Control Bar
- Play/Pause simulation
- Simulation speed (1x-10x)
- Headless mode (skip rendering for faster training)
- Performance mode (simplified graphics)
- Save/Load checkpoints

### Stats Panel (☰ button)
- Kill statistics by weapon type
- Overall kill leaderboard
- Hall of Fame (Persistent mode)
- Average Life Score per team
- Combat log

### Camera
- **Scroll** - Zoom in/out
- **Drag** - Pan camera freely
- **Click agent** - Follow that agent
- **Click elsewhere** - Stop following

## Evolution

### Rounds Mode
1. Round plays until time/kill limit reached
2. Agents ranked by score (kills × 50 + damage dealt - damage taken)
3. Top performers pass brains to next generation with mutations
4. Next round begins

### Persistent Mode
1. Agent dies and gets scored
2. Added to Hall of Fame (top 100 per team)
3. Respawns with evolved brain based on Hall of Fame parents
4. Tournament selection picks parents from best performers
5. Mutation rate varies by parent's rank

### Scoring Formula
```
score = kills × 50 + damageDealt - damageTaken
```
This rewards efficient combat - dealing damage while minimizing damage taken.

## Training Tips

- **Population** - More agents = more diversity, but slower simulation
- **Headless Mode** - Skip rendering for 10x+ faster training
- **Persistent Mode** - Better for long unattended runs
- **Rounds Mode** - Better for observing generational improvements

## Running Locally

Open `index.html` in a browser. No build step or server required.

## Tech

Single HTML file containing:
- Vanilla JavaScript
- Canvas 2D rendering
- Simple feedforward neural networks
- Neuroevolution with tournament selection

## Contributing

Pull requests welcome. Keep the single-file structure - everything lives in `index.html`.

## License

MIT
