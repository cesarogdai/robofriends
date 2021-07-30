import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className='tc'>
        <input 
        className='pa3 bab b--green bg-lightest-blue'
        type='search' 
        placeholder='Busca un Robot'
        onChange={searchChange}
        />
        </div>
    );
}
export default SearchBox;