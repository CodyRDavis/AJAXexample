# AJAXexample

## GITHUB Pages: https://codyrdavis.github.io/AJAXexample/

### Created By: Cody Davis

## Summary
This app is intended to look a bit trendier, some inspiration pulled from the very API its accessing GIPHY. I wanted to demonstrate not only the ability to pull data from an API, but store data from that fetch into elements, access it, and manipulate my elements using that data. Hovering over a gif allows it to be animated by swapping the data holding the still frame and the data holding the animated urls.

## Intended use

At the top right is a search bar to allow users to search for Gifs of their desire. hitting search populates an area on the page with the term provided by the user and when that term is clicked it fetches 5 gifs using the original word from the user provided and displays them on the screen.

## Room for improvement

I did not stray far from the example given in class for this assignment. instead focusing on doing a few interface things I had never done before. A few UI features are a little underpolished and could use a revist. but most importantly, ~~I would like to revisit what happens when the enter button or search button is pressed. In addition to creating the button, I feel as though a query for 5 gifs using that word should happen automatically and then the users new button can be used to pull up images again if desires.~~

update: 08NOV18 20:09
went ahead and quickly created a function that would when the user searches for a Giph, return the results, and create a historical button that can be clicked to make the call over and over again. I think this is a better UX/UI experiance for the user and more in line with their expecatations when utilizing an app like this.
