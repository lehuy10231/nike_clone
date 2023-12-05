import React from 'react'

const Button = ({label,iconURL,backgroundColor, textColor, borderColor,fullWidth}) => {
  return (
    <button className= {`flex justify-center items-center gap-2 px-7 border py-4 font-montserrat text-lg leading-none 
      ${backgroundColor 
        ? `${backgroundColor} ${borderColor} ${textColor} ` 
        : 'bg-coral-red text-white border-coral-red '
        
        } rounded-full ${fullWidth && "w-full"}`}>
        {label}
        { iconURL &&
          <img 
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white h-5 w-5'
          >
          </img>
        }
        
    </button>
    
  )
}

export default Button