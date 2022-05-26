import { useSelector } from 'react-redux'

const NoteItem = ({ note }) => {
    const {user} = useSelector((state) => state.auth)

    return (
        <div className='note-item' style={{
            backgroundColor: note.isStaff ? 'rgba(0, 0, 0, 0.7)' : '#fff#f8f9fa',
            color: note.isStaff ? '#fff' : '#000',
        }}>
            <h4>
                Phản hồi từ 
                {note.isStaff ? <span>Nhân viên</span> : <span> {user.name}</span>}
            </h4>
            <p>{note.text}</p>
            <div className="note-date">
                {new Date(note.createdAt).toLocaleString('en-VN')}
            </div>
        </div>
    )
}

export default NoteItem
