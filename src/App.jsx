export default function App() {
  const [counter, setCounter] = React.useState(0);
  const plusClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button onClick={plusClick}>더할게요</button>{" "}
        <button>뺄게요</button>
        <button>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{counter}</p>
      </div>
    </div>
  );
}
