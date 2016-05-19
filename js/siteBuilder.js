//Sitebuilder JS - Andrew Eissen
//Copyright 2016

//This script assembles the website on the fly as needed.

//Global variables
var column_id;
var panel_id;
var link_id;
var picture_id;
var mobile_id;
var cover_id;
var modal_id;
var modal_title;
var modal_image;
var modal_text;


header.display = function() {

	var column_logo = document.createElement("div");
	column_logo.setAttribute("class", "col-xs-6 title-logo");
	column_logo.setAttribute("id", "column_logo");
	document.getElementById("header").appendChild(column_logo);

	var picture_logo = document.createElement("img");
	picture_logo.setAttribute("class", "img-responsive");
	picture_logo.setAttribute("alt", "logo");
	picture_logo.setAttribute("id", "picture_logo");
	picture_logo.src = header.logo;
	document.getElementById("column_logo").appendChild(picture_logo);

	var column_titles = document.createElement("div");
	column_titles.setAttribute("class", "col-xs-6 title-text text-right text-uppercase");
	column_titles.setAttribute("id", "column_titles");
	document.getElementById("header").appendChild(column_titles);

	var name_titles = document.createElement("h1");
	name_titles.innerHTML = header.name;
	name_titles.setAttribute("class", "text-thin");
	document.getElementById("column_titles").appendChild(name_titles);

	var role_titles = document.createElement("h4");
	role_titles.setAttribute("id", "roles");
	role_titles.innerHTML = header.role;
	document.getElementById("column_titles").appendChild(role_titles);
};

photolist.display = function() {

	for (var i = 0; i < photolist.panels.length; i++) {

		column_id = "image-entry_" + photolist.panels[i].link;
		panel_id = "panel_" + photolist.panels[i].link;
		link_id = "link_" + photolist.panels[i].link;
		picture_id = "picture_" + photolist.panels[i].link;
		mobile_id = "mobile_" + photolist.panels[i].link;
		cover_id = "cover_" + photolist.panels[i].link;

		var column = document.createElement("div");
		column.setAttribute("class", "col-sm-6");
		column.setAttribute("id", column_id);
		if (photolist.panels[i].normal === "images/quarter1.png" || photolist.panels[i].normal === "images/quarter2.png") {
			document.getElementById("image-row-1").appendChild(column);
		} else {
			document.getElementById("image-row-2").appendChild(column);
		}
		var br = document.createElement("br");
		column.appendChild(br);

		var panel = document.createElement("div");
		panel.setAttribute("class", "photoslist");
		panel.setAttribute("id", panel_id);
		document.getElementById(column_id).appendChild(panel);
		
		var link = document.createElement("a");
		link.setAttribute("class", "image-w");
		link.setAttribute("id", link_id);
		document.getElementById(panel_id).appendChild(link);
	
		var picture = document.createElement("picture");
		picture.setAttribute("id", picture_id);
		document.getElementById(link_id).appendChild(picture);
	
		var source = document.createElement("source");
		source.setAttribute("media", "(min-width: 547px)");
		source.setAttribute("srcset", photolist.panels[i].normal);
		document.getElementById(picture_id).appendChild(source);
	
		var mobile = document.createElement("img");
		mobile.setAttribute("class", "img-responsive");
		mobile.setAttribute("alt", photolist.panels[i].alt);
		mobile.src = photolist.panels[i].mobile;
		document.getElementById(picture_id).appendChild(mobile);
	
		var cover = document.createElement("div");
		cover.setAttribute("class", "cover");
		cover.setAttribute("data-toggle", "modal");
		cover.setAttribute("data-target", photolist.panels[i].id);
		cover.setAttribute("id", cover_id);
		document.getElementById(link_id).appendChild(cover);
		fillModal(cover_id);
	
		var coverPara = document.createElement("p");
		coverPara.innerHTML = photolist.panels[i].covertext;
		coverPara.setAttribute("class", "text-uppercase text-right phototext");
		document.getElementById(cover_id).appendChild(coverPara);
	}
};

