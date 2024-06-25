import React from 'react'
import UserProfileCarousel from './UserProfileCarousel';

const AllProfile = () => {
    const profiles = [
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Profilepic.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Profilepic.jpg',
        },
    ];
    return (
        <div className=''>
            <UserProfileCarousel profiles={profiles} />
        </div>
    )
}

export default AllProfile




