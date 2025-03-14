import { people, peopleShape } from "../../../db/people"
import People from "./People"

const PeopleCard = () => {
  return (
    <div 
      className="w-[300px] p-2 shadow rounded"
    >
      <h4 
        className="font-bold text-xl mb-3"
      >
        People to Follow
      </h4>

      {
        people.map((p:peopleShape, index:number) : any => (
          <People
            key={index} 
            data={p} 
          />
        ))  
      }
      
    </div>
  )
}

export default PeopleCard