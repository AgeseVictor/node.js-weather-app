var getUser = (id, callBack)=>{

    var user = {
        id:id,
        name:"agese",
    }

    setTimeout(()=>{
        console.log('async working!')
    }, 2000)
    callBack(user);
}

getUser(31, (user)=>{
    console.log('second callback')
    console.log(user)
})