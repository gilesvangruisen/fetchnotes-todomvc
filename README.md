# Fetchnotes Code Challenge

By Giles Van Gruisen

***

## Breaking into Backbone

Welcome to my rendition/solution of the Fetchnotes code challenge! (and my first real experiment with Backbones)

I've forked the popular [todomvc][https://github.com/addyosmani/todomvc] repository as a starting point. For the purposes of this challenge, I chose to go with the Backbones architecture. I've been wanting to get into Backbones for a while, and since Fetchnotes uses Backbones, I thought, "why not?"

## Bugs, issues, comments
Because this is not production code per se, I haven't gone through the effort of testing and debugging across different browsers. Of course if this code were intended for production, I would have taken the time to do so.

There's a bug where the Filter events (standard with todomvc) are triggered when the user clicks the person icon. In other words, if you are Filtered to either "Active" or "Completed" and you click the person icon, it will revert back to showing "All" todo items. This is something I'm working to understand and fix.

You might notice that both collections (todos, persons) are in the same file. When I separated them, the app stopped working and threw an error, "Uncaught TypeError: Cannot read property '_listenerId' of undefined." This is something I'm working to understand and fix.

This is my first time getting down and dirty with Backbones (I probably could have phrased that better.) so the code isn't exactly very clean or thorouhgly refactored. E.g. I left in a bunch of console logs that I used during development. I'm going to continue experimenting with Backbones to get a better understanding of the framework and its nuances.

## Thanks for you time!