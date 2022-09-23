import FormNewItinerary from "../components/FormNewItinerary";

const NewItinerary = () => {
    let client = localStorage.getItem("client")
    let userLocal = JSON.parse(client)

    return (
        <div>
            <FormNewItinerary/>
        </div>
    )
}

export default NewItinerary