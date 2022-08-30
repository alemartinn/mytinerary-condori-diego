import Carousel from "./Carousel"


let cities = [
    {city: "Barcelona", _id: "c1", img: "https://w0.peakpx.com/wallpaper/360/360/HD-wallpaper-sagrada-familia-basilica-of-the-holy-family-barcelona-catalonia-evening-sunset-cityscape-barcelona-landmark-basilica-de-la-sagrada-familia-roman-catholic-minor-basilica.jpg"},
    {city: "Paris", _id: "c2", img: "https://w0.peakpx.com/wallpaper/354/534/HD-wallpaper-sunset-over-paris-landmarks-cityscapes-nature-sunsets.jpg"},
    {city: "London", _id: "c3",img: "https://w0.peakpx.com/wallpaper/977/956/HD-wallpaper-palace-of-westminster-london-houses-of-parliament-river-thames-westminster-bridge-westminster-abbey-evening-sunset-england.jpg"},
    {city: "Marrakech", _id: "c4",img: "https://wallpaperaccess.com/full/2172000.jpg"},
    {city: "Giza", _id: "c5",img: "https://www.wallpaperflare.com/static/214/673/146/egypt-pyramid-filter-pyramids-of-giza-wallpaper.jpg"},
    {city: "Siena", _id: "c6",img: "http://academytravel5.com/wp-content/uploads/2019/03/siena.jpg"},
    {city: "Greece", _id: "c7",img: "https://fondosmil.com/fondo/62184.jpg"},
    {city: "Tokyo", _id: "c8",img: "https://p4.wallpaperbetter.com/wallpaper/221/460/921/japan-tokyo-tower-cityscape-tokyo-wallpaper-preview.jpg"},
    {city: "Qatar", _id: "c9",img: "https://c.regencyholidays.com/blog/blog/content/images/2021/08/Places-To-Visit-In-Qatar.jpg"},
    {city: "Dubai", _id: "c10",img: "https://wallpapersmug.com/download/3840x2400/f4068f/cityscape-aerial-view-burj-al-arab.jpg"},
    {city: "Rome", _id: "c11",img: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/02/coliseo-nubes.jpg"},
    {city: "Monaco", _id: "c12",img: "https://www.wallpapertip.com/wmimgs/39-392506_sunset-monaco-hd.jpg"}
]

function CityCarousel(){

    return(
        <Carousel data={cities} range={4} text='Popular MYtineraries' slides={3} interval={5}/>
    )
}

export {CityCarousel, cities}