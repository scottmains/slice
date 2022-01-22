import { Footer, Header, SliceGallery, SliceOrder, SliceIntro} from '../../containers'
import { Navbar} from '../../components'


const SliceHome = () => {
  
    return  (
      <div className="home">
        <div className="header__bg"> 
        <Navbar />
        <Header />
        </div>

    <div  className="gradient__bg"> 
         <SliceIntro />
         <SliceGallery/>
         <SliceOrder />
         <Footer />
    </div>
    </div>
    )
    
   
  }
  
  export default SliceHome;
  