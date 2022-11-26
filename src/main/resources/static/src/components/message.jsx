import React from 'react';
import cls from './Message.module.css';
//<div className={cls.msg}>[ {props.data[0]} ] {props.data[1]}</div>
const Message = (props) => {
  if (props.sender == "in") {
  return (
    <div className={`${cls.msgsin}`}>
    <img src={props.imgurl}/>
    {props.msg}
    </div>
  ) }
  else {
    return (
<div>SS</div>
    )
  }
}

export default Message;