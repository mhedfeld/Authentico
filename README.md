# ArcAI - Chat-to-Design-Case-Study
<a id="deployment"></a>

**Live Demo**: [Deployed on Vercel](https://case-study-arcai-k09cht8qe-maurice-hedfelds-projects.vercel.app) <br>
**Tech Stack**: Next.js 15, React 19, Konva.js, OpenAI API

---

## 📚 Table of Contents

- [ℹ️ Overview](#overview)
- [💼 Case Study Context](#case-study-context)
  - [❓ Problem Statement](#problem-statement)
  - [📦 Scope Definition](#scope-definition)
    - [In Scope](#in-scope)
    - [Out of Scope](#out-of-scope)
  - [🗺️ User Journey](#user-journey)
  - [🧩 User Stories & Acceptance Criteria](#user-stories--acceptance-criteria)
    - [🎯 1. Deterministic Layout Generation](#1-deterministic-layout-generation)
    - [🧾 2. Visible Layout Plan](#2-visible-layout-plan)
    - [✏️ 3. Constrained Editing](#3-constrained-editing)
    - [💬 4. Chat-Driven Refinement](#4-chat-driven-refinement)
    - [🎲 5. On-Brand Variant Generation](#5-on-brand-variant-generation)
    - [📤 6. Vector-Accurate Export](#6-vector-accurate-export)
- [💡 Design Decisions & Rationale](#design-decisions--rationale)
  - [🧠 1. Deterministic Chat-to-Plan Parsing](#1-deterministic-chat-to-plan-parsing)
  - [🔒 2. Strict On-Brand Enforcement (OpenAI)](#2-strict-on-brand-enforcement-openai)
  - [🖼️ 3. Constrained Editing with Konva.js](#3-constrained-editing-with-konvajs)
  - [📄 4. Vector Export Fidelity (JPG + PDF)](#4-vector-export-fidelity-jpg--pdf)
  - [⚡ 5. Edge Proxy for LLM on Vercel](#5-edge-proxy-for-llm-on-vercel)
- [🛠️ Technical Implementation](#technical-implementation)
  - [🏗️ Architecture](#architecture)
  - [🧱 Key Components](#key-components)
  - [🔁 Determinism Guarantees](#determinism-guarantees)
- [⭐ Features](#features)
- [📖 Usage Guide](#usage-guide)
  - [🖌️ Creating a Design](#creating-a-design)
  - [🔧 Refining Designs](#refining-designs)
  - [🖼️ Canvas Editing](#canvas-editing)
  - [⬇️ Exporting](#exporting)
- [🎨 Brand Guidelines](#brand-guidelines)
  - [🖼️ Brand Design Inspirations](#brand-design-inspirations)
  - [➕ Adding More Brand Information](#adding-more-brand-information)
- [🗂️ Project Structure](#project-structure)
- [🗓️ Development Timeline](#development-timeline)
  - [⚙️ Development Phases](#development-phases)
  - [🚧 Key Challenges Overcome](#key-challenges-overcome)
- [🔭 Future Enhancements (Out of Scope)](#future-enhancements-out-of-scope)

---

<a id="overview"></a>
## ℹ️ Overview

ArcAI is a case study project that demonstrates how to build a deterministic, chat-driven design system for B2B marketing content. The application takes short natural language prompts and converts them into professional, on-brand LinkedIn post visuals with visible layout plans, light constrained editing, variant generation, and vector-accurate exports.

**Key Differentiator**: Unlike generative design tools that use image models, ArcAI uses deterministic parsing and preset-based layout generation, ensuring reproducibility and brand consistency while maintaining creative flexibility through variants.

---

<a id="case-study-context"></a>
## 💼 Case Study Context

<a id="problem-statement"></a>
### ❓ Problem Statement

The case study challenge was to build a simple web app that:

- Converts short natural-language chat into deterministic, downloadable LinkedIn post visuals (1080×1080px)
- Always maintains on-brand appearance for a single chosen B2B brand
- Provides a visible "layout plan" schema showing the design structure
- Supports light constrained editing (move/resize logo/text within bounds)
- Enables variant generation (same prompt → different but on-brand layouts)
- Exports to both JPG and vector PDF formats
- **Constraint**: No generative image models

**Expected Deliverables**:
- Live deployed demo URL
- Repository with source code
- Screen recording demo

<a id="scope-definition"></a>
### 📦 Scope Definition

<a id="in-scope"></a>
#### In Scope ✅

- Single predefined brand (OpenAI) applied to all outputs
- Deterministic "Chat → Layout Plan" parsing with visible schema
- Render and light, constrained editing (logo/text move/resize within sensible bounds)
- Chat-driven refinements that update the plan deterministically
- On-brand variant generation (same prompt → distinct but brand-consistent layout)
- Exports: JPG and vector PDF (preserve vector text/shapes where feasible)
- Hosting: Live URL + repository + short screen recording

<a id="out-of-scope"></a>
#### Out of Scope ❌

- Generative image models (explicitly excluded)
- Multi-brand switching in the same session
- Rich design tooling (filters, complex masks, arbitrary transforms)
- Complex asset management, authentication, or collaboration features

<a id="user-journey"></a>
### 🗺️ User Journey

**Primary Happy User Journey**:

1. User enters a short prompt and may optionally upload image(s)
2. System parses prompt deterministically into a layout plan (schema) and shows it via "View plan"
3. System renders the plan on a 1080×1080 canvas
4. User performs light edits (move/resize logo/text within constraints) and/or refines via chat (e.g., "move logo top-left")
5. User generates a variant that stays on-brand but changes layout/positions
6. User exports to JPG and/or vector PDF

<a id="user-stories--acceptance-criteria"></a>
### 🧩 User Stories & Acceptance Criteria

<a id="1-deterministic-layout-generation"></a>
#### 🎯 1. Deterministic Layout Generation
**As a marketer**, I can input a short prompt to get a deterministic, on-brand 1080×1080 layout.

**Acceptance Criteria**:
- Same prompt + same variant → identical plan JSON and visual
- Plan is visible and machine-readable via "View plan" toggle

<a id="2-visible-layout-plan"></a>
#### 🧾 2. Visible Layout Plan
**As a marketer**, I can toggle "View plan" to see a machine-readable schema of elements and exact positions.

**Acceptance Criteria**:
- Plan lists all elements (type, text/logo/image, x/y, w/h, z-index, font/color)
- Plan matches the rendered visual exactly

<a id="3-constrained-editing"></a>
#### ✏️ 3. Constrained Editing
**As a marketer**, I can lightly edit text and logo by moving/resizing within sensible bounds.

**Acceptance Criteria**:
- Edits are constrained to valid positions
- Brand fonts/colors are enforced
- Logo aspect ratio is preserved
- Movement snaps to a 16px grid for alignment

<a id="4-chat-driven-refinement"></a>
#### 💬 4. Chat-Driven Refinement
**As a marketer**, I can refine via chat (e.g., "move logo top-left") and see the plan update deterministically.

**Acceptance Criteria**:
- Chat commands apply predictable updates
- Plan and render stay in sync
- Same refinement command → same result every time

<a id="5-on-brand-variant-generation"></a>
#### 🎲 5. On-Brand Variant Generation
**As a marketer**, I can generate a variant that's different but on-brand.

**Acceptance Criteria**:
- Variant changes layout or positions
- Brand tokens (colors, fonts, logo constraints) are never violated
- Variant maintains professional appearance

<a id="6-vector-accurate-export"></a>
#### 📤 6. Vector-Accurate Export
**As a marketer**, I can export to JPG and vector PDF while keeping text/shapes vector where feasible.

**Acceptance Criteria**:
- PDF contains vector text/shapes
- JPG matches the on-screen render at 1080×1080 resolution
- Both exports are production-ready

---

<a id="design-decisions--rationale"></a>
## 💡 Design Decisions & Rationale

During the case study development, five key problems emerged that required deliberate design decisions:

<a id="1-deterministic-chat-to-plan-parsing"></a>
### 🧠 1. Deterministic Chat-to-Plan Parsing

**The Problem**:  
Locking parsing to temperature 0 and a small set of presets can feel rigid and may under-interpret nuanced prompts.

**The Decision**:  
Use fixed layout presets (Variant A/B/C) + LLM at temperature 0 only to clean/structure text (extract headline/subhead); define a tiny command grammar (move/resize/align) for refinements.

**Why This Approach**:
- **Reproducibility**: Same prompt → identical plan/render every time
- **QA Simplicity**: Easy to verify outputs match expectations
- **Trustworthy Plan View**: "View plan" becomes a single source of truth
- **Predictable Refinements**: "Move logo top-left" → same coordinates every time

**Trade-off Accepted**:  
I sacrifice some creative interpretation for determinism, but gain reliability and ease of testing.

<a id="2-strict-on-brand-enforcement-openai"></a>
### 🔒 2. Strict On-Brand Enforcement (OpenAI)

**The Problem**:  
Enforcing logo, palette, and fonts strictly limits creative freedom and may reject user-specified styles.

**The Decision**:  
Hard-lock brand tokens: colors (#e5e7eb beige, #f9fafb white, #0a0a0b black), fonts (Inter with Arial fallback), logo aspect ratio and min/max sizing (120px-320px width).

**Why This Approach**:
- **Zero Brand Drift**: Consistent, approval-ready outputs across all variants and edits
- **Reduced Review Cycles**: Marketers know every output is on-brand
- **Prevents Accidents**: System auto-corrects or blocks non-brand colors/fonts

**Trade-off Accepted**:  
I limit creative freedom, but ensure every output is brand-compliant and professional.

**Note**: Initially considered Anthropic as the brand, but switched to OpenAI due to simpler design language and cleaner aesthetic that better suited a demo.

<a id="3-constrained-editing-with-konvajs"></a>
### 🖼️ 3. Constrained Editing with Konva.js

**The Problem**:  
Light, bounded move/resize (logo/text only) will feel limited compared to full design tools; complex transforms and effects are out.

**The Decision**:  
Use Konva.js with grid snap; allow only move/resize for logo/text; block rotate/skew; enforce bounds; plan is the single source of truth (edits sync back).

**Why This Approach**:
- **Maintains Determinism**: Constraints keep render-plan in perfect sync
- **Preserves Logo Integrity**: Logo aspect ratio enforced, prevents "broken" layouts
- **Simplifies Implementation**: Faster to build and test than full-featured design tool
- **Prevents Errors**: Bounds checking prevents elements from going off-canvas

**Trade-off Accepted**:  
I limit editing capabilities, but ensure edits never break the layout or violate brand constraints.

**Technical Note**: Initially considered Fabric.js, but switched to Konva.js for better React integration and simpler canvas management.

<a id="4-vector-export-fidelity-jpg--pdf"></a>
### 📄 4. Vector Export Fidelity (JPG + PDF)

**The Problem**:  
Converting canvas content to a vector PDF while preserving text/shapes is tricky; mixed raster/vector pipelines can introduce inconsistencies.

**The Decision**:  
Render on canvas (Konva); export JPG via canvas; export PDF via canvas to SVG → vector PDF conversion; rasterize images only, keep text/shapes vector when feasible.

**Why This Approach**:
- **Crisp Outputs**: Vector text/shapes stay sharp at any scale in PDF
- **Professional Feel**: PDFs maintain selectable text, elevates perceived quality
- **Visual Parity**: JPG matches on-screen render exactly

**Trade-off Accepted**:  
I accept some complexity in the export pipeline, but gain professional-grade outputs without generative models.

<a id="5-edge-proxy-for-llm-on-vercel"></a>
### ⚡ 5. Edge Proxy for LLM on Vercel

**The Problem**:  
Adding a tiny Node route increases deployment complexity and can introduce latency or failure points.

**The Decision**:  
Minimal serverless route (temperature 0, schema validation); prompt-hash caching; token logging to stay under budget (€10).

**Why This Approach**:
- **Security**: API keys secured server-side, never exposed to client
- **Cost Control**: Caching and token logging help manage budget
- **Request Auditing**: Can track usage and debug parsing issues
- **Clean Boundary**: Deterministic parsing logic isolated from UI

**Trade-off Accepted**:  
I add deployment complexity, but gain security, cost control, and better separation of concerns.

---

<a id="technical-implementation"></a>
## 🛠️ Technical Implementation

<a id="architecture"></a>
### 🏗️ Architecture

```
┌─────────────┐
│   Client    │
│  (React)    │
│             │
│  Chat UI    │───┐
│  Canvas     │   │
│  Plan View  │   │
└─────────────┘   │
                  
          ┌────────▼────────┐
          │  /api/parse     │
          │  (Edge Route)   │
          │                 │
          │  • LLM Parse    │
          │  • Temp=0       │
          │  • Cache        │
          └─────────────────┘
                  │
          ┌────────▼────────┐
          │   Planner       │
          │                 │
          │  • Presets      │
          │  • Deterministic│
          │  • Brand Lock   │
          └─────────────────┘
```

<a id="key-components"></a>
### 🧱 Key Components

#### `/src/app/api/parse/route.ts`
- Edge route for OpenAI API calls
- Temperature 0 for deterministic text extraction
- Prompt-hash caching to reduce API costs
- Schema validation for structured output

#### `/src/lib/planner.ts`
- Deterministic layout generation
- Three preset variants (A: headline-dominant, B: image-dominant, C: split)
- Brand token enforcement
- Grid-based positioning (16px snap)

#### `/src/lib/grammar.ts`
- Natural language command parser
- Supports: `move`, `resize`, `align`, `variant` commands
- Converts commands to plan updates deterministically

#### `/src/components/CanvasStage.tsx`
- Konva.js canvas renderer
- Constrained editing (move/resize only)
- Grid snapping
- Plan ↔ Canvas synchronization

#### `/src/lib/export.ts`
- JPG export (canvas to blob)
- PDF export (canvas to SVG to PDF via pdf-lib)
- Vector preservation for text/shapes

<a id="determinism-guarantees"></a>
### 🔁 Determinism Guarantees

The system ensures reproducibility through:

1. **Temperature 0 LLM**: All LLM calls use temperature 0 for consistent text extraction
2. **Fixed Presets**: Layout positions are calculated from preset definitions, not LLM suggestions
3. **Grid Snapping**: All coordinates snap to 16px grid
4. **Plan Hash**: Each plan generates a deterministic hash for caching and verification
5. **Single Source of Truth**: Plan object drives both render and edits

**Verification**:
- Same prompt + variant → identical plan hash and coordinates
- Same refinement command → same coordinate changes
- Plan JSON matches rendered visual exactly

---

<a id="features"></a>
## ⭐ Features

- ✨ **Deterministic Design Generation**: Same prompt + variant → identical layout
- 🎨 **Three Layout Presets**: Variant A (headline-dominant), B (image-dominant), C (split layout)
- 💬 **Natural Language Chat**: Input prompts and refinements via conversational interface
- 🎯 **Chat Refinements**: Move, resize, and align elements via natural commands
- ✏️ **Constrained Canvas Editing**: Drag and resize on canvas with grid snapping
- 🔒 **Brand Lock**: Enforces OpenAI colors, fonts, and logo constraints automatically
- 📋 **Visible Layout Plan**: Toggle "View plan" to see machine-readable JSON schema
- 🎲 **Variant Generation**: Generate different but on-brand layouts from same prompt
- 📥 **Dual Export**: JPG (raster) and PDF (vector text/shapes) exports
- 🚀 **Edge Runtime**: Fast API responses via Vercel Edge Functions
- 💾 **Smart Caching**: Prompt-hash caching reduces API costs
  
---

<a id="usage-guide"></a>
## 📖 Usage Guide

<a id="creating-a-design"></a>
### 🖌️ Creating a Design

1. Type a prompt describing your design in the chat interface, e.g.:
   - "I need a LinkedIn visual for event XY"
   - "Create a banner for product launch"
   - "Design a post about AI safety"

2. Optionally upload one to three images (supported formats: JPG, PNG, WebP)

3. The system will:
   - Parse your prompt into headline/subheadline (via LLM or fallback)
   - Generate a deterministic layout plan for Variant A, Variant B and Variant C
   - Render the design on a 1080×1080 canvas

<a id="refining-designs"></a>
### 🔧 Refining Designs

After a design is created, you can refine it with natural language commands:

- **Move**: `move logo to top-right` or `move headline to center`
- **Resize**: `resize headline to 400px width` or `make logo smaller`
- **Align**: `align headline center` or `align logo left`
- **Switch Variant**: `variant B` or `variant C` or `switch to variant C`

The system will parse your command and update both the plan and the render deterministically.

<a id="canvas-editing"></a>
### 🖼️ Canvas Editing

Click on elements (logo, headline, subheadline) to select them, then:

- **Drag**: Click and drag to reposition (snaps to 16px grid)
- **Resize**: Drag corners/edges to resize
- **Constraints**: 
  - Logo respects min 120px, max 320px width and preserves aspect ratio
  - Text elements respect min/max width bounds
  - All elements stay within canvas bounds

Edits are immediately reflected in the plan object.

<a id="exporting"></a>
### ⬇️ Exporting

- **Export JPG**: Click "Export JPG" to download a high-resolution 1080×1080 JPEG
- **Export PDF**: Click "Export PDF" to download a vector PDF (text/shapes remain vector, images rasterized)
- **View Plan**: Click "View Plan" to toggle visibility of the machine-readable JSON schema

---

<a id="brand-guidelines"></a>
## 🎨 Brand Guidelines

The system is locked to **OpenAI** branding with comprehensive brand identity:

- **Colors**: 
  - Beige/Light Gray: `#e5e7eb`
  - White: `#f9fafb`
  - Black: `#0a0a0b`
- **Fonts**: Inter (primary), Arial (fallback), sans-serif
- **Logo**: Always included in designs, preserves aspect ratio, min 120px, max 320px width
- **Visual Style**: Minimalist, sophisticated, modern with generous white space
- **Backgrounds**: Three gradient variants (A, B, C) available for variety

<a id="brand-design-inspirations"></a>
### 🖼️ Brand Design Inspirations

<p align="center">
  <img src="https://d2ocroys3p1hkd.cloudfront.net/3prgxfbejkfedhkbjxznfdf53j9cibodco7xapwl7jow.jpg" alt="Inspiration 1" width="49%">
  <img src="https://images.ctfassets.net/kftzwdyauwt9/1L8YG0N2Cuz0ZBhqaI3tVo/1b2a7535290c5fafb6b4b38e6b65e3e9/P2_1__1_.png?w=3840&q=90&fm=webp" alt="Inspiration 2" width="49%">
</p>
<p align="center">
  <img src="https://cdn.gradual.com/images/https://d2xo500swnpgl1.cloudfront.net/uploads/oaiacademy/Work-Users-Cover-Images-41--b5653cb4-4f51-4b93-b78d-2ec4fde18050-1754575154441.jpeg?fit=scale-down&width=1200" alt="Inspiration 3" width="49%">
  <img src="https://images.ctfassets.net/kftzwdyauwt9/2xEy2QH4BIYhpJXE8Iypg0/6079519e12ed3949d5db25e591c18479/Schibsted_hero_card.png?w=3840&q=90&fm=webp" alt="Inspiration 4" width="49%">
</p>

<a id="adding-more-brand-information"></a>
### ➕ Adding More Brand Information

To enhance brand consistency, edit:
- `src/brand/tokens.ts` - Add colors, fonts, logo URL
- `src/brand/guide.ts` - Add design principles, patterns, visual style guidelines

See `src/brand/README.md` for detailed instructions on extending the brand system.

---

<a id="project-structure"></a>
## 🗂️ Project Structure

```
arcai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── parse/
│   │   │       └── route.ts          # Edge route for LLM parsing
│   │   ├── page.tsx                  # Main page component
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global styles
│   ├── brand/
│   │   ├── tokens.ts                 # OpenAI brand constants
│   │   ├── guide.ts                  # Brand guidelines for AI
│   │   └── README.md                 # Brand system documentation
│   ├── components/
│   │   ├── ui/
│   │   │   └── animated-ai-chat.tsx  # Main chat UI component
│   │   ├── CanvasStage.tsx           # Konva.js canvas renderer
│   │   ├── PlanView.tsx              # JSON plan viewer
│   │   ├── VariantSwitch.tsx         # A/B/C variant selector
│   │   └── ExportButtons.tsx         # Export controls
│   └── lib/
│       ├── types.ts                  # Layout plan type definitions
│       ├── planner.ts                # Deterministic layout planner
│       ├── grammar.ts                # Command parser and applier
│       ├── export.ts                 # JPG/PDF export utilities
│       ├── cache.ts                  # In-memory LLM response cache
│       └── utils.ts                  # Utility functions
├── public/
│   ├── brand-logos/                  # OpenAI logo assets
│   └── background/                   # Background gradient variants
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

<a id="development-timeline"></a>
## 🗓️ Development Timeline

**Initial Planning & Analysis**: 2.10 hours  
**Development Time**: 5 hours  
**Total Case Study Time**: ~7 hours

<a id="development-phases"></a>
### ⚙️ Development Phases

1. **Problem Analysis** (2.10h)
   - Understanding the case study requirements
   - Scope definition (in/out of scope)
   - User journey mapping
   - Design decision analysis (5 key problems)
   - Technical approach planning

2. **Implementation** (5h)
   - Next.js project setup
   - Brand token system
   - Chat UI with animated interface
   - Deterministic planner with preset variants
   - Konva.js canvas integration
   - Command grammar parser
   - Export functionality (JPG + PDF)
   - Edge route for LLM parsing
   - Caching system
   - Deployment to Vercel

<a id="key-challenges-overcome"></a>
### 🚧 Key Challenges Overcome

- **Determinism**: Ensuring same prompt → same output required careful control of LLM temperature and preset-based positioning
- **Brand Enforcement**: Implementing hard locks on colors, fonts, and logo constraints while maintaining UX
- **Canvas Editing**: Balancing editing flexibility with constraint enforcement
- **Vector Export**: Converting canvas to vector PDF while preserving text/shapes required careful SVG generation
- **Cost Control**: Prompt-hash caching and token logging helped stay within €10 budget

---

<a id="future-enhancements-out-of-scope"></a>
## 🔭 Future Enhancements (Out of Scope)

While these features were explicitly out of scope for the case study, potential future enhancements could include:

- Multi-brand support with brand switching UI
- More sophisticated layout presets
- Additional editing capabilities (rotation, filters, effects)
- Image asset library
- Collaboration features
- Template gallery
- Batch export
- Custom font upload

---
**Thank you for your Consideration!**  
**Built with ❤️ by Maurice**
