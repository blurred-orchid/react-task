import axios from "axios";
const url = "https://crudcrud.com/api/0e3529f94fe24548a76dfec7ed9b93f5";

export default class PostService{
    static  getAll(callback, onError){
         axios.get(url + "/channel")
        .then(
            callback
            ).then(() => console.log(callback))
        .catch((error) => onError(error));       
    }

    static getById(id, callback, onError){
        axios.get(url + `/channel/${id}`)
        .then(callback).then(() => console.log(callback))
        .catch((error) => onError(error));
    }

    static  save(data, callback, onError){
        const headers = {"Content-Type": "application/json"}

        axios.post(url + '/channel', data, {headers:headers})
        .then(callback)
        .catch((error) => onError(error));
    }

    static async edit(id, data, callback, onError){
        axios.put(url + `/channel/${id}`, data)
        .then(callback)
        .catch((error) => onError(error));
    }

    static async update(id, data, callback, onError){
        // метод не поддерживается сервисом
        return this.edit(id, data, callback, onError); 
    }

    static async delate(id, callback, onError){
        return await axios.delete(url + `/channel/${id}`)
        .then(callback)
        .catch((error) => onError(error));
    }
}