# UI Layout Specification - Landing Pages

## Purpose

This layout is used by all microsite landing pages (e.g. `/creatine-farts`, `/creatine-bloating`, etc).

It's a funnel page: explain the problem, build trust, and push users to the main product URL from `config.json.product.mainUrl`.

## Typography & General Style

- **Main font**: Satoshi, with fallbacks: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Clean, modern, minimal**: plenty of white space, clear hierarchy, big readable headings
- **Neutral light background**, nothing too crazy or dark

## Page Structure

### Top Navigation Bar

- **Left**: brand name from `siteConfig.brand.name`
- **Right**: simple nav links:
  - "Info" → `/[siteSlug]/info`
  - "Comparison" → `/[siteSlug]/comparison`
  - "FAQ" → `/[siteSlug]/faq`
  - Optional small link "Contact" → `/[siteSlug]/contact` or the brand main site

### Hero Section

- Uses `primaryKeyword` as the main theme
- **Large headline** that reflects the main problem/topic (e.g. creatine bloating)
- One supporting sentence explaining what the visitor will get (understand the issue, see a recommended option)
- **Primary CTA button**:
  - Label like "See recommended creatine" or "Go to recommended product"
  - Links to `product.mainUrl`
- Optional secondary link/button like "Learn more about [topic]" that scrolls down or implies going to the info section

### Content Area

- Below the hero, render the markdown from `landing.md` in a centered container with max-width for readability
- Use consistent spacing between sections and paragraphs

### Footer

- Simple line with brand name and a small link to `brand.mainSite`

## CTA Rules

- Every landing page must contain at least one clear CTA that links to `product.mainUrl`
- CTAs must be visible without excessive scrolling (hero area should usually contain one)

## Reusability

- This layout must be generic enough to work for any future microsite slug
- Content (headlines, body text) comes from Markdown and config; layout code stays the same

