# Scientific Calculator Application

This Scientific Calculator application is a fully functional calculator designed for advanced mathematical operations. Built with HTML, CSS, and JavaScript, it includes features for trigonometric calculations, logarithms, factorials, memory functions, and more, all wrapped in a responsive Bootstrap-powered interface.
![scientific calculator](assets/images/screenshot/screenshot.png)

## Features

- **Arithmetic Operations**: Addition, subtraction, multiplication, division, and percentage calculations.
- **Trigonometric Functions**: sin, cos, tan (calculates in degrees or radians).
- **Logarithmic Functions**: ln (natural logarithm) and log (base-10 logarithm).
- **Exponential and Power Operations**: Includes exponentiation (x^y) and square roots.
- **Constants**: Includes π and Euler's constant e.
- **Factorial Calculation**: Computes factorial for non-negative integers.
- **Random Number Generator**: Generates a random number between 0 and 1.# Scientific Calculator Application

## Contents

- [Scientific Calculator Application](#scientific-calculator-application)
- [Contents](#contents)
- [User Experience (UX)](#user-experience-ux)
  - [Initial Discussion](#initial-discussion)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)
  - [Features](#features)
  - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)
- [Testing](#testing)
  - [W3C Validator](#w3c-validator)
  - [JSHint](#jshint)
  - [Solved Bugs](#solved-bugs)
  - [Known Bugs](#known-bugs)
  - [Testing User Stories](#testing-user-stories)
  - [Lighthouse](#lighthouse)
  - [Thank You Page](#thank-you-page)
  - [Full Testing](#full-testing)
- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### Initial Discussion
This section outlines the purpose of the scientific calculator, its target audience, and the primary goals of its functionality. It includes discussions on user needs and the problem-solving approach.

### User Stories
- **As a student**, I want a calculator capable of performing trigonometric and logarithmic functions to help with my assignments.
- **As an engineer**, I need a tool to handle precise calculations for my projects.
- **As a general user**, I require a simple interface to perform basic and advanced calculations easily.

## Design

### Colour Scheme
The interface features a professional colour palette:
- **Primary Colours**: Navy blue for borders and buttons.
- **Secondary Colours**: Light grey for the background.
- **Accent Colours**: Green for "Calculate" actions and red for "Reset."

### Typography
Fonts are chosen for clarity and readability:
- **Primary Font**: Arial for numerical input and results.
- **Secondary Font**: Roboto for labels and informational text.

### Imagery
Minimal imagery ensures a clean design. Icons are used for buttons to visually represent their functions.

### Wireframes
Wireframes depict responsive layouts for desktop, tablet, and mobile, ensuring an optimal user experience across devices.

### Features
- Basic Arithmetic Operations: Addition, subtraction, multiplication, and division.
- Advanced Calculations: Trigonometric, logarithmic, and exponential functions.
- Memory Functions: Store, recall, and clear memory values.
- Error Handling: Provides clear feedback for invalid input.

### Accessibility
Designed to be inclusive:
- Fully keyboard-navigable interface.
- Screen reader support for visually impaired users.
- High contrast mode for better visibility.

## Technologies Used

### Languages Used
- HTML5
- CSS3
- JavaScript

### Frameworks, Libraries & Programs Used
- **Bootstrap**: For responsive design.
- **Font Awesome**: For intuitive button icons.
- **Jest**: For JavaScript testing.

## Deployment & Local Development

### Deployment
The application is live on GitHub Pages. [View live site here](#).

### Local Development

#### How to Fork
1. Navigate to the GitHub repository.
2. Click the "Fork" button at the top-right corner.

#### How to Clone
1. Copy the repository URL.
2. Open your terminal and run:
   ```bash
   git clone <repository-url>
   ```
3. Navigate to the project folder and open it in your preferred IDE.

## Testing

### W3C Validator
- Validated HTML and CSS files to ensure standards compliance.

### JSHint
- Checked JavaScript code for errors and best practices.

### Solved Bugs
- Resolved an issue where trigonometric functions returned incorrect results for angles in degrees.
- Fixed display issues for large numbers on mobile devices.

### Known Bugs
- Occasional lag when handling extremely large calculations.

### Testing User Stories
- Verified all functionalities meet the requirements outlined in user stories.

### Lighthouse
- Ran Lighthouse tests to evaluate performance, accessibility, and best practices.

### Thank You Page
- Tested the user-friendly thank-you message after completing operations.

### Full Testing
- Comprehensive testing across browsers and devices to ensure functionality and responsiveness.

## Credits

### Code Used
- **Math.js**: Utilized for complex mathematical operations.

### Content
- Original content created for tooltips and instructions.

### Media
- Icons sourced from Font Awesome.

### Acknowledgments
Special thanks to online tutorials, GitHub contributors, and open-source communities for guidance and resources.

- **Memory Functions**:
  - M+: Add to memory.
  - M-: Subtract from memory.
  - MR: Recall memory value.
  - MC: Clear memory.
- **Angle Mode Selection**: Toggle between degrees and radians.
- **Input Flexibility**:
  - Button clicks.
  - Keyboard input for numbers, operators, and functions.
- **Error Handling**: Displays appropriate error messages for invalid inputs or operations.

## Demo

The application includes a visually appealing interface, optimized for both desktop and mobile devices.

## File Structure

- **HTML**: Main structure of the application.
- **CSS**: Custom styles to enhance the default Bootstrap design.
- **JavaScript**: Core functionality for calculator operations and user interactions.

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/scientific-calculator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd scientific-calculator
    ```

3. Open the `index.html` file in your browser to use the calculator.

## Key Functionalities in JavaScript

### Angle Mode

- Toggle between degrees and radians using the radio buttons.
- Automatic conversion for trigonometric functions based on the selected mode.

### Memory Functions

- **Add to Memory (M+)**: Adds the displayed value to memory.
- **Subtract from Memory (M-)**: Subtracts the displayed value from memory.
- **Recall Memory (MR)**: Displays the stored memory value.
- **Clear Memory (MC)**: Clears the memory.

### Error Handling

- Displays errors for invalid operations like square roots of negative numbers or factorials of non-integers.

### Keyboard Shortcuts

- **Numbers and Operators**: Use keyboard keys for input.
- **Enter**: Compute the result.
- **Backspace**: Delete the last character.
- **Escape**: Clear the input.

## Dependencies

- **Bootstrap v5.3.3**: For responsive design and styling.
- **JavaScript**: Vanilla JavaScript for functionality.

## Screenshot

(Add a screenshot of the calculator interface here.)

## Future Improvements

- Add support for complex numbers.
- Enable history tracking for operations.
- Implement graphing functionality for equations.

## License

This project is licensed under the YMT License. Feel free to use, modify, and distribute this code as per the license.
