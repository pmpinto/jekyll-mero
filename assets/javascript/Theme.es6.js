class Theme {
    constructor() {
        this.toggleClassName = "js-theme-toggle"

        this.addEvents()
    }

    addEvents() {
        const toggleEl = document.querySelector(`.${this.toggleClassName}`)

        if (toggleEl) {
            toggleEl.addEventListener("click", event => {
                this.handleToggles(event)
            })
        }
    }

    handleToggles(event) {
        console.log("yep, works")
    }
}

export { Theme }
