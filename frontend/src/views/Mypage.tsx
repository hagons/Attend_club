import React from 'react';

type Props = {
  match: { params: { user: String } };
};

const Mypage = ({
  match: {
    params: { user }
  }
}: Props) => {
  // var status = '= status ';
  //     if(status=='2'){
  //       new Audio('/sound/1.mp3').play()
  //       // alert('업데이트 되었습니다.');
  //     }else if(status=="0"){
  //       new Audio('/sound/2.wav').play()
  //       // alert('출근하였습니다');
  //     }else if(status=="1"){
  //       new Audio('/sound/3.wav').play()
  //       // alert('퇴근하였습니다');
  //     };
  //     if( $("select[name=in_hour] option:selected").val()==0 && $("select[name=in_min] option:selected").val()==0 ){
  //       show(true);
  //     };
  //     function show(bul){
  //       if($("input:checkbox[id='night']").is(":checked")==true||bul==true){
  //         $('.click_night').css("display","none");
  //         $("input:checkbox[id='night']").prop("checked", true);
  //       }else{
  //         $('.click_night').css("display","block");
  //       };
  //     };
  //     $( "#night" ).click(function(){show(false);});

  return (
    <div className="my">
      <div className="title">
        <span>{user}</span> 고객님, 환영합니다!
      </div>

      <div className="aticle">
        <div className="aticle_input">
          <form action="/update" method="post">
            <ul style={{ display: 'none' }}>
              <li>
                <input
                  type="text"
                  name="check_id"
                  value="= rows[0].check_id "
                />
              </li>
              <li>
                <input type="text" name="people_id" value="= people_id " />
              </li>
              <li>
                <input type="text" name="name" value="= rows[0].name " />
              </li>
              <li>
                <input
                  type="text"
                  name="ymd"
                  value="= print[i].print_time.slice(0,8) "
                />
              </li>
            </ul>

            <ul className="input_title">
              <li></li>
            </ul>

            <ul>
              <li> 월</li>
              <li> 일</li>
              <li>
                <select name="= print[i].hour ">
                  <option value="= j ">a</option>
                </select>{' '}
                시
              </li>
              <li>
                <select name="= print[i].min ">
                  <option value="= j ">b</option>
                </select>{' '}
                분
              </li>
              <li className="field">
                <input
                  type="text"
                  name="= print[i].co "
                  value="= print[i].print_co "
                  placeholder="사유"
                />
              </li>
            </ul>

            <ul className="edit_btn">
              <li>
                <input type="checkbox" name="night" id="night" />
                <label htmlFor="night">밤샘</label>
              </li>
              <li>
                <button>수정하기</button>
              </li>
            </ul>
          </form>
        </div>

        <div className="btn">
          <ul className="btn_list">
            <li>
              <a href="/= rows[0].name ">출결 페이지로 돌아가기</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
