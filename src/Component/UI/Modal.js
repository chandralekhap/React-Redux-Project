import classes from './Modal.module.css'
import ReactDOM  from 'react-dom'
const Backdrop =(props)=>{

    return <div className={classes.backdrop} onClick={props.onHide}/>
};
const ModalOverlay =(props)=>{

    return (
        <div className={classes.modal}>

            <div className={classes.content}>{props.children}</div>
        </div>

    )
}

const portalElement = document.getElementById('Overlays')
const Modal= (props)=>{

    return(
        <div>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </div>
    )
}

export default Modal;