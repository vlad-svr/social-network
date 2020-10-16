import {sendMessage, changeMessageText} from '../../redux/actions';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    changeMessageText
}) (Dialogs)

export default DialogsContainer
