import React, { useEffect, useState } from "react";
import styles from '../styles/main.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

import io from 'socket.io-client'

const socket = io.connect('http://localhost:5000')

import Bloks from './bloks_startap'

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
    Url_str: "url_str",
    Open_id: "open_id"
}

const Main = () =>{
    
    const { Name_title, Description, Name_treb, Name_komp, Sroki, Price, Del_id, Hide_id, Url_str, Open_id } = FIELDS
    const { search } = useLocation()
    const [values, setValues] = useState({[Name_title]: "",[Description]: "",[Name_treb]: "",[Name_komp]: "",[Sroki]: "",[Price]: "", [Del_id]: "", [Hide_id]: "", [Url_str]: "", [Open_id]: ""});
    const [val, setVal] = useState("")

    //валидация форм
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState("Не может быть пустым")
    const [descriptionDirty, setDescriptionDirty] = useState(false)
    const [descriptionError, setDescriptionError] = useState("Не может быть пустым")
    const [trebDirty, setTrebDirty] = useState(false)
    const [trebError, setTrebError] = useState("Не может быть пустым")
    const [kompDirty, setKompDirty] = useState(false)
    const [kompError, setKompError] = useState("Не может быть пустым")
    const [srokiDirty, setSrokiDirty] = useState(false)
    const [srokiError, setSrokiError] = useState("Не может быть пустым")
    const [priceDirty, setPriceDirty] = useState(false)
    const [priceError, setPriceError] = useState("Не может быть пустым")
    const [delDirty, setDelDirty] = useState(false)
    const [delError, setDelError] = useState("Не может быть пустым")
    const [hideDirty, setHideDirty] = useState(false)
    const [hideError, setHideError] = useState("Не может быть пустым")
    const [urlDirty, setUrlDirty] = useState(false)
    const [urlError, setUrlError] = useState("Не может быть пустым")
    const [idDirty, setIdDirty] = useState(false)
    const [idError, setIdError] = useState("Не может быть пустым")

    const [formValid, setFormValid] = useState(false)
    const [formValidHide, setFormValidHide] = useState(false)
    const [formValidId, setFormValidId] = useState(false)
    const [formValidDel, setFormValidDel] = useState(false)

    useEffect(()=> {
        if(nameError || descriptionError || trebError || kompError || srokiError || priceError || urlError){
            setFormValid(false)
        } else{
            setFormValid(true)
        }
        if(hideError){
            setFormValidHide(false)
        } else{
            setFormValidHide(true)
        }
        if(idError){
            setFormValidId(false)
        } else{
            setFormValidId(true)
        }
        if(delError){
            setFormValidDel(false)
        } else{
            setFormValidDel(true)
        }
        socket.on('error', (data) => {  
            alert(data)
         });
         
    }, [nameError, descriptionError, trebError, kompError, srokiError, priceError, hideError, urlError, idError, delError])



    const [params, setParams] = useState("")

    const handleChange = ({ target: {value, }}) =>{
        setValues({...values, [Name_title]: value})
        if(values[Name_title].length < 0){
            setNameError("Некоректные данные")
        } else {
            setNameError("")
        }
    }
    const handleChange2 = ({ target: {value, }}) =>{
        setValues({...values, [Description]: value})
        if(values[Description].length <= 8){
            setDescriptionError("В описании больше 8 символов")
        } else {
            setDescriptionError("")
        }
    }
    const handleChange3 = ({ target: {value, }}) =>{
        setValues({...values, [Name_treb]: value})
        if(values[Name_treb].length < 0){
            setTrebError("Некоректные данные")
        } else {
            setTrebError("")
        }
    }
    const handleChange4 = ({ target: {value, }}) =>{
        setValues({...values, [Name_komp]: value})
        if(values[Name_komp].length < 0){
            setKompError("Некоректные данные")
        } else {
            setKompError("")
        }
    }
    const handleChange5 = ({ target: {value, }}) =>{
        setValues({...values, [Sroki]: value})
        let myLet = values[Sroki]
        let myNum =Number(value)?true:false
        if (myNum == false) {
            alert('Неккоректное значения поля (числовое)')
            setSrokiError("Некоректные данные")
         } else{
            if(values[Sroki].length < 0){
                setSrokiError("Некоректные данные")
            } else {
                setSrokiError("")
            }
         }
        
    }
    const handleChange6 = ({ target: {value, }}) =>{
        setValues({...values, [Price]: value})
        let myLet = values[Price]
        let myNum =Number(value)?true:false
        if (myNum==false) {
            alert('Неккоректное значения поля (числовое)')
            setPriceError("Некоректные данные")
         } else{
            if(values[Price].length < 0){
                setPriceError("Некоректные данные")
            } else {
                setPriceError("")
            }
         }
        
    }
    const handleChange7 = ({ target: {value, }}) =>{
        setValues({...values, [Del_id]: value})
        let myLet = values[Del_id]
        let myNum =Number(value)?true:false
        if (myNum==false) {
            alert('Неккоректное значения поля (числовое)')
            setDelError("Некоректные данные")
         } else{
            if(values[Del_id].length < 0){
                setDelError("Некоректные данные")
            } else {
                setDelError("")
            }
         }
        
    }
    const handleChange8 = ({ target: {value, }}) =>{
        setValues({...values, [Hide_id]: value})
        let myLet = values[Hide_id]
        let myNum =Number(value)?true:false
        if (myNum==false) {
            alert('Неккоректное значения поля (числовое)')
            setHideError("Некоректные данные")
         } else{
            if(values[Hide_id].length < 0){
                setHideError("Некоректные данные")
            } else {
                setHideError("")
            }
         }
        
    }
    const handleChange9 = ({ target: {value, }}) =>{
        setValues({...values, [Open_id]: value})
        let myLet = values[Open_id]
        let myNum =Number(value)?true:false
        if (myNum==false) {
            alert('Неккоректное значения поля (числовое)')
            setIdError("Некоректные данные")
         } else{
            if(values[Open_id].length < 0){
                setIdError("Некоректные данные")
            } else {
                setIdError("")
            }
         }
        
    }
    const handleChange10 = ({ target: {value, }}) =>{
        setValues({...values, [Url_str]: value})
        if(values[Url_str].length <= 1){
            setUrlError("Некоректные данные")
        } else {
            setUrlError("")
        }
    }

    const blurHandler = (e) =>{
        switch(e.target.name){
            case "name_title":
                setNameDirty(true)
                break
            case "description":
                setDescriptionDirty(true)
                break
            case "name_treb":
                setTrebDirty(true)
                break
            case "name_komp":
                setKompDirty(true)
                break
            case "sroki":
                setSrokiDirty(true)
                break
            case "price":
                setPriceDirty(true)
                break
            case "del_id":
                setDelDirty(true)
                break
            case "hide_id":
                setHideDirty(true)
                break
            case "url_str":
                setUrlDirty(true)
                break
            case "open_id":
                setIdDirty(true)
                break
            
        }
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
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.flex}>
                <div className={styles.regres}>
                    <div>
                        <h1>Панель</h1>
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
                    <div>
                        <h1>Скоро будет реклама</h1>
                    </div>
                    <div className={styles.dragon}>
                    </div>
                </div>
                <div>
                    <div className={styles.right}>
                        <div>
                            <Bloks value={val}  >
                            </Bloks>
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
                                <div className={styles.flex}>
                                    <div>
                                        <input onBlur={e => blurHandler(e)}  type="text" value={values[Name_title]} onChange={handleChange} autoComplete="off" name="name_title" placeholder="Наименование" required />
                                        {(nameDirty && nameError) && <div style={{color:"red"}}>{nameError}</div>}
                                    </div>
                                    <div>
                                        <input onBlur={e => blurHandler(e)}  type="text" value={values[Description]} onChange={handleChange2} autoComplete="off" name="description" placeholder="Описание" required />
                                        {(descriptionDirty && descriptionError) && <div style={{color:"red"}}>{descriptionError}</div>}
                                    </div>
                                </div>
                                <div className={styles.flex}>
                                    <div>
                                        <input onBlur={e => blurHandler(e)}  type="text" value={values[Name_treb]} onChange={handleChange3} autoComplete="off" name="name_treb" placeholder="Требования" required />
                                        {(trebDirty && trebError) && <div style={{color:"red"}}>{trebError}</div>}
                                    </div>
                                    <div>
                                        <input onBlur={e => blurHandler(e)}  type="text" value={values[Name_komp]} onChange={handleChange4} autoComplete="off" name="name_komp" placeholder="Наименовании компании" required />
                                        {(kompDirty && kompError) && <div style={{color:"red"}}>{kompError}</div>}
                                    </div>
                                </div>
                                <div className={styles.flex}>
                                    <div>
                                        <input onBlur={e => blurHandler(e)}  type="number" value={values[Sroki]} onChange={handleChange5} autoComplete="off" name="sroki" placeholder="Срок выполнения" required />
                                        {(srokiDirty && srokiError) && <div style={{color:"red"}}>{srokiError}</div>}
                                    </div>
                                    <div>
                                        <input onBlur={e => blurHandler(e)}  type="number" value={values[Price]} onChange={handleChange6} autoComplete="off" name="price" placeholder="Стоимость" required />
                                        {(priceDirty && priceError) && <div style={{color:"red"}}>{priceError}</div>}
                                    </div>
                                </div>
                                <div>
                                    <input onBlur={e => blurHandler(e)}  type="text" value={values[Url_str]} onChange={handleChange10} autoComplete="off" name="url_str" placeholder="Ссылка" required />
                                    {(urlDirty && urlError) && <div style={{color:"red"}}>{urlError}</div>}
                                </div>
                            </div>
                            <div className={styles.popup__but}>
                                <button 
                                    type="submit"
                                    onClick={addStart}
                                    disabled={!formValid}
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
                            {(delDirty && delError) && <div style={{color:"red"}}>{delError}</div>}
                            <input onBlur={e => blurHandler(e)}   type="number" value={values[Del_id]} onChange={handleChange7} autoComplete="off" name="del_id" placeholder="Айди" required />
                        </div>
                        <div className={styles.popup__but}>
                            <button 
                                type="submit"
                                onClick={deletStart}
                                disabled={!formValidDel}
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
                            {(hideDirty && hideError) && <div style={{color:"red"}}>{hideError}</div>}
                            <input onBlur={e => blurHandler(e)}   type="number" value={values[Hide_id]} onChange={handleChange8} autoComplete="off" name="del_id" placeholder="Айди" required />
                        </div>
                        <div className={styles.popup__but}>
                            <button 
                                type="submit"
                                onClick={hide}
                                disabled={!formValidHide}
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
                            {(idDirty && idError) && <div style={{color:"red"}}>{idError}</div>}
                            <input onBlur={e => blurHandler(e)}   type="number" value={values[Open_id]} onChange={handleChange9} autoComplete="off" name="del_id" placeholder="Айди" required />
                        </div>
                        <div className={styles.popup__but}>
                            <button 
                                type="submit"
                                onClick={open}
                                disabled={!formValidId}
                            >
                                Открыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="colme" className={styles.popup__col_me}>
                <h1>Проблемы! Звони - <a href="tel:+79964039138"></a>89964039138</h1>
            </div>
        </div>
     )
    }
  

export default Main