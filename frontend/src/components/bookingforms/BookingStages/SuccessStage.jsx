import { GrGroup} from 'react-icons/gr'; 
import { AiOutlineCalendar, AiOutlineClockCircle  } from 'react-icons/ai'; 
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';

const SuccessStage = (success, partySize, timeSlot, dateShow) => {


    return (


        <div className="card-body mx-auto text-center" style= {{ display: success ? "block" : "none"  }}>

        <H4> SUCCESS! </H4>
        <LeadText> You have booked a slot at our restaurant for:  </LeadText>
       
        <div className="text-center flex pt-5 ">
              <div className="flex-col mx-auto">
              <Paragraph color="blueGray">
                <div><GrGroup className="mx-auto inline-block text-2xl"/> </div> 
                 <div>{partySize} </div>
                </Paragraph>
              </div>
              <div className="flex-col mx-auto">
              <Paragraph color="black">
            <div><AiOutlineCalendar className="mx-auto inline-block text-3xl"/></div>
            {dateShow}  
             </Paragraph>
              </div>
              <div className="flex-col mx-auto">
             <Paragraph color="black"> 
              <div> 
                 <AiOutlineClockCircle className="mx-auto inline-block text-3xl"/> 
             </div>
             <div>
             {timeSlot} 
             </div>
             </Paragraph>
              </div>
           </div>
           <LeadText> If you would like to cancel, please give us a message on our Instagram. </LeadText>
       
       </div>


    )

}

export default SuccessStage