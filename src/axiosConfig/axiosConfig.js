import axios from "axios";


const apiConfig=axios.create({
    // baseURL:"http://localhost:9000",
    baseURL:"https://attendancecamdashboardserver.herokuapp.com",
    
   
})

export default apiConfig