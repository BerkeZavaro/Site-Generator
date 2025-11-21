# REUSABLE PROMPT – ADD A NEW MICROSITE

I want to add a new microsite to this project.

I only work with prompts – you must create all files and folders.

## Fill these values before running this prompt:

```
NEW_SLUG = creatine-bloating

PRIMARY_KEYWORD = creatine bloating

SECONDARY_KEYWORDS = ["creatine water retention", "creatine digestion", "creatine side effects"]

COUNTRY = US

AGE_RANGE = 25-40

GENDER = all

HOUSEHOLD_INCOME = 40k-100k

PRODUCT_NAME = UltraClean Creatine

PRODUCT_MAIN_URL = https://example.com/ultraclean-creatine

BRAND_NAME = ExampleSupps

BRAND_MAIN_SITE = https://example.com

TONE_OF_VOICE = trustworthy, friendly, evidence-based
```

**Replace the example values with the real ones for the new microsite before you run this.**

## Task

Create a new folder:

- `content/NEW_SLUG/`

Inside that folder, create:

- `config.json`
- `landing.md`
- `info.md`
- `comparison.md`
- `faq.md`
- `contact.md`

In `config.json`, write a JSON object with this structure, using the values from above:

```json
{
  "slug": "NEW_SLUG",
  "primaryKeyword": "PRIMARY_KEYWORD",
  "secondaryKeywords": SECONDARY_KEYWORDS,
  "country": "COUNTRY",
  "demographics": {
    "ageRange": "AGE_RANGE",
    "gender": "GENDER",
    "householdIncome": "HOUSEHOLD_INCOME"
  },
  "product": {
    "name": "PRODUCT_NAME",
    "mainUrl": "PRODUCT_MAIN_URL"
  },
  "brand": {
    "name": "BRAND_NAME",
    "mainSite": "BRAND_MAIN_SITE"
  },
  "toneOfVoice": "TONE_OF_VOICE"
}
```

Make sure this is valid JSON for the final values.

In each markdown file:

Put a very short placeholder line such as:

```
# Landing content for NEW_SLUG (placeholder)
```

I will later run the content-generation prompt to overwrite them.

## Rules

- Do not touch existing microsites (for example `creatine-farts`).
- Do not change the core app structure.
- Only create the new folder and files for `NEW_SLUG`.

## At the end

Tell me which folder you created and list the files inside it.

