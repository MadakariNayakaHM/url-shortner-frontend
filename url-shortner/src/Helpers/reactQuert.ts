import axios from 'axios';
import { serverUrl } from './constant';
import {  useMutation, useQuery, useQueryClient } from 'react-query';


// Define your mutation function for making POST requests
export const useShortenUrl = () => {
    const queryClient =useQueryClient()
  return useMutation((fullUrl: string) => {
    return axios.post(`${serverUrl}/shortUrl`, { fullUrl });
  },{
    onSuccess:()=>{ queryClient.invalidateQueries(["getUrl"])}  });
};

export const useGetAllUrl =()=>{
    return useQuery(["getUrl"], ()=>{return axios.get(`${serverUrl}/shortUrl`)})
}

export const useDeleteUrl= ()=>{
    const queryClient =useQueryClient()
    return useMutation(async (id:string)=>{
        return await axios.delete(`${serverUrl}/shortUrl/${id}`)
    },{
        onSuccess:()=>{
            queryClient.invalidateQueries(['getUrl'])
        }
    })
}