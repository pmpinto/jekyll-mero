import { Category } from "./Category.es6.js"
import { Headings } from "./Headings.es6.js"
import { Images } from "./Images.es6.js"

class App {
    init() {
        // Category popup in menu
        const category = new Category()
        category.init()

        // Headings in posts/pages
        const headings = new Headings()
        headings.init()

        // Images in posts
        const images = new Images()
        images.init()
    }
}

export { App }
