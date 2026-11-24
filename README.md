# Maxim Hayes Art

Static portfolio and product catalogue built for GitHub Pages. GitHub Pages runs the Jekyll build automatically from the repository root; the site has no server, database, or custom Actions workflow.

## Add a shop product

Use the Markdown template at [`templates/shop-product.md`](templates/shop-product.md). Put product files in `_products/<category-slug>/<product-slug>.md`; put original images in `assets/img/shop/<category-slug>/`. The shared layouts generate the category listing and product detail page from each document.

See [`HOW-TO-ADD-PRODUCTS.md`](HOW-TO-ADD-PRODUCTS.md) for the full workflow and an example.

For a local preview, install Ruby and Jekyll, then run `jekyll serve` from this folder and open `http://localhost:4000`. Jekyll is only the static-site builder; the published site has no server-side runtime.

## GitHub Pages

1. Create a GitHub repository and push this project to the publishing branch.
2. In **Settings → Pages**, select **Deploy from a branch**, choose the publishing branch and `/ (root)`, then save.
3. GitHub Pages builds Jekyll from `_config.yml`. No GitHub Actions file or backend is required.
4. For a project-site URL such as `username.github.io/repository/`, set `baseurl: "/repository"` in `_config.yml`. For a custom domain served from the site root, keep `baseurl: ""` and configure the domain in Pages.

The shared page layouts use Jekyll's `relative_url` filter for assets and links. The home page uses paths relative to the repository root.

## Local repository

This folder is initialized as a local Git repository with no remote configured. Add the GitHub remote after you create the repository.
