import React, { useState } from 'react';

const Practice4 = () => {
    const [text, setText] = useState('');

    // تابع بزرگ کننده اول کلمه ها
    function titleCase(str) {
        let words = str.toLowerCase().split(" ");

        for (let i = 0; i < words.length; i++) {
            if (words[i]) { // افزودن یک شرط برای بررسی رشته خالی
                words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
        }

        return words.join(" ");
    }

    return (
        <div className="item" id='practice3'>
            <h2>&diams; Title Case a Sentence</h2>
            <h4>
                You enter a short sentence and this bot returns the given string with uppercase letters for each word and the rest of the word in lowercase letters.
            </h4>
            <div className='content'>
                <div className='content-section1'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '2px dotted', paddingBottom: '1rem' }}>
                        <section>
                            <label htmlFor="text">Text:</label>
                            <input type="text" name='text' placeholder='Enter Text ...' style={{ width: '80%' }} onChange={(e) => setText(e.target.value)} />
                        </section>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <div>
                            <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Text :</span>
                            <span>{text}</span>
                        </div>
                    </div>
                </div>
                <div className='content-section2'>
                    <span>New Text :</span>
                    <span>{titleCase(text)}</span>
                </div>
            </div>
        </div>
    );
};

export default Practice4;
