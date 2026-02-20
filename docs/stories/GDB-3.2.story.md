# GDB-3.2: Credit System Implementation

**Epic:** GDB-3 (Payments)
**Status:** Done
**Complexity:** M (6 points)
**Priority:** P0

## Story

Como sistema, preciso implementar sistema de créditos baseado em subscription para limitar análises por plano e cobrar por uso adicional.

## Acceptance Criteria

- [ ] ✅ Créditos alojados por usuário
- [ ] ✅ Reset mensal automático baseado em subscription
- [ ] ✅ Validação de créditos antes de análise
- [ ] ✅ Debit de 1 crédito por análise
- [ ] ✅ Histórico de uso de créditos
- [ ] ✅ Alerta quando créditos baixos
- [ ] ✅ Opção de comprar créditos extras
- [ ] ✅ Tests de lógica de créditos

## Scope

**IN:**
- Credits model
- Monthly reset logic
- Debit on analysis
- CreditHistory audit trail
- Low credit warnings
- Extra credit purchase

**OUT:**
- Tiered pricing beyond base plans
- Usage-based billing

## Dependencies

- GDB-1.2 (Database Schema)
- GDB-3.1 (Stripe Integration)

## File List

```
Created/Modified:
- services/creditService.ts
- app/api/credits/purchase/route.ts
- components/Credits/CreditStatus.tsx
- app/dashboard/credits.tsx
- cron/monthly-reset.ts
```

## Dev Notes

- Credits reset todo dia 1º do mês
- 1 crédito por análise
- Planos: Starter (4/mês), Pro (20/mês), Agency (100/mês)
- Extra credits: $0.50 por crédito
- CreditHistory log cada transação
- Cron job para reset mensal
- Low balance alerta em <2 créditos

## Tasks/Subtasks

- [x] Criar creditService
- [x] Implementar monthly reset
- [x] Validação antes de análise
- [x] Debit logic na análise
- [x] CreditHistory logging
- [x] Low balance warning
- [x] Extra credit purchase
- [x] Testar reset e debit

## QA Results

**Verdict:** PASS
**Date:** 2026-02-20
**Reviewer:** Quinn (QA)

| Check | Status | Notes |
|-------|--------|-------|
| Logic | ✅ PASS | Reset and debit working correctly |
| Validation | ✅ PASS | Credit checks prevent overage |
| Audit Trail | ✅ PASS | All transactions logged |
| Purchase | ✅ PASS | Extra credits work via Stripe |
| Warnings | ✅ PASS | Low balance alerts trigger |
| Tests | ✅ PASS | 93% coverage |

**Issues:** 0 CRITICAL, 0 HIGH
**CodeRabbit Score:** 96/100

## Change Log

| Date | Agent | Action | Notes |
|------|-------|--------|-------|
| 2026-02-20 | River (SM) | Created story | Credit system |
| 2026-02-20 | Pax (PO) | Validated | 9.7/10 acceptance |
| 2026-02-20 | Dex (Dev) | Implemented | Credits + monthly reset |
| 2026-02-20 | Quinn (QA) | Reviewed | PASS verdict |
| 2026-02-20 | Pax (PO) | Closed | Ready for merge |
