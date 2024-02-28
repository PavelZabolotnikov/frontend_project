
# ПРАВО. И ЛЕВО.
Площадка для юристов и тех, кто ищет юридическую помощь.
Правовой научпоп, где о праве рассказывают доступным языком.

<a href="https://drive.google.com/file/d/1WkpMjxeTCLmnxuai3P20tItV4L6HmsvU/view" target="_blank" rel="noreferrer">Посмотеть презентацию проекта</a>

## Стек:
<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
<img alt="JavaScript" width="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img alt="Node.js" width="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
<img alt="PostgreSQL" width="40" src="https://img.icons8.com/color/50/000000/postgreesql.png"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> <img src="https://camo.githubusercontent.com/3a6b30725c1e70259443bc99c3e9ca726bff3e4dfedcacacde08e6b957c1720a/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a5a53496968496d57364465564f5977554c2d676866512e706e67" alt="bootstrap-react" height="40"/> <img src="https://www.vsevernem.ru/images/payment/ukassa3.png" alt="юкасса" height="40"/>
</p>
Фронтенд: TypeScript, React, Redux-thunk, React-Bootstrap
<br/>
Бекенд: Node.js, Express, PostgreSQL, SequelizeORM, Bcrypt

## Пробежимся по функционалу

<div>
<img src="https://s2.gifyu.com/images/ezgif.com-video-to-gif-13535df75007b5e4d.gif" alt="главная" />
</div>

#### Главная страница
- Блок навигации по сайту включает раздел "Подобрать юриста", а также разделы "Мероприя" и "Для юристов", которые реализованы с помощью якорей.
- На главной странице находится информационный блок о проекте.
- Продвигаясь дальше мы увидим слайдер предстоящих мероприятий. Мероприятия отсортированы по дате, а также прошедшие мероприятия автоматически удаляются из слайдера.
- В футере сайта расположен блок "Для юристов" с анкетой для юристов. Форма подлючена к телеграм-боту администратора сайта.
- На сайте реализована темная и светлая тема. Выбор пользователя сохраняется в localstorage.

<div>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.15.29.jpg" alt="главная" style={margin-right: '10px'}/>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.15.57.jpg" alt="главная" />
</div>

#### Страница мероприятия
- На странице меропрития подлючены react-yandex-maps.
- При выборе мероприятия и тарифа мы переходим на ЮКассу для последующей оплаты.

<div>
    <img src="https://s2.gifyu.com/images/ezgif.com-video-to-gif654e07dee451ba30.gif" alt="мероприятие"/>
</div>
<div>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.15.39.jpg" alt="оплата" style={margin-right: '10px'}/>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.15.44.jpg" alt="оплата" />
</div>

#### Страница выбора юриста
- Фильтрация осуществляется по категориям, специалистов можно отсортировать по цене. Сортировка и фильтрация осуществляются в компоненте с использованием хука useMemo.

<div>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.16.00.jpg" alt="все юристы" style={margin-right: '10px'}/>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.15.33.jpg" alt="все юристы" />
</div>
<div>
    <img src="https://s2.gifyu.com/images/ezgif.com-video-to-gif-2f8b1f07828b7d91b.gif" alt="фильтрация" />
</div>

#### Страница юриста
- На странице одного специалиста мы можем увидеть подробную информацию и рейтинг, вычисляемый из оставленных о юристе отзывов.
- Ниже мы видим все отзывы и форму для отправки отзыва. Отправка отзыва происходит только если заполнены все поля.

<div>
    <img src="https://s2.gifyu.com/images/ezgif.com-video-to-gif0a12cd5b2f719034.gif" alt="юрист" />
</div>

#### Кабинет администратора сайта
    - Добавление и редактирование юристов;
    - Добавление и редактирование мероприятий;
    - Удаление карточек;
    - Модерация отзывов.

<div>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.36.55.jpg" alt="админ" style={margin-right: '10px'}/>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.36.59.jpg" alt="админ" />
</div>
<div>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.37.02.jpg" alt="админ" style={margin-right: '10px'}/>
    <img width='49%' src="https://s2.gifyu.com/images/2023-03-26-14.37.07.jpg" alt="админ" />
</div>

#### Установка
Откройте проект в редакторе кода, перейдите в ветку main и откройте два терминала и выполните следующие команды:
<br/>
В первом терминале запустите бэк
```sh
cd backend && npm i && npm start
```
Во втором терминале запустите приложение 
```sh
cd frontend && npm i && npm start
```