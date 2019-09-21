class Images {
    constructor() {
        this.standaloneImages = document.querySelectorAll(".post__content p > img")
    }

    init() {
        this.wrapImages()
    }

    wrapImages() {
        this.standaloneImages.forEach(image => {
            const imageHTML = image.outerHTML
            const caption = image.getAttribute("alt")

            image.outerHTML = `<figure>${imageHTML}<figcaption>${caption}</figcaption></figure>`
        })
    }
}

export { Images }
