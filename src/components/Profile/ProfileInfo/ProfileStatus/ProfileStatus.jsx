import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  onClickOutside = (e) => {
    // this.onDeactivateEditMode()
  }

  onActivateEditMode = () => {
    this.setState({
      editMode: true,
    })
    this.props.updateStatus()
  }

  onDeactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  render() {
    const myStatus = (
      <span onClick={this.onActivateEditMode} className={s.status + ' ' + s.my}>
        {this.state.status}
      </span>
    )

    // const myNoStatus = (
    //   <span className={s.status + ' ' + s.my + ' ' + s.no_status}>
    //     изменить статус
    //   </span>
    // )

    // const status = (
    //   <span className={s.status}>{this.state.status}</span>
    // )

    const statusInput = (
      <div className={s.editor_container}>
        <input
          autoFocus={true}
          defaultValue={this.state.status}
          className={'input ' + s.input_status}
        />
        <button onClick={this.onDeactivateEditMode} className="button_blue">
          Сохранить
        </button>
      </div>
    )

    return (
      <div>
        {myStatus}
        {this.state.editMode ? statusInput : ''}
      </div>
    )
  }
}

export default ProfileStatus
