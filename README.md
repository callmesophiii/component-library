# Component Library

A reusable React component library built with TypeScript, designed for internal use across multiple applications. This project demonstrates best practices in creating type-safe, flexible, and composable UI components.

## Project Overview

This component library includes foundational UI components with proper TypeScript interfaces, prop handling, and component composition:

- **AlertBox** — Displays alert messages of different types (success, error, warning, info).
- **UserProfileCard** — Displays user information with configurable sections.
- **ProductDisplay** — Shows product details with options for description, stock status, and add-to-cart functionality.

The components are designed for flexibility and reusability in various internal company applications.

---

## Components Included

- **AlertBox** — Displays different types of alerts (`success`, `error`, `warning`, `info`) with customizable messages and optional close actions.
- **UserProfileCard** — Shows user information with configurable visibility of email, role, and supports editing callbacks.
- **ProductDisplay** — Presents product details with options to show description, stock status, and handle add-to-cart events.

Each component supports `children` to enable flexible nested content.

---

## How to Use the Components

To use these components, import them from their respective folders and provide the required props according to their TypeScript interfaces. 
```tsx
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';



