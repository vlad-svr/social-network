import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {sendMessage} from '../../redux/dialogs-reducer';
import {DialogType, MessagesType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
  messages: Array<MessagesType>
  dialogs: Array<DialogType>
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  }
}

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs)
