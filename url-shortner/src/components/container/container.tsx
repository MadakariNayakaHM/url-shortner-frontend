import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { useGetAllUrl } from '../../Helpers/reactQuert';
import DataTable from '../DataTable/DataTable';
import { useDeleteUrl } from '../../Helpers/reactQuert';
interface IContainerProps {}


type UrlData = {
  data: {}[],
};

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [urldata, seturlData] = React.useState<UrlData | null>(null);
  const { data, isError, isLoading, refetch } = useGetAllUrl();

  // Update state only when data is available
  React.useEffect(() => {
    if (data?.data) {
      seturlData(data.data);
    }
    console.log(urldata); // Logs updated data
  }, [data]); // Dependency on data to avoid re-renders

  React.useEffect(() => {
    refetch(); // Fetch the data initially
  }, [refetch]); // Run only once on component mount


  const {isError:dError, isLoading:dload, mutate:dmutate} =useDeleteUrl()
  const handleDelete= (e:React.MouseEvent, id:string)=>{
    e.preventDefault()
     dmutate(id)
  }
const renderTable =():React.ReactNode=>{
   return (
   <>
   {
     data?.data.map((e:any, i = e._id)=>{return (<tr key={i}>
        <td>{e.fullUrl}</td>
        <td>{e.shortUrl}</td>
        <td>{e.clicks}</td>
        <td><button onClick={(event)=>{handleDelete(event,e._id)}}>{dload?"in progress":dError?"error in deleting":"delete"}</button></td>
    </tr>)})
   }
   </>
   )
}
  if (isLoading)
    return (
      <>
        <p className="font-bold">Loading</p>
      </>
    );

  if (isError)
    return (
      <>
        <p className="font-bold">Error</p>
      </>
    );

  return (
    <>
      <div className="container">
        <FormContainer />
        <DataTable renderTabledata={renderTable()} />
        
      </div>
    </>
  );
};

export default Container;
