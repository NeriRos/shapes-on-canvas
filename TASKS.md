# Tasks

## Description

My take for this project is to try not use the framework as much as possible. \
The goal is to create a simple app that can draw rectangle shapes. \

## Chore - Project Initiation

**Tasks**

- [ ] Create project with NextJS
- [ ] Add typescript
- [ ] Add tests with jest
- [ ] Add eslint, prettier
- [ ] Create layout for the app

## Feature - Shapes Canvas

The canvas to display the shapes.

**Tasks**

- [ ] Create a canvas context provider
- [ ] Create the canvas component

## Feature - Adding Shapes

Here is what should happen after this feature is implemented:

1. If we click anywhere on the window, a modal should open.
2. There should be a form inside the modal asking for 4 things: top, left, width and height of the shape to be
   added.
3. Submitting that form should add a new shape on the page according to the data filled in the form.

**Tasks**

- [ ] Create rectangle shape component
- [ ] Create modal component
- [ ] Create form component
- [ ] Register click listener on canvas
- [ ] Create shape on canvas

## Feature - Mouse coordinates

Hovering any shape should also log the realtime x/y coordinates of the mouse relative to the shape dimension.

The center for these relative coordinate system should be bottom-left point of the shape.

Also, the points should show as integers.

**Tasks**

- [ ] Create a mouse coordinates context provider
- [ ] Create the mouse coordinates component
- [ ] Register mouse move listener on shape
- [ ] Calculate mouse coordinates relative to shape