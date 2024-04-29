
import httpInstance from "@/utils/http"
export const getNewAPI=()=>{
    return httpInstance({
        url:'/home/new'
    })
}