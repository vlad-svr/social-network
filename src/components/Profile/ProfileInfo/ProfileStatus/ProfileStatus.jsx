import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  onClickOutside = (e) => {
    // this.onDeactivateEditMode()
  }

  onActivateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  onDeactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value.trim(),
    })
  }

  render() {
    const myStatus = (
      <span onClick={this.onActivateEditMode} className={s.status + ' ' + s.my}>
        {this.props.status}
      </span>
    )

    const myNoStatus = (
      <span
        onClick={this.onActivateEditMode}
        className={s.status + ' ' + s.my + ' ' + s.no_status}
      >
        изменить статус
      </span>
    )

    // const status = (
    //   <span className={s.status}>{this.props.status}</span>
    // )

    const statusInput = (
      <div className={s.editor_container}>
        <input
          onChange={this.onStatusChange}
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
        {this.props.status ? myStatus : myNoStatus}
        {this.state.editMode ? statusInput : ''}
      </div>
    )
  }
}

export default ProfileStatus
