import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';


const Stories = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        setStories([...Array(30)].map((profile) => ({
            userId: faker.datatype.uuid(),
            userName: faker.internet.userName(),
            avatar: faker.image.avatar(),

        })))
    }, []);



  return (
    <div>
        <div className='flex space-x-4 bg-white border overflow-x-scroll mx-1 rounded-lg scrollbar-thin scrollbar-thumb-gray-300 p-5'>
            {stories.map((profile) => (
                <Story userName={profile.userName} avatar={profile.avatar} key={profile.userId}/>
            ))}
        </div>
    </div>
  )
}

export default Stories
