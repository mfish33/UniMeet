import { User } from "..";

export default class UserManager {

    constructor(
        private users:User[]
    ) {}

    getAllNames():string[] {
        return this.users.map(user => user.name)
    }
}