import React, { useState } from 'react'
import ButtonPrimary from '../ButtonPrimary';

const Repaire = ({ options }: { options: string[] }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    
  return (
    <div>
        <button onClick={() => setIsExpanded(true)}>Repaire</button>
        {isExpanded &&
            <div>
                <ul>
                    {
                        options.map( option => (
                            <li key={option}>{option}</li>
                        ))
                    }
                </ul>
                <ButtonPrimary btnText={'Repaire Now'} />
            </div>
        }
    </div>
  )
}

export default Repaire