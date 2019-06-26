import { useState } from 'react';

export const useNumber = (initialValue) => {

  const [ num, setNum ] = useState(0);

  console.log(num);

  return [ num, ({ target: { value }}) => setNum(Number(value)), () => setNum(initialValue) ];


}

