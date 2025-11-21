# Project Concept

This repo is a system for generating multi-page SEO microsites for supplement products.

All microsites are in English.

Each microsite targets very specific search phrases/keywords (for example "creatine farts") to capture bottom-of-funnel users who are close to buying.

Each microsite:

- explains the problem/topic,
- builds trust,
- and sends users to a main product page on the brand's primary site.

Each microsite is driven by a `config.json` with:

- `primaryKeyword`
- `secondaryKeywords`
- `country`
- `demographics` (ageRange, gender, householdIncome)
- `product` (name, mainUrl)
- `brand` (name, mainSite)
- optional `toneOfVoice`

## Important Constraints

- Content must be human-editable after generation.
- Keep claims about health cautious and compliant; informative, not exaggerated.
- Use headings and bullet points so it's easy to scan.

