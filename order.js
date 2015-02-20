var itemCounter = 2;

function appendToItemForm(itemSequence) { 
	var appendContent = "<div id='ItemDiv" + itemSequence + "' class='form-group' style='background:Gainsboro; padding:5px;' >";
	appendContent += "<a class='btn btn-info btn-md'>商品 " + itemSequence + "</a><br /><br />";
	appendContent += createNameAndField("商品名稱", "ItemName" + itemSequence, 'text', true);
	appendContent += createNameAndField("參考連結", "refLink" + itemSequence, 'text', false);
	appendContent += createNameAndField("規格", "spec" + itemSequence, 'text', false);
	appendContent += createNameAndField("數量", "quantity" + itemSequence, 'number', true);
	appendContent += createNameAndField("參考價格", "refPrice" + itemSequence, 'text', false);
	appendContent += "<br /></div>";

	$("#ItemForm").append( appendContent );
	$("#ItemDiv" + itemSequence).hide();
	$("#ItemDiv" + itemSequence).fadeIn(1000);

	if( itemSequence > 1) {
		$('html, body').animate({
   			scrollTop: $("#ItemDiv" + itemSequence).offset().top
		}, 'slow');
	}
} 

function createNameAndField(fieldName, fieldID, itemType, must) {
	var returnVal = "<div>";

	if( must ) {
		returnVal += "<span style=color:red>*</span> ";
	}
	
	returnVal += "<label for='" + fieldID  + "'>" + fieldName + "</label><br />";
	returnVal += "<input type='"+ itemType +"' id='" + fieldID + "' class='form-control'/>";

	returnVal += "</div>";

	return returnVal;
}

