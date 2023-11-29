import React, { useState } from 'react';

const Practice3 = () => {
    const [text, setText] = useState('');
    const [num, setNum] = useState(2);

    // تابع تکرار کننده ی متن
    function repeatStringNumTimes(str, num) {
        if (num <= 0) {
            return "";
        }
        let repeatedString = "";
        for (let i = 0; i < num; i++) {
            repeatedString += str + ',';
        }
        return repeatedString;
    }

    return (
        <div className="item" id='practice3'>
            <h2>&hearts; Repeat a String</h2>
            <h4>
                You enter a short sentence, and then choose a number between 2 and 5
                This bot repeats a given string (first argument) for num times the given number (second argument). If num is not a positive number, it returns an empty string.
            </h4>
            <div className='content'>
                <div className='content-section1'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '2px dotted', paddingBottom: '1rem' }}>
                        <section>
                            <label htmlFor="text">Text:</label>
                            <input type="text" name='text' placeholder='Enter Text ...' style={{ width: '80%' }} onChange={(e) => setText(e.target.value)} />
                        </section>
                        <section>
                            <label htmlFor="num">Number:</label>
                            <input type="number" name='num' min={2} max={5} placeholder='2' style={{ width: '80%' }} onChange={(e) => setNum(e.target.value)} />
                        </section>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <div>
                            <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Text :</span>
                            <span>{text}</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Number :</span>
                            <span>{num}</span>
                        </div>
                    </div>
                </div>
                <div className='content-section2'>
                    <span>New Text :</span>
                    <span>{ repeatStringNumTimes(text, num) }</span>
                </div>
            </div>
        </div>
    );
};

export default Practice3;
