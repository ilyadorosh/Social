<img class="invrt_send" src="http://nevesti.com.ua/wp-content/uploads/2015/10/3.jpg" alt="" />
<img class="invrt_money" src="http://nevesti.com.ua/wp-content/uploads/2015/10/2.jpg" alt="" />
<img class="invrt_gift" src="http://nevesti.com.ua/wp-content/uploads/2015/10/1.jpg" alt="" />
<img class="invrt_top" src="http://nevesti.com.ua/wp-content/uploads/2015/10/00.jpg" alt="" />
<script type="text/javascript">// <![CDATA[
/* Init chat */ jQuery(document).on('click', '.invrt_send', function(){ chat_from = jQuery('.userpro-init-chat').data('chat_from'); chat_with = jQuery('.userpro-init-chat').data('chat_with');; up_msg_overlay( chat_from, chat_with ); });

jQuery(".invrt_top").mouseover(function() {
    jQuery( this ).attr( "src" ,"http://nevesti.com.ua/wp-content/uploads/2015/10/001.jpg");
  })
.mouseout(function() {
    jQuery( this ).attr( "src" ,"http://nevesti.com.ua/wp-content/uploads/2015/10/00.jpg");
  });

jQuery(".invrt_send").before( jQuery('#rate-10')[0] );
jQuery(".userpro-nostyle").hide();

jQuery( document ).ready(function() {
jQuery("#rate-10").children().width(65);
jQuery("#rate-10").children().attr( "src" ,"http://nevesti.com.ua/wp-content/uploads/2015/10/Love.png");

//document.getElementById("rate-10").style.textAlign = "center";
//document.getElementById("rate-10").style.display = "block";
//document.getElementById("rate-10").style.marginBottom = "30px";


});

jQuery( document ).ready(function() {
    jQuery(".bookmarked-avatar").after( jQuery('span[title="gorgeous"]')[0] );
    jQuery( "img[src='http://nevesti.com.ua/wp-content/plugins/userpro-rating/images/star-on.png']" ).attr( "src" ,"http://nevesti.com.ua/wp-content/uploads/2015/10/Love9.png");
    jQuery( "img[src='http://nevesti.com.ua/wp-content/plugins/userpro-rating/images/star-off.png']" ).attr( "src" ,"http://nevesti.com.ua/wp-content/uploads/2015/10/Love0.png");
});

// ]]>
</script>
