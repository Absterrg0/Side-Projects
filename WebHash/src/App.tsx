import { useState } from "react";
import CryptoJS from 'crypto-js'

function App() {
  const [hash, setHash] = useState<string>("");
  const [input, setInput] = useState<string>("");

  function hashValue() {
    const inpStr = input.toString();
    const hash = CryptoJS.SHA256(inpStr).toString(CryptoJS.enc.Hex);
    setHash(hash);
    return { input: input, hash: hash };
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div>
<div className="min-h-screen flex p-4 justify-center bg-slate-300 items-center">
  <div className="flex flex-col bg-slate-600 p-4 rounded-lg shadow-lg w-96">
    <input
      onChange={inputChange}
      value={input}
      placeholder="Enter input"
      className="p-2 mb-2 rounded border border-slate-400 w-full"
    />
    <button
      onClick={hashValue}
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full"
    >
      Click to Hash
    </button>
    <div className="mt-4 text-white">
      Hashed value is:
      <div className="mt-2 bg-gray-700 p-2 rounded">
        <span className="font-mono break-all">{hash}</span>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
