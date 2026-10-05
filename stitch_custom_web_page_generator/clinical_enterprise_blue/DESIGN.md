---
name: Clinical Enterprise Blue
colors:
  surface: '#f9f9ff'
  surface-dim: '#ccdafc'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#e0e8ff'
  surface-container-highest: '#d7e2ff'
  on-surface: '#0c1b34'
  on-surface-variant: '#414753'
  inverse-surface: '#22304a'
  inverse-on-surface: '#ecf0ff'
  outline: '#727784'
  outline-variant: '#c1c6d5'
  surface-tint: '#005db8'
  primary: '#004e9d'
  on-primary: '#ffffff'
  primary-container: '#0466c8'
  on-primary-container: '#dee7ff'
  inverse-primary: '#aac7ff'
  secondary: '#325e9f'
  on-secondary: '#ffffff'
  secondary-container: '#8eb7fe'
  on-secondary-container: '#144786'
  tertiary: '#32507f'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b6898'
  on-tertiary-container: '#dde7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00468d'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#134685'
  tertiary-fixed: '#d6e3ff'
  tertiary-fixed-dim: '#aac7fd'
  on-tertiary-fixed: '#001b3d'
  on-tertiary-fixed-variant: '#284775'
  background: '#f9f9ff'
  on-background: '#0c1b34'
  surface-variant: '#d7e2ff'
  brand-blue-hover: '#0353A4'
  midnight-navy: '#001845'
  darkest-slate: '#001233'
  neutral-muted: '#5C677D'
  border-muted: '#7D8597'
  border-light: '#979DAC'
  surface-tint-light: '#F4F6FA'
  surface-tint-container: '#EBF0F8'
  success: '#0F9D58'
  warning: '#B54708'
  danger: '#D92D20'
typography:
  headline-hero:
    fontFamily: Roboto Flex
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-page:
    fontFamily: Roboto Flex
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-page-mobile:
    fontFamily: Roboto Flex
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-card:
    fontFamily: Roboto Flex
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-modal:
    fontFamily: Roboto Flex
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-section:
    fontFamily: Roboto Flex
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  body-default:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-medium:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  caption:
    fontFamily: Roboto Flex
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  table-header:
    fontFamily: Roboto Flex
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  badge-label:
    fontFamily: Roboto Flex
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-id:
    fontFamily: monospace
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers a high-precision, trustworthy, and distraction-free operational environment engineered for medical clinics, healthcare practitioners, and hospital administrative operations. The visual language conveys competence, scientific rigor, and patient data security through a disciplined palette of deep clinical blues, stark high-contrast typography, and ultra-crisp structural surfaces.

