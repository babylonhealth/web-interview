# NOTES

## How long did it take?

- 2 days

## Overview

As my experience with modern React is limited, my first step was to research in to best practises and approaches to common tasks. Having most of my prior knowledge being in Angular, some of the aspect of this app will reflect that. The structure of the app and where everything is placed is key for scalability - with everything having a clear responsibility - whether it's a purely functional component or one with more logic e.g. FormControl. I tried implementing the DDAU principles - passing actions up to the app component to change the app state. I'd love to have a play with a modern state management tool (Unstated looks cool) and take some responsibility away from the App.tsx. The App.tsx having all the responsibility is definitely not the end goal.

### Trade-offs

- sacrificed icon asset management for app logic and UTs
- sacrificed precise styling for app logic and UTs
- sacrificed horizontal scrolling of items for quick grid layout instead

### Next steps

- I appreciate i've maybe overengineered the form. I was trying to be clever at the beginning then got myself in a tangle. I'd focus more on the data structure first and work from there if I was to do this again.
- propose a more easily consumable data structure
- look in to maybe using Axios for POSTing form data? I polyfilled fetch for simplicity
- analyse app performance and improve. namely digests
- Add types to all data that is passed round
- Find a nicer, less bespoke way of passing the date around
- Make the FormFieldRadio extend FormField for multi-option capabilities
- reach 100% unit test coverage. Currently have only tested the happy and slightly melancholy path
- Add visual loading state as the app is gathering data
- Centralise styling utils e.g. fonts
- Add css for hover and focus states
- Make book button sticky and appear when user has scrolled half way down the form
- Sort out my linter. Seems a bit odd stripping out semi-colons but leaving comma-dangle? I suppose comma-dangle is good for git difs...

## General Feedback

- supply all asset files e.g. icon svgs
- make it clear whether it's okay to edit the mock API
- correct the colours in the constants.scss file. I had to colour pick from the design
- change the appointment dates to be more normal. I thought i'd made a mistake 0_0
- have the example appointment in the data file in the desired format. there were extra fields that weren't requested in the readme
- the POST /appointments API responds with a 201 on success. the readme is incorrect here