function buildModal() {

	var container = document.createElement("div");
	container.setAttribute("class", "modal fade");
	container.setAttribute("tabindex", "-1");
	container.setAttribute("role", "dialog");
	container.setAttribute("aria-labelledby", "myModaLabel");
	container.setAttribute("aira-hidden", "true");
	container.setAttribute("id", modal_id);
	document.getElementById("modal_div").appendChild(container);
	
	var dialog = document.createElement("div");
	dialog.setAttribute("class", "modal-dialog");
	dialog.setAttribute("id", "dialog_id");
	document.getElementById(modal_id).appendChild(dialog);
	
	var content = document.createElement("div");
	content.setAttribute("class", "modal-content");
	content.setAttribute("id", "content_id");
	document.getElementById("dialog_id").appendChild(content);
	
	var header = document.createElement("div");
	header.setAttribute("class", "modal-header");
	header.setAttribute("id", "header_id");
	document.getElementById("content_id").appendChild(header);
	
	var title = document.createElement("h4");
	title.setAttribute("class", "modal-title");
	title.setAttribute("id", "myModalLabel title_id");
	title.innerHTML = modal_title;
	document.getElementById("header_id").appendChild(title);
	
	var body = document.createElement("div");
	body.setAttribute("class", "modal-body");
	body.setAttribute("id", "body_id");
	document.getElementById("content_id").appendChild(body);
	
	var image = document.createElement("img");
	image.setAttribute("class", "img-responsive image-border");
	image.src = modal_image;
	image.setAttribute("id", "image_id");
	var br = document.createElement("br");
	image.appendChild(br);
	document.getElementById("body_id").appendChild(image);
	
	var text = document.createElement("div");
	text.innerHTML = modal_text;
	document.getElementById("body_id").appendChild(text);
	
	var footer = document.createElement("div");
	footer.setAttribute("class", "modal-footer");
	footer.setAttribute("id", "footer_id");
	document.getElementById("content_id").appendChild(footer);
	
	var button = document.createElement("button");
	button.setAttribute("type", "button");
	button.setAttribute("class", "btn btn-default");
	button.setAttribute("data-dismiss", "modal");
	button.innerHTML = "Close";
	document.getElementById("footer_id").appendChild(button);
}

function fillModal(cover_id) {
	document.getElementById(cover_id).onclick=function() {
		for (var i = 0; i < popups.modals.length; i++) {
			if (cover_id === popups.modals[i].cover) {
				modal_id = popups.modals[i].id;
				modal_title = popups.modals[i].title;
				modal_image = popups.modals[i].image;
				modal_text = popups.modals[i].text;
				buildModal();
				closeModal(modal_id);
			}
		}
	};
}

function closeModal(modal_id) {
	$('#' + modal_id).on('hidden.bs.modal', function () {
		$('#' + modal_id).remove();
	});
}

footer.display = function() {
	var notice = document.createElement("div");
	notice.setAttribute("class", "col-xs-6");
	notice.setAttribute("id", "notice");
	document.getElementById("footer").appendChild(notice);

	var notice_text = document.createElement("div");
	notice_text.setAttribute("class", "text-left text-muted");
	notice_text.setAttribute("id", "notice_text");
	document.getElementById("notice").appendChild(notice_text);

	var notice_small = document.createElement("small");
	notice_small.innerHTML = footer.notice;
	notice_small.setAttribute("id", "notice_small");
	document.getElementById("notice_text").appendChild(notice_small);

	var contacts_column = document.createElement("div");
	contacts_column.setAttribute("class", "col-xs-6");
	contacts_column.setAttribute("id", "links");
	document.getElementById("footer").appendChild(contacts_column);

	for (var i = 0; i < footer.contacts.length; i++) {
		var link = document.createElement("a");
		link.setAttribute("href", footer.contacts[i].url);
		link.setAttribute("id", footer.contacts[i].name);
		document.getElementById("links").appendChild(link);

		var link_image = document.createElement("img");
		link_image.setAttribute("class", "pull-right icon-space");
		link_image.setAttribute("id", "square");
		link_image.setAttribute("src", footer.contacts[i].normal);
		link_image.setAttribute("onmouseover", "this.src='" + footer.contacts[i].hover + "'");
		link_image.setAttribute("onmouseout", "this.src='" + footer.contacts[i].normal + "'");
		link_image.setAttribute("onclick", "this.src='" + footer.contacts[i].hover + "'");
		document.getElementById(footer.contacts[i].name).appendChild(link_image);
	}
};

$(window).load(function() {
	$('#main_div').fadeIn(1000);
});

header.display();
photolist.display();
footer.display();