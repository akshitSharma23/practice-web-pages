var k=0;
$("#add").on("click",function(){
    k++;
    $("#k").append('<div class="row"><div class="col"><input type="text" placeholder="name"> </div><div class="col"><input type="text" placeholder="description"> </div><div class="col"><input type="text" placeholder="amount"> </div><div class="col"><input class=rembtn  type="button" value="remove"></input> </div></div>');
});
$(document).on("click",".rembtn",function(){
     this.closest(".row").remove();
});