import React, { useRef, useEffect, useState } from 'react';
import Description from '../components/home/Description';
import Title from '../components/home/Title';
import { Link } from 'react-router-dom';

type HomeProps = { history: { push: Function } };

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
          <Title />

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

            <ul>
              <li>
                <button type="submit" id="btn" onClick={mousePress}>
                  <span>입실</span>
                </button>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
            </ul>
          </div>

          <Description />
        </div>
      </div>
    </div>
  );
};

export default Home;
