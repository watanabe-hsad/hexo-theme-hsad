# hexo-theme-hsad

A quiet editorial Hexo theme with a fixed visual sidebar, a lighter homepage, and a calmer archive timeline.

Live demo: [hsad.xyz](https://hsad.xyz)

Repository: [watanabe-hsad/hexo-theme-hsad](https://github.com/watanabe-hsad/hexo-theme-hsad)

## Features

- Fixed visual sidebar with a soft image backdrop
- Cleaner homepage focused on recent posts and short previews
- Archive pages separated into a true time-based directory view
- Category and tag overview pages with simpler indexing
- Responsive mobile drawer for navigation
- Optional sponsor block in the footer
- Built with local Pug templates and a single theme stylesheet for easier editing

## Install

```bash
cd your-hexo-site
git clone https://github.com/watanabe-hsad/hexo-theme-hsad.git themes/hsad
```

Set the theme in your site config:

```yml
theme: hsad
```

Then generate or serve your site as usual:

```bash
npx hexo clean
npx hexo generate
```

## Required Pages

For category and tag index pages, create these files in your Hexo site:

`source/categories/index.md`

```md
---
layout: categories
title: 分类
type: categories
---
```

`source/tags/index.md`

```md
---
layout: tags
title: 标签
type: tags
---
```

If you want a friend-links page, you can also use:

`source/links/index.md`

```md
---
layout: links
title: Links
links:
  - url: https://example.com
    avatar: https://example.com/avatar.png
    name: Example
    blog: Example Blog
    desc: A short line here
---
```

## Recommended Site Config

In your Hexo site's main `_config.yml`, make sure these common options are set in a way that fits your site:

```yml
language: zh-CN
date_format: YYYY-MM-DD
permalink: :year/:month/:day/:title/
```

## Theme Config

Most site-specific text lives in [`_config.yml`](./_config.yml).

Important keys:

- `brand_name`
- `brand_subtitle`
- `sidebar_note`
- `avatar`
- `sidebar_background`
- `social`
- `footer.support`

Example:

```yml
brand_name: hsad
brand_subtitle: 写一点留给夜里的话
sidebar_note: 用很少的话介绍自己，剩下的交给文章。

social:
  - name: GitHub
    url: https://github.com/yourname
  - name: E-Mail
    url: mailto:you@example.com
```

## Notes

- The theme ships with default `avatar.jpg` and `background.png` under `source/images/`.
- If your site provides files with the same paths, Hexo can override them with your own assets.
- The footer sponsor block is disabled by default in this standalone repo.
- The preview screenshot used for the Hexo theme listing is kept in the repository, but the README intentionally links to the live demo instead of embedding a site screenshot.

## Development

Theme source structure:

- `layout/`: page templates
- `layout/_partial/`: shared building blocks
- `source/css/hsad-theme.css`: all visual styles
- `source/js/hsad-theme.js`: mobile drawer behavior
- `_config.yml`: theme-level defaults

If you want to customize it heavily, the easiest starting points are:

1. Change copy and links in [`_config.yml`](./_config.yml)
2. Adjust spacing, typography, and colors in [`source/css/hsad-theme.css`](./source/css/hsad-theme.css)
3. Refine structure in the Pug templates under [`layout/`](./layout)

## License

[MIT](./LICENSE)