The aesthetic follows an elevated Modern Corporate & Clinical SaaS model:
- **Zero Decorative Noise**: Eliminates glassmorphism, decorative gradients, skeuomorphic shading, and whimsical micro-interactions.
- **High Data Density & Scannability**: Focuses strictly on clear clinical pathways, dense patient charts, legible diagnostic metrics, and distinct triage statuses.
- **Architectural Navy Foundations**: Deep navy shells (#002855, #001845) ground the peripheral navigation and top-level clinical hierarchy, framing crisp white (#FFFFFF) working canvases with cool-tinted resting tiers (#F4F6FA, #EBF0F8).

## Colors

The color palette establishes high clinical authority, sharp optical separation, and unambiguous functional affordances:

- **Primary Interactive Tone (`#0466C8`)**: Dedicated to primary call-to-actions, active clinical status tabs, interactive row selections, and high-priority triggers. Transitions to `#0353A4` on hover and `#023E7D` on active press.
- **Structural Deep Navies**:
  - `midnight-navy` (`#001845`) and `darkest-slate` (`#001233`): Deliver commanding typography contrast for primary headings, diagnostic titles, and core patient identification numbers.
  - `tertiary` (`#002855`): Anchors the primary persistent navigation sidebar and high-level enterprise application chrome.
- **Neutral & Body Text**:
  - Secondary Text (`#33415C`): Main body text, diagnostic notes, and operational labels.
  - Subtle Text (`#5C677D`): Timestamps, secondary metadata, column subheadings, and contextual hints.
- **Borders & Dividers**:
  - Crisp Structural Outlines (`#979DAC` / `#7D8597`): Ground container divisions, table row dividers, and input field boundaries.
- **Surfaces**:
  - Canvas: Pure white (`#FFFFFF`) for operational cards and clinical records.
  - Tonal Containers: `#F4F6FA` for page backdrops, subtle card headers, and table head rows; `#EBF0F8` for active row highlights, sidebar item selection, and subtle pill fills.
- **Status & Safety Indicators**:
  - Success (`#0F9D58`): Confirmed consultations, stable vitals, completed treatments.
  - Warning (`#B54708`): Pending lab results, scheduled reviews, caution flags.
  - Danger (`#D92D20`): Critical clinical alerts, triage emergencies, cancellations, and destructive administrative acts.

## Typography

Typography is calibrated to prevent cognitive fatigue and ensure rapid parsing across dense clinical tables, schedules, and electronic health records (EHR).

- **Type Scale Control**: To preserve utility density within clinical workspaces, page headings top out at `22px` (`headline-page`) on desktop and `18px` on mobile viewports. Hero titles (`28px`) are reserved exclusively for authentication gateways.
- **Weight Governance**: Restricted to `400` (descriptive diagnosis notes and general content), `500` (patient names, interactive table rows, and form input values), and `600` (structural headers, metric callouts, and table columns).
- **Tabular & Code Values**: Medical record numbers (MRN), national IDs, ICD-10 diagnostic codes, and lab accession IDs enforce a monospaced font stack (`code-id`) to prevent mistaking numeric characters (e.g., `0` vs `O`, `1` vs `I`).
- **Uppercase Elements**: Column headers and status badges are rendered in uppercase with tight `0.04em` to `0.05em` letter spacing for immediate visual indexing.

## Layout & Spacing

The layout system is founded on a systematic 4px baseline rhythm, configured to support rapid information discovery in high-throughput healthcare settings.

- **Grid Architecture**:
  - **Desktop (>= 1280px)**: 12-column fluid grid, `1.5rem` (`24px`) gutters, maximum content span of `1440px`.
  - **Tablet (768px - 1279px)**: 8-column layout with `1rem` gutters; multi-stat metric cards collapse into dual columns.
  - **Mobile (< 768px)**: 4-column single-stack arrangement, `0.75rem` gutters, and `1rem` margins.
- **Application Shell Framework**:
  - Navigation Sidebar: Fixed `260px` in midnight navy (`#002855`), collapsing to a `68px` condensed icon-only rail below `1024px`, and transitioning to an anchored bottom tab bar on mobile viewports.
  - Top Operational Bar: Fixed `60px` height with a crisp `#979DAC` bottom perimeter containing clinic switchers, universal patient search, and practitioner profile controls.
- **Component Baselines**:
  - Standard action buttons, text inputs, and search modules maintain a uniform `38px` or `40px` tactile target height.
  - Data table rows adhere to an unyielding `48px` to `52px` line height to ensure touch and click accuracy during rapid patient charting.

## Elevation & Depth

This design system avoids blurry skeuomorphism, saturated drop shadows, or floating layers in favor of crisp, architectural surface tiers defined by single-pixel boundaries:

- **Flat Layering**: Cards, metrics panels, and diagnostic sections sit directly on the `#F4F6FA` canvas using `#FFFFFF` fills outlined with `1px solid #979DAC` (or `#EBF0F8` in nested modules). Zero box-shadow is applied to standard resting surfaces.
- **Controlled Overlays**:
  - **Clinical Modals & Vitals Entry Sheets**: Centered over a high-density midnight overlay (`rgba(0, 18, 51, 0.45)`) featuring crisp containment: `box-shadow: 0 8px 30px rgba(0, 24, 69, 0.12)` with a `1px solid #7D8597` perimeter.
  - **Dropdowns & Patient Quick-Actions**: Light elevation (`0 4px 16px rgba(0, 24, 69, 0.08)`) with `1px solid #979DAC` borders to distinctly separate overlays from underlying EHR data.
- **Focus Depth**: Focus states reject offset glows and utilize a structured `2px solid #0466C8` border ring paired with an external `2px` transparent safe gap.

## Shapes

A balanced geometric corner profile (`roundedness: 2`) ensures the interface feels contemporary, structured, and clinically precise without straying into overly playful curves or unapproachable sharp corners:

- **Inputs, Buttons, and Select Controls**: 8px (`0.5rem`) corner radius.
- **Panels, Modals, and Clinical Record Cards**: 12px to 16px (`rounded-lg` / `1rem`) corner radius for primary content containment.
- **Pills & Status Micro-Indicators**: Fully rounded capsule format (`9999px`) reserved strictly for status badges (e.g., `En Espera`, `Atendido`), triage tags, and count notifications.
- **Prohibitions**: Never use full-radius pill buttons for primary actions or text inputs.

## Components

### Buttons
- **Primary**: Background `#0466C8`, text `#FFFFFF`, font weight `500`, height `40px`, horizontal padding `16px`, corner radius `8px`. Hover: `#0353A4`. Active: `#023E7D`.
- **Secondary**: Background `#FFFFFF`, border `1px solid #979DAC`, text `#001845`, font weight `500`. Hover: background `#F4F6FA`, border `#7D8597`.
- **Dark Accent / Utility**: Background `#002855`, text `#FFFFFF`, hover `#001845`. Used for high-level clinic administrative tools.
- **Destructive**: Background `#D92D20`, text `#FFFFFF`. Hover: `#B42318`. Reserved for record purging, allergy warnings, or appointment cancellations.

### Form Inputs & Select Fields
- **Container**: Height `40px`, background `#FFFFFF`, border `1px solid #979DAC`, border radius `8px`, text color `#001233` (`14px`), placeholder `#5C677D`.
- **Focus**: Border `#0466C8`, box-shadow `0 0 0 3px rgba(4, 102, 200, 0.15)`.
- **Error State**: Border `#D92D20`, accompanied by an icon and `#D92D20` caption text below.

### Cards & Clinical Panels
- **Structure**: Surface `#FFFFFF`, border `1px solid #979DAC`, border radius `12px`, padding `20px` to `24px`.
- **Panel Header**: Displays title in `#001845` (`16px`, font weight `600`), bordered beneath with a `1px solid #EBF0F8` separator when containing tabular data.

### Status Chips & Badges
- **Metrics & Dimensions**: Height `24px`, padding `0 10px`, border radius `9999px`, font size `11px`, font weight `600`, letter spacing `0.04em`, uppercase.
- **Clinical Semantic Configurations**:
  - *Active / Scheduled*: Background `#EBF0F8`, text `#0466C8`, border `1px solid rgba(4, 102, 200, 0.2)`.
  - *Completed / Normal*: Background `#EDFDF2`, text `#0F9D58`, border `1px solid rgba(15, 157, 88, 0.25)`.
  - *Pending / Caution*: Background `#FEF6EE`, text `#B54708`, border `1px solid rgba(181, 71, 8, 0.25)`.
  - *Cancelled / Critical*: Background `#FEF3F2`, text `#D92D20`, border `1px solid rgba(217, 45, 32, 0.25)`.
  - *Role Tag (Médico / Enfermería)*: Background `#F4F6FA`, text `#023E7D`, border `1px solid #7D8597`.

### Data Tables
- **Container**: Border `1px solid #979DAC`, border radius `8px`, overflow hidden.
- **Header**: Background `#F4F6FA`, height `40px`, text `#5C677D`, font size `12px`, font weight `600`, letter spacing `0.05em`, uppercase.
- **Row**: Height `50px`, background `#FFFFFF`, border-bottom `1px solid #EBF0F8`. Hover background: `#F4F6FA`.
- **Patient Cells**: Primary name in `#001845` (`14px`, weight `500`), national identification or file ID in `code-id` (`#5C677D`, `12px`).

### Checkboxes & Radio Buttons
- **Checkboxes**: 18px x 18px, border `1.5px solid #7D8597`, border radius `4px`, background `#FFFFFF`. Selected state: `#0466C8` with white checkmark icon.
- **Radio Buttons**: 18px x 18px, border `1.5px solid #7D8597`, border radius `9999px`. Selected state: border `#0466C8` with a central `#0466C8` dot.