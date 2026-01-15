# Angular Platform

A modern, scalable Angular application template built with **Angular 19**, **PrimeNG**, and **Tailwind CSS**, focused on clean architecture, developer experience, and long-term maintainability.

This repository serves as a **starter platform** for enterprise-grade Angular applications and can be reused across projects.

---

## ✨ Features

- Angular 19 with standalone APIs
- PrimeNG 19 UI components
- Tailwind CSS v3 for utility-first styling
- Modern ESLint flat config
- Prettier with Tailwind class sorting
- Husky + lint-staged for commit safety
- Scalable folder structure
- Reusable core services
- Centralized API handling
- Clean layout system (Sidebar + Header + Content)
- Strong typing (no `any` usage)

---

## 🧱 Tech Stack

- **Framework**: Angular 19
- **UI Library**: PrimeNG 19
- **Styling**: Tailwind CSS v3
- **Linting**: ESLint (flat config)
- **Formatting**: Prettier + Tailwind plugin
- **Git Hooks**: Husky + lint-staged
- **Package Manager**: npm

---

## 📁 Source Code Structure

```text
src/
 ├── app/
 │   ├── config/        # App-level configuration
 │   ├── core/          # Core singleton services
 │   ├── layout/        # Header, sidebar, footer, layout shell
 │   ├── shared/        # Shared models, enums, utilities
 │   ├── ui/            # UI-related state & helpers
 │   ├── app.routes.ts  # Application routes
 │   └── app.component.*
 ├── assets/
 ├── environments/
 └── styles/
```

> The structure is intentionally flexible and evolves as features are added.

---

## 🧪 Code Quality

- ESLint enforced on commit
- Prettier formatting with Tailwind class sorting
- No commits allowed if linting fails
- Consistent coding standards across the project

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
ng serve
```

### Lint project

```bash
npm run lint
```

### Format code

```bash
npm run format
```

---

## 📦 Versioning

This project follows **semantic versioning**.

- `v1.0.0` – Stable base platform template

---

## 🔒 License

This project is **All Rights Reserved**.

You may not use, copy, modify, or distribute this code without explicit permission from the author.

See `LICENSE.md` for details.

---

## 🧭 Philosophy

This repository is intentionally kept **minimal but solid**.

New features are added **only when required**, ensuring:

- No over-engineering
- Clean learning curve
- Maximum reusability

---

## 📌 Author

Created and maintained by **Pratham Patel**.

---

> This repository is meant to evolve with real project needs.
> Use it as a foundation, not a constraint.
