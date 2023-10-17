'use client'
import { useState } from 'react';
import './globals.css'

export default function Home() {
  const [lotinText, setLotinText] = useState('');
  const [krillText, setKrillText] = useState('');
  const [textteskariText, settextteskariText] = useState('');

  const translateToKrill = () => {
    const translationMap = {
      'a': 'а',
      'A': 'A',
      'b': 'б',
      'B': 'Б',
      'd': 'д',
      'D': 'Д',
      'E': 'E',
      'e': 'e',
      'F': 'Ф',
      'f': 'ф',
      'G': 'Г',
      'g': 'г',
      'H': 'Ҳ',
      'h': 'ҳ',
      'I': 'И',
      'i': 'и',
      'J': 'Ж ',
      'j': 'ж',
      'K': 'К',
      'k': 'к',
      'L': 'Л',
      'l': 'л',
      'M': 'М',
      'm': 'м',
      'N': 'Н',
      'n': 'н',
      'O': 'О',
      'o': 'о',
      'P': 'П',
      'p': 'п',
      'Q': 'Қ',
      'q': 'қ',
      'R': 'Р',
      'r': 'р',
      'S': 'C',
      's': 'c',
      'T': 'Т',
      't': 'т',
      'U': 'У',
      'u': 'у',
      'V': 'В',
      'v': 'в',
      'X': 'X',
      'x': 'x',
      'Y': 'Й',
      'y': 'й',
      'Z': 'З',
      'z': 'з',
      'SH': 'Ш',
      'sh': 'ш',
    };

    const translatedText = lotinText
      .split('')
      .map((char) => translationMap[char] || char)
      .join('');
    reverseString(lotinText)
    setKrillText(translatedText);
  };

  function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    settextteskariText(joinArray);

  }

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lotin-Krill translator </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label htmlFor="text" className="leading-7 text-sm text-gray-600">Uzbek Latin</label>
              <textarea
                value={lotinText}
                onChange={(e) => setLotinText(e.target.value)}
                placeholder="Matnni kiriting..."
                id="text" name="text" className="w-full h-96 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="text" className="leading-10 text-sm text-gray-600">Uzbek Krill</label>
              <textarea
                value={krillText}
                readOnly
                placeholder="Matnning kirilchasi..."
                id="text" name="text" className="w-full h-96 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative flex-grow w-full">
              <label htmlFor="text" className="leading-10 text-sm text-gray-600">Uzbek Latin teskarisi</label>
              <textarea
                value={textteskariText}
                readOnly
                placeholder="Matnning teskari..."
                id="text" name="text" className="w-full h-96 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

              </textarea>
            </div>
          </div>
          <button className="w-auto flex flex-col m-auto justify-center text-white  bg-indigo-500 border-0 py-2 px-10 mt-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={translateToKrill}>Natija</button>

        </div>
      </section>

    </>
  )
}
