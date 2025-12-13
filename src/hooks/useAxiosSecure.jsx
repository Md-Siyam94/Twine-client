import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_baseAPI}`
})

const useAxiosSecure = () => {
    const {logOutUser} = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      },)

      axiosSecure.interceptors.response.use(function(response){
        return response
      }, async(error)=>{
        console.log(error);
        const status = error.response.status;
        if(status == 401 || status === 403){
            // logout user
            Swal.fire({
                title:  `${error.message}`,
                text: `${error.response.data.message}`,
                icon: 'error',
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            await logOutUser()
            navigate('/login')

        }
      })
    
    return axiosSecure;
};

export default useAxiosSecure;