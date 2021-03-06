/* --- geometry and timing of the menu --- */
var MENU_POS = new Array();
	// item sizes for different levels of menu
	MENU_POS['height'] = [25, 20, 20];
	MENU_POS['width'] = [110, 110, 70];
	// menu block offset from the origin:
	//	for root level origin is upper left corner of the page
	//	for other levels origin is upper left corner of parent item
	MENU_POS['block_top'] = [0, 25, 0];
	MENU_POS['block_left'] = [0, 0, 171];
	// offsets between items of the same level
	MENU_POS['top'] = [0, 21, 21];
	MENU_POS['left'] = [114, 0, 0];
	// time in milliseconds before menu is hidden after cursor has gone out
	// of any items
	MENU_POS['hide_delay'] = [200, 200, 200];
	
/* --- dynamic menu styles ---
note: you can add as many style properties as you wish but be not all browsers
are able to render them correctly. The only relatively safe properties are
'color' and 'background'.
*/
var MENU_STYLES = new Array();
	// default item state when it is visible but doesn't have mouse over
	MENU_STYLES['onmouseout'] = [
		'color', ['#ffffff', '#000000', '#000000'], 
		'background', ['#336699', '#339966', '#993366'],
		'fontWeight', ['normal', 'normal', 'normal'],
		'textDecoration', ['none', 'none', 'none'],
	];
	// state when item has mouse over it
	MENU_STYLES['onmouseover'] = [
		'color', ['#ffffff', '#000000', '#000000'], 
		'background', ['#6699cc', '#66cc99', '#cc6699'],
		'fontWeight', ['normal', 'bold', 'normal'],
		'textDecoration', ['underline', 'none', 'none'],
	];
	// state when mouse button has been pressed on the item
	MENU_STYLES['onmousedown'] = [
		'color', ['#ffffff', '#000000', '#000000'], 
		'background', ['#99ccff', '#99ffcc', '#cc99ff'],
		'fontWeight', ['normal', 'bold', 'normal'],
		'textDecoration', ['underline', 'none', 'none'],
	];
	
