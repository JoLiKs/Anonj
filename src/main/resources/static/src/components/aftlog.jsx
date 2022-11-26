import React from 'react';
import cls from '../App.module.css';
import MessageList from './MessageList';
import Chat from './Chat'

const Aftlog = (props) => {

  return (
  <div>
<div class="col-4">
            <form class="form-inline">
                            <div className={cls.formsexen}>
                               <input type="button" id="connect" class="btn btn-default mt-3" value="Войти в чат"/>
                                <input type="button" id="disconnect" class="btn btn-default" value="Выйти"/>
                            </div>
                        </form>
            </div>

          <div className={cls.chat}>
                        <MessageList id="msgs" store={props.store} />
                        </div>
                <div id="forms" className={cls.forms}>
                    <Chat/>
                </div>
</div>
)
}
export default Aftlog;