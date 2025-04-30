import { useState } from 'react'
import './App.css'

import Box_item from "./components/Box_item/Box_item"
import Box3_item from "./components/Box3_item/Box3_item"
import Box4_item from "./components/Box4_item/Box4_item"
import Footer_item from "./components/Footer_item/Footer_item"
function App() {
  const [them, setThem] = useState()

  function light(){
    setThem("light")
  }
  function dark(){
    setThem("dark")
  }
  if(them=="light"){
    console.log("light")
    $(".box").css({
      "background":"#323232"
    })
    $(".box3,.footer").css({
      "background":"#373737"
    })
    $("p").css({
      "color":"#fff"
    })
    $(".box2_text1, .box2_text3, .box3_text1, .box2_text3, .box4_text1, .Footer_item, .box2_text2").css({
      "color":"#fff"
    })
  }
  if(them=="dark"){
    console.log("dark")
    $(".box").css({
      "background":"#fff"
    })
    $(".box2_text1, .box2_text3, .box3_text1, .box2_text3, .box4_text1, .Footer_item, .box2_text2").css({
      "color":"#323232"
    })
    $(".box3,.footer").css({
      "background":"#F6F6F8"
    })
  }

  return (
    <>
      <div className="box">
        <div className="header">
          <div className="nav">
            <div className="nav_block">
              <div className="nav_item">Главная</div>
              <div className="nav_item">Наши проекты</div>
              <div className="nav_item">Услуги</div>
              <div className="nav_item">Новости</div>
              <div className="nav_item">Контакты</div>
              <div className="them_cont">
                <div className="them_btn1" onClick={light}></div>
                <div className="them_btn2" onClick={dark}></div>
              </div>
            </div>
          </div>
          <div className="header_block">
            <p className="header_text1">Передовая IT студия</p>
            <p className="header_text2">Мы создаем легкие решения сложных задач и проблем</p>
            <div className="header_btn"><p>Наши проекты</p></div>
          </div>
        </div>

        <div className="box2">
          <p className="box2_text1">Мы создаем мобильные приложения для крупных корпораций</p>
          <p className="box2_text2">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
          <div className="box2_block">
            <Box_item></Box_item>
            <Box_item></Box_item>
            <Box_item></Box_item>
          </div>
          <div className="box2_btn1"><p>Все услуги</p></div>
        </div>

        <div className="box3">
          <div className="box3_block1">
            <div className="box3_block">
              <p className="box3_text1">Высокие стандарты разработки</p>
              <p className="box3_text2">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
              <p className="box3_text3">Подробнее о компании</p>
            </div>
            <div className="box3_img1"></div>
          </div>
          <div className="box3_block2">
            <Box3_item></Box3_item>
            <Box3_item></Box3_item>
            <Box3_item></Box3_item>
            <Box3_item></Box3_item>
            <Box3_item></Box3_item>
          </div>
        </div>

        <div className="box4">
          <div className="box4_block1">
            <p className="box4_text11">
              Наши работы, на которых мы специализируемся
            </p>
            <div className="box4_btn1">
              Все услуги
            </div>
          </div>
          <div className="box4_block2">
            <Box4_item></Box4_item>
            <Box4_item></Box4_item>
            <Box4_item></Box4_item>
          </div>
        </div>
        <div className="footer">
          <Footer_item text1="Контактная информация" text2="test@test.ru" text3="+8 777 555 66 99" text4="Москва, Бульвар Ленина 33"></Footer_item>
          <Footer_item text1="Основные ссылки" text2="Главная" text3="Наши проекты" text4="Наши услуги" text5="Контакты"></Footer_item>
          <Footer_item text1="Наши проекты" text2="РосНано" text3="Сколково" text4="Проект “Восток”" text5="ТЭЦ Калининграда"></Footer_item>
          <Footer_item text1="Социальные сети" text2="VK.com" text3="Instagram" text4="Facebook" text5="Twitter"></Footer_item>
        </div>
        <div className="footer2">
          (с) 2019. Все права защищены.
        </div>
      </div>
    </>
  )
}

export default App
