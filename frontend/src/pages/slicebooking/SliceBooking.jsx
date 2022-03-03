import { Footer, BookingContent} from '../../containers'
import { Navbar} from '../../components'


const SliceBooking = () => {
  
    return  (
      <div className="home">
        <div className="gradient__bg"> 
        <div className="slice__booking">
        <Navbar />
        <BookingContent />
        </div>
    <div> 
        <Footer/>
    </div>
    </div>
    </div>
    )
    
   
  }
  
  export default SliceBooking;
  