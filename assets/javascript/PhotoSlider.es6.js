class PhotoSlider {
    constructor() {
        this.urlRegex = /^(https?:\/\/)([\w\-\.]+)([\w\/?=%\.\-&]+)(\/.+)$/g
        this.sliders = document.querySelectorAll(".post__content p.photo-slider")
    }

    init() {
        this.sliders.forEach(slider => this.buildSlider(slider))
    }

    buildSlider(slider) {
        const photoGroup = slider.innerText.split(/\s/)
        const photoUrls = photoGroup.filter(url => url.match(this.urlRegex))

        const sliderMarkup = `
            <div class="photo-slider">
                <div class="photo-slider__slider">
                ${photoUrls
                    .map(
                        (url, index) => `
                    <img src=${url} alt="photo-${index + 1}" data-index=${index +
                            1} class="photo-slider__photo">
                `
                    )
                    .join("")}
                </div>
                <ol class="photo-slider__nav">
                ${photoUrls
                    .map(
                        (url, index) => `
                    <li class="photo-slider__nav-item">
                        <a data-index=${index + 1} class="photo-slider__link"></a>
                    </li>
                `
                    )
                    .join("")}
                </ol>
            </div>
        `

        slider.insertAdjacentHTML("afterend", sliderMarkup)
        this.setUpEvents(slider.nextElementSibling)
        slider.remove()
    }

    setUpEvents(slider) {
        slider.addEventListener("click", event => {
            if (event.target.hasAttribute("data-index")) {
                event.preventDefault()
                const targetPhotoIndex = event.target.getAttribute("data-index")
                const photo = event.target
                    .closest(".photo-slider")
                    .querySelector(`.photo-slider__photo[data-index="${targetPhotoIndex}"]`)

                photo.parentElement.scrollLeft = photo.offsetLeft
            }
        })
    }
}

export { PhotoSlider }
