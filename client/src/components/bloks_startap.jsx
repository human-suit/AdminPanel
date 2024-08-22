import React, { useEffect, useState } from "react";
import styles from '../styles/main.module.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'

import io from 'socket.io-client'

const socket = io.connect('http://localhost:5000')

const FIELDS = {
    ID: "id",
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

const Bloks = ({ value }) =>{

    const { ID, Name_title, Description, Name_treb, Name_komp, Sroki, Price, Del_id, Hide_id, Url_str, Open_id } = FIELDS
    const { search } = useLocation()
    const [values, setValues] = useState({[ID]: "", [Name_title]: "",[Description]: "",[Name_treb]: "",[Name_komp]: "",[Sroki]: "",[Price]: "", [Del_id]: "", [Hide_id]: "", [Url_str]: "", [Open_id]: ""});
    const [, setVal] = useState("")

    const dats = []
    const [state, setState] = useState([])
    const [asyncData, setAsyncData] = useState(null);
    const [stage, setStage] = useState(1);
    const [isActive, setActive] = useState(1);
    const [inx, setInx] = useState(1);


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
        setValues({...values, [Url_str]: value})
    }

    var id = 0
   
    useEffect(()=> {
        
        // отправляем данные на сервер
        // socket.emit('join', ({state})=>{
            
        //     console.log(state)
        // })
        // получаем данные от сервера
        socket.on('join', (data) => {  
            setState(data)
            console.log(data)
            socket.emit('confirmation')
         });
         

         socket.on('error', (data) => {  
            alert(data)
            console.log("Error")
         });
         
         setTimeout(() => {
            setAsyncData("something");
        }, 4500);

        
    }, [])

    
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("1")
    }
    
    
    

    const handleUp = (e) =>{
        e.preventDefault()
        
        if(stage<date.length/3){
            
            const num = stage+1
            
            // setActive(!isActive);
            setStage(num)
            if(num>3 && num<(date.length/3)-2){
                const int = inx+1
                
                var allElements = document.getElementsByClassName(`${styles.bu}`);
                for(var i=0; i < allElements.length; i++)
                {
                    
                    var item = allElements[i];
                    var ints =  item.id 
                    if(num==ints){
                        console.log(num)
                        const nax = num-1
                        document.getElementById(nax).classList.add(`${styles.per}`);
                        setInx(int)
                    }
                }
                 var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var ints =  item.id
                    const nax = num-1 
                    if(nax==ints){
                        
                    } else{
                        document.getElementById(ints).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
            }
            else{
                var allElements = document.getElementsByClassName(`${styles.bu}`);
                for(var i=0; i < allElements.length; i++)
                {
                    console.log(inx)
                    var item = allElements[i];
                    var ints =  item.id 
                    if((num)==ints){
                        document.getElementById(num).classList.add(`${styles.per}`);
                    }
                }
                 var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var ints =  item.id 
                    console.log(num)
                    if(num==ints){
                        
                    } else{
                        document.getElementById(ints).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
            }
            
            
           
        }
        
        
    }
    const handleDown = (e) =>{
        e.preventDefault()
        if(stage>1){
            const num = stage-1
            document.getElementById(num).classList.add(`${styles.per}`);
            setStage(num)
            
            if(num-2>0 && num <5){
                const int = inx-1
                
                var allElements = document.getElementsByClassName(`${styles.bu}`);
                for(var i=0; i < allElements.length; i++)
                {
                    
                    var item = allElements[i];
                    var ints =  item.id 
                    if(num==ints){
                        console.log(num)
                        const nax = num-1
                        document.getElementById(nax).classList.add(`${styles.per}`);
                        setInx(int)
                    }
                }
                 var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var ints =  item.id
                    const nax = num-1 
                    if(nax==ints){
                        
                    } else{
                        document.getElementById(ints).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
               
            }
            else{
                var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var int =  item.id 
                    console.log(num) 
                    if(num==int){
                       
                    } else{
                        document.getElementById(int).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
            }
            
        }
        
        
    }
    

    const up = (event) =>{
        alert(myHandler.caller.arguments[0].target.id)
    }
    const date = state.pro
    const dat = date
    const count = []

    // console.log(date.length)
    
    
    if(value != ""){
        console.log(value)
        for (let i = 0; i < date.length; i++) {
            const vil = date[i]
            const str = vil.namestart
            if (str[0].toLowerCase().includes(value.toLowerCase()) == true){
                console.log(str)
                count.push(vil.id)
                console.log(count)
            }
            
        }
    }

    const redact = () =>{
        socket.emit('redact', { values })
        location.reload();
    }

    
    
    
    
    

    

    return asyncData ? 

        <div>

        <div>
            <h2 className={styles.title}>Список Открытых стартапов</h2>
        </div>

        { value == "" &&
        <div className={styles.spis}>
        
        
        {date.map((post, index) => (
            
            

            <div key={index}>
                {  String(post.open) == "true" ? (<div>
                { 
                    <div  className={styles.mes} >
                        <div className={styles.lef} >
                            <h2 className={styles.hus}>{post.namestart}</h2>
                            <h2 className={styles.hus}>id - {post.id} 
                            {
                                // String(post.open)
                                // String(post.open) == "true" ? '1' : '0'
                                
                            }
                            
                            </h2>
                            
                        
                            <p className={styles.pep}>
                                {post.opis}
                            </p>
                            <Link 
                                to={`/stage_startap`}
                                state = {{ from: post.id }} 
                                
                            >
                            
                                <button 
                                className={styles.button}
                                >
                                    Подробнее о программе
                                </button>
                                
                            </Link>
                            <a href="#popup5">
                                <button  id={post.id} onClick={() => setValues({...post.id, [ID]: post.id})} className={styles.button}>Редактировать</button> 
                            </a>
                        </div>
                            
                        
                    </div>
                } 
                </div>
                
                
                ) : ("") //убираем те которые скрыты стартапы 
            
                }
                
            
            </div>
        
        ))}

        
                      
        </div>
         
        } 

        <div>
            <h2 className={styles.title}>Список скрытых</h2>
        </div>
        
        <div className={styles.spis}>
        
        {date.map((post, index) => (
            
            

            <div key={index}>
                {  String(post.open) == "false" ? (<div>
                { 
                    <div  className={styles.mes} >
                        <div className={styles.lef} >
                            <h2 className={styles.hus}>{post.namestart}</h2>
                            <h2 className={styles.hus}>id - {post.id} 
                            {
                                // String(post.open)
                                // String(post.open) == "true" ? '1' : '0'
                                
                            }
                            
                            </h2>
                            
                        
                            <p className={styles.pep}>
                                {post.opis}
                            </p>
                            <Link 
                                to={`/stage_startap`}
                                state = {{ from: post.id }} 
                                
                            >
                            
                                <button 
                                className={styles.button}
                                >
                                    Подробнее о программе
                                </button>
                                
                            </Link>
                            <a href="#popup5">
                                <button  id={post.id} onClick={() => setValues({...post.id, [ID]: post.id})} className={styles.button}>Редактировать</button> 
                            </a>
                            
                        </div>
                        
                        
                    </div>
                } 
                </div>
                
                
                ) : ("") //убираем те которые скрыты стартапы 
            
                }
                
            
            </div>


        
        ))}

            <div id="popup5" className={styles.popup5}>
                <a href="#" className={styles.popup__area5}></a>
                <div className={styles.popup__body5}>
                    <div className={styles.popup__content5}>
                        <a href="#" className={styles.popup__close5}>X</a>
                        <div className={styles.popup__title5}>
                            Отредактировать стартап
                        </div>
                        
                            <div className={styles.popup__text5}>
                                <input  type="text" value={values[Name_title]} onChange={handleChange} autoComplete="off" name="name_title" placeholder="Наименование" required />
                                <input  type="text" value={values[Description]} onChange={handleChange2} autoComplete="off" name="description" placeholder="Описание" required />
                                <input  type="text" value={values[Name_treb]} onChange={handleChange3} autoComplete="off" name="name_treb" placeholder="Требования" required />
                                <input  type="text" value={values[Name_komp]} onChange={handleChange4} autoComplete="off" name="name_komp" placeholder="Наименовании компании" required />
                                <input  type="number" value={values[Sroki]} onChange={handleChange5} autoComplete="off" name="sroki" placeholder="Срок выполнения" required />
                                <input  type="number" value={values[Price]} onChange={handleChange6} autoComplete="off" name="price" placeholder="Стоимость" required />
                                <input  type="text" value={values[Url_str]} onChange={handleChange7} autoComplete="off" name="url_str" placeholder="Ссылка" required />
                            </div>
                            <div className={styles.popup__but5}>
                                <button 
                                    type="submit"
                                    onClick={redact}
                                
                                >
                                    Отредактировать
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>
                      
        </div> 
        </div> : <div>Loading...</div>;


        
    
}

export default Bloks