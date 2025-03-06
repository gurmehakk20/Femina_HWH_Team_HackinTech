import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read data from resources.json
const resourcesPath = path.join(__dirname, "../utils/resources.json");

export const getResources = async (req, res) => {
  try {
    const data = await fs.readFile(resourcesPath, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ message: "Error reading resources data" });
  }
};
