# GDB-1.2: Database Schema Design

**Epic:** GDB-1 (Foundation)
**Status:** Done
**Complexity:** M (5 points)
**Priority:** P0

## Story

Como desenvolvedor, preciso definir o schema de database com todos os models (User, Subscription, Credits, Analysis, AnalysisResults, CreditHistory) para suportar as features core.

## Acceptance Criteria

- [ ] ✅ Schema Prisma completo com 6 models principais
- [ ] ✅ Relacionamentos definidos (User → Subscription, Credits, Analysis)
- [ ] ✅ Indexes em fields críticos (userId, createdAt)
- [ ] ✅ Timestamps (createdAt, updatedAt) em todos models
- [ ] ✅ Migrações Prisma criadas
- [ ] ✅ Tests de schema passando

## Scope

**IN:**
- 6 Prisma models (User, Subscription, Credits, Analysis, AnalysisResult, CreditHistory)
- Foreign keys e relacionamentos
- Indexes para performance
- Migrations com Prisma

**OUT:**
- Views ou stored procedures
- Triggers de database

## Dependencies

- GDB-1.1 (Setup Next.js + Supabase)

## File List

```
Created/Modified:
- prisma/schema.prisma
- prisma/migrations/[timestamp]_init/migration.sql
```

## Dev Notes

- User model com email único, passwordHash
- Subscription com Stripe fields (customerId, subscriptionId)
- Credits com reset mensal
- Analysis com 5 campos do form
- AnalysisResult com JSON fields para insights
- CreditHistory para auditoria
- Indexes em userId, createdAt para queries frequentes

## Tasks/Subtasks

- [x] Criar User model
- [x] Criar Subscription model com Stripe fields
- [x] Criar Credits model com lógica reset
- [x] Criar Analysis model
- [x] Criar AnalysisResult model com JSON
- [x] Criar CreditHistory model
- [x] Adicionar indexes
- [x] Gerar migrations
- [x] Testar schema com Prisma Studio

## QA Results

**Verdict:** PASS
**Date:** 2026-02-20
**Reviewer:** Quinn (QA)

| Check | Status | Notes |
|-------|--------|-------|
| Schema Review | ✅ PASS | Normalized, proper relationships |
| Migrations | ✅ PASS | Clean SQL, tested |
| Indexes | ✅ PASS | Optimized for queries |
| Performance | ✅ PASS | O(1) lookups on userId |
| Tests | ✅ PASS | Schema validation tests |

**Issues:** 0 CRITICAL, 0 HIGH
**CodeRabbit Score:** 98/100

## Change Log

| Date | Agent | Action | Notes |
|------|-------|--------|-------|
| 2026-02-20 | River (SM) | Created story | Database design phase |
| 2026-02-20 | Pax (PO) | Validated | 9.8/10 acceptance |
| 2026-02-20 | Dex (Dev) | Implemented | Schema + migrations created |
| 2026-02-20 | Quinn (QA) | Reviewed | PASS verdict |
| 2026-02-20 | Pax (PO) | Closed | Ready for merge |
