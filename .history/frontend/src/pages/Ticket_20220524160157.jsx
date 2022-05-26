import { useEffect, useState } from 'react'
import { useSelector, useDispatch }  from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import Modal from 'react-modal'
import { toast } from "react-toastify"
import { getTicket, closeTicket } from '../features/tickets/ticketSlice'
import { getNotes, createNote, reset as notesReset } from '../features/notes/noteSlice'
import { useParams, useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import NoteItem from '../components/NoteItem'

const customStyles = {
    content: {
        width: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
    },
}

Modal.setAppElement('#root')

const Ticket = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [noteText, setNoteText] = useState('')

    const { ticket, isSuccess, isLoading, isError, message } = useSelector(
        (state) => state.tickets
    )

    const { notes, isLoading: noteIsLoading } = useSelector(
        (state) => state.notes
    )
    
    const dispatch = useDispatch()
    const param = useParams()
    const navigate = useNavigate()
    const {ticketId} = useParams()

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        dispatch(getTicket(ticketId))
        dispatch(getNotes(ticketId))
        // eslint-disable-next-line
    }, [isError, message, ticketId])

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
        toast.success('Sản phẩm đã ở trạng thái đóng')
        navigate('/tickets')
    }

    const onNoteSubmit = (e) => {
        e.preventDefault()
        dispatch
        closeModal()
    }

    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)
    
    if(isLoading || noteIsLoading) {
        return <Spinner />
    }

    if(isError) {
        return <h3>Có Gì Đó Không Ổn</h3>
    }

    return (
        <>
            <div className="ticket__page">
                <header className="ticket__header">
                    <BackButton url='/tickets' />
                </header>
                <h2 className='ticket__id'>
                    Ticket ID: {ticket._id}
                    <div className={`status status-${ticket.status}`}>
                        {ticket.status}
                    </div>
                </h2>
                <h3>
                    Ngày tạo: {new Date(ticket.createdAt).toLocaleString('en-VN')}
                </h3>
                <h3>Sản phẩm: {ticket.product}</h3>
                <div className="ticket-inline"></div>
                <div className="ticket-desc">
                    <h3>Mô tả vấn đề</h3>
                    <p>{ticket.description}</p>
                </div>

                <h2 style={{marginTop: '10px'}}>Notes</h2>
                {ticket.status !== 'closed' && (
                    <button onClick={openModal} className='btn-note-cmt'>
                        <FaPlus />Phản Hồi
                    </button>
                )}

                <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={closeModal}
                    style={customStyles} 
                    contentLabel='Thêm Phản Hồi'
                >
                    <h2>Thêm Phản Hồi</h2>
                    <button className='btn-close' onClick={closeModal}>
                        X
                    </button>
                    <form onSubmit={onNoteSubmit}>
                        <div className="form-group-note">
                            <textarea
                                name='noteText'
                                id='noteText'
                                placeholder='Thêm văn bản phản hồi tại đây'
                                rows='5'
                                value={noteText}
                                onChange={(e) => setNoteText(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button className='btn'>Gửi</button>
                        </div>
                    </form>
                </Modal>

                {notes.map((note) => (
                    <NoteItem key={note._id} note={note} />
                ))}

                <div className="button-item">
                    {ticket.status !== 'closed' && (
                        <button onClick={onTicketClose} className='btn-status-ticket    btn-danger'>
                            Đóng Sản Phẩm
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Ticket
