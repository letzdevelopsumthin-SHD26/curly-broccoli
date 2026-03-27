// User & Auth
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Workflow
export interface Workflow {
  id: string;
  userId: string;
  title: string;
  description: string;
  status: 'draft' | 'published' | 'archived';
  modules: WorkflowModule[];
  prompts: string[];
  tokenCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkflowModule {
  id: string;
  name: string;
  type: string;
  config: Record<string, unknown>;
  position: { x: number; y: number };
}

// Marketplace
export interface MarketGap {
  id: string;
  title: string;
  description: string;
  failedSearches: number;
  existingTemplates: number;
  demandScore: number;
  potentialRevenue: string;
  createdAt: Date;
}

// Analytics
export interface WorkflowAnalytics {
  workflowId: string;
  monthlyRevenue: number;
  predictedNextMonth: number;
  growthTrend: number;
  userCount: number;
  executionCount: number;
  recommendations: string[];
}

// Localization
export interface LocalizedWorkflow {
  id: string;
  originalWorkflowId: string;
  language: string;
  title: string;
  description: string;
  translatedPrompts: string[];
}

// Module
export interface ReusableModule {
  id: string;
  creatorId: string;
  name: string;
  description: string;
  code: string;
  royaltyPercentage: number;
  downloads: number;
  rating: number;
  tags: string[];
  createdAt: Date;
}