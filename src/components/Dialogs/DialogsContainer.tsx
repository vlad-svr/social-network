import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {actions} from '../../redux/dialogs-reducer';
import {AppStateType} from "../../redux/redux-store";
import { ComponentType } from 'react';


function mapStateToProps(state: AppStateType) {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, { sendMessage: actions.sendMessage }),
  withAuthRedirect
)(Dialogs)
