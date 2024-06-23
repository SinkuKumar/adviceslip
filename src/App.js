import { useEffect, useState } from "react";

export default function advice() {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("Click button to get a new advice!");

  async function getAdvice() {
    const adviceSlipData = await fetch("https://api.adviceslip.com/advice");
    const adviceSlipJson = await adviceSlipData.json();
    setAdvice(adviceSlipJson.slip.advice);
    setCount(() => count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <AdviceCount count={count} />
    </div>
  );
}

function AdviceCount(props) {
  return <p>You have got {props.count} advice so far.</p>;
}
