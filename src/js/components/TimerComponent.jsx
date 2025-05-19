import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const digits = seconds.toString().padStart(6, '0').split('');

    return (
        <div className="timer-container">
            <div className="timer-content">
                <Clock className="timer-icon" />
                <div className="digits-container">
                    {digits.map((digit, index) => (
                        <div key={index} className="digit-box">
                            {digit}
                        </div>
                    ))}
                </div>
            </div>

            <div className='buttonGroup'>
                <button onClick={()=>setSeconds(0)}>Reiniciar Conteo</button>
                <button>Para Contador </button>
                <button>Resumir Contador </button>
            </div>
        </div>
    );
};

export default TimerComponent;
