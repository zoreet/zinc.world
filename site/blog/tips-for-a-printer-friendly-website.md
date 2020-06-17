---
title: 4 tips for a printer-friendly website
date: 2020-06-14
featured_image: /images/blog/tips-for-printer-friendly-websites/cover.png
excerpt: To get you started, I put together some CSS snippets that will take you a long way.
tags:
    - blog
    - CSS
    - Print
---

Printing a website doesn't mean just *print on paper*. I, for one, like to print my articles as PDFs so I resist the constant urge of tweaking them.

Apart from the obvious reasons ( e.g. cooking recipe), some visitors might need to print:
- a confirmation page for applying for a visa;
- CV or part of a personal portfolio;
- as PDF for annotating or offline use.

Making your website look the same in the browser and in print is not an easy task. To get you started, I put together some CSS snippets that will take you a long way. And for the over-achievers, I linked some more in-depth resources at the end.

## 1. Styles for print
First thing, to write CSS only for the printed version of your site you need to use the following media-query:

``` css
@media print {
  /* CSS goes here */
}
```

## 2. Hide what's not needed
By far the most common thing I do is hide all the elements that are not needed on a printout, e.g. navigation, ads, pagination etc.

``` css
  header nav,
  footer {
    display: none;
  }
```

## 3. Make it legible

When thinking of print I try to optimize for that black-and-white printer that maybe is low on toner. Everyone else will have a much better experience anyway. Because of this I remove the background color and make sure all text is pure black.

I also like to set a default `font-size` to make sure no squinting is required. I found that `4mm` is the minimum that I like.


``` css
body {
  background: none;
}
* {
  color: #000;
}
html, body {
  font-size: 4mm; /* around 15px */
}
```

## 4. Fix the links
Since links can't be clicked on paper, I decide to expose the link's target. That means that [this link](https://ecsspert.com) becomes [this link (https://ecsspert.com)](https://ecsspert.com). And to skip on any embarasing reveals, I decided to ignore dummy links, aka `<a href="#">`

``` css
a:after {
  content: " (" attr(href) ")";
}
/* ignore dummy links */
a[href^="#"]:after {
  content: "";
}
```

## Resources
Some useful articles that go in depth on how to write and debug print css.
- [View print stylesheets directly in the browser](https://css-tricks.com/can-you-view-print-stylesheets-applied-directly-in-the-browser/)
- [In depth guide on how to set up a print stylesheet](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)
- [A Guide To The State Of Print Stylesheets In 2018](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)

## Your print stylesheet
The whole file, if 3 copy-paste combos are too much 🤷🏼‍♂️

``` css
@media print {

  /* Hide what's not needed */
  header nav,
  footer {
    display: none;
  }

  /* Make it legible */
  body {
    background: none;
  }
  * {
    color: #000;
  }
  html, body {
    font-size: 4mm; /* around 15px */
  }

  /* Fix the links */
  a:after {
    content: " (" attr(href) ")";
  }
  /* ignore dummy links */
  a[href^="#"]:after {
    content: "";
  }
}
```