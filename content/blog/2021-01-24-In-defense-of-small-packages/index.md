---
title: In defense of small packages
date: "2021-01-24"
template: post
---

When I first started web development I use to stick my nose in the air at people that would
just import a ton of packages to tasks that I deemed easy to write, and thus not worth the import. 

My reasoning were that were two-fold.

1) It helped to hone your craft. Learning how the soup is made when it came to simple utility functions made you a better programmer.

2) Reducing the number of dependencies in turn reduced your bundle size.

I still feel both of these reasons have valid cases, but as time has gone on, and I have less of it, I've learned the value of producing meaningful results. How much time have I spent writing the same simple validation logic? Or writing utility functions around boolean state? It may only be 5 minutes here or there, but that time adds up, 

In order to not compromise my ideals while still leveraging the work I've done in the past I've started building a collection of private npm packages. Any time I reference code from past projects, or copy and paste the same bit multiple times I break it into it's own package. This allows me to take known working code, add test coverage if needed, and reusue it easily. I'm still solving these problems myself and am able to scope the dependencies to packages I'd already be importing like React or Ramda.

You won't see me importing packages like [leftpad](https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/) anytime soon, however I've come around to the idea using npm like lego blocks to leverage solutions to past problems in order to allow me to to move faster on larger scale problems.