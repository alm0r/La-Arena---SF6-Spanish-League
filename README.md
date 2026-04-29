[![Netlify Status](https://api.netlify.com/api/v1/badges/887801f1-de79-4ba5-8302-f8687138d645/deploy-status)](https://app.netlify.com/projects/lighthearted-salamander-6be33b/deploys)

# My Awesome Project

This sites serves as the main reference for Spanish Street Fighter 6 Community League.

**Link to project:** https://alm0r.github.io/La-Arena---SF6-Spanish-League/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Netlify

This is basically a static website but get feeds the Google Sheet database that the Admins of the league use to keep track of the general clasification (points, positions, divisions, etc) week to week. There is no backend code but, the main script fetchs the data from the Google Sheets API and render it on the DOM, allowing the website to get upadted as soon as a match is played and and Admin updtes their oficial sheet.

It also display the Google Calendar used by the Admins, so everytime they make a change or update a date it gets reflected instantly on the website.

## Lessons Learned:

By building this i learned how to use the Google Sheet API in a very raw way. This was the result of trying to get the website be able to operate without a webmaster o needing someone to manually upadte the classifications score everytime a new match was played. Since the Admins were already using Google Sheets as a form of database to keep track of the league, it was just natural to use it to keep things as simple as possible.

All i had to do was refactor one of their sheets in a way that make easier for the API to consume so the data comming was orgized and optmized in a way the served the site needs.
