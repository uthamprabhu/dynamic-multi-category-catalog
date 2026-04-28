# Dynamic Multi-Category Catalog

A responsive product catalog built using Next.js (App Router) and Tailwind CSS.
The application dynamically renders categories and item details based on a JSON data source.

---

## Live Demo

Vercel Deployment: <your-vercel-link>

---

## Features

* Dynamic category-based rendering
* Item detail page with flexible properties (`itemprops`)
* Clean and minimal UI
* Fully responsive (mobile, tablet, desktop)
* Optimized image handling using Next.js Image

---

## Tech Stack

* Next.js (App Router)
* Tailwind CSS
* TypeScript

---

## Approach

The application is fully data-driven. All UI components are rendered based on a JSON structure, avoiding hardcoded values.

* Items are grouped dynamically by category
* Each category is rendered as a separate section
* Item details are displayed using a reusable component
* All item properties are rendered by iterating over the `itemprops` array

This approach ensures scalability and flexibility for different product types.

---

## Project Structure

```id="p1q3rs"
app/              # Routing and pages
components/       # Reusable UI components
data/             # JSON data source
lib/              # Helper functions (e.g., grouping logic)
```

---

## Performance Considerations

* Used Next.js Image component for optimized image loading
* Applied lazy loading for grid images
* Used priority loading for main detail image (LCP optimization)
* Avoided unnecessary client-side state for better performance

---

## Getting Started

Clone the repository and run locally:

```bash id="run1"
npm install
npm run dev
```

---

## Notes

* State management was not used as the data is static
* The focus was on clean structure, dynamic rendering, and responsiveness
* The solution is designed to be easily extendable

---

## Write-up

A detailed explanation of the approach and implementation is included in the repository as a PDF.
