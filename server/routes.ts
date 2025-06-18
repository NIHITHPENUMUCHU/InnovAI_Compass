import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCategorySchema, insertToolSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories API
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const category = await storage.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validatedCategory = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedCategory);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: "Invalid category data", error });
    }
  });

  // Tools API
  app.get("/api/tools", async (req, res) => {
    try {
      const tools = await storage.getTools();
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tools" });
    }
  });

  app.get("/api/tools/:id", async (req, res) => {
    try {
      const tool = await storage.getToolById(req.params.id);
      if (!tool) {
        return res.status(404).json({ message: "Tool not found" });
      }
      res.json(tool);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tool" });
    }
  });

  app.get("/api/categories/:id/tools", async (req, res) => {
    try {
      const tools = await storage.getToolsByCategory(req.params.id);
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tools for category" });
    }
  });

  app.post("/api/tools", async (req, res) => {
    try {
      const validatedTool = insertToolSchema.parse(req.body);
      const tool = await storage.createTool(validatedTool);
      res.status(201).json(tool);
    } catch (error) {
      res.status(400).json({ message: "Invalid tool data", error });
    }
  });

  app.put("/api/tools/:id", async (req, res) => {
    try {
      const validatedTool = insertToolSchema.partial().parse(req.body);
      const tool = await storage.updateTool(req.params.id, validatedTool);
      if (!tool) {
        return res.status(404).json({ message: "Tool not found" });
      }
      res.json(tool);
    } catch (error) {
      res.status(400).json({ message: "Invalid tool data", error });
    }
  });

  app.delete("/api/tools/:id", async (req, res) => {
    try {
      const deleted = await storage.deleteTool(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Tool not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete tool" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
