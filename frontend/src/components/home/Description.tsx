import React from 'react';

const Description = () => {
  return (
    <>
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
    </>
  );
};

export default Description;
