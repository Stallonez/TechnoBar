import './ModalDialog.css';

const ModalDialog = (props) => {
    return <div className={props.toggle ? 'openModal' : 'closeModal'}>
        <button onClick={() => props.getToggle(false)}>closeModal</button>
    </div>
}

export default ModalDialog;