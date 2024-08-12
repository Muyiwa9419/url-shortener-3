import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import { serverUrl } from '../../helpers/Constant';
import DataTable from '../DataTable/DataTable';
import axios from 'axios';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
    const fetchTableData = async () => {
        const response = await axios.get(`${serverUrl}/shortUrl`);
   console.log('The response from server is : ', response)
    setData(response.data);
};

React.useEffect(() =>{
    fetchTableData();
}, []);
  return (
    <>
        <FormContainer/>
        <DataTable data={data}/>
    </>
  );
};

export default Container;
