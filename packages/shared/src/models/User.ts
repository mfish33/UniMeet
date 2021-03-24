import { MeetingID } from "./Meeting";

export type UserID = string;
export default interface User {
    documentID:UserID;            //document name
    name:string;                  //name       
    email:string;                 //email
    profilePicture:string;        //URL of user's profile pic
    major:string;                 //major
    bio:string;                   //bio
    timeStamp:Date;               //when the user made their account
    interests:string[];           //user's interests from the preset list
    reportedUsers:User[];         //list of users they have reported
    numberOfReports:{             //Hashmap<Date,UserID> type
        [reportDate:number] : UserID;
    }; 
    numberOfNoShows:number;       //how many times the user has not gone to a meeting
    numberOfMeetings:number;      //number of meetings attended
    currentMatches:MeetingID[];   //current matches/meetings for the week
    pastMatches:MeetingID[];      //past matches/meetings
}