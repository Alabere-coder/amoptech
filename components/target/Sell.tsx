import React from 'react'
import { useState } from 'react';
import ButtonPrimary from '../ButtonPrimary';

const Sell = ({ options }: { options: string[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
        <button onClick={() => setIsExpanded(true)}>Sell</button>
        {isExpanded &&
            <div>
                <ul>
                    {
                        options.map( option => (
                            <li key={option}>{option}</li>
                        ))
                    }
                </ul>
                <ButtonPrimary btnText={'Sell Now'} />
            </div>
        }
    </div>
  )
}

export default Sell