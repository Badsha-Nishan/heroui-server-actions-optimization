import { Button } from '@heroui/react';

const HeroPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2>Hero Page</h2>
            <Button>Hero Button</Button>
            <Button className="ml-2 mr-2" variant='secondary'>Hero Button</Button>
            <Button variant='danger'>Hero Button</Button>
        </div>
    );
};

export default HeroPage;