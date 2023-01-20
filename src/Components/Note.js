import {MdDeleteForever} from 'react-icons/md';

const Note =()=>{
    return (
        <div className='note'>
            <span>First Note</span>
            <div className='note-footer'>
                <small>13/01/2022</small>
                <MdDeleteForever className='delete-icon'></MdDeleteForever>
            </div>
        </div>
    )
}

export default Note;