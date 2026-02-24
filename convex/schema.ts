import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  projects: defineTable({ name: v.string(), active: v.boolean() }),
  environments: defineTable({ projectId: v.id("projects"), name: v.string(), colorType: v.string() }),
  secrets: defineTable({ envId: v.id("environments"), key: v.string(), encryptedValue: v.string(), version: v.number() }).index("by_env", ["envId"]),
  auditLogs: defineTable({ action: v.string(), projectId: v.optional(v.id("projects")), actorId: v.string(), timestamp: v.string() })
});
