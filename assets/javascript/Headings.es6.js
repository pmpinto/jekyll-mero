class Headings {
    constructor() {
        this.headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")

        this.addLinks()
    }

    addLinks() {
        this.headings.forEach(heading => {
            const id = heading.getAttribute("id")
            const content = heading.innerHTML

            heading.innerHTML = `<a href="#${id}">${content}</a>`
        })
    }
}

export { Headings }
