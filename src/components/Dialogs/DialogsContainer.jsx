import { sendMessage } from '../../redux/actions'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

function mapStateToProps(state) {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  }
}

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs)
