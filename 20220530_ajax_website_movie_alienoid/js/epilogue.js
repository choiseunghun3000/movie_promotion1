$(document).ready(function(){

    var $epilogue_arr = [
        ["ep_top_03.png","한국의 예전 도술의 세계와 하드한 SF적인 세계가 만났을 때의 재미, 이질적인 것들이 결합되는 묘미를 즐길 수 있다고 생각하거든요"],
        ["ep_top_02.png","네가 만일에 서른 살이야 정말 하고 싶은 걸 만들어봐 그렇다면 나는 아주 어렸을 때부터 하고 싶었던 외계인 이야기를 해보자"],
        ["ep_top_01.png","전우치가 끝나고 난 다음에 도술의 세계라고 하는 판타지적인 세계를 되게 좋아한다는 걸 느꼈어요"],
    ];
    
    for(v of $epilogue_arr){
        $("#epilogue .wrap").prepend(`
            <div class="bx">
                <img src="./img/${v[0]}" alt="">
                <div class="text">
                    <p>${v[1]}</p>
                </div>
            </div>
        `);
    }

});