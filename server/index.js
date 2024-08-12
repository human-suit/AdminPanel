// подключение модулей
// Создание сервера
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const cors = require('cors')
const app = express();

const route = require('./route')
const { addUser } = require('./users')

app.use(express.json())
app.use(cors( { origin: "*" }))
app.use(route)

// подключение к бд
const db = require('./db.js')
const { log, Console } = require('console')

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})

stat = {pro:[]}

const index = 1

// Тестовая функция для получение всех элементов из бд по определенному id
// [{name: []}, {namestart:[]}, {opis:[]}, {price:[]}, {crokvip:[]},{statusdata:[]},{trebov:[],}]

// async function test(req, res){
   
//     const name = await db.query(`SELECT * FROM public.startaps WHERE id = ${index}`)
//     res = name.rows
//     res.forEach(function(ex) {

//         for (var i = 0; i < stat.length; i++) {
//             delete obj[stat[i]];
//         }

//         var data = {id: [],name: [], namestart:[], opis:[], price:[], crokvip:[],statusdata:[],trebov:[], url: []}
//         data.id.push(ex.id)
//         data.name.push(ex.namekomp)
//         data.namestart.push(ex.namestart)
//         data.opis.push(ex.opisanie)
//         data.price.push(ex.price)
//         data.crokvip.push(ex.crokvip)
//         data.statusdata.push(ex.statusdata)
//         data.trebov.push(ex.trebovaniya)
//         stas.pro.push(data)
//         data = {}
//         console.log(stas)
//         console.log("aaaa");  
//     });
// }

// функция для получение всех элементов из бд отсортерованые в порядке возрастания
async function test2(req, res){
    const name = await db.query('SELECT * FROM public.startaps ORDER BY id ASC ')
    res = name.rows
    stat = {pro:[]}
    // console.log(res)
    res.forEach(function(ex) {
        
        var data = {id: [],name: [], namestart:[], opis:[], price:[], crokvip:[],statusdata:[],trebov:[], url: [], open: []}
        
        data.id.push(ex.id)
        data.name.push(ex.namekomp)
        data.namestart.push(ex.namestart)
        data.opis.push(ex.opisanie)
        data.price.push(ex.price)
        data.crokvip.push(ex.crokvip)
        data.statusdata.push(ex.statusdata)
        data.trebov.push(ex.trebovaniya)
        data.url.push(ex.url)
        data.open.push(ex.open)
        stat.pro.push(data)
        data = {}
        console.log(stat)
        
    });
    
}

// функция для добавления элемента в таблицу из бд
async function addFunc(pars){
    name_title = pars.name_title
    description = pars.description
    name_treb = pars.name_treb
    name_komp = pars.name_komp
    sroki = parseInt(pars.sroki)
    price = parseInt(pars.price)
    // console.log(sroki)
    const name = await db.query(`INSERT INTO startaps (namestart, opisanie, trebovaniya, nameKomp, statusData, crokVip, price, open) values('${name_title}', '${description}', '${name_treb}', '${name_komp}', '07.08.2024-2025', '${sroki}', '${price}', true)`)
    test2() 
}
// функция для удаления элемента в таблице из бд
async function delFunc(pars){
    id = parseInt(pars.del_id)
    const name = await db.query(`DELETE FROM startaps WHERE id='${id}'`)
    test2() 
}

// функция для скрытия элемента из сайта
async function hideFunc(pars){
    id = parseInt(pars.hide_id)
    const name = await db.query(`UPDATE startaps SET open = 'false' WHERE id='${id}'`)
    test2() 
}  
// функция для открытия элемента на сайте
async function openFunc(pars){
    id = parseInt(pars.open_id)
    const name = await db.query(`UPDATE startaps SET open = 'true' WHERE id='${id}'`)
    test2() 
}  
// функция для редактирования элемента в таблице из бд
async function redactFunc(pars){
    id = parseInt(pars.id)
    
    if(Object.keys( pars ).length-2 == 1){
        
        for ( var property in pars ){
            var log = property
            if(log=="name_title"){
                log = 'namestart';
            } else if (log=="description"){
                log = 'opisanie';
            } else if (log=="name_treb"){
                log = 'trebovaniya';
            } else if (log=="name_komp"){
                log = 'nameKomp';
            } else if (log=="sroki"){
                log = 'crokVip';
            } else if (log=="price"){
                log = 'price';
            }
            var str = (`UPDATE startaps SET ${log}  = '${pars[property]}' WHERE id='${id}'`)
            
        }
        const name = await db.query(str)
        test2()

    } else if(Object.keys( pars ).length-2 > 1){
        var main = ""
        var strMain = ""
        kolap = 0
        kol = Object.keys( pars ).length-2
        for ( var property in pars ){
            var log = property
            if(log=="name_title"){
                log = 'namestart';
            } else if (log=="description"){
                log = 'opisanie';
            } else if (log=="name_treb"){
                log = 'trebovaniya';
            } else if (log=="name_komp"){
                log = 'nameKomp';
            } else if (log=="sroki"){
                log = 'crokVip';
            } else if (log=="price"){
                log = 'price';
            } else{
                continue
            }  
            if(kolap == kol-1){
                var str = (`${log} = '${pars[property]}'`)
            } else{
                var str = (`${log} = '${pars[property]}',`)
            }
            main += str+" "
            kolap++
        }
        strMain= "UPDATE startaps SET " + main + ` WHERE id='${id}'`
        const name = await db.query(strMain)
        test2()
    } else{
        Console.log('Error')
    }
    console.log(strMain)
    
}

// как только запускаем сервер выгружаем данные из бд на него 
test2() 
 
// функции для клиент-серверной связи
io.on('connection', (socket)=>{
    
    
    // при заходе на стр отпраляет данные на сервер
    socket.emit('join', stat);
    socket.on('confirmation', () => { 
        
        console.log('The client received the person');
        
    });
    
    socket.on('comp', ind  => { 
        const stas = {pro:[]}
        this.index = ind.from[0]
        console.log(stat.pro[this.index-1]);
        stas.pro.push(stat.pro[this.index-1])
        console.log(stas);
        socket.emit('gg', stas);
    });
    // при нажатии на кнопку отправляеться запрос на сервер на добавления данных в бд
    socket.on('add', ({ values })=>{
        pars = values
        console.log(pars)
        addFunc(pars)

    })
    // запрос на сервер на редактирования данных в бд
    socket.on('redact', ({ values })=>{
        pars = values
        console.log(pars)
        redactFunc(pars)

    })
    // запрос на сервер на удаления данных из бд
    socket.on('del', ({ values })=>{
        pars = values
        console.log(pars)
        delFunc(pars)

    })

    socket.on('hide', ({ values })=>{
        pars = values
        console.log(pars)
        hideFunc(pars)

    })

    socket.on('open', ({ values })=>{
        pars = values
        console.log(pars)
        openFunc(pars)

    })
    // как только пользоатель покидает страницу оповещения на сервер
    io.on('disconnect', ()=>{
        console.log("Disconnect")
    })
})

// на каком порту будет сервер
server.listen(5000, ()=>{
    console.log('Start server')
})