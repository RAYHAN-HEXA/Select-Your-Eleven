import React from 'react';

const SelectedPlayerCard = ({player,removePlayer}) => {
 const {name
,image,
battingStyle

} 

= player;

const handleRemove = ()=>{
    removePlayer(player)
}
    return (
        <div>
               <div className=' mt-5 flex justify-between border-1 border-gray-200 rounded-xl items-center  p-3'>
             <div className=' flex gap-2' >
                <div>
<img src={image} className='w-[50px] h-[50px] rounded-xl ' alt="" />
                </div>
              
<div className='' >
    <h1>{name}</h1>
<p className='text-xs text-start mt-2'>{battingStyle}</p>
</div>
                
             </div>
             <div onClick={handleRemove} >
<img  src="https://i.ibb.co.com/Mkd1kg6d/Frame.png" alt="" />
             </div>
        </div>
        </div>
    );
};

export default SelectedPlayerCard;