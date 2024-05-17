function changeStyle() {
    const divs = document.querySelectorAll(".block");

    for (const item of divs) {
        item.classList.toggle("circle")
        console.log(item)
    }
}
