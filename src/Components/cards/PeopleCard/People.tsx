import { FC, useState } from "react";
import { peopleShape } from "../db/people";
import { BiUserCircle } from "react-icons/bi";

const People : FC<{data: peopleShape}> = ({data}) => {

    const [following, setFollowing] = useState<boolean>(false);
    return (
        <div 
            className="flex justify-between mb-2 items-center"
        >
            <div 
                className="flex gap-1 items-center"
            >
                <BiUserCircle size={20}/>
                <span>
                    {data.name}
                </span>
            </div>
            <button 
                className="bg-black text-white px-2 py-1 rounded-4xl text-sm cursor-pointer"
                onClick={() => setFollowing(!following)}
            >
                {following ? "Following" : "Follow"}
            </button>
        </div>
    )
}

export default People;