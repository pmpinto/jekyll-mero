class Category {
    constructor() {
        this.toggleClassName = "js-category-toggle"
        this.itemClassName = "navigation__item"
        this.openClassName = "navigation__item--is-open"
        this.isOpen = false
    }

    init() {
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
        const item = event.target.closest(`.${this.itemClassName}`)

        if (item) {
            item.classList.toggle(this.openClassName)
            this.isOpen = !this.isOpen
        }
    }
}

export { Category }
