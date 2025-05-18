import { useState } from 'react';

const outfits = ['red slip dress', 'blue yoga set', 'leopard mini dress', 'black off-shoulder dress', 'purple workout set'];
const backgrounds = ['on a rooftop at sunset', 'in a luxury garden', 'on an urban street', 'in a fitness studio', 'at a rooftop bar at night'];
const motions = ['360-degree turn', 'slow hair flip', 'stretching with arms up', 'walking towards the camera', 'posing then looking back'];

function App() {
  const [outfit, setOutfit] = useState(outfits[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [motion, setMotion] = useState(motions[0]);
  const [result, setResult] = useState('');

  const generate = () => {
    const text = `The same stunning Korean girl in her early 20s with a small head, flawless white skin, F-cup figure, soft makeup, and bright white teeth is wearing a ${outfit}. She is ${background}, and she performs a ${motion}. The camera moves dynamically to highlight her expression and body. The action smoothly loops in 10 seconds.`;
    setResult(text);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Kling Prompt Generator</h1>

      <label className="block mb-1">Outfit</label>
      <select className="w-full p-2 text-black rounded mb-4" value={outfit} onChange={(e) => setOutfit(e.target.value)}>
        {outfits.map((o) => <option key={o}>{o}</option>)}
      </select>

      <label className="block mb-1">Background</label>
      <select className="w-full p-2 text-black rounded mb-4" value={background} onChange={(e) => setBackground(e.target.value)}>
        {backgrounds.map((b) => <option key={b}>{b}</option>)}
      </select>

      <label className="block mb-1">Motion</label>
      <select className="w-full p-2 text-black rounded mb-4" value={motion} onChange={(e) => setMotion(e.target.value)}>
        {motions.map((m) => <option key={m}>{m}</option>)}
      </select>

      <button onClick={generate} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4">Generate Prompt</button>

      {result && (
        <div>
          <label className="block mb-1 font-semibold">Generated Prompt:</label>
          <textarea className="w-full p-3 text-black rounded h-40" value={result} readOnly />
        </div>
      )}
    </div>
  );
}

export default App;