/*
  - Script used to fix some URL's in a WordPress Website Image Gallery  that I do not have access to its server or source.
  In this case I add this script to the footer of WordPress website and fix it until the support can properly solve it.
*/

<script type='text/javascript'>
jQuery(document).ready( function(){ 
    var pathName = window.location.pathname;
	var englishPathName = '/en/pessoas/';
	
	if (pathName == englishPathName){
		jQuery('.gallery-item a').each(function (index){
			var currentHref =  jQuery(this).attr('href');
			var hrefSeparated = currentHref.split('/pessoas/');
			 jQuery(this).attr('href', hrefSeparated[0] + englishPathName + hrefSeparated[1]);
		});
	}
});
</script>
