<<<<<<< HEAD
=======

>>>>>>> eee715f (Updated Toast.js with Additional optinal features)
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
   - [configureToastElement](#configureToastElement)
   - [show](#show)
   - [makeText](#makeText)
4. [Why Use Toast.js?](#why-use-toastjs)
5. [Customization](#customization)
6. [Contributing](#contributing)
7. [License](#license)

---

## Installation

To use Toast.js, you can include it in your HTML file or import it into your JavaScript file.

### Option 1: Directly in HTML

```html
<script src="https://cdn.jsdelivr.net/gh/silivestir/Toast.js@main/Toast.js"></script>
or
<script src="https://cdn.jsdelivr.net/gh/silivestir/Toast.js@main/Toast.min.js"></script>
```

### Option 2: Importing in JavaScript

If you are using a module system, import it as follows:
```javascript
import Toast from 'https://cdn.jsdelivr.net/gh/silivestir/Toast.js@main/Toast.min.js';
```

## Usage

### Creating a Toast

To create and display a toast notification, you can use the `makeText` static method provided by the Toast class.

```javascript
Toast.makeText("This is a toast message!", 3000, "#ff5733");
```

<<<<<<< HEAD
### Parameters Explained
=======
### With  ROI Enhancement
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
>>>>>>> eee715f (Updated Toast.js with Additional optinal features)

- **message** (string): The message you want to display in the toast.
- **duration** (number, optional): The time (in milliseconds) for which the toast should be visible before it fades out. Default is `3000` (3 seconds).
- **color** (string, optional): The background color of the toast. Default is `#333`.
- **contextId** (string, optional): The ID of the HTML element the toast will be positioned relative to. If not provided, the toast will be centered in the viewport.

<<<<<<< HEAD
=======
## With ROI, Additional parameters

- **position** (string, optional): Includes 'top', 'bottom', 'top-right', 'bottom-left', etc.
- **icon** (emoji or custom string, optional): This depends on the message ie Success, error, laoding..
- **closable** (boolean, optional):  close button.
- **animation** ('fade' or 'slide'): Determines how the toast will leave the.
- **className** (custom CSS class, optional): .

>>>>>>> eee715f (Updated Toast.js with Additional optinal features)
### Example Usage

To create a centered toast:

```javascript
Toast.makeText("Hello, world!", 3000, "#28a745");
```

<<<<<<< HEAD
=======
## With  ROI Enhancement using **promise** for UX feedback

```javascript
Toast.promise(fetchData(), {
  loading: "Loading data…",
  success: "Data loaded successfully!",
  error: "Failed to load data."
});
```

>>>>>>> eee715f (Updated Toast.js with Additional optinal features)
To create a toast positioned below a specific element:

```html
<div id="myElement" style="margin-top: 100px;">This is a context element!</div>

<script>
    Toast.makeText("This toast appears below myElement!", 3000, "#007bff", "myElement");
</script>
```

## Functions and Their Explanations

### Constructor

```javascript
constructor()
```

- **Description:** Initializes a new instance of the Toast class. This creates a `<div>` element for the toast and appends it to the body.
- **Reason to Use:** Instantiate the Toast class to prepare a toast notification element for display.

### configureToastElement

```javascript
configureToastElement()
```

- **Description:** Configures the default styles for the toast element.
- **Styles configured:**
  - **Position:** Set to absolute to allow contextual positioning.
  - **Background color, text color, padding, and border radius:** Set default values for the toast.
  - **Opacity and transition:** Manage visibility and animation effects.
- **Reason to Use:** To establish default styles that can be further customized when displaying the toast.

### show

```javascript
show(message, duration = 3000, color = "#333", contextId)
```

- **Parameters:**
  - **message:** The text to display.
  - **duration:** The time in milliseconds the toast will be displayed (default 3000).
  - **color:** Custom background color for the toast (default `#333`).
  - **contextId:** ID of the element to position the toast relative to.
- **Description:** Displays the toast with the specified message and style, and handles its positioning and fading out.
- **Reason to Use:** Call this method to actually show the toast message to users.

### makeText

```javascript
static makeText(message, duration = 3000, color = "#333", contextId)
```

- **Parameters:** Same as `show` method.
- **Description:** A static method that creates a new toast instance and displays it using the `show` method.
- **Reason to Use:** Provides a quick way to create and show a toast notification without manually instantiating the Toast class.

## Why Use Toast.js?

- **Lightweight & Minimalistic:** Standalone without dependencies, ensuring fast load times.
- **Customizable:** Easily adjustable defaults and styles to fit your application's design.
- **Flexibility:** Position toasts anywhere in relation to the document or center in the viewport.
- **Ease of Use:** Simple API for rapid integration into your project.

## Customization

Toast.js allows you to customize the following aspects:

1. **Styles in `configureToastElement`:** Modify background colors, borders, and text styles directly in the source code.
2. **Visual Positioning:** Change where the toast appears by adjusting the positioning logic in the `show` method.
3. **Animation Effects:** Customize the opacity or transition timings for fading effects.

## Contributing

If you want to contribute to Toast.js or have suggestions on improvement, feel free to reach out via email at [silvestiriassey@gmail.com](mailto:silvestiriassey@gmail.com). Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

This documentation should help you effectively use and customize Toast.js for your projects. If you have further questions, reach out via email or start contributing! Enjoy creating your toast notifications!
<<<<<<< HEAD
=======


>>>>>>> eee715f (Updated Toast.js with Additional optinal features)
