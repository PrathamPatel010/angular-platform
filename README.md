# Angular Platform

An enterprise-ready **Angular 19 platform template** built with **PrimeNG**, **Tailwind CSS**, and modern frontend tooling.  
This repository is designed to be reused as a base for large-scale applications across multiple domains.

---

## 🚀 Tech Stack

- Angular 19
- PrimeNG 19
- Tailwind CSS v3
- TypeScript (strict mode enabled)
- ESLint (Flat Config – latest)
- Prettier (with Tailwind class sorting)
- Husky + lint-staged (pre-commit checks)

---

## 🎯 Purpose

This project serves as:

- A **reusable Angular platform template**
- A **foundation for enterprise-scale applications**
- A **clean, opinionated Angular architecture**
- A **portfolio-grade codebase** showcasing best practices

It is intentionally **domain-agnostic** and can be adapted for:

- Enterprise admin panels
- SaaS applications
- Internal tools
- Healthcare / Pharma systems
- Business workflow applications

---

## 🧱 Features (v1)

### Application Layout

- Fixed sidebar (full height)
  - App logo & name (top)
  - Collapsible multi-level navigation
  - User section (bottom) with action menu
- Header (content area only)
- Router-driven layout using `router-outlet`

### UI & Styling

- PrimeNG components
- Tailwind CSS for layout and utilities
- Consistent spacing and typography
- Tailwind class sorting via Prettier

### Code Quality & Tooling

- Strict TypeScript configuration
- ESLint for TypeScript, Angular, and templates
- Prettier formatting enforced
- Pre-commit hooks with Husky
- lint-staged for staged-file validation
- Path aliases configured

---

## 📁 Source Code Structure

```text
src/
 ├── app/
 │   ├── config/        # App-level configuration, providers, constants, environment bindings
 │   ├── core/          # Core singleton services, guards, interceptors
 │   ├── features/      # Feature modules (lazy-loaded, domain-specific)
 │   ├── layout/        # Application layout (sidebar, header, footer, shells)
 │   ├── shared/        # Reusable components, directives, pipes, utilities
 │   ├── ui/            # Design-system level UI components & wrappers
 │   ├── app.routes.ts  # Application routes
 │   └── app.component.*
 ├── assets/
 ├── environments/
 └── styles/
```

---

## 🛠️ Scripts

```bash
npm start        # Start development server
npm run lint     # Run ESLint
npm run format   # Format entire project using Prettier
```

Pre-commit:

- Formats staged files
- Fixes lint issues
- Blocks commits on violations

---

## 📌 Versions

- Angular CLI: 19.x
- Node.js: 20.x
- PrimeNG: 19.x
- Tailwind CSS: 3.x

---
