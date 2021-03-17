import { UserID } from "./User"
import { MeetingID } from "./Meeting"

export type FeedbackID = string;
export default interface Feedback {
    documentID:string;           //document name
    users:UserID[];              //users in the meeting
    meetingID:MeetingID;         //meeting
    otherUserShow:boolean;       //if the other user attended the meeting
    meetingWentWell:number;      //rating out of 5 if it went well?
    block:boolean;               //blocked user
    feedback:string;             //any feedback on the meeting / UniMeet
    
    questions:{                  //question string, answer string
        [question : string] : string;       
    }                            //Hashmap<string,string> type
}
