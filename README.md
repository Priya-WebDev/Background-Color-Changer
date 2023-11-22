# Background Color Change App [visit my site](https://priyaganga-background-color-changer.netlify.app/)
This React app allows users to change the background color by clicking on different color buttons. The useState hook is used to manage the color state. Here's a breakdown of the functionality:

State Management: Utilizes the useState hook to manage the color state, which determines the background color of the app.

Color Selection: Displays several buttons, each representing a color option (red, blue, green, yellow, maroon). Clicking any of these buttons changes the background color of the app.

Dynamic Styling: The style attribute in the div element dynamically changes the background color based on the color state.

User Interaction: When a user clicks on a color button, the onClick event triggers a function that updates the color state to the chosen color, thereby changing the background color of the app.

Overall, this simple app provides an interactive way for users to change the background color of the interface by selecting different color options.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
