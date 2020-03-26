import React from 'react';

type Props = {
  history: {
    goBack: () => {};
  };
};

const DevelopmentNote = ({ history }: Props) => {
  document.title = '노트';

  const backButton = () => {
    history.goBack();
  };

  return (
    <div className="dev">
      <button onClick={backButton} style={{ fontSize: '1.5em' }}>
        뒤로가기
      </button>
      <div>개발 예정</div>
      <ul></ul>
    </div>
  );
};

export default DevelopmentNote;
