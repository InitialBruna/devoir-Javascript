function Darkmode() {
    console.log("élement cliqué 2")
    let Title = document.getElementById("title")
    let MainBody = document.getElementById("MainBody")
    let Images = document.getElementById("images")
    let Footer = document.getElementById("Footer")

    Title.classList.toggle('DarkGrostitre')
    MainBody.classList.toggle('Darkmain')
    Images.classList.toggle('Darkimages')
    Footer.classList.toggle('DarkcontacterNous')
}