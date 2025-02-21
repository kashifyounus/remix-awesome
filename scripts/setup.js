import { execSync } from "child_process";

console.log("Setting up the project...");

execSync("npm install", { stdio: "inherit" });

console.log("Setup complete!");