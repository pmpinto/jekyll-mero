# Mero

Mero is a light-weight and minimal [Jekyll](https://jekyllrb.com/) theme focused on providing a comfortable reading experience.  
It's also a 🇵🇹 portuguese word for _genuine_ and _simple_.

# Outline

-   [Features](#features)
-   [Screenshots](#screenshots)
-   [Demo](#demo)
-   [Installation](#installation)
-   [Configuration](#configuration)
-   [Options](#options)
-   [Development](#development)
-   [Contributing](#contributing)
-   [License](#license)
-   [Donations](#donations)

# Features

-   Responsive web design.
-   Built with a [modular scale](https://www.modularscale.com/?16&px&1.618).
-   Fluid typography to make sure users get a similar experience no matter what screen size they're on.
-   Great contrast between main text and background colors.
-   Images with captions.
-   Code snippets.
-   [Material Design Icons](https://material.io/resources/icons/?style=baseline).
-   Handpicked fonts: [Space Mono](https://fonts.google.com/specimen/Space+Mono) + [Work Sans](https://fonts.google.com/specimen/Work+Sans).
-   A modular development approach so it's easier to expand.

# Screenshots

## Home page

![Screenshot](https://github.com/pmpinto/jekyll-mero/blob/master/screenshots/screenshot.png?raw=true)

## Post page

![Screenshot](https://github.com/pmpinto/jekyll-mero/blob/master/screenshots/screenshot-post.png?raw=true)

# Demo

I've built this for myself first, so you can check [my blog](https://pedropinto.me/blog) for a live demo.  
This blog also happens to be open source, take a look at how it's implemented in case you're having trouble: https://github.com/pmpinto/blog

# Installation

To use this theme, and especially to build your blog locally, you'll have to make sure you have all the tools you need.  
For instance, if you're going to be using Mero on GitHub Pages, it's a good idea to mimic the same environment on your local machine.

Feel free to jump over the steps that do not apply to you.

## Make sure you have [Ruby](https://www.ruby-lang.org/) installed

Open up your terminal of choice and enter:

```
ruby -v
```

If the output resembles something like the following, you're good to go:

```
ruby 2.4.0p0 (2016-12-24 revision 57164) [x86_64-darwin18]
```

## Install `bundler` and `jekyll`

Refer to [Jekyll's website](https://jekyllrb.com/) if you need to.

```bash
gem install bundler jekyll
```

## Create a new jekyll blog

```bash
jekyll new my-blog
```

This will create a new folder called `my-blog` in the current location, so you can now move into it:

```bash
cd my-blog
```

## Open the project folder in your favorite text editor

For VS Code users, just enter `code .` and it should pop up.

## If you have a `Gemfile.lock`, remove it

This will prevent gem conflicts.

## Open `Gemfile` and do the followin

For GitHub Pages users, add this:

```ruby
gem "github-pages", group: :jekyll_plugins
```

Other than what's shipped with `github-pages` you will also need to add the following lines under `group :jekyll_plugins do`:

```ruby
gem "jekyll-paginate-v2"
gem "jekyll-archives"
```

## Remove any dependencies from your `Gemfile` that are already dependencies of `github-pages`

Refer to the latest dependencies file of the gem: https://github.com/github/pages-gem/blob/master/lib/github-pages/dependencies.rb

This will help prevent conflicts you might encounter in the future when `github-pages` has a different version (usually older) of a dependency you're specifying in your `Gemfile`.

## Install Ruby dependencies

Go back to your terminal and run:

```bash
bundle install
```

If you encounter any errors during installation, read them thoroughly and if needed, Google is your friend.

# Configuration

Now let's configure what you've just installed.

Go back to your favorite editor and open the Jekyll configuration file `_config.yml`.

## Remove the line with current `theme` you might have, and instead add the following

```yml
remote_theme: pmpinto/jekyll-mero
```

## Add pagination settings

This will provide a bunch of base configurations for `jekyll-paginate-v2`.

```yml
# Pagination
pagination:
    enabled: true
    per_page: 12 # How many items per page
    title: "" # Content to add inside <title>
    permalink: "/page/:num/" # Url to append to your  `baseurl`: /blog/page/3
    trail: # When you have many pages how many should be visible before and after the current one
        before: 2
        after: 2
    sort_field: "date" # How the posts will be sorted
    sort_reverse: true # Ascending or descending
```

## Add pagination settings to your `index` file

```yml
pagination:
    enabled: true
```

If you don't add this, you won't see anything in your home page.

## Add archives settings

The gem `jekyll-archives` is responsible to create category pages in which you will have a list of posts by category.

```yml
# Archives / Category pages
jekyll-archives:
    enabled: [categories] # Only for categories
    layout: category # Layout to use
    permalinks:
        category: "/category/:name/" # Url of a category list page: /blog/category/funny
```

## Add plugins

```yml
plugins:
    - jekyll-paginate-v2
    - jekyll-archives
```

## Add SEO data

This will be used throughout the theme.

```yml
# SEO Tag data
author:
    name: Your Name # The name you go by
    twitter: yourTwitter # Your Twitter handle without the @ sign
    website: https://yourdomainname.com # Your main web url
    email: you@yourdomainname.com # The email people can reach you at
logo: /assets/images/open_graph.png # Used as a preview image on social media, websites and apps
twitter:
    username: yourTwitter # Same as author.twitter
    card: summary_large_image # How should the Twitter preview card look like
social:
    name: Your Name # Same as author.name
    links: # Where else are you at on the internet
        - https://github.com/yourGitHub
        - https://twitter.com/yourTwitter
```

## Add default front matter

Make sure you change the path of the image as well as its size.

```yml
# Default front matter
defaults:
    - scope:
          path: ""
      values:
          image:
              path: /assets/images/open_graph.png
              width: 1024
              height: 500
```

## Add Google Analytics

If you have it set up, add the ID of your Google Analytics here.

```yml
google_analytics_id: UA-XXXXXXXX-X
```

## Add missing assets

The theme comes bundled with a bunch of assets, but there are some that you will want to add yourself.  
Refer to [this](https://realfavicongenerator.net/) or [this](https://favicon.io/) for more info.

| File                         | Location          | Size (px)  |
| ---------------------------- | ----------------- | ---------- |
| `open_graph.png`             | `/assets/images/` | 1024 x 500 |
| `android-chrome-192x192.png` | `/`               | 192 x 192  |
| `android-chrome-512x512.png` | `/`               | 512 x 512  |
| `apple-touch-icon.png`       | `/`               | 180 x 180  |
| `favicon-16x16.png`          | `/`               | 16 x 16    |
| `favicon-32x32.png`          | `/`               | 32 x 32    |
| `mstile-150x150.png`         | `/`               | 150 x 150  |
| `safari-pinned-tab.svg`      | `/`               | 512 x 512  |
| `site.webmanifest`           | `/`               | -          |
| `browserconfig.xml`          | `/`               | -          |

# Options

⚠️ **TODO**: add missing options here.

# Development

To prevent source files from being picked up by Jekyll you will need to add the following list to `_config.yml`:

```yml
exclude:
    - Gemfile
    - Gemfile.lock
    - node_modules
    - package.json
    - assets/javascript/*.es6.js
    - assets/javascript/index.js
    - webpack.config.js
```

## Install dependencies

Run both `bundle install` and `npm install`.

## Commands

| Command                 | What it does                                                  |
| ----------------------- | ------------------------------------------------------------- |
| `npm start`             | Starts the jekyll development environment                     |
| `npm run start:webpack` | Starts the JavaScript development environment through webpack |
| `npm run build`         | Builds jekyll and bundles JavaScript                          |

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/pmpinto/jekyll-mero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

If you'd like to contribute feel free to fork this repo and do as many pull requests as you see fit towards `master`.

# License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

# Donations

If you like the theme and you feel like throwing some candy my way, click the button below and you'll be able to pick just the right amount. Thanks in advance 🙏

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.me/pmpintopt)
