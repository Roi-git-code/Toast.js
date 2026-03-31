# Toast.js Documentation

Toast.js is a lightweight and customizable library for displaying toast notifications in web applications. This documentation covers everything from installation to usage, with detailed explanations of each function and its benefits.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Creating a Toast](#creating-a-toast)
   - [Parameters Explained](#parameters-explained)
   - [Example Usage](#example-usage)
3. [Functions and Their Explanations](#functions-and-their-explanations)
   - [Constructor](#constructor)
   - [configureToastElement](#configuretoastelement)
   - [show](#show)
   - [makeText](#maketext)
4. [Why Use Toast.js?](#why-use-toastjs)
5. [Customization](#customization)
6. [Contributing](#contributing)
7. [License](#license)


## Installation

To use Toast.js, you can include it in your HTML file or import it into your JavaScript file.

### Option 1: Directly in HTML

```html
<script src="https://cdn.jsdelivr.net/gh/silivestir/Toast.js@main/Toast.js"></script>
or
<script src="https://cdn.jsdelivr.net/gh/silivestir/Toast.js@main/Toast.min.js"></script>
```

## Option 2: Importing in JavaScript

If you are using a module system, import it as follows:

```javascript
import Toast from 'https://cdn.jsdelivr.net/gh/silivestir/Toast.js@main/Toast.min.js';
```

Roi‑feature‑branch Enhancements
You can use the same installation. The enhancements (stacking, icons, close buttons, animations, promise‑based handling, accessibility improvements) are included in the same JS file; no extra imports are needed.


## Usage

## Creating a Toast

To create and display a toast notification, you can use the makeText static method provided by the Toast class.

```javascript
Toast.makeText("This is a toast message!", 3000, "#ff5733");
```

Roi‑feature‑branch Enhancements

```javascript
new Toast({
  position: "top-right",
  icon: "✨",
  closable: true,
  duration: 4000,
  animation: "slide",
  className: "my-custom-toast"
}).show("Enhanced toast notification!");
```

## Parameters Explained

· message (string): The message you want to display in the toast.
· duration (number, optional): The time (in milliseconds) for which the toast should be visible before it fades out. Default is 3000 (3 seconds).
· color (string, optional): The background color of the toast. Default is #333.
· contextId (string, optional): The ID of the HTML element the toast will be positioned relative to. If not provided, the toast will be centered in the viewport.

Roi‑feature‑branch Additions

· position: 'top', 'bottom', 'top-right', 'bottom-left', etc.
· icon: optional emoji or custom string
· closable: boolean close button
· animation: 'fade' or 'slide'
· className: custom CSS class

## Example Usage

To create a centered toast:

```javascript
Toast.makeText("Hello, world!", 3000, "#28a745");
```

To create a toast positioned below a specific element:

```html
<div id="myElement" style="margin-top: 100px;">This is a context element!</div>

<script>
    Toast.makeText("This toast appears below myElement!", 3000, "#007bff", "myElement");
</script>
```

Roi‑feature‑branch Examples

## 1. Centered toast with icon and close button

```javascript
new Toast({
  icon: "🎉",
  closable: true,
  duration: 4000,
  className: "celebrate-toast"
}).show("Congratulations! You've mastered the enhanced toast.");
```

## 2. Context‑based toast with advanced positioning and slide animation

```html
<div id="myEnhancedElement">Hover me</div>

<script>
  new Toast({
    position: "bottom-left",
    icon: "💡",
    animation: "slide",
    closable: true
  }).show("Positioned near the element!", 3000, "#555", "myEnhancedElement");
</script>
```

## 3. Promise‑based toast (loading / success / error)

```javascript
Toast.promise(fetchData(), {
  loading: "Loading data…",
  success: "Data loaded successfully!",
  error: "Failed to load data."
});
```

---

## Functions and Their Explanations

## Constructor

```javascript
constructor()
```

· Description: Initializes a new instance of the Toast class. This creates a <div> element for the toast and appends it to the body.
· Reason to Use: Instantiate the Toast class to prepare a toast notification element for display.

Roi‑feature‑branch: Prepares optional icons, close button, animations, and ARIA accessibility attributes.

## configureToastElement

```javascript
configureToastElement()
```

· Description: Configures the default styles for the toast element.
· Styles configured:
  · Position: Set to absolute to allow contextual positioning.
  · Background color, text color, padding, and border radius: Set default values for the toast.
  · Opacity and transition: Manage visibility and animation effects.
· Reason to Use: To establish default styles that can be further customized when displaying the toast.

Roi‑feature‑branch: Adds optional custom class and ARIA accessibility attributes.

## show

```javascript
show(message, duration = 3000, color = "#333", contextId)
```

· Parameters:
  · message: The text to display.
  · duration: The time in milliseconds the toast will be displayed (default 3000).
  · color: Custom background color for the toast (default #333).
  · contextId: ID of the element to position the toast relative to.
· Description: Displays the toast with the specified message and style, and handles its positioning and fading out.
· Reason to Use: Call this method to actually show the toast message to users.

Roi‑feature‑branch: Supports multiple stacking, animations, icons, close button, advanced positions, and promise‑based handling.

## makeText

```javascript
static makeText(message, duration = 3000, color = "#333", contextId)
```

· Parameters: Same as show method.
· Description: A static method that creates a new toast instance and displays it using the show method.
· Reason to Use: Provides a quick way to create and show a toast notification without manually instantiating the Toast class.

Roi‑feature‑branch: Supports enhanced options object while retaining original behavior.

---

## Why Use Toast.js?

· Lightweight & Minimalistic: Standalone without dependencies, ensuring fast load times.
· Customizable: Easily adjustable defaults and styles to fit your application's design.
· Flexibility: Position toasts anywhere in relation to the document or center in the viewport.
· Ease of Use: Simple API for rapid integration into your project.
· Roi‑feature‑branch adds enhanced features without breaking existing API

---

## Customization

Toast.js allows you to customize the following aspects:

1. Styles in configureToastElement: Modify background colors, borders, and text styles directly in the source code.
2. Visual Positioning: Change where the toast appears by adjusting the positioning logic in the show method.
3. Animation Effects: Customize the opacity or transition timings for fading effects.

· With the fork, you can also add icons, close buttons, or custom classes

---

## Contributing

If you want to contribute to Toast.js or have suggestions on improvement, feel free to reach out via email at silvestiriassey@gmail.com. Your feedback and contributions are welcome!

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
## Feature Comparison

| Feature                     | Original Toast.js | Roi‑feature‑branch |
|-----------------------------|:-----------------:|:------------------:|
| Basic toast notifications   | ✅                | ✅                 |
| Positioning control         | Basic             | Advanced (top, bottom, corners) |
| Multiple toasts stacking    | ❌                | ✅                 |
| Icons support               | ❌                | ✅                 |
| Close button                | ❌                | ✅                 |
| Animations (fade/slide)     | ❌                | ✅                 |
| Promise‑based handling      | ❌                | ✅                 |
| Custom CSS classes          | ❌                | ✅                 |
| Accessibility (ARIA)        | ❌                | ✅                 |
---

This documentation should help you effectively use and customize Toast.js for your projects. If you have further questions, reach out via email or start contributing! Enjoy creating your toast notifications!

