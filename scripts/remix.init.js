import { execSync } from "child_process";
import fs from "fs";

console.log("🚀 Setting up your Remix project...");

// Install dependencies
execSync("npm install", { stdio: "inherit" });

// Remove the `scripts/` folder (to clean up)
fs.rmSync("scripts", { recursive: true, force: true });

console.log("✅ Setup complete! Run 'npm run dev' to start your remix awesome.");
