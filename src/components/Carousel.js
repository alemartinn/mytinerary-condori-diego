
function Carousel(props) {
    const range = 4
    const start = 0
    const end = start + range
    const items = props.data

    const itemView = item =>(
        <div className='item'>
            <h3>{item.city}</h3>
            <img src={item.img}/>
        </div>
    )
  return (
    <div>
        <div className='Slide'>
            {items.slice(start, end).map(itemView)}
        </div>
    
    </div>
  )
}
export default Carousel