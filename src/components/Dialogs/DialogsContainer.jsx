import {sendMessageCreater, updateNewMessageChangeCreater} from '../../redux/actions';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


function mapStateToProps(state) {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreater())
        },
        changeMessageText: (text) => {
            dispatch(updateNewMessageChangeCreater(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer
