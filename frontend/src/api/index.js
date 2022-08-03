import axios from "axios"


const instance = axios.create({
    baseURL:"https://it-crowd-challenge-backend.herokuapp.com"
})

async function get(url){
    try {
        const result = await instance.get(url,{
            withCredentials:true
        })

        return result.data
    } catch (error) {
        throw error.response.data
    }
}

async function post(url,data){
    try {
        const result = await instance.post(url,data,{
            withCredentials:true
        })
    
        return result.data
    } catch (error) {
        throw error.response.data
    }
}

async function put(url,data){
    try {
        const result = await instance.put(url,data,{
            withCredentials:true
        })
    
        return result.data
    } catch (error) {
        throw error.response.data
    }
}


async function deletes(url){
    try {
        const result = await instance.delete(url,{
            withCredentials:true
        })
    
        return result.data
    } catch (error) {
        throw error.response.data
    }
}


export {
    get,
    post,
    put,
    deletes
}