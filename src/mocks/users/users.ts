import { User } from '../../models/user/user.interface'

const userList: User[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'assets/image/avatar.png',
        email: 'john@doe.com'
    },
    {
        firstName: 'Alex',
        lastName: 'Rapley',
        avatar: 'assets/image/avatar.png',
        email: 'alex@rapley.com'
    },
    {
        firstName: 'Chris',
        lastName: 'Bear',
        avatar: 'assets/image/avatar.png',
        email: 'chris@bear.com'
    },
    {
        firstName: 'Justin',
        lastName: 'Davidsson',
        avatar: 'assets/image/avatar.png',
        email: 'justing@davidsson.com'
    },
    {
        firstName: 'Sam',
        lastName: 'Loyd',
        avatar: 'assets/image/avatar.png',
        email: 'sam@loyd.com'
    }
]

export const USER_LIST = userList