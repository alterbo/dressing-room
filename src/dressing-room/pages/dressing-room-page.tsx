import { Male } from '../characters/female';
import { Female } from '../characters/male';

const DressingRoomPage = () => {
    return (
        <div className='flex'>
            <Female />
            <Male />
        </div>
    );
};

export default DressingRoomPage;