# REUSABLE PROMPT – GENERATE CONTENT FOR ONE MICROSITE

You are working inside this SEO microsite project.

## Context

Read and respect:

- `docs/concept.md`
- `docs/content-guidelines.md`
- `docs/template-structure.md`

The microsite configuration lives in:

- `content/SITE_SLUG/config.json`

**Replace `SITE_SLUG` with the real slug before you run this prompt.**

## Task

For `SITE_SLUG = "creatine-farts"` (or another slug I choose), open and overwrite:

- `content/SITE_SLUG/landing.md`
- `content/SITE_SLUG/info.md`
- `content/SITE_SLUG/comparison.md`
- `content/SITE_SLUG/faq.md`
- `content/SITE_SLUG/contact.md`

Using `config.json` + the docs:

Generate complete, realistic, human-sounding content for each page.

Tailor everything to:

- `primaryKeyword`
- `secondaryKeywords`
- `country`
- `demographics` (ageRange, gender, householdIncome)
- `product` (name, mainUrl)
- `brand` (name, mainSite)
- optional `toneOfVoice`

## Rules

- All text in English.
- Default tone: trustworthy, friendly, evidence-based (unless `toneOfVoice` says otherwise).
- Avoid fake testimonials or invented statistics.
- Avoid aggressive or illegal medical claims; be educational and realistic.
- Each page must contain at least one clear CTA or link that points to `product.mainUrl` from `config.json`.
- Do not rename or move files, only replace the Markdown content.
- Write as if a human copywriter will review and lightly edit afterward.

## At the end

Briefly summarize (in the Cursor chat) what you wrote on each page so I can sanity check it.

