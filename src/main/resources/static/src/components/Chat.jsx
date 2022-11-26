import React, { Component } from 'react';
import cls from './Chat.module.css';

class Chat extends Component {

    render(){

        return (
           <div>
           <form>
                           <div>
                               <label>Введите сообщение</label>
                               {/*TODO: Добавить фильтр матов*/}
                               {/*TODO: Добавить приватные комнаты*/}
                               {/*TODO: Добавить возможность присылать изображения*/}
           {/*TODO: Перевести инпуты на реактовские и добавить проверку*/}
                               <input type="text" id="msg" class="form-control" placeholder="Набирааать здесь..."/>
                           </div>
                           <button id="send" class="btn btn-default">Отправить</button>
                       </form>
           </div>
        );
    }
}

export default Chat;