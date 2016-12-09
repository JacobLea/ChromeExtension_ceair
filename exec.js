$(function() {
	$('#enter_button').click(handler.enter);
	$('#apply_button').click(handler.apply);
});
var handler = {
	interSecs: 0.3,
	enter: function(){
		var src=$('#target_src').val();
		$('#target').attr('src', src).height(900).width(1300).load(
			function() {
				setTimeout(function(){
					var target = $('#target');
					var contents = target.contents();
				}, this.interSecs*1000);
			}
		);
	},
	apply: function(){
		
	}
};

