$(document).ready(function(){

    var $character_arr = [
        ["cha_01.jpg","얼치기 도사 무륵 역 (류준열)",`"무릇 도술이란 마른 하늘에 비가 내리고..."`],
        ["cha_02.jpg","가드 역 (김우빈)",`"난 죄수를 관리하는 가드야 탈옥하면 내가 다시 잡아서 가둬"`],
        ["cha_03.jpg","천둥쏘는 처자 이안 역 (김태리)",`"저놈들은 내가 처리해야해! 내 걸 뺐길 수는 없잖아"`],
        ["cha_04.jpg","형사 문도석 역 (소지섭)",`"네가 걱정하는 일이 벌어지면 아저씨 불러 경찰이니까"`],
        ["cha_05.jpg","신선 흑설 역 (염정아)",`"이것은 이름하여 다뉴세문경"`],
        ["cha_06.jpg","신선 청운 역 (조우진)",`"우리는 일단 물건이나 열심히 파는 척하면서 자장이란 놈이 어떤 놈인지 알아봅시다"`],
        ["cha_07.jpg","자장법사 역 (김의성)",`"저희 밀본이 동행을 요청해도 될런지요? 쫓아라! 신검은 내게 가져오고..."`],
    ];
    
    for(v of $character_arr){
        $("#character .wrap").append(`
            <div class="box">
                <div class="img" style="background-image:url(./img/${v[0]})"></div>
                <div class="txt">
                    <p>${v[1]}</p>
                    <div class="cont">
                        <h3>${v[2]}</h3>
                    </div>
                </div>
            </div>
        `);
    }

});