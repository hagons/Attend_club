import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const signupHandler = () => {
    console.log(joinType, name);
  };
  const [joinType, setJoinType] = useState('mac');
  const [name, setName] = useState('');

  return (
    <div className="join">
      <h1>회원 관리</h1>

      <div className="join_up">
        <h2>등록</h2>
        <label>
          <input
            type="radio"
            name="join_type"
            value="mac"
            checked={joinType === 'mac'}
            onChange={() => setJoinType('mac')}
          />
          맥실
        </label>
        <label>
          <input
            type="radio"
            name="join_type"
            value="po"
            checked={joinType === 'po'}
            onChange={() => setJoinType('po')}
          />
          포실
        </label>
        <input
          type="text"
          id="join_names"
          name="join_names"
          placeholder="이름"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button name="button" id="btn_clk" onClick={() => signupHandler()}>
          입력
        </button>
      </div>

      <ul>
        <li>
          <Link to="/">로그인하기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Signup;
