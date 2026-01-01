# LedgerX — Distributed Payment & Event Processing Platform

LedgerX is an educational yet production-grade backend platform that demonstrates how a real-world
high-load financial system can evolve from a simple monolith into a distributed, multi-language,
fault-tolerant architecture.

The project is inspired by systems like PayPal, Stripe, Wise, and modern cloud-native platforms.

> **Goal:** deeply understand backend systems, data consistency, performance, networking, and system design —
> not just use frameworks, but know what happens underneath.

---

## 🚀 Key Ideas

- Start **simple**: a clean, well-structured monolith
- Scale **only when forced by real problems**
- Use the **right tool for the job** (Node.js vs C++)
- Design for **failures, concurrency, and consistency**
- Treat data as the **source of truth**

---

## 🧱 Architecture Evolution

### Phase 1 — Modular Monolith (Nest.js)

The system starts as a classic backend monolith, but with **strict domain boundaries**:

- Auth
- Accounts
- Ledger
- Transactions
- Audit Log

Each module:

- owns its data
- communicates via explicit interfaces
- publishes domain events internally

This allows painless extraction into microservices later.

---

### Phase 2 — High-Load Monolith

As load increases, real-world constraints appear:

- concurrent balance updates
- idempotency requirements
- retries and partial failures
- read/write separation

At this stage the system introduces:

- optimistic locking
- background jobs
- Redis caching
- metrics and tracing

The monolith reaches its **natural scalability limits**.

---

### Phase 3 — Microservices

The system is split along **business boundaries**, not technical ones:

| Service             | Technology        | Responsibility                   |
| ------------------- | ----------------- | -------------------------------- |
| API Gateway         | Nest.js           | Entry point, auth, rate limiting |
| Auth Service        | Nest.js           | Authentication & authorization   |
| Transaction Service | Nest.js           | Transaction orchestration        |
| Ledger Service      | Nest.js (wrapper) | Integration with core ledger     |
| Analytics Service   | Nest.js           | Read models & reporting          |

Communication:

- **Sync:** HTTP / gRPC
- **Async:** Kafka / NATS (event-driven)

---

### Phase 4 — Native C++ Core Services

Some parts of the system require:

- ultra-low latency
- predictable performance
- explicit memory control

These components are implemented in **C++**.

#### Ledger Engine (C++)

The heart of the system.

Responsibilities:

- double-entry accounting
- invariant enforcement
- append-only transaction log (WAL)
- snapshots and recovery

Key concepts:

- cache locality
- lock-free structures (where possible)
- fsync and durable writes

#### Event Stream Processor (C++)

- consumes event streams
- performs real-time aggregations
- publishes derived metrics

## 💰 Financial Model

LedgerX uses a **double-entry accounting model**.

- Balances are **derived**, not stored
- All operations are **append-only**
- Full auditability and replayability

This approach mirrors real financial systems.

## 🖥 Frontend

Two frontend applications consume the platform:

### Web Dashboard

- account overview
- transaction history
- real-time balance updates
- WebSocket-based notifications

### Admin UI

- limits and rules management
- fraud signals
- audit logs

## 📂 Repository Structure

```
ledgerx/
├── apps/               # Node.js services (Nest.js)
├── services/           # High-performance C++ services
├── frontend/           # Web & Admin UI
├── libs/               # Shared contracts, events, utilities
├── infra/              # Docker, Kubernetes, Terraform
├── docs/               # Architecture & design decisions
└── tools/              # Load testing & chaos experiments
```

## 🧪 Reliability & Observability

- Structured logging

- Metrics (Prometheus)

- Distributed tracing (OpenTelemetry)

Chaos testing:

- process crashes

- network delays

- message duplication

Designed with failure-first mindset.

## 📚 Knowledge Applied

This project applies concepts from:

- Operating Systems (Tanenbaum)

- Computer Architecture

- Distributed Systems

- Database Internals

- Networking (TCP/IP, backpressure)

- Site Reliability Engineering (SRE)

It is intentionally over-engineered for learning purposes.

## 🎯 Project Goals

Understand backend systems beyond frameworks

Practice real-world architectural trade-offs

Build a portfolio-grade system

Prepare for backend/system interviews (EU market)

## ⚠️ Disclaimer

LedgerX is not a production payment system.
It is a learning and research project focused on system design and engineering depth.

## 📌 Status

🚧 Work in progress
Architecture evolves step by step — commits reflect real decisions and trade-offs.

## 🤝 Author

Built by a backend engineer focusing on:

- Node.js / TypeScript

- distributed systems

- system-level understanding
