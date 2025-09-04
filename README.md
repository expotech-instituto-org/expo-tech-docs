# ExpoTech Documentation

This project uses [VitePress](https://vitepress.dev/) to generate static documentation.

## How to Create New Pages

1. **Add a Markdown File:**
    - Place a new `.md` file in the `docs/` directory. For example, `docs/new-page.md`.
    - The page will be available at `/new-page` in your documentation site.

2. **Add to Navigation or Sidebar (Optional):**
    - Open `docs/.vitepress/config.mts`.
    - Add your new page to the `nav` or `sidebar` arrays for easy access.
Example for sidebar:

```typescript
sidebar: [
    {
        text: 'Examples',
        items: [
            { text: 'New Page', link: '/new-page' }
        ]
    }
]
```

## How to Create Subpages

1. **Create a Folder:**
    - Inside `docs/`, create a folder (e.g., `guide`).

2. **Add Markdown Files:**
    - Place `.md` files inside the folder (e.g., `docs/guide/intro.md`).
    - These will be accessible at `/guide/intro`.

3. **Update Sidebar:**
    - In `docs/.vitepress/config.mts`, add a section for your subpages:

```typescript
sidebar: [
    {
        text: 'Guide',
        items: [
            { text: 'Introduction', link: '/guide/intro' },
            // Add more subpages here
        ]
    }
]
```

## Development

- Start the local dev server:

```bash
pnpm run docs:dev
```

- Build the static site:

```bash
pnpm run docs:build
```

## More Information

See the [VitePress documentation](https://vitepress.dev/) for advanced configuration and features.

vitepress-plugin-lightbox
