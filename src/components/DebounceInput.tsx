
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const DebounceInput: React.FC = () => {

  const [value, setValue] = useState<string>('')
  const debounceSearch = useDebounce(fetchTodos, 500)

  async function fetchTodos(): Promise<Todo[]> {
    const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    console.log('1')
    return response.data;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value)
    debounceSearch()
  }
  return (
    <div>
      <input type="text" value={value} onChange={onChange}/>
    </div>
  );
}

export default DebounceInput