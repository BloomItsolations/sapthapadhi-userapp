import React from 'react'
import UserProfileCarousel from './UserProfileCarousel';

const AllProfile = () => {
    const profiles = [
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'John Doe',
            age: 25,
            city: 'New York',
            cast: 'Christianity',
            image: 'images/Rectangle 369.jpg',
        },
        {
            name: 'Jane Smith',
            age: 30,
            city: 'Los Angeles',
            cast: 'Hinduism',
            image: 'images/Rectangle 369.jpg',
        },
    ];
    return (
        <div className=''>
            <UserProfileCarousel profiles={profiles} />
        </div>
    )
}

export default AllProfile




