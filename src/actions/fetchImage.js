const api1 = "https://api.unsplash.com/collections/1580860/photos"
const api2 = "https://api.unsplash.com/collections/139386/photos"

export const fetchFirst = async() =>{
    return new Promise(async(resolve,reject)=>{
        fetch(api1 , {
            method:'GET',
            headers:{
                'Authorization':'Client-ID IZODF7iOjEUH4k_q7Dr22sgoX--YGQBttrDKTE3F9s0' ,
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then((res) => res.json())
        .then((res)=>{
            resolve(res)
            })
          .catch((err)=>{
              reject(err)
            })
    });

    return promise;
}

export const fetchSecond = () =>{
    return new Promise((resolve,reject)=>{
        fetch(api2 , {
            method:'GET',
            headers:{
                "Authorization":"Client-ID IZODF7iOjEUH4k_q7Dr22sgoX--YGQBttrDKTE3F9s0"
            }
        }).then((res) => res.json())
        .then((res)=>{
            resolve(res)
            })
          .catch((err)=>{
              console.log("Err" , err)
              reject(err)
            })
    });

    return promise;
}