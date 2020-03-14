---
layout: post
title: Markdown parsing
date: 2019-08-26 01:00:00 +0100
categories: [jekyll, markdown, documentation]
custom_excerpt: In this blog post, you'll learn how to use markdown in your favour. Get to know how markdown is being parsed and how you can style your posts the best way.
---

Here's an overview of what you can expect to do with kramdown, the markdown parser used in Mero.

# Photo slider

Here's an example of what it looks like:

https://cdn.shopify.com/s/files/1/2959/2384/products/ngogeokbcatt_large.jpg?v=1524987693
https://www.nationalgeographic.com/content/dam/news/2015/04/09/promo/step-cat-staircase-promo.ngsversion.1428612902610.png
this is not a photo
http://pmdvod.nationalgeographic.com/NG_Video/802/635/160328-news-cat-dialects-vin_thumbnail_ds1602001-47_640x360_653681219883.jpg
{: .photo-slider }

And here's another one just to test multiple on the same page:

http://pmdvod.nationalgeographic.com/NG_Video/802/635/160328-news-cat-dialects-vin_thumbnail_ds1602001-47_640x360_653681219883.jpg
https://cdn.shopify.com/s/files/1/2959/2384/products/ngogeokbcatt_large.jpg?v=1524987693
{: .photo-slider }

# Headings

Each heading will have a unique and automatically generated `id` attribute as well as a link, so you can easily point people directly to the section you want to.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Text

Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptas cumque repellendus quod ut laboriosam et. Error nam veritatis esse voluptas delectus quasi nostrum tempora laborum debitis, temporibus quae non in molestias, ea modi deserunt dolores doloribus cumque eveniet dicta! Porro reprehenderit sit earum iure beatae aliquam corrupti amet consectetur, ullam consequuntur voluptatem perferendis ipsa cupiditate tenetur illo, tempore doloribus blanditiis dolorem iste nam eius magnam dignissimos incidunt! Quod, sed delectus.

This paragraph will stand out from the others.
{: .lead }

Voluptate facilis enim tempore cumque tenetur corrupti quia dolore officia veniam ipsum ex veritatis voluptatem magnam assumenda placeat laudantium autem deleniti, et perferendis nobis, consectetur voluptates delectus? Distinctio, neque.

And you can also add some **bolds** and _italics_ if you really need to. Besides all that, some `code snippets` might also come in handy. And also, [links](https://pedropinto.me) are most definitely going to be useful!

# Lists

You can have unordered lists like this:

- Cookies
- Pizza
- Soda

Ordered lists like this:

1. Wash the cat
2. Dry the cat
3. Feed the cat

Or a mix of both

1. Keyboard
    * Mechanical switches
    * Butterfly switches
2. Mouse
    * Wired
    * Wireless
3. Display
    * Super-wide
    * Curved
    * 4k

# Images

Images may or may not have a label underneath.

![Here's some label for the image.](https://via.placeholder.com/1920x1080)

# Quotes

Or just highlighted bits and pieces from long articles.

> Feels super inspirational, even when it doesn't make any sense.

# Horizontal rules

You can add a rule by placing at least three consecutive dashes between two elements, which will result in this:

This is the first paragraph.

---

This is the second paragraph.

# Code blocks

You might eventually need to share some code blocks with your audience, so I've prepared these for you.

{% highlight html linenos %}
<!-- Just testing comments -->
<nav class="nav">
    <ul class="nav__list">
        <li class="nav__item">About</li>
        <li class="nav__item">Contact</li>
        <li class="nav__item">Projects</li>
    </ul>
</nav>
{% endhighlight %}

Some SCSS to go with it? Sure!

{% highlight scss linenos %}
/* Look, a comment! */
nav {
    background-color: #000;

    &__list {
        color: fade-out(white, 0.5);
    }

    &__item {
        &:first-child {
            margin-top: 100px;
        }
    }
}
{% endhighlight %}

You might also want some JavaScript, because, why not right?

{% highlight javascript linenos %}
// Comment here
const tryThis = () => {
    const sum = true ? 10 + 10 : 20
    const name = "Ezequiel"
    const nameRegex = /(abc).*?(\d{1,3})/

    if (sum && nameRegex.test(name)) {
        wow()
    }
}

const wow = () => {
    console.log("it worked!!!")
}

tryThis()
{% endhighlight %}

If for some weird reason you don't want line numbers in your code blocks, that's also possible.

{% highlight javascript %}
/*
 * Look!
 * Not a single
 * Line number
 * In sight!
 */

window.alert(`yeah! ${window.outerWidth}`)
{% endhighlight %}


{% highlight diff linenos %}
<nav class="nav">
    <ul class="nav__list">
+       <li class="nav__item">About</li>
-       <li class="nav__item">Contact</li>
        <li class="nav__item">Projects</li>
    </ul>
</nav>
{% endhighlight %}

# Tables

Everyone loves tables, right? No, not really. But sometimes tables are the most effective way of displaying some specific content. For those cases, and for those cases only, here's a table. With different background on even rows for easier reading as well as highlighted rows on hover.

|-----------------+---------------+-----------------+----------------|
| Default aligned | Left aligned  | Center aligned  | Right aligned  |
|-----------------|:--------------|:---------------:|---------------:|
| First body part | Second cell   | Third cell      | fourth cell    |
| Second line     | foo           | **strong**      | baz            |
| Third line      | quux          | baz             | bar            |
| Second body     |               |                 |                |
| 2 line          |               |                 |                |
| Footer row      |               |                 |                |
|-----------------+---------------+-----------------+----------------|
