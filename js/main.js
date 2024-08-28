let shareImage = document.querySelector(".share_image")
console.log(shareImage)

let shareBox = document.querySelector(".share_box")
console.log(shareBox)


shareImage.addEventListener("mousemove", (eo) => {
  shareBox.style.display = "flex"
})

shareImage.addEventListener("mouseout", (eo) => {
  shareBox.style.display = "none"
})