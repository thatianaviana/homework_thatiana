$(function(){
	console.log("hi mom");

	var videos = [
		{
			'title': 'NO ACTIVITY',
			'src': 'https://www.youtube.com/embed/TVafXAjSjFw',
			'description': 'Have you ever wondered what happens during the endless hours of a stakeout where nothing actually happens? CBS All Access new comedy series, No Activity, is going to fill you in on the hilarious shenanigans that occur when it is just two people stuck in a cycle of boredom.'
		},
		{
			'title': 'STAR TREK: DISCOVERY',
			'src': 'https://www.youtube.com/embed/U5g8XyXU44o',
			'description':'Watch as Star Trek: Discovery stars Sonequa Martin-Green, Jason Isaacs, Shazad Latif, Anthony Rapp, and Mary Wiseman - as well as crew members-explain what Star Trek means to them.'
		}, 
		{
			'title': 'YOUNG SHELDON',
			'src': 'https://www.youtube.com/embed/exleGE8BqwU',
			'description': 'From Chuck Lorre, Steven Molaro and Jim Parsons, this new comedy follows the life of a young Sheldon Cooper as he navigates childhood in a football-loving, churchgoing, small-town Texas family. Go behind the scenes with the cast and producers of TV\'s smartest new comedy. Catch new episodes of Young Sheldon Thursdays after The Big Bang Theory. Only CBS!'
		},
		{
			'title': 'S.W.A.T',
			'src': 'https://www.youtube.com/embed/Ixl4rrfex-U',
			'description': 'There\'s no denying that Shemar Moore is 🔥 . Flashback to the S.W.A.T. star\'s start on CBS with the The Young and the Restless and Criminal Minds. Catch S.W.A.T. Thursdays at 10/9c. Only CBS!'
		}, 
			{
			'title': 'SEAL TEAM',
			'src': 'https://www.youtube.com/embed/FO0kj3pcJuo',
			'description': 'Go behind the scenes of SEAL Team and learn how the show captures the authenticity of the missions and lives led by Navy SEALs. Watch SEAL Team Wednesdays at 9/8c. Only CBS!'
		},
		{
			'title': 'LIVING BIBLICALLY',
			'src': 'https://www.youtube.com/embed/4OesZm1MwfU',
			'description': 'Have you ever wondered what happens during the endless hours of a stakeout where nothing actually happens? CBS All Access\' new comedy series, No Activity, is going to fill you in on the hilarious shenanigans that occur when it\'s just two people stuck in a cycle of boredom. No Activity, only on CBS All Access.'
		}, 
		{
			'title': '9JKL',
			'src': 'https://www.youtube.com/embed/1HdegXFt8l8',
			'description': 'Mark Feuerstein stars as Josh Roberts, a new divorcé and actor between projects who moves home to New York to regroup, living in an apartment sandwiched between his doting, meddlesome parents on one side and his brother, sister-in-law and their new baby on the other, on 9JKL every Monday at 9:30/8:30c. Only CBS!'
		}, 
		{
			'title': 'STAR TREK: DISCOVERY',
			'src': 'https://www.youtube.com/embed/3PdWt88UgiY',
			'description': 'In this new, behind-the-scenes featurette for Star Trek: Discovery, the series\' cast and crew delve a little deeper into the incredible undertaking of bringing Star Trek back to TV for the first time in over a decade. Watch all-new episodes of Star Trek: Discovery Sundays at 8:30 PM ET / 5:30 PM PT, exclusively on CBS All Access.'
		},
		{
			'title': 'SUPERIOR DONUTS',
			'src': 'https://www.youtube.com/embed/kmp55vNjxyw',
			'description': 'Hear from stars Jermaine Fowler, Judd Hirsch, Katey Sagal and more about why fans should check out this delicious new comedy. Watch Superior Donuts Mondays at 9/8c. Only CBS!'
		},
	];

	$('.thumb').on('click', function(){
		var index = $(this).data('index');
		var video = videos[index];

		console.log(video);
		$('#modal-title').html(video.title);
		$('#modal-video').attr('src', video.src);
		$('#modal-description').html(video.description);


	});

	$("#video").on('hidden.bs.modal', function(){
		console.log('here');
        $("iframe").attr('src', '');
    });
});