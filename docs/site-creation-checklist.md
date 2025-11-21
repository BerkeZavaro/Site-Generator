# Site Creation Checklist

Follow these steps to add a new microsite:

1. **Duplicate an existing folder** under `content/` (for example `content/creatine-farts`) and rename it to the new slug.

2. **Update the new folder's `config.json`** with:
   - `primaryKeyword`, `secondaryKeywords`
   - `country`, `demographics`
   - `product.name`, `product.mainUrl`
   - `brand` info
   - optional `toneOfVoice`

3. **Use a dedicated "content generation" prompt** in Cursor (we will add this later) to overwrite the markdown files (`landing.md`, `info.md`, `comparison.md`, `faq.md`, `contact.md`) with fresh copy.

4. **Manually review and edit** the markdown content to make it sound natural and compliant.

5. **Run the dev server** and check all 5 pages for the new slug:
   - `/[siteSlug]`
   - `/[siteSlug]/info`
   - `/[siteSlug]/comparison`
   - `/[siteSlug]/faq`
   - `/[siteSlug]/contact`

6. **Commit the changes** and push to GitHub.

7. **Deploy via Vercel or Netlify**.

