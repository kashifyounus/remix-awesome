import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import process from "process";

// Function to delete the scripts folder
const deleteScriptsFolder = () => {
  const scriptsPath = path.join(process.cwd(), "scripts");
  if (fs.existsSync(scriptsPath)) {
    fs.rmSync(scriptsPath, { recursive: true, force: true });
  }
};

console.log("🚀 Setting up your Remix project...");

// Install dependencies
execSync("npm install", { stdio: "inherit" });

// Remove the scripts folder
deleteScriptsFolder();

console.log("✅ Setup complete! Run 'npm run dev' to start your Remix app.");
