# hexo-theme-hsad

A quiet editorial Hexo theme with a fixed visual sidebar, a lighter homepage, and a calmer archive timeline.

![Preview](./preview.png)

Demo: [hsad.xyz](https://hsad.xyz)

## Features

- Fixed visual sidebar with a soft image backdrop
- Cleaner homepage focused on recent posts and short previews
- Archive pages separated into a true time-based directory view
- Category and tag overview pages with simpler indexing
- Responsive mobile drawer for navigation
- Optional sponsor block in the footer

## Install

```bash
cd your-hexo-site
git clone https://github.com/watanabe-hsad/hexo-theme-hsad.git themes/hsad
```

Set the theme in your site config:

```yml
theme: hsad
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

## Notes

- The theme ships with default `avatar.jpg` and `background.png` under `source/images/`.
- If your site provides files with the same paths, Hexo can override them with your own assets.
- The footer sponsor block is disabled by default in this standalone repo.

## License

[MIT](./LICENSE)
