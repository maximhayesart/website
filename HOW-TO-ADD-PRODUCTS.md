# Add artwork and products

The site uses GitHub Pages' built-in Jekyll build. Shop products are Markdown documents in `_products/<category-slug>/`; the shared Jekyll layouts generate their product detail pages and category grids. Portfolio entries remain in the separate portfolio section in `index.html`.

These pages are a static catalogue and display product information and prices; no checkout or payment processor is configured.

The supplied workspace had no `arts/assets/works` tree or existing Markdown parser, so the GitHub Pages source is the website root: product images go in `assets/img/shop/<category-slug>/`, and products go in Jekyll's `_products/` collection. The browser path for an image is `/assets/img/...`.

## Add a product

1. Drop the original image into the project. Tell Codex the product name, price, Shop category, and which image is the thumbnail.
2. Codex copies the image unchanged into `assets/img/shop/<category-slug>/<product-slug>.<extension>`. Supported formats are JPG, JPEG, PNG, and WebP.
3. Codex creates `_products/<category-slug>/<product-slug>.md` from `templates/shop-product.md` and fills in the front matter.
4. The category page automatically lists products whose `category` value exactly matches that category. The product detail page is generated from the same Markdown file.
5. Commit and push the change to the GitHub Pages branch when the repository is connected.

Example request:

> Add this artwork to Shop → Sci-fi. Name it Protector, price $90, and use this image as the product thumbnail.

That request maps to `_products/sci-fi/protector.md` and `assets/img/shop/sci-fi/protector.jpg`.

## Product Markdown example

```yaml
---
title: Product Name
description: Short product description
price: 90
currency: USD
category: Sci-fi
order: 1
images:
  - src: /assets/img/shop/sci-fi/product-name.jpg
    alt: Describe what appears in this image
    order: 1
# Optional: sku, format, license
---
Optional longer description in Markdown.
```

Use exactly one of these category names: `Packages`, `Sci-fi`, `Fantasy`, `Dark Romance`, or `Spice`. The matching folder uses the lowercase slug (`dark-romance` for `Dark Romance`). A product is listed only in the category named in its `category` field. `order` controls its position; lower values appear first. Add another `images` item to create a multi-image product gallery, with its own `src`, `alt`, and `order`.

Prices are numeric. If `currency` is omitted, the display defaults to USD; supported currency codes display after the number. Optional `sku`, `format`, and `license` fields appear in the product details when present. Keep portfolio work in the existing portfolio markup and filters; it is not loaded from `_products`.

## Publish with GitHub Pages

In the GitHub repository, choose **Settings → Pages → Deploy from a branch**, select the publishing branch and `/ (root)`, then save. GitHub Pages runs Jekyll automatically; no server, database, package install, or custom Actions workflow is required. `relative_url` is used for generated page and image links so a repository subpath can be configured with `baseurl` in `_config.yml` if needed.
