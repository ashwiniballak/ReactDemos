     import { books } from "../Data/Book"
import Book from "./Book"

    
const MapDemo=()=>{     
return(
    books.map((book,id)=>{
        return(
        <Book {...book} index={id}/>
        )
      })
)     

      
    }




export default MapDemo;