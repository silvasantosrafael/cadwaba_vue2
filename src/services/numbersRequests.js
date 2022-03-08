import {api} from "./api";
const header = { "Content-Type": "application/x-www-form-urlencoded" }

export default {
    
    getNumber: (id) => {
        return api.get('/Numero/' + id)
    },

    getAllNumbers: () => {
        return api.get('/Numero')
    },

    insertNumber: (data) => {
        return api.post('/Numero', data, header)
    },

    deleteNumber: (id) => {
        return api.delete('/Numero/' + id)
    },
    
    updateNumber: (data) => {
        return api.put('/Numero/',data, header)
    }
}