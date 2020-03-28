import React from 'react';
import Ranks from '../components/Ranks';
import Graph from '../components/Graph';
import NonCheckedPerson from '../components/NonCheckedPerson';
import CheckedLists from '../components/CheckedLists';

const Lists = () => {
  // $(function(){
  //   function view_page(num){
  //     var cur_month = $(".current input").val();
  //     if(num==2){
  //       $.post("/row_data",{cur_month:cur_month},function(rows){
  //         $("#view_list_div_2 div").html(rows);
  //       });
  //     }else if(num==3){
  //       $.post( "/not_today", function( rows ) {
  //         $("#view_list_div_3").html( rows);
  //       });
  //     }else if(num==4){
  //       $.post("/excel",{cur_month:cur_month},function(rows){
  //         // if( !rows.indexOf('이전') ){
  //         //   alert(rows);
  //         // }else{
  //           $(location).attr('href',rows);
  //         // }
  //       });
  //     }else if(num==5){
  //       $.post("/add_full_time",{cur_month:cur_month},function(rows){
  //         $("#view_list_div_5").html( rows);
  //       });
  //     }else{
  //       $.post("/graph",{cur_month:cur_month},function(rows){
  //         $("#view_list_div_1").html(rows).promise().done(function(){
  //           for(var i=0;i<$('.gBar').length;i++){
  //             var gBar = $('.gBar').eq(i).css('width');
  //             $(".gBar").eq(i).css('width','0px').animate({ width:gBar },800);
  //           }
  //         });
  //       });
  //     }
  //   };
  //   function pann_open(num){
  //     var pann_open = '#view_list_div_'+num;
  //     $('.r_cell').css('display','none');
  //     if(num==2){
  //       $(pann_open).css('display','block');
  //     }else if(num==3){
  //       $(pann_open).css('display','block');
  //     }else if(num==5){
  //       $(pann_open).css('display','block');
  //     }else{
  //       $(pann_open).css('display','block');
  //     }
  //   };
  //   $(".current input").val( new Date().getMonth() + 1 )
  //   view_page(1);
  //   $( "#target1" ).click(function() {
  //     view_page(1);
  //     pann_open(1);
  //   });
  //   $( "#target2" ).click(function() {
  //     view_page(2);
  //     pann_open(2);
  //   });
  //   $( "#target3" ).click(function() {
  //     view_page(3);
  //     pann_open(3);
  //   });
  //   $( "#target4" ).click(function() {
  //     if( $(".current input").val() > new Date().getMonth() ){
  //       alert('이전 월만 출력할 수 있습니다!')
  //     }else{
  //       view_page(4);
  //     }
  //   });
  //   $( "#target5" ).click(function() {
  //     view_page(5);
  //     pann_open(5);
  //   });
  //   $("#name").keypress(function(e){
  //     if(e.which==13){
  //        $("#target1").click();
  //     };
  //   });
  // });

  return (
    <div className="sort">
      <div className="background">
        <div className="sort_title">
          <a href="/sort<%= '/'+tmp %>/excel">리스트</a>
        </div>
        <div className="sort_list">
          <ul className="sort_filter">
            <li className="current">
              <input type="text" id="name" />
              <span>월</span>
            </li>
            <li>
              <button type="button" id="target1">
                월별참석율
              </button>
            </li>
            <li>
              <button type="button" id="target5">
                누적시간
              </button>
            </li>
            <li>
              <button type="button" id="target2">
                시간기록
              </button>
            </li>
            <li>
              <button type="button" id="target3">
                금일미출석자
              </button>
            </li>
            <li>
              <button type="button" id="target4">
                엑셀다운로드
              </button>
            </li>
          </ul>
          <div id="view_list_div_1" className="r_cell"></div>
          <div
            id="view_list_div_2"
            className="r_cell"
            style={{ display: 'none' }}
          >
            <div className=""></div>
            <h6>
              * <span style={{ color: 'red' }}>빨간색</span>은 수정됨을 표현
              <br />* 시간 역순으로 출력됨.
            </h6>
          </div>
          <div
            id="view_list_div_3"
            className="r_cell"
            style={{ display: 'none' }}
          ></div>
          <div
            id="view_list_div_5"
            className="r_cell"
            style={{ display: 'none' }}
          ></div>
        </div>
        <div className="sort_btn">
          <button type="button" name="button">
            로그인하기
          </button>
        </div>

        <Ranks />
        <Graph />
        <NonCheckedPerson />
        <CheckedLists />
      </div>
    </div>
  );
};

export default Lists;
