import { db } from "./db";
import { users, categories, tools, type User, type InsertUser, type Category, type InsertCategory, type Tool, type InsertTool } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Tool methods
  getTools(): Promise<Tool[]>;
  getToolById(id: string): Promise<Tool | undefined>;
  getToolsByCategory(categoryId: string): Promise<Tool[]>;
  createTool(tool: InsertTool): Promise<Tool>;
  updateTool(id: string, tool: Partial<InsertTool>): Promise<Tool | undefined>;
  deleteTool(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    const result = await db.select().from(categories).where(eq(categories.id, id)).limit(1);
    return result[0];
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const result = await db.insert(categories).values(category).returning();
    return result[0];
  }

  // Tool methods
  async getTools(): Promise<Tool[]> {
    return await db.select().from(tools);
  }

  async getToolById(id: string): Promise<Tool | undefined> {
    const result = await db.select().from(tools).where(eq(tools.id, id)).limit(1);
    return result[0];
  }

  async getToolsByCategory(categoryId: string): Promise<Tool[]> {
    return await db.select().from(tools).where(eq(tools.categoryId, categoryId));
  }

  async createTool(tool: InsertTool): Promise<Tool> {
    const result = await db.insert(tools).values(tool).returning();
    return result[0];
  }

  async updateTool(id: string, tool: Partial<InsertTool>): Promise<Tool | undefined> {
    const result = await db.update(tools).set(tool).where(eq(tools.id, id)).returning();
    return result[0];
  }

  async deleteTool(id: string): Promise<boolean> {
    const result = await db.delete(tools).where(eq(tools.id, id)).returning();
    return result.length > 0;
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<string, Category>;
  private tools: Map<string, Tool>;
  currentUserId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.tools = new Map();
    this.currentUserId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const id = crypto.randomUUID();
    const newCategory: Category = { 
      ...category, 
      id, 
      description: category.description ?? null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.categories.set(id, newCategory);
    return newCategory;
  }

  // Tool methods
  async getTools(): Promise<Tool[]> {
    return Array.from(this.tools.values());
  }

  async getToolById(id: string): Promise<Tool | undefined> {
    return this.tools.get(id);
  }

  async getToolsByCategory(categoryId: string): Promise<Tool[]> {
    return Array.from(this.tools.values()).filter(tool => tool.categoryId === categoryId);
  }

  async createTool(tool: InsertTool): Promise<Tool> {
    const id = crypto.randomUUID();
    const newTool: Tool = { 
      ...tool, 
      id,
      categoryId: tool.categoryId ?? null,
      pricingAmount: tool.pricingAmount ?? null,
      videoUrl: tool.videoUrl ?? null,
      rating: tool.rating ?? "0",
      reviewCount: tool.reviewCount ?? 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastUpdated: new Date()
    };
    this.tools.set(id, newTool);
    return newTool;
  }

  async updateTool(id: string, tool: Partial<InsertTool>): Promise<Tool | undefined> {
    const existing = this.tools.get(id);
    if (!existing) return undefined;
    
    const updated: Tool = { 
      ...existing, 
      ...tool,
      updatedAt: new Date(),
      lastUpdated: new Date()
    };
    this.tools.set(id, updated);
    return updated;
  }

  async deleteTool(id: string): Promise<boolean> {
    return this.tools.delete(id);
  }
}

export const storage = new DatabaseStorage();
