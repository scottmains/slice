import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';

const PartySizeStage = (setPartySize, setStageOne, setStageTwo, stageOne) => {


    return (

<div className="card md:w-1/3 bg-gray-100 shadow-xl mx-auto" >
    <div className="card-body" >
       <H4 className="card-title">Party Size</H4>
       <LeadText> Please select how many people will be attending: </LeadText>
       <div className="flex justify-center flex-col mx-auto">
          <div className="mb-3 xl:w-96 mx-auto">
             <select className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={e =>
                {
                setPartySize(e.target.value);
                }}>
                 <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
             </select>
          </div>
          <div className="card-actions justify-end ">
             <button onClick={() => [setStageTwo(true), setStageOne(false)]} className="group relative w-1/3 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm 
             font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">Continue</button>
          </div>
       </div>
    </div>
</div>


    )

}

export default PartySizeStage