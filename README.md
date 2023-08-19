## Application Details

Meet App used for finding a list of events based on city selected.

## Meet-App Features and User Stories

### Filter Events by City

Given: The user has launched the application.<br>
When: The user selects a city from the city options in the menu.<br>
Then: Application refreshes to show only events located in the selected city.

### Show and Hide Event Details

Given: The user is on the Event Details page.
When: The user selects the show details button.
Then: Event Details will either show or collapes, allowing additional information to be seen or hidden based on the previous status of the button.

### Specify Number of Events

Given: User is viewing the events page.
When: The user selects a predetermined option from a drop-down menu to see the desired number of selected events.
Then: Events Listings page refreshes to show the specified number of events.

### Use the App when Offline

Given: The user has previously signed on to the Application with an active internet connection.
When: The user loses connection or manually shifts to airplane mode.
Then: Application displays message stating that the user is currently offline and some features may be limited. Cached data will still be accessible.

### App Shortcut on the Home Screen

Given: User has application installed on mobile device.
When: The user accesses the App settings or holds the app icon.
Then: User is shown option to add a shortcut to the home screen. Once allowed the App icon is shown on the home screen.

### Display Charts Visualizing Event Details

Given: User is on the Event Details page.
When: User selects "Charts" button.
Then: Application displays relevant data in a chart providing additional statistics about the event.