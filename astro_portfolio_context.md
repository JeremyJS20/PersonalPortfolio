# Astro Portfolio - Project Context & Guidelines

## 1. Project Identity
*   **Name:** Personal Portfolio
*   **Type:** Static/Pre-rendered Website (Portfolio / Blog)
*   **Goal:** Showcase projects, professional experience, and skills with high performance and elegant typography.
*   **Aesthetic:** Modern, Clean, Professional.
    *   **Design System:** Tailwind CSS v4.0 with CSS-variable based theming.
    *   **Color Palette:**
        *   **Primary:** `#0D9488` (Teal-600) | Hover: `#0F766E` (Teal-700).
        *   **Background:** `#F8FAFC` (Light) | `#111827` (Dark).
        *   **Surface/Card:** `#FFFFFF` (Light) | `#1F2937` (Dark).
        *   **Text:**
            *   Dark/Main: `#0F172A` (Light) | `#F3F4F6` (Dark).
            *   Light/Muted: `#64748B` (Light) | `#9CA3AF` (Dark).
        *   **State:**
            *   Danger: `#EF4444`.
            *   Success: `#10B981`.
            *   Border: `#E2E8F0` (Light) | `#374151` (Dark).
    *   **Component Styles:**
        *   **Primary Button:**
            *   `bg-pfm-primary text-white font-bold rounded-lg px-5 py-2.5 shadow-lg shadow-pfm-primary/20 transition-all hover:bg-pfm-primary-hover hover:shadow-xl active:scale-95`
        *   **Secondary/Action Button:**
            *   `bg-pfm-surface border border-pfm-border text-pfm-text-dark font-bold rounded-md px-3 py-1.5 hover:bg-pfm-bg shadow-sm transition-colors`
        *   **Icon Button:**
            *   `text-pfm-text-light hover:bg-pfm-bg hover:text-pfm-text-dark rounded-md p-1 transition-colors`
        *   **Card / Project Item:**
            *   `bg-pfm-card border border-pfm-border rounded-xl shadow-sm transition-all hover:shadow-md hover:border-pfm-primary/30`
    *   **Typography:** Inter (via Google Fonts or `@fontsource/inter`).

## 2. Technology Stack
*   **Core Framework:** Astro (SSG).
*   **Styling:** Tailwind CSS v4.0.
*   **Interactivity:** Vanilla JavaScript (Astro `<script>` tags). 
*   **Icons:** **Lucide Icons** exclusively.
*   **Content Management:** Astro Content Collections (Markdown/MDX).

## 3. Architecture & Standards

### Astro Component Architecture
*   **Frontmatter First:** Perform all data fetching, logic, and prop-parsing in the `---` block. Keep the template section purely descriptive.
*   **Component Modularity:** Break large pages into small, reusable `.astro` components (e.g., `ProjectBadge.astro`, `TimelineItem.astro`).
*   **Slots Usage:** Use named slots (`<slot name="after" />`) for flexible content layout in wrapper components.
*   **Props Validation:** Define an `Interface Props` in the frontmatter to enforce strict typing for component inputs.

### Coding Conventions
*   **Variable Naming:** Use `PascalCase` for Astro components and `camelCase` for variables and functions.
*   **CSS Standards:** 
    *   Favor Tailwind utility classes for 99% of styling. 
    *   Use `@theme` variables in CSS for project-wide design tokens.
    *   Avoid scoped `<style>` tags unless doing complex animations/keyframes that utilities can't handle.
*   **TypeScript:** Use TypeScript in strict mode for all Astro frontmatter and client-side scripts.

### Frontend Performance & SEO
*   **Astro Image:** Strictly use `@astrojs/image` (or built-in Image) for automatic WebP conversion and resizing.
*   **Lazy Loading:** Use `loading="lazy"` for off-screen images and `decoding="async"`.
*   **Font Optimization:** Self-host fonts via `@fontsource` to avoid CLS (Cumulative Layout Shift) and privacy issues with external CDNs.
*   **Zero-JS by Default:** Only ship JavaScript for interactive elements (Islands). Verify that most sections work perfectly with JS disabled.
*   **Semantic HTML:** Use correct tags (`<time>`, `<code>`, `<address>`, `<aside>`) to ensure high machine readability and accessibility.

### Accessibility (A11y)
*   **Keyboard Nav:** All interactive elements MUST be focusable and have a visible focus ring (`focus-visible:ring-2`).
*   **ARIA attributes:** Use `aria-label`, `aria-expanded`, and `aria-hidden` correctly for dynamic UI elements like navigation toggles or modals.
*   **Color Contrast:** Ensure text-to-background contrast ratio meets WCAG AA standards (4.5:1).
*   **Screen Readers:** Use `sr-only` classes to provide context to screen readers that isn't visually necessary.

### Client-Side State & Interactivity
*   **Minimal Islands:** Avoid heavy frameworks. If shared state is needed between multiple islands, use **Nano Stores** for a tiny, framework-agnostic footprint.
*   **Vanilla Interactivity:** For simple effects (toggles, scroll-to-top), use standard DOM APIs inside `<script>` tags. 
*   **Generic Handlers:** Use data-attributes (e.g., `data-modal-id`) to write single, reusable scripts that handle multiple instances of a component.

## 4. Internationalization (i18n)
*   **Strategy:** Use Astro's native `i18n` routing functionality to ensure high performance and Zero-JS by default.
*   **URL Structure:** Implement path-based routing (e.g., `/[lang]/blog/`) with a configured `defaultLocale` (e.g., `en`).
*   **Dictionaries:** Store translation UI strings in simple TypeScript files (e.g., `src/i18n/ui.ts`). Use helper functions (like `useTranslations(lang)`) to access keys safely.
*   **Content:** Manage translated markdown/MDX content by nesting within language folders inside collections (e.g., `src/content/blog/en/`, `src/content/blog/es/`).
*   **Avoid:** Do not use heavy client-side i18n libraries (like `react-i18next` or similar SPA-oriented translation tools).

## 5. Development Workflow
*   **Folder Structure:**
    *   `src/components/ui/` - Atomic UI elements (Buttons, Inputs).
    *   `src/components/features/` - Complex components (ProjectGrid, Navbar).
    *   `src/content/` - Strictly for Markdown/MDX data.
    *   `src/utils/` - Shared TS helper functions.
*   **Asset Management:** SVGs should be embedded or used via dedicated components to allow easy styling with Tailwind classes (e.g., `stroke-current`, `fill-pfm-primary`).
