//import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormNewItinerary from "../components/FormNewItinerary";

const NewItinerary = () => {
    const {id} = useParams()
    return (
        <div>
            <FormNewItinerary idCity={id}/>
        </div>
    )
}

export default NewItinerary