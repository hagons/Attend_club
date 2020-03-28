import React from 'react';

const CheckedLists = () => {
  return (
    <>
      <table className="row_data_title">
        <thead>
          <tr>
            <td rowSpan={2} className="name">
              이름
            </td>
            <td className="in">출근시간</td>
            <td className="out">퇴근시간</td>
          </tr>
          <tr>
            <td>수정사유</td>
            <td>수정사유</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="name" rowSpan={2}>
              a
            </td>
            <td className="in <%= in_class %>">1일 1</td>
            <td className="out <%= out_class %>">1</td>
          </tr>
          <tr>
            <td className="in <%= in_class %>">aa</td>
            <td className="<%= out_class %>">aa</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CheckedLists;
