# Tasks

## Description

My take for this project is to try not use the framework as much as possible. \
The goal is to create a simple app that can draw rectangle shapes. \

## Chore - Project Initiation

**Tasks**

- [x] Create project with NextJS
- [x] Add typescript
- [x] Add tests with jest
- [x] Add eslint, prettier
- [x] Create layout for the app

## Feature - Shapes Canvas

The canvas to display the shapes.

**Tasks**

- [x] Create a canvas context provider
- [x] Create the canvas component
- [x] Create a shape model

**Notes**

The context should expose a function to add a shape to the canvas.

## Feature - Adding Shapes

Here is what should happen after this feature is implemented:

1. If we click anywhere on the window, a modal should open.
2. There should be a form inside the modal asking for 4 things: top, left, width and height of the shape to be
   added.
3. Submitting that form should add a new shape on the page according to the data filled in the form.

**Tasks**

- [x] Create rectangle shape component
- [x] Create new shape form component
- [x] Register click listener on canvas
- [x] Create shape on canvas

- [x] create floating menu
- [x] Register click listener on floating menu

**Notes**

modal should be html5 dialog element

## Feature - Mouse coordinates

Hovering any shape should also log the realtime x/y coordinates of the mouse relative to the shape dimension.

The center for these relative coordinate system should be bottom-left point of the shape.

Also, the points should show as integers.

**Tasks**

- [x] Create the mouse coordinates component
- [x] Register mouse move listener
- [x] Calculate mouse coordinates relative to shape