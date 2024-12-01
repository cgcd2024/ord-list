import './App.css';

function App() {
  const characters = [
    { name: "아냐 포저 작은 악마", ch_id: "341" },
    { name: "쥬얼리 보니 대식가", ch_id: "330" },
    { name: "알비다 쇠몽둥이", ch_id: "331" },
  ];

  const p_characters = [
    { name: "샹크스 마린포드 정상해전 종결자", ch_id: "205" },
    { name: "니코 로빈 오하라", ch_id: "197" },
    { name: "센고쿠 전 해군 원수", ch_id: "110" },
    { name: "X-드레이크 알로사우르스", ch_id: "274" },
    { name: "유스타드 캡틴 키드", ch_id: "102" },
    { name: "쿠잔 해군대장 아오키지", ch_id: "77" },
    { name: "크로커타일 Mr.0", ch_id: "68" },
    { name: "페로나 홀로홀로열매", ch_id: "86" },
  ];

  return (
    <div>
      <Header />
      <Title />
      {characters.map((char, index) => (
        <Container key={index} name={char.name} ch_id={char.ch_id} />
      ))}
      <div className="title-spacing"></div>
      <Title1 />
      {p_characters.map((char, index) => (
        <PContainer key={index} name={char.name} ch_id={char.ch_id} />
      ))}
    </div>
  );
}

function Header() {
  return <h1>React 프로그래밍</h1>;
}

function Title() {
  return (
    <div className="title-new">
      원피스 랜덤 디펜스 <span className="small-text">Ver 1.0001</span> New 캐릭터
    </div>
  );
}

function Container({ name, ch_id }) {
  return (
    <div className="container">
      <a href={`https://ordsearch.net/characters/${ch_id}`}>
        <img
          src={`https://ordsearch.speedgabia.com/images/units/ord/${ch_id}.png?id=20240922115103`}
          alt={name}
        />
      </a>
      <div>{name}</div>
    </div>
  );
}

function Title1() {
  return (
    <div className="title-patch">
      원피스 랜덤 디펜스 <span className="small-text">Ver 1.0001</span> 바뀐 캐릭터
    </div>
  );
}

function PContainer({ name, ch_id }) {
  return (
    <div className="container">
      <a href={`https://ordsearch.net/characters/${ch_id}`}>
        <img
          src={`https://ordsearch.speedgabia.com/images/units/ord/${ch_id}.png?id=20240922115103`}
          alt={name}
        />
      </a>
      <div>{name}</div>
    </div>
  );
}

export default App;
