import React, { useState } from 'react';

const Practice1 = () => {
    const [inputValue, setInputValue] = useState('');
    const [randomArray, setRandomArray] = useState();
    console.log(randomArray);

    // ساختن آرایه ی تصادفی
    const generateRandomArray = (size) => {
        let randomArray = [];
        for (let i = 0; i < size; i++) {
            let innerArray = [];
            for (let j = 0; j < size; j++) {
                innerArray.push(Math.floor(Math.random() * 1000) + 1);
            }
            randomArray.push(innerArray);
        }
        return randomArray;
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        const size = parseInt(inputValue);
        if (!isNaN(size)) {
            const randomArray = generateRandomArray(size);
            setRandomArray(randomArray);
            // اینجا می‌توانید آرایه تصادفی ایجاد شده را در جایی نمایش دهید
            // برای مثال می‌توانید آن را درون div با id="practice1" قرار دهید
        }
        setInputValue(''); // خالی کردن فیلد ورودی
    };

    // نمایش بزرگترین اعداد در آرایه 
    function largestOfFour(arr) {
        const newArry = [];
        if (arr && arr.length) {
            // انجام عملیات بر روی myArray.length
            for (let i = 0; i < arr.length; i++) {
                const max = Math.max(...arr[i]);
                newArry.push(max);
            }
        } else {
            // هندل کردن حالتی که myArray یا آن دارای مقداری نیست یا طول آن صفر است
            return newArry;
        }
        console.log(newArry);
        return newArry;
    }

    return (
        <div className="item" id='practice1'>
            <h2>&spades; Return Largest Numbers in Arrays</h2>
            <h4>By entering the desired number from 2 to 6, we create a nested array. The number of sub-arrays formed is the number you entered.
                At the end, the bot finds all the big numbers in each subarray and returns it in a new array.
            </h4>
            <div className='content'>
                <div className='content-section1'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '2px dotted', paddingBottom: '1rem' }}>
                        <section>
                            <label htmlFor="num">Number:</label>
                            <input type="number" name='num' min='2' max='6' placeholder='2' onChange={(e) => handleInputChange(e)} />
                        </section>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    <div>
                        <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Random Array: </span>
                        <span>{JSON.stringify(randomArray)}</span>
                    </div>
                </div>
                <div className='content-section2'>
                    <span>New Array :</span>
                    <span>{JSON.stringify(largestOfFour(randomArray))}</span>
                </div>
            </div>
        </div>
    );
};

export default Practice1;