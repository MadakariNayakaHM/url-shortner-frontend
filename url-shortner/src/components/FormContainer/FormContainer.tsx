import * as React from 'react';
import { useShortenUrl } from '../../Helpers/reactQuert';

interface IFormContainerProps {
}


const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    const [fullUrl, setFullUrl]= React.useState<string>("")
    const handleOnChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setFullUrl(e.target.value)
    }
 

const {mutate} = useShortenUrl()
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        mutate(fullUrl,{
            onError:()=>{console.log("error at posting")},
            onSuccess:(data)=>{console.log(data)}
        })
       
    }
       
  return (
    
    <>

    <div className="cntainer ">
        <div className="bg-banner my-8 rounded-xl  bg-cover bg-center">
            <h2 className='text-xl text-center text-white'>Url Shortner</h2>
            <p className='font-bold text-white text-center py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo molestias, maiores consectetur minus harum eos ipsa cum excepturi perferendis!</p>
            <form className='cotainer flex justify-center  gap-40' onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your url' value={fullUrl} onChange={handleOnChange}required className='text-base text-center text-black my-5 w-1/3 h-14 rounded-xl' />
                <button type='submit' className='text-white bg-red-400 h-12 my-6 rounded-xl w-32 hover:bg-white hover:text-red-400'>Shorten URL</button>
            </form>

        </div>
    </div>
    </>
  );
};

export default FormContainer;
