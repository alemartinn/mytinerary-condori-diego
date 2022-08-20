import Carousel from "./Carousel"

function CityCarousel(){
    const items = [
        {city: "Barcelona", img: "https://w0.peakpx.com/wallpaper/360/360/HD-wallpaper-sagrada-familia-basilica-of-the-holy-family-barcelona-catalonia-evening-sunset-cityscape-barcelona-landmark-basilica-de-la-sagrada-familia-roman-catholic-minor-basilica.jpg"},
        {city: "Paris", img: "https://w0.peakpx.com/wallpaper/354/534/HD-wallpaper-sunset-over-paris-landmarks-cityscapes-nature-sunsets.jpg"},
        {city: "London", img: "https://w0.peakpx.com/wallpaper/977/956/HD-wallpaper-palace-of-westminster-london-houses-of-parliament-river-thames-westminster-bridge-westminster-abbey-evening-sunset-england.jpg"},
        {city: "Marrakech", img: "https://wallpaperaccess.com/full/2172000.jpg"},
        {city: "Giza", img: "https://www.wallpaperflare.com/great-pyramid-of-giza-egypt-wallpaper-129576"},
        {city: "Italy", img: "https://www.tripeuropa.eu/"},
        {city: "Greece", img: "https://www.greca.co/es/list/paquetes"},
        {city: "Tokyo", img: "https://p4.wallpaperbetter.com/wallpaper/221/460/921/japan-tokyo-tower-cityscape-tokyo-wallpaper-preview.jpg"},
        {city: "Qatar ", img: "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.jpg"},
        {city: "Dubai ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6uYSB9uqJHpDInRBkTmUNkk711pVatWZpyklD9Z3Hd74tje1CRuZYLHR7n1-0ova-xs&usqp=CAU"},
        {city: "Rome", img: "http://academytravel5.com/itinerarios/italia/"},
        {city: "Monaco", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnkQQkCNqZhtNhIdfVKcKemT9AXmSvhDy-t8Sqz1LttMooOOplhKZGsyF6CLyRjMwpAI&usqp=CAU"}
    ]

    return(
        <Carousel dta={items} />

    )
}

export default CityCarousel