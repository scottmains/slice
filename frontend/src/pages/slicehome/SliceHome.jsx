import { Footer, HeaderContent, GalleryContent, OrderContent, IntroContent} from '../../containers'
import { Navbar} from '../../components'


const SliceHome = () => {
  
    return  (
      <div className="home">
        <div className="gradient__bg"> 
        <div>
        <Navbar />
        <HeaderContent />
        </div>
    <div> 
         <IntroContent />
         <GalleryContent/>
         <OrderContent />
         <Footer />
    </div>
    </div>
    </div>
    )
    
   
  }
  
  export default SliceHome;
  