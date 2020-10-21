import {sendMessage, changeMessageText} from '../../redux/actions';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


function mapStateToProps(state) {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        changeMessageText
    }),
    withAuthRedirect,
)(Dialogs)

