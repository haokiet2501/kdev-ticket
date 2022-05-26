import { useSelector } from 'react-redux'

const NoteItem = ({ note }) => {
    const {user} = useSelector((state) => state.auth)

    return (
        <div className='note' style={{
            backgroundColor: note.isStaff ? 'rgba(0, 0, 0, 0.7)'
        }}>
        
        </div>
    )
}

export default NoteItem
