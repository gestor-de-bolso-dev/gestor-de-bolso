# UX Research — Gestor de Bolso

**Date:** 2026-02-20
**Platform:** Campaign Analysis SaaS
**Target Users:** Media Buyers, Traffic Managers, Marketing Professionals

---

## User Personas

### Primary: Ana — The Media Buyer
- **Age:** 28-35
- **Role:** Manages campaigns for multiple clients
- **Pain Points:**
  - Manual analysis of campaign data (2-3 hours/week)
  - Difficult to identify optimization opportunities
  - Inconsistent recommendation approach
  - Struggles to communicate insights to clients
- **Goals:**
  - Quick, AI-powered analysis of campaigns
  - Actionable recommendations with data
  - Historical comparison to track improvements
  - Save time on analysis work

### Secondary: Carlos — The Agency Manager
- **Age:** 35-45
- **Role:** Oversees team of media buyers
- **Pain Points:**
  - Team inconsistency in analysis quality
  - Need to scale without hiring more analysts
  - ROI tracking across multiple campaigns
  - Budget constraints with traditional solutions
- **Goals:**
  - Standardized analysis process
  - Team collaboration features
  - Better ROI metrics
  - Cost-effective solution

---

## User Journeys

### Journey 1: Campaign Analysis (Happy Path)

```
1. LOGIN
   ↓
2. SEE DASHBOARD
   ↓
3. START NEW ANALYSIS
   ├─ Step 1: Campaign Objective (Why this campaign?)
   ├─ Step 2: Channels (Facebook, Instagram, Google?)
   ├─ Step 3: Audience (Who are we targeting?)
   ├─ Step 4: Budget (How much to spend?)
   └─ Step 5: Duration (How long?)
   ↓
4. GET INSIGHTS
   ├─ ROAS Estimation
   ├─ Smart Recommendations
   └─ Risk Alerts
   ↓
5. SAVE ANALYSIS
   ↓
6. VIEW HISTORY
   ↓
7. COMPARE CAMPAIGNS
```

### Journey 2: Team Collaboration (Future)

```
1. CREATE WORKSPACE
2. INVITE TEAM MEMBERS
3. SHARE ANALYSES
4. ADD COMMENTS
5. TRACK CHANGES
```

---

## Key User Needs

| Need | Importance | Current State | Solution |
|------|-----------|---------------|---------|
| Quick analysis (<2 min) | Critical | Manual (30-60 min) | AI-powered Claude |
| Actionable insights | Critical | Varies | Structured recommendations |
| Historical tracking | High | None | Analysis history + comparison |
| Mobile-friendly | Medium | Not yet | Responsive design |
| Data export | Medium | None | CSV/PDF export |
| Team sharing | Medium (future) | None | Workspace feature (Phase 2) |

---

## Mental Models

### User's Current Process
```
Campaign Data → Manual Analysis → Spreadsheets → Client Report
(Manual, time-consuming, error-prone)
```

### Desired Future State
```
Campaign Data → AI Analysis → Smart Insights → Client Report
(Fast, consistent, scalable)
```

---

## User Flows

### Authentication Flow
```
LANDING PAGE
↓
[Login / Signup]
├─ Email/Password
└─ Profile Setup
↓
DASHBOARD
```

### Analysis Flow
```
DASHBOARD
↓
[+ New Analysis]
↓
5-STEP FORM
├─ Campaign Objective
├─ Channels Selection
├─ Audience Definition
├─ Budget Allocation
└─ Campaign Duration
↓
[Loading State]
  Claude AI processing...
↓
RESULTS PAGE
├─ ROAS Estimation
├─ Key Insights
├─ Recommendations
└─ Risk Alerts
↓
[Save] [Compare] [Export]
```

### History & Comparison
```
DASHBOARD
↓
[History] or [Recent Analyses]
↓
LIST VIEW
├─ Filter by Date
├─ Filter by Objective
└─ Sort by ROAS
↓
[Select 2 Analyses]
↓
SIDE-BY-SIDE COMPARISON
├─ Insights Diff
├─ ROAS Diff
└─ Recommendations Diff
```

---

## Design Principles

### 1. **Simplicity**
- 5-step form (not 15)
- Clear labels and help text
- Progressive disclosure (show what's needed)

### 2. **Speed**
- <2 seconds to start analysis
- Real-time form validation
- Fast API responses (<10s)

### 3. **Clarity**
- ROAS shown prominently
- Recommendations numbered and prioritized
- Color coding: Green (good), Yellow (caution), Red (risk)

### 4. **Consistency**
- Atomic design system
- Reusable components
- Predictable interactions

### 5. **Accessibility**
- WCAG AA minimum
- Keyboard navigation
- High contrast ratios
- Screen reader friendly

---

## Interaction Patterns

### Form Validation
- Real-time (not on blur, on change)
- Clear error messages
- Hints for each field
- Progress indicator

### Loading States
- Skeleton screens (not spinners)
- Estimated time (e.g., "30s remaining")
- Don't block interaction

### Success/Error States
- Toast notifications for actions
- Summary dialogs for important actions
- Undo option where possible

---

## Content Strategy

### Tone of Voice
- Professional but friendly
- Clear and concise
- Action-oriented
- Data-driven

### Microcopy Examples
- "Analyze your campaign..." (not "Start analysis")
- "We recommend..." (not "You should...")
- "ROAS boost of ~15%" (not "Higher earnings")

---

## Success Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Time to Analysis | <2 min | TBD | ⏳ |
| Form Completion Rate | >85% | TBD | ⏳ |
| Insight Clarity (NPS) | >8/10 | TBD | ⏳ |
| Mobile Usability | >90% | TBD | ⏳ |
| Accessibility Score | AAA | TBD | ⏳ |

---

**Next:** Phase 2 - Design System Audit
