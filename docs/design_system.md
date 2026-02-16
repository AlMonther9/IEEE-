# Design System & Usage Guide

## Typography

**Font Family**: `Plus Jakarta Sans`
**Usage**: Automatically applied to the `body`.
**Class**: `font-sans`

## Brand Colors

| Color Name         | Hex       | Usage                        | Tailwind Class                             |
| :----------------- | :-------- | :--------------------------- | :----------------------------------------- |
| **Primary Blue**   | `#1C4ED8` | Solid Buttons, Badges, Icons | `bg-primary-blue`, `text-primary-blue`     |
| **Primary Yellow** | `#FBBF24` | Accents, Secondary Buttons   | `bg-primary-yellow`, `text-primary-yellow` |

## Gradients

### 1. CTA Buttons

**Blue Gradient (Primary CTA)**

- **Direction**: Left to Right
- **Colors**: `#1C4ED8` → `#012DC5`
- **Class**: `bg-gradient-blue-cta`

**Yellow Gradient (Secondary CTA)**

- **Direction**: Left to Right
- **Colors**: `#FDC700` → `#F0B100`
- **Class**: `bg-gradient-yellow-cta`

### 2. Text Gradients

**Header Gradient**

- **Direction**: Left to Right
- **Colors**: `#2537F3` → `#8690F8`
- **Class**: `bg-gradient-header`
- **Usage Example**:
  ```tsx
  <span className="bg-gradient-header bg-clip-text text-transparent">
    Gradient Headline
  </span>
  ```

### 3. Backgrounds

**Main Background**

- **Direction**: Top to Bottom
- **Colors**: `#030B22` → `#02040A`
- **Class**: `bg-gradient-main`

**Secondary Background**

- **Direction**: Top to Bottom
- **Colors**: `#02040A` → `#061231`
- **Class**: `bg-gradient-secondary`

## Usage Examples

### Primary Button

```tsx
<button className="bg-gradient-blue-cta text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
  Get Started
</button>
```

### Featured Badge

```tsx
<span className="bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full text-xs font-bold">
  New
</span>
```
