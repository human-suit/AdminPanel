import React, { useEffect, useState } from "react";
import styles from '../styles/main.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5000')

const Start = () =>{
    
    const [asyncData, setAsyncData] = useState(null);
    const [states, setState] = useState([])
    const [str, setStr] = useState()
    const navigate = useNavigate()

    
    const location = useLocation();
    const { from } = location.state;
    console.log(from); // output: "the-page-id"

    const handleChange = ({target: {value, name}})=>{
        setValues({ ...values, [name]: value})
    }
   
    const handleClick = (e) =>{
        const isDisabled = Object.values(values).some((value) => !value)
       if(isDisabled) e.preventDefault()
    }

    const leftRoom = () =>{
        parent.location.replace("/");
        navigate("/")
    
    }

    const handleSubmit = () =>{

    }

    useEffect(()=> {
        
        
        socket.on('gg', (data) => {  
            setState(data)
            console.log(data.pro[0])
            const str = data.pro[0]
            const st = str.namestart[0]
            setStr(st.length)
            
        });
        
        socket.emit('comp', { from })

        setTimeout(() => {
            setAsyncData("something");
        }, 3000);
        

        
    }, [])
    
    const date = states.pro
    
    return (    asyncData ? 
        
        <div className={styles.spis}>
        {date.map((post, index) => (
        <div key={index}>
            <div className={styles.container}>
                
                <div className={styles.head}>
                    {  str < 47 && 
                        <h1 className={styles.bub}>
                        {
                           post.namestart
                           
                        }
                        </h1>
                    }
                    {  str > 47 && 
                        <h1 className={styles.bob}>
                        {post.namestart}
                        </h1>
                    }
                    <div className={styles.content}>
                        <p>Организатор конкурса</p>
                        <h1>{post.name}</h1>
                        <a href={post.url}>Перейти на сайт</a>
                    </div>
                </div>
            
                <div className={styles.flex}>
                    <div className={styles.left}>
                        <div className={styles.flex}>
                            <button className={styles.liv} onClick={leftRoom}>
                            <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.10018 10.6125L5.93768 15.5C6.05388 15.6172 6.19213 15.7101 6.34446 15.7736C6.49678 15.8371 6.66016 15.8697 6.82518 15.8697C6.99019 15.8697 7.15358 15.8371 7.3059 15.7736C7.45822 15.7101 7.59648 15.6172 7.71268 15.5C7.82984 15.3838 7.92283 15.2455 7.98629 15.0932C8.04975 14.9409 8.08243 14.7775 8.08243 14.6125C8.08243 14.4475 8.04975 14.2841 7.98629 14.1318C7.92283 13.9795 7.82984 13.8412 7.71268 13.725L3.26268 9.25H28.7502C29.0817 9.25 29.3996 9.1183 29.6341 8.88388C29.8685 8.64946 30.0002 8.33152 30.0002 8C30.0002 7.66848 29.8685 7.35053 29.6341 7.11611C29.3996 6.88169 29.0817 6.75 28.7502 6.75H3.18768L7.71268 2.225C7.93429 1.99253 8.05792 1.68367 8.05792 1.3625C8.05792 1.04132 7.93429 0.732467 7.71268 0.499997C7.59648 0.382836 7.45822 0.289843 7.3059 0.226382C7.15358 0.162922 6.99019 0.130249 6.82518 0.130249C6.66016 0.130249 6.49678 0.162922 6.34446 0.226382C6.19213 0.289843 6.05388 0.382836 5.93768 0.499997L1.10018 5.3125C0.397927 6.01562 0.003479 6.96874 0.003479 7.9625C0.003479 8.95625 0.397927 9.90937 1.10018 10.6125Z" fill="#2C4EC5"/>
                            </svg>

                                Назад
                            </button>
                        </div>
                       
                    </div>
                    <div className={styles.right}>
                        <div className={styles.grids}>
                            <h1>Краткая информация</h1>
                            <div className={styles.white}>
                                <div>
                                    <h4>
                                    Статус конкурса:
                                    Активный
                                    </h4>
                                    <p>
                                        {post.statusdata}
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                    Срок выполнения гранта:
                                    </h4>
                                    <p>
                                        {post.crokvip}
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                    Размер гранта:
                                    </h4>
                                    <p>
                                        {post.price}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1>Основные сведения о гранте</h1>
                                <div className={styles.texts}>
                                    {post.opis}
                                </div>
                            </div>
                            <div>
                                <h1>Требования для участия</h1>
                                <div className={styles.footer}>
                                    {post.trebov}
                                </div>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                        
                    </div>
                        <div className={styles.razde}>
                            <h1>Разделы</h1>
                            <div className={styles.razdel}>
                                <ul>
                                    <li>
                                    1. Краткая информация
                                    </li>
                                    <li>
                                    2. Основные сведения о гранте
                                    </li>
                                    <li>
                                    3. Требования для участия
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
        
        ))} </div> : <div>Loading...</div>
    )
}

export default Start