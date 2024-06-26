﻿# GitAuto Auto-Pull Script

GitAuto is designed to streamline and automate the process of pulling the latest changes from the specified Git repository. This script supports both manual and automatic triggers for Git repository updates, ensuring that your project stays up-to-date with the latest changes without requiring constant manual oversight.

## Documentation

### Prerequisites

- Node.js installed on your machine.
- `shelljs`, `chalk`, `dotenv`, and `node-fetch` packages.
- A `.env` file configured with your `OUTPUT_DIR`, `GIT_REPO`, and `DISCORD_WEBHOOK_URL`.

### Installation

1. Clone this repository to your local machine.
2. Run `npm install` or `pnpm install` to install the required dependencies.
3. Set up your `.env` file with the necessary environment variables.
4. Run the script using `node clone.js pull` for a manual pull or `node clone.js auto` for automatic pulling at defined intervals.

### Usage

- **Manual Pull:** Execute a manual pull by running the script with the `pull` argument.
- **Automatic Pull:** To start the automatic pulling process, run the script with the `auto` argument. The script will then automatically pull from the repository every 5 minutes (default setting).

## To Do

- [x] Add support for customizable pull intervals cli (Currently doable only via .env).
- [ ] Enhance the Discord notification system with more detailed pull status information.
- [ ] Clean up hardcoded test repo names

## Known Issues

As of now, there are no known issues. If you encounter any problems, please open an issue in the repository.

## Contributing

I am open to feature requests and contributions. If you have ideas on how to improve this script or want to add new features, feel free to open an issue to discuss your ideas or submit a pull request with your proposed changes. Contributions are always welcome!

## Feature Requests

If you have any feature requests or suggestions to improve the script, please feel free to open an issue in this repository. I am always looking for ways to make the script more useful and versatile.

---

Thank you for using or contributing to the GitAuto auto-pull script. Together, we can make this tool better for everyone.
