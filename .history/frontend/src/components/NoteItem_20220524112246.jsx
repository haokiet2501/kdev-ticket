import { useSelector } from 'react-redux'

const NoteItem = ({ note }) => {
    const {user} = useSelector((state) => state.auth)

    return (
        <div className='note' style={{
            backgroundColor
        }}>
        
        </div>
    )
}

export default NoteItem
