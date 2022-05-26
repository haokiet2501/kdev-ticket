import { useSelector } from 'react-redux'

const NoteItem = ({ note }) => {
    const {user} = useSelector((state) => state.auth)

    return (
        <div className='note' style={{
            backgroundColor: note.isStaff ? 'rgba(0, 0, 0, 0.7)' : '#fff',
            color: note.isStaff ? '#fff' : '#000',
        }}>
            <h4>
                Phản hồi từ 
                {note.isStaff ? <span>Nhân viên</span> : <span>{user.name}</span>}
            </h4>
            <p></p>
        </div>
    )
}

export default NoteItem
