# Thousands Boxes

<br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/bbf8410d-3760-47e5-ae93-9cce0b16e504" alt="Thousands Boxes" width="600" />
</p>
<br>

Thousands Boxes is a playful interactive grid that simulates fluid ripples and trails as you hover or click each square. The project is built with vanilla HTML, CSS, and JavaScript, making it easy to explore, remix, or embed inside other experiences.

## Features
- Responsive grid that adapts to the viewport while keeping the layout dense and lightweight.
- Hover trails and click ripples that propagate across neighbouring squares for a water-like feel.
- Animated tiles with subtle floating motion for a lively background.
- Social links with Buy Me a Coffee support and Font Awesome icons.
- Color palette aligned with the project logo and exposed via CSS custom properties for quick theming.

## Getting Started
1. Clone or download this repository.
2. Open `index.html` directly in your favourite browser. No build step or server is required.

If you prefer running a local server (useful for experimenting with modules or future enhancements), you can use Python:

```bash
python -m http.server
```

Then visit `http://localhost:8000` in your browser.

## Project Structure
```
project-root/
|-- assets/                  # Project logo
|-- index.html               # Landing page
|-- styles.css               # Styling, palette, responsiveness
`-- script.js                # Grid generation and interaction logic
```

## Customisation Tips

- Update the palette in `styles.css` under the `:root` selector to retheme the experience.
- Tweak `squareSize`, row count, or animation timing in `script.js` to change density and motion.
- Replace the logo image in `assets/` or adjust the header markup in `index.html` to personalise branding.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements
- Icons provided by [Font Awesome](https://fontawesome.com/).
- Inspired by generative art and water ripple simulations.

Enjoy experimenting with Thousands Boxes! If you create something cool with it, feel free to share.
