# Graph Report - .  (2026-04-30)

## Corpus Check
- Corpus is ~1,674 words - fits in a single context window. You may not need a graph.

## Summary
- 17 nodes · 2 edges · 3 communities detected
- Extraction: 50% EXTRACTED · 50% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 1,600 input · 500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Readme Mongo|Readme Mongo]]
- [[_COMMUNITY_Readme Node|Readme Node]]
- [[_COMMUNITY_Readme Express|Readme Express]]

## God Nodes (most connected - your core abstractions)
1. `UNAD` - 1 edges
2. `MongoDB` - 1 edges
3. `Node.js` - 0 edges
4. `Express.js` - 0 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 1 - "Readme Mongo"
Cohesion: 1.0
Nodes (2): MongoDB, UNAD

### Community 13 - "Readme Node"
Cohesion: 1.0
Nodes (1): Node.js

### Community 14 - "Readme Express"
Cohesion: 1.0
Nodes (1): Express.js

## Knowledge Gaps
- **4 isolated node(s):** `UNAD`, `MongoDB`, `Node.js`, `Express.js`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Readme Mongo`** (2 nodes): `MongoDB`, `UNAD`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Readme Node`** (1 nodes): `Node.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Readme Express`** (1 nodes): `Express.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `UNAD`, `MongoDB`, `Node.js` to the rest of the system?**
  _4 weakly-connected nodes found - possible documentation gaps or missing edges._