

document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('startPolarizing');
	checkPageButton.addEventListener('click', function() {
		function replaceBulk( str, findArray, replaceArray ){
			var i, regex = [], map = {}; 
			for( i=0; i<findArray.length; i++ ){ 
			  regex.push( findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g,'\\$1') );
			  map[findArray[i]] = replaceArray[i]; 
			}
			regex = regex.join('|');
			str = str.replace( new RegExp( regex, 'g' ), function(matched){
			  return map[matched];
			});
			return str;
		  };
		
		matchList= {
			'ערבים': 'יהודים',
			'יהודי':'ערבי',
			'ימין':'שמאל'
			};
		findArray = [];
		replaceArray = [];
		for (const [key, value] of Object.entries(matchList)) {
			findArray.push(key,value)
			replaceArray.push(value,key)
		  };
		
		  function PolarMePLS(){
			var html = document.querySelector('html');
			var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
			var node;
			while (node = walker.nextNode()) {
				node.nodeValue = replaceBulk(node.nodeValue,findArray,replaceArray);
			}
			console.log('page is polarized');
		  };
		console.log("polarize start clicked");
		PolarMePLS();
	}, false);
  }, false);