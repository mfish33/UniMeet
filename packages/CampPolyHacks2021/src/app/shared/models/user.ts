export default interface User {
    userId:string
    email:string
    bio:string
    personalInterests:[string],
    otherInterests:{
        [key:string]:number
    }
    pastUsersMet:[string]
    currentMeetings:[string]
}