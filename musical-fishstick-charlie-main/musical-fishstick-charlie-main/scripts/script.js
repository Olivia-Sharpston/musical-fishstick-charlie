// some js
$( document ).ready(function() {
    console.log( "hey dr. cumbie, don't hover the seals...or do" );

    $('#secretSeal').hover(

        function(){
            $(this).css("background-color", "pink");
            // alert('never use alert');
            }
    ); 
    // $('#sillySeal').hover(

    //     function(){
    //         $(this).css("transform", "rotate(45deg)");
    //         $("#sillySeal").slideDown();
    //         $(this).css("background-color", "pink");
    //        }
    // ); 
});