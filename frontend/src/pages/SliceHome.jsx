import { Footer, HeaderContent, GalleryContent, OrderContent, IntroContent, ContactContent} from '../containers'
import { Navbar} from '../components'

const SliceHome = () => {
    return  (
        <div > 
        <div className="bg-slate-200">
          <div className="bg-white">
       
        </div>
        <Navbar/>
        <HeaderContent />
        <IntroContent/>
         <OrderContent />
         <ContactContent/>
        <Footer/>
       
    </div>
    </div>
    )
    
   
  }
  
  export default SliceHome;
  