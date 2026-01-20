# Neural Quake Arena

A browser-based arena shooter where AI agents learn to fight through neuroevolution. Two teams of neural network-controlled agents battle in real-time, evolving their strategies over generations.

## Live Demo

https://rayengmark.github.io/neural-quakelike/

## What It Does

50 red agents vs 50 blue agents. Each agent has a small neural network brain (26 inputs, 16 hidden neurons, 5 outputs) that controls movement, aiming, shooting, and abilities. After each round, the best performers pass their brains to the next generation with mutations. Over time, agents develop strategies for combat, dodging, weapon usage, and map control.

### Inputs

Each agent perceives the world through:
- 16 raycast sensors detecting walls, enemies, and allies
- Health and armor levels
- Weapon cooldown status
- Nearest enemy angle and distance
- Nearest ally angle and distance
- Current weapon type (rocket launcher, laser, sword)

### Outputs

The network decides:
- Turn direction
- Movement speed
- Whether to shoot
- Strafe direction
- Whether to dodge

## Weapons

- **Rocket Launcher** - Default weapon. Explosive projectiles with splash damage.
- **Laser** - Instant hitscan beam. One-shot kill.
- **Energy Sword** - Charge-up melee lunge attack. Longer charge = longer range.

Lasers and swords spawn in a circle at map center at the start of each round. Agents can only pick up one special weapon per round.

## Map Features

- **Pickup Pits** - Enclosed areas in the corners containing health and armor. Respawn on random timers (15-25 seconds).
- **Teleporters** - Two portals (bottom-left and top-right) that activate at a random point during the round for 30 seconds.
- **Cover** - Buildings scattered across the map, denser near spawns, sparser in the middle.

## Controls

The sidebar has controls for:
- Simulation speed (1x to 10x)
- Population size
- Round time and kill limit
- Toggle switches for weapons, dodging, teleporters, friendly fire
- Zoom and camera controls (drag to pan, scroll to zoom)

Click on any agent to follow them and see their stats.

## Running Locally

Open `index.html` in a browser. No build step or server required.

## How Evolution Works

1. Round plays out until time runs out or kill limit is reached
2. Agents are ranked by score (kills, damage dealt, survival)
3. Top 10% of each team keep their brains with minor mutations
4. Bottom 90% receive a copy of a random top performer's brain with heavier mutations
5. Winning team's best brain is preserved, losing team's best brain gets extra mutation
6. Next generation begins

## Contributing

Pull requests welcome. If you're adding a feature, keep the single-file structure - everything lives in `index.html`.

## License

MIT
