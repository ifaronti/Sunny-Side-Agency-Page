# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: (https://github.com/ifaronti/Sunny-Side-Agency-Page/tree/master)

- Live Site URL:(https://lucky-hummingbird-41e1c0.netlify.app/)

## My process

This project required a lot of attention to detail so I spent hours of my first day just looking at the design file and noting down details that can be easily missed. Like the 'stand out' and 'transform' cards. these two card have same width and height but their headings' alignments are different.

Having taken note of the different tiny details, I created a json file to contain all the cards,images and testimonial data. the footer and headers are the only sections without data in the json file.

After the json file, I proceeded to create components for each section. The header section with nav, h1, image. After that was done, I created a component for all 6 cards with same height and width. Although the data was different, I used ternary, conditional rendering and adding key/value identifier in the json data to populate the cards accurately instead of creating 3 components; two for each grid of similar card content.

Next was testimonial which took same process as the 6 grid display cards. 

The four card before the footer section were displayed with flexbox no identifier necessary in their json data.

The footer was tricky because of the SVGs hover effect so I had to copy the SVGs to my footer components, innited a state variable (mouse) and used mouseOver/MouseLeave event handler to change state variable from true-false, false-true. Then I used ternary to change the fill property of the SVG based on state varible value.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- 
- 

### What I learned
I improved my skills with pesudo elements with this. I also picked up components management with this. The use of one component(Gridcomponent.js) for 6 cards of different contents is an aspect of a test I've been meaning to pass since I started using react. I made it possible with this challenge

### Continued development
My CSS is getting really good and I need to continue to improve on that. I'll be practicing more with flexbox and grid using their different other properties instead of the ones I commonly use.

### Useful resources

- [Pixel Perfect pro] : I used this firefox extention to get my solution closer to the design. Since I don't have a figma file to tell me width, height, font-sizes, margins, position etc, this extersion places an overlay of the design image on my own design so I can see if I need to reduce/increase units values etc.. 

## Author
- Frontend Mentor - [@ifaronti](https://www.frontendmentor.io/profile/@ifaronti)

## Acknowledgments
Thanks to frontendmentor.io for this great design and challenge. I'm truly grateful for all I've learned in the past six months by picking up challenges. I've grown so much in programming and I don't think it would have been this fast and productive without frontenmentor.io ... Thanks guys!!