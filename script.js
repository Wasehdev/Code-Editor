function updateOutput(){

 $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssp").val() + 
 "</style></head><body>" + $("#htmlp").val() + "</body></html>");

 document.getElementById("outputp").contentWindow.eval($("#jsp").val());

}

$(".btn").hover(function(){
   $(this).addClass("highlighted");
},function(){
   $(this).removeClass("highlighted");
})

$(".btn").click(function(){

  $(this).toggleClass("active");
  $(this).removeClass("highlighted");
  var panel = $(this).attr("id")+"p";
  
  $("#"+panel).toggleClass("hidden");
  var numberOfActivePanels = 4 - $('.hidden').length;
                  
  $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
  

}) 




$(".panel").height($(window).height()-$("#header").height());

updateOutput();

$("textarea").on('change keyup paste', function() {
      
   updateOutput();
   
   
});














