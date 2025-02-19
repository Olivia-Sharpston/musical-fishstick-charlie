// some js
$( document ).ready(function() {
    console.log( "hey dr. cumbie, don't hover the seal...or do" );
    console.log( "also, maybe home will take you home?" );

    $('#secretSeal').hover(

        function(){
            $(this).css("background-color", "pink");
            }
    ); 
});