import { Category } from "./Category.es6"
import { Headings } from "./Headings.es6"
import { Images } from "./Images.es6"
import { PhotoSlider } from "./PhotoSlider.es6"

class App {
    init() {
        // Remove preload class from body so transitions may work after page loads
        this.letTransitionsRoll()

        // Category popup in menu
        const category = new Category()
        category.init()

        // Headings in posts/pages
        const headings = new Headings()
        headings.init()

        // Images in posts
        const images = new Images()
        images.init()

        // Image sliders in posts
        const photoSlider = new PhotoSlider()
        photoSlider.init()
    }

    letTransitionsRoll() {
        const body = document.querySelector("body")

        body.classList.remove("preload")
    }
}

export { App }
