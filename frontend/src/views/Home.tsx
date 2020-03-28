import React, { useRef, useEffect, useState } from 'react';

type HomeProps = {
  history: {
    push: Function;
  };
};

const Home = ({ history: { push } }: HomeProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [userName, setUserName] = useState('');
  const mousePress = (e: React.MouseEvent) => {
    if (userName === '') return alert('이름을 입력하세요!');
    enterRoom();
  };
  const keywordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    if (userName === '') return alert('이름을 입력하세요!');
    enterRoom();
  };
  const enterRoom = () => {
    push(`/@${userName}`);
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, [nameRef]);
  document.title = '맥실 출결';

  return (
    <div className="index">
      <div className="background">
        <div className="box">
          <div className="title">
            <h1>맥출</h1>
          </div>
          <div className="input">
            <input
              type="text"
              id="name"
              placeholder="Put your name."
              ref={nameRef}
              value={userName}
              onChange={e => setUserName(e.target.value)}
              onKeyPress={keywordKeyPress}
            />

            <button type="submit" id="btn" onClick={mousePress}>
              <span>입실</span>
            </button>
          </div>
          <p className="sign">
            <a href="/dev">by sangho</a>
          </p>
          <ul className="decription">
            <li>- 불편한 점, 추가하고 싶은 점 알려주기!</li>
            <li>
              - 결석일수가 15일 초과할 시 <span>퇴출!</span>
            </li>
            <li>
              - 회비 미납일이 1달을 초과할 시 <span>퇴출!</span>
            </li>
            <li>- 작업실 깨끗하게 사용합시다!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
