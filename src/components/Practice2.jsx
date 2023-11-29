import React, { useState } from 'react';

const Practice2 = () => {
    const [text, setText] = useState('');
    const [word, setWord] = useState('');

    //تاتع متنی که میگیرد و چک میکند که ایا اخر متن با کلمه ای مورد نظر ختم میشود
    function confirmEnding(str, target) {
        return str.slice(str.length - target.length) === target ?  'true' : 'false';
    }

    return (
        <div className="item" id='practice2'>
            <h2>&clubs; Confirm the Ending</h2>
            <h4>
                You enter text and a word, then the bot checks if a string (first argument, str) ends with the given target string (second argument, target).
            </h4>
            <div className='content'>
                <div className='content-section1'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '2px dotted', paddingBottom: '1rem' }}>
                        <section>
                            <label htmlFor="text">Text:</label>
                            <input type="text" name='text' placeholder='Enter Text ...' style={{ width: '80%' }} onChange={(e) => setText(e.target.value)} />
                        </section>
                        <section>
                            <label htmlFor="word">Word:</label>
                            <input type="text" name='word' placeholder='Enter Word ...' style={{ width: '80%' }} onChange={(e) => setWord(e.target.value)} />
                        </section>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <div>
                            <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Text :</span>
                            <span>{text}</span>
                        </div>
                        <div>
                            <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Word :</span>
                            <span>{word}</span>
                        </div>
                    </div>
                </div>
                <div className='content-section2'>
                    <span></span>
                    <span>{confirmEnding(text, word)}</span>
                </div>
            </div>
        </div>
    );
};

export default Practice2;
