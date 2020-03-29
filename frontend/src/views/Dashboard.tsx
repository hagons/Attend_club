// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Description from '../components/home/Description';

type LoginProps = {
  match: { params: { user: String } };
};

const Login = ({
  match: {
    params: { user }
  }
}: LoginProps) => {
  document.title = '출석하기';

  return (
    <div className="login">
      <div className="background">
        <div className="box">
          <div className="title">
            <h1>
              <span>{user}</span>의 <br />
              출석하기
              <br />
              사이트
            </h1>
          </div>

          <div className="input">
            <button id="upload">
              <span>출근</span>
            </button>
            <button id="upload">
              <span>퇴근</span>
            </button>
          </div>

          <ul className="btn">
            <li>
              <Link to={`/mypage/@${user}`}>
                <span>리스트보기</span>
              </Link>
            </li>
            <li>
              <Link to="/lists">
                <span>전체리스트</span>
              </Link>
            </li>
            <li>
              <Link to="/">로그아웃</Link>
            </li>
          </ul>

          <Description />
        </div>
      </div>
    </div>
  );
};

export default Login;
