$(".editLink").each(function () {
	$(this).remove();
});
$('[data-listname]').each(function () {
	if ($(this).attr('data-listtype') != "documentlibrary") {
		var dispurl = "'SiteUrl/Lists/" + $(this).attr('data-listname') + "/DispForm.aspx?ID=" + $(this).attr('data-listitemid') + "'";
		var a = "<a class='editLink' href=" + dispurl + "target='_blank'>" +
			"<img src='Link to Image' /></a>";
	} else {
		var dispurl = "'SiteUrl" + $(this).attr('data-listname') + "/Forms/DispForm.aspx?ID=" + $(this).attr('data-listitemid') + "'";
		var a = "<a class='editLink' href=" + dispurl + "target='_blank'>" +
			"<img src='Link to Image' /></a>";
	}
	$(this).append(a);
});
var headerPanel = $("#headerPanel").css("background").match(/\((.*?)\)/gi)[3];
var a = headerPanel.substring(2, headerPanel.length - 2);
var b = /PublishingImages(.*?).*/i.exec(a)[0];
var c = b.substring(0, b.indexOf("?"));
var imageEditLink = "<a class='editLink' href='/_layouts/15/ManageImageRenditions.aspx?ImageUrl=/" + c + "' target='_blank'>" +
	"<img src='Link to Image' /></a>";
$("#headerPanel").append(imageEditLink);