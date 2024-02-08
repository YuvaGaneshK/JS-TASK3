const url ='https://jsonplaceholder.typicode.com/users';
fetch (url)
.then(result=>{
    if(!result.ok){
        throw new Error('Couldnott fetch data from API URL');

    }
    return result.json();
})
.then(data=>{
    const names = data.map(item=> item.name);
    console.log(names);
    
})
.catch(error=>console.error('Error while fetching data', error));