import React from 'react';
import './slicestory.css'
import { Navbar} from '../../components'
import { Footer} from '../../containers'
import { StoryContent } from '../../containers';




const SliceStory = () => {
 
  return  (
    <div className="slice__story">
       <div  className="gradient__bg"> 
        <Navbar/>
        <StoryContent />
        <Footer />
    </div>
</div>

  
  )
  
 
}

export default SliceStory;
