import bcrypt from 'bcryptjs';

const data = {

    users:[
        {
         name: 'Saymon',
         email: 'sk@yahoo.com',
         password: bcrypt.hashSync('2025'),
         isAdmin:true,
    },

    {
        name: 'Saymon Ali',
        email: 'saymon2025@gmail.com',
        password: bcrypt.hashSync('2025'),
        isAdmin:false,
    },
  ],

    courses: [
        {
            name: 'Course name',
            slug: 'course-name',
            category: 'javascript',
            image: '/images/course1.jpg',
            price: 70,
            instractor: 'Mofiz',
            rating: 4.5,
            numReviews: 10,
            description: 'A test description',
        },
        {
            name: 'Course name 2',
            slug: 'course-name-2',
            category: 'youtube',
            image: '/images/course2.jpg',
            price: 9.99,
            instractor: 'Sayem',
            rating: 4.0,
            numReviews: 10,
            description: 'A test description',
        },
        {
            name: 'Course name 3',
            slug: 'course-name-3',
            category: 'typescript',
            image: '/images/course3.jpg',
            price: 90.0,
            instractor: 'Sajid',
            rating: 3.0,
            numReviews: 10,
            description: 'A test description',
        },
        {
            name: 'Course name 4',
            slug: 'course-name-4',
            category: 'nextjs',
            image: '/images/course4.jpg',
            price: 70,
            instractor: 'Traversy',
            rating: 4.9,
            numReviews: 10,
            description: 'A test description',
        },
        {
            name: 'Course name 5',
            slug: 'course-name-5',
            category: 'mearn',
            image: '/images/course5.jpg',
            price: 70,
            instractor: 'Academind',
            rating: 4.3,
            numReviews: 10,
            description: 'A test description',
        },
    ]
};
 export default data;