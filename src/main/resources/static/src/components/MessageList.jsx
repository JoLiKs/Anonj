import React from 'react';
import Message from './message';
import cls from './MessageList.module.css';


class MessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {

  //id={this.props.id}
//{this.props.state.state.messages.map((data) => <Message data={data}/>)}
    return (
      <div className={cls.MessageList} ref="messagesWrapper">
      HOHOH
      </div>
      /*суть проблемы с lenght, возможно, в том, что есть какие-то переменные у которых неприсвоено значение
       и сам MessageList, скорее всего, не причем*/

          );
  }
}

export default MessageList;