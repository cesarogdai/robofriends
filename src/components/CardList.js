import React from 'react';
import Card from './Card'


const CardList =({robots}) => {
  /* if(true){
       throw new Error('NOOOOOOO');
   }*/
        return  (
            <div>
                {
                    robots.map((user, i) => {
                        //Much Cleaner Code
                        return(
                            <Card
                            key={i}
                            id={robots[i].id}
                            username={robots[i].username}
                            email={robots[i].email}
                            />
                        );
                    })
                    
                }
            </div>
        );
    
}
export default CardList;