import { ProfileBoxPropsType } from "../../types/types";

export const ProfileBox = ({img, userName}:ProfileBoxPropsType) => {
    return ( 
        <div className="flex items-center">
            <div className="text-white text-sm font-bold tracking-wider mr-4">{userName}</div>
            <div className="h-10 w-10 rounded-full border-primary border-2">
                <img className="h-full w-full p-1 rounded-full" src={img}/>
            </div>
        </div>
     );
}