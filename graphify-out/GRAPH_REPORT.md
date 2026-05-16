# Graph Report - .  (2026-05-16)

## Corpus Check
- Corpus is ~2,263 words - fits in a single context window. You may not need a graph.

## Summary
- 29 nodes · 17 edges · 6 communities detected
- Extraction: 65% EXTRACTED · 35% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Mongoose Data Models|Mongoose Data Models]]
- [[_COMMUNITY_REST API Layer|REST API Layer]]
- [[_COMMUNITY_Tech Stack (MongoDB + UNAD)|Tech Stack (MongoDB + UNAD)]]
- [[_COMMUNITY_Reference-Based Architecture|Reference-Based Architecture]]
- [[_COMMUNITY_Node.js Runtime|Node.js Runtime]]
- [[_COMMUNITY_Express Framework|Express Framework]]

## God Nodes (most connected - your core abstractions)
1. `Danacion Model` - 4 edges
2. `Solicitud Model` - 4 edges
3. `Danaciones Router` - 3 edges
4. `Solicitudes Router` - 3 edges
5. `Uniform CRUD REST Pattern` - 3 edges
6. `Mongoose populate() Reference Resolution` - 3 edges
7. `Institucion Model` - 2 edges
8. `Usuario Model` - 2 edges
9. `Util Model` - 2 edges
10. `Referenced Data Model` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Referenced Data Model` --conceptually_related_to--> `Mongoose populate() Reference Resolution`  [INFERRED]
  README.md → routes/danaciones.js
- `Danaciones Router` --implements--> `Uniform CRUD REST Pattern`  [INFERRED]
  routes/danaciones.js → CLAUDE.md
- `Solicitudes Router` --implements--> `Uniform CRUD REST Pattern`  [INFERRED]
  routes/solicitudes.js → CLAUDE.md
- `Danaciones Router` --calls--> `Danacion Model`  [EXTRACTED]
  routes/danaciones.js → models/Danacion.js
- `Solicitudes Router` --calls--> `Solicitud Model`  [EXTRACTED]
  routes/solicitudes.js → models/Solicitud.js

## Hyperedges (group relationships)
- **Danacion References Usuario and Util** — Danacion_model, Usuario_model, Util_model [EXTRACTED 1.00]
- **Solicitud References Institucion and Util** — Solicitud_model, Institucion_model, Util_model [EXTRACTED 1.00]
- **CRUD Pattern Implemented by Routers over Models** — danaciones_router, solicitudes_router, concept_crud_pattern [INFERRED 0.88]

## Communities

### Community 0 - "Mongoose Data Models"
Cohesion: 0.6
Nodes (5): Danacion Model, Institucion Model, Solicitud Model, Usuario Model, Util Model

### Community 1 - "REST API Layer"
Cohesion: 0.5
Nodes (5): CLAUDE.md Project Guidance, Uniform CRUD REST Pattern, Mongoose populate() Reference Resolution, Danaciones Router, Solicitudes Router

### Community 3 - "Tech Stack (MongoDB + UNAD)"
Cohesion: 1.0
Nodes (2): MongoDB, UNAD

### Community 4 - "Reference-Based Architecture"
Cohesion: 1.0
Nodes (2): Referenced Data Model, Donaciones Backend README

### Community 16 - "Node.js Runtime"
Cohesion: 1.0
Nodes (1): Node.js

### Community 17 - "Express Framework"
Cohesion: 1.0
Nodes (1): Express.js

## Knowledge Gaps
- **6 isolated node(s):** `UNAD`, `MongoDB`, `Node.js`, `Express.js`, `Donaciones Backend README` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Tech Stack (MongoDB + UNAD)`** (2 nodes): `MongoDB`, `UNAD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Reference-Based Architecture`** (2 nodes): `Referenced Data Model`, `Donaciones Backend README`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Node.js Runtime`** (1 nodes): `Node.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Express Framework`** (1 nodes): `Express.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Mongoose populate() Reference Resolution` connect `REST API Layer` to `Reference-Based Architecture`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `Danaciones Router` connect `REST API Layer` to `Mongoose Data Models`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `Solicitudes Router` connect `REST API Layer` to `Mongoose Data Models`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Uniform CRUD REST Pattern` (e.g. with `Danaciones Router` and `Solicitudes Router`) actually correct?**
  _`Uniform CRUD REST Pattern` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `UNAD`, `MongoDB`, `Node.js` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._