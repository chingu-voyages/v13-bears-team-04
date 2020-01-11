# Things taken into considering when creating this custom editor component

### Mobile/Tablet or Desktop?

- we want to know this before rendering (either on the server and client)
- if the user is on a desktop, we'll render a full editor with:
  - rich text options
  - markdown?
- other users just get plain text editor

### Markdown and/or Rich Text?

- Reddit gives users both options when on desktop and neither on mobile

### Creating Comments and Posts?

- Reddit uses similar components in each of them
- Comments have a 'Comment' button in the toolbar
  - and the toolbar is along the bottom

### How will we show these comments/posts?

- does performance take a significant hit if user has 100 readOnly comment editors on the page
- should we save the data in Slate's JSON format and then serialize it into HTML?

### Text or Link?

# To-do

- add an `escape` key listener to clear all selections?
- add links
- add multi line code blocks and quotes
- style quotes and inline code
