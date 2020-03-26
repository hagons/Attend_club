// @flow
import React from 'react';

type Props = {};

const Login = (props: Props) => {
  document.title = '로긴';

  return (
    <div className="login">
      <div className="background">
        <div className="box">
          <div className="title">
            <h1>
              <span>name</span>의 <br />
              출석하기
              <br />
              사이트
            </h1>
          </div>

          <div className="input">
            <form action="/insert" method="post">
              <input type="text" name="people_id" style={{ display: 'none' }} />
              <input type="text" name="name" style={{ display: 'none' }} />
              <input type="text" name="check_id" style={{ display: 'none' }} />
              <button id="upload">
                <span>출근</span>
              </button>
              <button id="upload">
                <span>퇴근</span>
              </button>
            </form>
          </div>

          <ul className="btn">
            <li>
              <a href="/my/<%= people_id %>">
                <span>리스트보기</span>
              </a>
            </li>
            <li>
              <a href="/sort/<%= name %>">
                <span>전체리스트</span>
              </a>
            </li>
          </ul>

          <p className="sign">
            <a href="/dev">by Sangho</a>
          </p>
        </div>

        <ul className="decription">
          <li>
            - 현재 사이트를 <span>즐겨찾기</span> 하셔서 사용하세요!
          </li>
          <li>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
