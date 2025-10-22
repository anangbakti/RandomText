# RandomText Class Randomizer

[Live Demo](https://anangbakti.github.io/RandomText/RandomText/Bridge/www/demo.html)

## Description
RandomText is a simple web-based application that allows users to randomize and group class names (kelas) for educational or organizational purposes. It generates a predefined list of classes (X.1 to X.11, XI.1 to XI.12, XII.1 to XII.4, and XII.6 to XII.11) and provides options to shuffle them or pair them into two groups.

## Features
- **Dynamic Class List**: Edit the list of classes in a textarea for customization.
- **Randomize Kelas**: Shuffles the order of all classes and displays them numbered.
- **Randomize 2 Group Kelas**: Pairs classes into groups of two (requires an even number of classes; alerts if odd).
- **Responsive UI**: Centered layout with textarea and buttons for easy use on various screen sizes.

## Usage
1. Open `randomText.js` in a web browser (or integrate into an HTML page).
2. The textarea is pre-filled with the default class list.
3. Edit the textarea if needed (comma-separated values).
4. Click "Randomize Kelas" to shuffle and list all classes.
5. Click "Randomize 2 Group Kelas" to create pairs (e.g., "1. X.1 VS X.2").
6. Results appear below the buttons.

## Installation
No installation required. Simply load `randomText.js` in an HTML document:
```html
<!DOCTYPE html>
<html>
<head>
    <title>RandomText</title>
</head>
<body>
    <script src="output/randomText.js"></script>
</body>
</html>
```

## Technologies
- **Bridge.NET**: Used to transpile C# code to JavaScript.
- **JavaScript**: Core functionality for DOM manipulation and randomization.
- **CSS**: Inline styles for responsive design.

## Contributing
Feel free to fork and submit pull requests for improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
