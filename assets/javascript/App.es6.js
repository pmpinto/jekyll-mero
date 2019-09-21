import { Category } from "./Category.es6.js"
// import { Theme } from "./Theme.es6.js"
import { Headings } from "./Headings.es6.js"
import { Images } from "./Images.es6.js"

class App {
    init() {
        // Category popup in menu
        const category = new Category()
        category.init()

        // Theme switcher in menu
        // const theme = new Theme()

        // Headings in posts/pages
        const headings = new Headings()
        headings.init()

        // Images in posts
        const images = new Images()
        images.init()
    }
}

export { App }
