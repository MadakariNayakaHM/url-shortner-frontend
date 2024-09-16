import * as React from 'react';

interface IDataTableProps {
    renderTabledata: React.ReactNode
}



const DataTable: React.FunctionComponent<IDataTableProps> = ({renderTabledata}) => {

  
    return(
    <>
    <div className='container mx-auto pt-2 pb-10'>
        <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
            <table className='w-full table-fixed text-sm text-left rtl:text-right'>
                <thead className='text-md uppercase text-gray-400 bg-gray-950'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-6/12'>FullUrl</th>
                        <th scope='col' className='px-6 py-3 w-3/12'>ShortUrl</th>
                        <th scope='col' className='px-6 py-3 '>Clicks</th>
                        <th scope='col' className='px-6 py-3' >Action</th>
                    </tr>
                </thead>
                <tbody>
                        {renderTabledata}
                </tbody>
            </table>
        </div>
    </div>
    </>
  ) ;
};

export default DataTable;
