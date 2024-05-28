# Movie Search Application

A simple web application to search for movies , series using the OMDb API. The application fetches movie details such as title, description, cast, and poster image, and updates the UI accordingly. The background image of the page dynamically changes to the movie poster provided by the API.

## Features

- Search for movies by name
- Display movie details including title, description, and cast
- Show movie poster image
- Dynamically update background image to the movie poster
- Responsive design with media queries for different viewport heights

## Demo

![Movie Search Application Screenshot](./Assets/screenshot.png)

## Getting Started

### Prerequisites

To run this project, you will need:

- A web browser
- Internet connection

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/moviesearchapp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd moviesearchapp
    ```

3. Open the `index.html` file in your web browser:

    ```bash
    open index.html
    ```

## Usage

1. Enter a movie name in the search bar.
2. Click the "Search" button.
3. The application will fetch and display the movie details including the title, description, cast, and poster image. The background image will also change to the movie poster.

## Media Queries

The application includes media queries to handle different viewport heights:

```css
@media (min-height: 600px) {
    body {
        background-color: lightblue;
    }
    #imageContainer {
        height: 80vh;
    }
}

@media (max-height: 400px) {
    body {
        background-color: lightcoral;
    }
    #imageContainer {
        height: 50vh;
    }
}
