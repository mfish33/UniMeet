import { FeedbackID } from "./Feedback";
import { UserID } from "./User"

export type MeetingID = string;


export default interface Meeting {
    documentID:MeetingID;          //document name
    users:UserID[];                //IDs of both users at meeting
    matchScore:number;             //match score between users
    matchCreation:{                //forget exactly?
        [weight : string] : number;
    };                             //Hashmap<string,number>
    sharedInterests:string[];      //shared interests between meeting users
    meetingDuration:number;        //length of the meeting
    meetingTime:Date;              //time meeting was conducted
    timeStamp:Date;                //when meeting was created?
    happened:boolean;              //if the meeting happened
    feedback:{                     //user == UserID;
        [user : string] : FeedbackID;   
    };                             //Hashmap<User,Feedback>
}