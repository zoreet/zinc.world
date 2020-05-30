---
title: Redesigning the Search Results page
date: 2020-05-28
# featured_image: /images/blog/redesigning-the-search-results-page/old.png
excerpt: The story of how I made an impossible redesing of Booking.com's Search Results page
tags:
    - blog
    - Case Study
    - Conversion Optimization
    - A/B Test
---

| **Company:** | <a href="https://booking.com" target="_blank">Booking.com</a>|
| --- | --- |
| **Product:** | Search Results page |
| **Role:** | UX Designer |
| **Traffic:** | ███████ visitors/day |
| **Goal:** | Help customers make a better decision about what properties suits them, by facilitating the comparison and filtering aspects of Search Results. |

<br />
<br />

## Local maximum

Inside Booking and especially our team we performed extensive interviews and A/B tests to understand and validate what is most important to our users visiting the Search Results page. After years of data-driven optimizations we were struggling to move forward and offer users a search experience that addressed all their needs and pains.

We didn't knew it back them, but we've reached something called local maximum aka the limit of the current design, and without a major change it would have been hard to reach new heights.

On top of this, our obsession with **velocity, quick wins, and small steps experimentation** was not helping. We needed to think long-term, but our aversion towards *big* projects was keeping us still.

One day, mostly out of frustration, I decided to redesign the page. Just ignore anything that we knew was impossible and build the *perfect* Search Results page. *Humble much?*

## What is the purpose of this page?

People wanting to go on a vacation need to find a property that suits them. If our page had to do one thing, and one thing only, it had to help people **compare**.

Once that is done, we noticed **users make snap decisions** on whether they *like* a property or not. They do this by scanning the page, and **photos** play an important role in making a good first impression. Users also look for **price** and deals, **quality** (review score, rating), and how central the **location** is.

And with 2600+ properties available in cities like Paris that's easier said than done. Which means users tend to first use **filtering and sorting** to sift through this huge list, so we need to be get these tools front and center.

## Evaluate

With that in mind, I took a long look at the page and analyzed how it could better achieve it's goal.

{% set photo = { path: "/images/blog/redesigning-the-search-results-page/analysis.png", alt: "Booking.com's old Search Results page", caption: "Hover to see annotations", class: "sr-old" } %}
{% include "components/blog-photo.njk" %}

This helped me notice that we're **overwhelming users with information**. We show each and every room a hotel has 🤯. A lovely description, but probably useless at this point, a map of Paris so small it can't be effective and much more. We needed to sacrifice something to fit all that information in there, and that meant one thing: smaller photos.

The problem is that every single of these elements were introduced by very smart people, based on user feedback and validated and refined through A/B tests. We told ourselves they are needed, but what we failed to realize was that users are constantly changing, and our inventory is growing exponentially. Maybe some of these features worked when we had only 100 properties in Paris, but users now were telling us we needed to simplify the process.

## Vision

I decided to go all in on the concept of comparison and see how far I can go with it. This is what I came up with:
{% set photo = { path: "/images/blog/redesigning-the-search-results-page/draft.png", alt: "Proposal for a new Search Results page", caption: "Proposal for a new Search Results page", class: "" } %}
{% include "components/blog-photo.njk" %}

Here is a breakdown of the changes:

**1. Big bold image**<br />
This will be the anchor of the page. People tend to switch between multipe dates or destinations, and I wanted to make it clear from the start that **they are looking at the right page.**

**2. Move filters up**<br />
With thousands of available properties people need to refine the search to meet their budget and preferences.

**3. Essential information only**<br />
My goal was to give just enough information to get people interested in a property. Once that happens they can go to the Property page and get all the information they need. Based on research I decided on 5 categories:

- picture
- customer reviews
- star rating
- location
- price

**4. Grid view**<br />
To facilitate the comparing process I decided to give each category it's own column. And in useing the sort bar as header I also boosted it's visibility.

**5. Bigger pictures**<br />
We have data to prove that a picture *really* is worth a thousand words. Users rely heavily on pictures to get information about a property. Plus bigger pictures gives hotels a better chance at persuading visitors to become their guests.

**6. One price**<br />
One of Booking's unique selling points is *Best priced guaranteed*. This atracts a large group of price consciuos travelers, so I decided to increase it's visibility. I wanted to show only one price, and opted for the cheapest that fit the search criteria.

**7. Contextual information**<br />
We've had efforst before to remove information but non worked. Here I tried to show the right information at the right time, so based on filter and sorting criteria. In this example the user has sorted based on review score, so I used the bottom part of each property card to display the most recent review.


## Rolling out the new design

Once the first draft was done I showed it to my team, gathered feedback and improved the design. I repeated this process showing it to senior designers, managers and other stakeholders until we though it was ready for our users.

The challenge now was how do implement it. At that time rolling out a complete redesign was out of the question. We decided to break it down into as many features as we could, so I created a roadmap of releasing small features and validating them with A/B test. The order was based on:

- **potential impact**: what we though will add the bigges value to our users;
- **effort**: easier to implement goes first;
- **stand-alone**: what features don't depend on others are rolled out first;
- **will it scale**: features that would not scale would be dropped off.

Once the roadmap was finalized I started working with FE and BE developers to implement the code needed. I also was responsible for setting up A/B tests (writing hypothesys and analyzing results).

## Results

For almost all experiments we looked first for an increase in net conversion, followed by secondary metrics such as increase filtering, page load times etc.

**Most tests were successful.** Bring filters to the top increase their use which in return improved both engagement with the page (people that interact with the page before leaving) and net conversion. Bigger images and bigger CTAs had a similar effect.

**Some experiment failed.** Changing the background color to gray, and making each property block look more like a card increase the page height, and in return people looked at less properties and booked less.

**Some features were abandoned**
The big header image. We would need one high quality photo for each destination, and that image would need to work ok with a thick yellow overlay on top of it. This would not scale.

The grid view. Unfortunately we never got to test this because it would require a significant effort, and other teams working on the page didn't sign off on being blocked for a longer period of time.

**The biggest win came from a surprinsing place**: showing one room only. We never thought that by just removing extra rooms we will have this effect. but customers loved it. We noticed they engaged more with the page, interacted with less properties, but went further down the funnel than before.


## Follow up

During this process we crafted a page that is better at it's core task and - most importantly - it's **a page that customers love more**. And 6 years later you can still see all the changes that resulted from this one redesign.

{% set photo = { path: "/images/blog/redesigning-the-search-results-page/now.png", alt: "Search Results Page, 2020", caption: "Search Results Page, 2020", class: "" } %}
{% include "components/blog-photo.njk" %}






<style>
  .sr-old {
    background: url(/images/blog/redesigning-the-search-results-page/old.png) no-repeat 50% 0;
    background-size: contain;
  }
  .sr-old img {
    pointer-events: none;
    transition: opacity 0.3s ease;
    opacity: 0;
  }
  .sr-old .sr-screenshot__inside:hover img {
    opacity: 1;
  }
</style>