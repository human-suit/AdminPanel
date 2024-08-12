import React, { useEffect, useState } from "react";
import styles from '../styles/main.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

import io from 'socket.io-client'

import Bloks_startap from './bloks_startap'

// import header from './'

const FIELDS = {
    Name_title: "name_title",
    Description: "description",
    Name_treb: "name_treb",
    Name_komp: "name_komp",
    Sroki: "sroki",
    Price: "price",
    Del_id: "del_id",
    Hide_id: "hide_id",
    Open_id: "open_id"
}

const Main = () =>{
    
    const { Name_title, Description, Name_treb, Name_komp, Sroki, Price, Del_id, Hide_id, Open_id } = FIELDS
    const { search } = useLocation()
    const [values, setValues] = useState({[Name_title]: "",[Description]: "",[Name_treb]: "",[Name_komp]: "",[Sroki]: "",[Price]: "", [Del_id]: "", [Hide_id]: "", [Open_id]: ""});
    const [val, setVal] = useState("")
    
    const [params, setParams] = useState("")

    const socket = io.connect('http://localhost:5000')

    const handleChange = ({ target: {value, }}) =>{
        setValues({...values, [Name_title]: value})
    }
    const handleChange2 = ({ target: {value, }}) =>{
        setValues({...values, [Description]: value})
    }
    const handleChange3 = ({ target: {value, }}) =>{
        setValues({...values, [Name_treb]: value})
    }
    const handleChange4 = ({ target: {value, }}) =>{
        setValues({...values, [Name_komp]: value})
    }
    const handleChange5 = ({ target: {value, }}) =>{
        setValues({...values, [Sroki]: value})
    }
    const handleChange6 = ({ target: {value, }}) =>{
        setValues({...values, [Price]: value})
    }
    const handleChange7 = ({ target: {value, }}) =>{
        setValues({...values, [Del_id]: value})
    }
    const handleChange8 = ({ target: {value, }}) =>{
        setValues({...values, [Hide_id]: value})
    }
    const handleChange9 = ({ target: {value, }}) =>{
        setValues({...values, [Open_id]: value})
    }


    const addStart = () =>{
        socket.emit('add', { values })
        location.reload();
    }
    const deletStart = () =>{
        socket.emit('del', { values })
        location.reload();
    }
    const hide = () =>{
        socket.emit('hide', { values })
        location.reload();
    }
    const open = () =>{
        socket.emit('open', { values })
        location.reload();
    }
    

    
    
    
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.flex}>
                <div className={styles.regres}>
                    <div>
                        <h1>Панель Админиcтратора</h1>
                    </div>
                    <form action="">
                        <div>
                            <div className={styles.popup__add}>
                                <a href="#popup">Добавить</a>
                            </div>
                            
                        </div>
                    </form>
                    <form action="">
                        <div>
                            <div className={styles.popup__add}>
                               
                                <a href="#popup3"> Скрыть</a>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div>
                            <div className={styles.popup__add}>
                               
                                <a href="#popup4"> Открыть</a>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div>
                            <div className={styles.popup__add}>
                               
                                <a href="#popup2"> Удалить по ID</a>
                            </div>
                        </div>
                    </form>
                    
                </div>
                <div>
                    <div className={styles.right}>
                        <div>
                            <Bloks_startap value={val}  >
                            </Bloks_startap>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            <div id="popup" className={styles.popup}>
                <a href="#" className={styles.popup__area}></a>
                <div className={styles.popup__body}>
                    <div className={styles.popup__content}>
                        <a href="#" className={styles.popup__close}>X</a>
                        <div className={styles.popup__title}>
                            Добавить новый стартап
                        </div>
                        
                            <div className={styles.popup__text}>
                                <input  type="text" value={values[Name_title]} onChange={handleChange} autoComplete="off" name="name_title" placeholder="Наименование" required />
                                <input  type="text" value={values[Description]} onChange={handleChange2} autoComplete="off" name="description" placeholder="Описание" required />
                                <input  type="text" value={values[Name_treb]} onChange={handleChange3} autoComplete="off" name="name_treb" placeholder="Требования" required />
                                <input  type="text" value={values[Name_komp]} onChange={handleChange4} autoComplete="off" name="name_komp" placeholder="Наименовании компании" required />
                                <input  type="number" value={values[Sroki]} onChange={handleChange5} autoComplete="off" name="sroki" placeholder="Срок выполнения" required />
                                <input  type="number" value={values[Price]} onChange={handleChange6} autoComplete="off" name="price" placeholder="Стоимость" required />
                            </div>
                            <div className={styles.popup__but}>
                                <button 
                                    type="submit"
                                    onClick={addStart}
                                
                                >
                                    Добавить
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>
            <div id="popup2" className={styles.popup2}>
                <a href="#" className={styles.popup__area2}></a>
                <div className={styles.popup__body2}>
                    <div className={styles.popup__content2}>
                        <a href="#" className={styles.popup__close2}>X</a>
                        <div className={styles.popup__title2}>
                            Удалить 
                        </div>
                        <div className={styles.popup__text2}>
                            <input  type="number" value={values[Del_id]} onChange={handleChange7} autoComplete="off" name="del_id" placeholder="Айди" required />
                        </div>
                        <div className={styles.popup__but}>
                            <button 
                                type="submit"
                                onClick={deletStart}
                            
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="popup3" className={styles.popup3}>
                <a href="#" className={styles.popup__area3}></a>
                <div className={styles.popup__body3}>
                    <div className={styles.popup__content3}>
                        <a href="#" className={styles.popup__close3}>X</a>
                        <div className={styles.popup__title3}>
                            Скрыть запись 
                        </div>
                        <div className={styles.popup__text3}>
                            <input  type="number" value={values[Hide_id]} onChange={handleChange8} autoComplete="off" name="del_id" placeholder="Айди" required />
                        </div>
                        <div className={styles.popup__but}>
                            <button 
                                type="submit"
                                onClick={hide}
                            
                            >
                                Скрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="popup4" className={styles.popup4}>
                <a href="#" className={styles.popup__area4}></a>
                <div className={styles.popup__body3}>
                    <div className={styles.popup__content4}>
                        <a href="#" className={styles.popup__close4}>X</a>
                        <div className={styles.popup__title4}>
                            Открыть запись
                        </div>
                        <div className={styles.popup__text4}>
                            <input  type="number" value={values[Open_id]} onChange={handleChange9} autoComplete="off" name="del_id" placeholder="Айди" required />
                        </div>
                        <div className={styles.popup__but}>
                            <button 
                                type="submit"
                                onClick={open}
                            
                            >
                                Открыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
    }
  

export default Main