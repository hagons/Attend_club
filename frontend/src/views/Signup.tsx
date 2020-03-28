import React from 'react';

const Signup = () => {
  // $(function(){
  //   $("#btn_clk").click(function(){
  //     $.post("/join", {
  //       join_names:$("#join_names").val().replace(/\s/gi, ''),
  //       join_type:$("#join_type option:selected").val()
  //     }, function(html){
  //       $("#join_names").val("");
  //       alert(html+'님이 성공적으로 입력되었습니다.');
  //     });
  //   });
  //   $(".import").css('display','none');
  //   $("#im_btn_1").click(function(){
  //     $("#im_con_1").toggle();
  //     $.post("/active_down", function(html){
  //       $("#im_con_1").html(html);
  //     });
  //   });
  //   $("#im_btn_2").click(function(){
  //     $("#im_con_2").toggle();
  //     $.post("/active_up", function(html){
  //       $("#im_con_2").html(html);
  //     });
  //   });
  // });

  return (
    <div className="join">
      <h1>회원 관리</h1>
      <div className="join_up">
        <h2>등록</h2>
        <select className="" name="join_type" id="join_type">
          <option value="mac">맥실</option>
          <option value="po">포실</option>
        </select>
        <input
          type="text"
          id="join_names"
          name="join_names"
          placeholder="이름"
        />
        <button name="button" id="btn_clk">
          입력
        </button>
      </div>
      <div className="">
        <h2>
          <a href="#a" id="im_btn_1">
            비활성화 하기
          </a>
        </h2>
        <div id="im_con_1" className="import">
          test 1
        </div>
      </div>
      <div className="">
        <h2>
          <a href="#b" id="im_btn_2">
            비활성화 되살리기
          </a>
        </h2>
        <div id="im_con_2" className="import">
          test 2
        </div>
      </div>
      <ul>
        <li>
          <a href="/">맥실 돌아가기</a>
        </li>
        <li>
          <a href="/po">포실 돌아가기</a>
        </li>
      </ul>
    </div>
  );
};

export default Signup;
