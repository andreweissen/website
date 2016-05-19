var header = {
	"logo" : "images/logo.svg",
	"name" : "Andrew Eissen",
	"role" : "Web Designer and Editor"
};

var photolist = {
	"panels" : 
	[
		{
			"link" : "image1",
			"normal" : "images/quarter1.png",
			"mobile" : "images/mobilequarter1.png",
			"alt" : "About Me",
			"id" : "#about",
			"covertext" : "About Me"
		},
		{
			"link" : "image2",
			"normal" : "images/quarter2.png",
			"mobile" : "images/mobilequarter2.png",
			"alt" : "Education",
			"id" : "#education",
			"covertext" : "Education"
		},
		{
			"link" : "image3",
			"normal" : "images/quarter3.png",
			"mobile" : "images/mobilequarter3.png",
			"alt" : "Experience",
			"id" : "#experience",
			"covertext" : "Experience"
		},
		{
			"link" : "image4",
			"normal" : "images/quarter4.png",
			"mobile" : "images/mobilequarter4.png",
			"alt" : "Expertise",
			"id" : "#expertise",
			"covertext" : "Expertise"
		}
	]
};

var popups = {
	"modals" :
	[
		{
			"id" : "about",
			"cover": "cover_image1",
			"title" : "About Me",
			"image" : "images/about.png",
			"text" : "<br> Hey there and welcome to my site! I'm Andrew Eissen, " +
			"a web designer and editor based out of the Maryland area. I hold a " +
			"Bachelor of Arts in Communication Studies from Grove City College " +
			"and two web design nanodegrees from Udacity." +
			"<br><br>" +
			"I have experience in many facets of web design, from website optimization to fully responsive " +
			"application design, as well as the use of frameworks and JavaScript libraries." +
			" In addition, I am competent in graphic design, audio production, and video editing. " +
			"<br><br>Regarding communications, I have experience writing and editing for a " +
			"wide variety of media, including law journals and traditional print media, including some " +
			"technical writing." +
			"<br><br>" +
			"In my spare time, I play electric guitar and competitive tennis, run, and read and write." +
			"<br><br>" + 
			"Should you wish to contact me, I can be reached at " +
			"<strong>andrew@andreweissen.com</strong>"+
			"<hr>" +
			"<strong>About this site</strong>" +
			"<br><br>" +
			"This site was constructed using Javascript, jQuery, Bootstrap.js, the Bootstrap framework," +
			" and Python. HTML is automatically generated on page load by a JavaScript builder file. " +
			"Code for this site can be found on my official GitHub page."
		},
		{
			"id" : "education",
			"cover": "cover_image2",
			"title" : "Education",
			"image" : "images/education.png",
			"text" : 
			"<br><strong>Udacity, Mountain View, CA</strong><br>" +
			"<em>Nanodegree, Front-End Web Design, 2015-2016</em>" +
			"<br><br>" +
			"<strong><small>Related Courses</small></strong><br>" +
			"<small>JavaScript Basics, Intro to jQuery, Object-Oriented JavaScript, " +
			"HTML5 Canvas, Website Performance Optimization, Browser Rendering Optimization, Intro to AJAX, " +
			"JavaScript Design Patterns, JavaScript Testing</small>" +
			"<br><hr>" +
			"<strong>Udacity, Mountain View, CA</strong><br>" +
			"<em>Nanodegree, Intro to Programming, 2015</em>" +
			"<br><br>" +
			"<strong><small>Related Courses</small></strong><br>" +
			"<small>Introduction to Computer Science, How to Use Git and Github, " +
			"Intro to HTML and CSS, Responsive Web Design Fundamentals, Responsive Images</small>" +
			"<br><hr>" +
			"<strong>Grove City College, Grove City, PA</strong><br>" +
			"<em>Bachelor of Arts in Communication Studies, 2010-2014</em>" +
			"<br><br>" +
			"<strong><small>Relevant Coursework</small></strong><br>" +
			"<small>Journalism, Screenwriting, Writing for the Media, Principles of Media, Persuasion Theory, " +
			"Theories of Communication, Research Methods, Media Law, Rhetorical Criticism, Public Relations, " +
			"Principles of Marketing, Business Statistics, Business Calculus, Microeconomics, Macroeconomics</small><br>"
		},
		{
			"id" : "experience",
			"cover": "cover_image3",
			"title" : "Experience",
			"image" : "images/experience.png",
			"text" : 
			"<br>" +
			"<strong><u>Web Design Experience</u></strong>" +
			"<br><br>" +
			"<strong>Neighborhood Map</strong><br>" +
			"<em><a href='http://www.aeissen-neighborhood-map.appspot.com'>aeissen-neighborhood-map.appspot.com</a></em>" +
			"<br><small>Fully interactive map of Grove City College built with Knockout JS and the Flickr and Weather Underground APIs. " +
			"Photo data and weather updates are loaded asyncronously with AJAX.</small>" +
			"<br><br>" +
			"<strong>Frogger Clone</strong><br>" +
			"<em><a href='http://www.aeissen-frogger-clone.appspot.com'>aeissen-frogger-clone.appspot.com</a></em>" +
			"<br><small>Clone of classic Frogger coded in pseudo-classical style of object-oriented JavaScript. I coded players, enemies, " +
			"and assorted game entities in conjunction with provided game engine.</small>" +
			"<br><br>" +
			"<strong>Feed Reader</strong><br>" +
			"<em><a href='https://www.github.com/andreweissen/Feed-Reader'>www.github.com/andreweissen/Feed-Reader</a></em>" +
			"<br><small>Utilized JavaScript Jasmine library to write and run tests of an RSS feed-based website. These tests ensured " +
			"the site ran at maximum efficiency without loading errors and undefined variables.</small>" +
			"<br><br>" +
			"<strong>Website Optimization</strong><br>" +
			"<em><a href='https://www.github.com/andreweissen/Website-Optimization'>www.github.com/andreweissen/Website-Optimization</a></em>" +
			"<br><small>Optimized website's critical rendering path to improve loading and rendering time. I enhanced user experience " +
			" by improving scrolling animation to a constant rate of 60 frames per second.</small>" +
			"<br><hr>" +
			"<strong><u>Communications Experience</u></strong>" +
			"<br><br>" +
			"<strong>Three for Ten Sports</strong> - " +
			"<em><small>Senior Editor & Tennis Analyst</small></em>" +
			"<br>" +
			"<strong>GCC Collegian</strong> - " +
			"<em><small>Life Section Head Copy Editor</small></em>" +
			"<br>" +
			"<strong>GCC Journal of Law and Public Policy</strong> - " +
			"<em><small>Associate Editor</small></em>" +
			"<br>" +
			"<strong>Welcome to Grove City Project</strong> - " +
			"<em><small>Research Intern</small></em>" +
			"<br>" +
			"<strong>Grove City College Quad Magazine</strong> - " +
			"<em><small>Poetry Copy Editor</small></em>"
		},
		{
			"id" : "expertise",
			"cover": "cover_image4",
			"title" : "Expertise",
			"image" : "images/expertise.png",
			"text" : 
			"<br>" +
			"<strong><u>Technical Skills</u></strong>" +
			"<br><br>" +
			"<strong>Programming Languages</strong>" +
			"<br>" +
			"<em>JavaScript, Python, HTML5, CSS3, PHP, MySQL</em>" +
			"<br><br>" +
			"<strong>Frameworks/Libraries</strong>" +
			"<br>" +
			"<em>jQuery, Knockout.js (MVVM), Bootstrap, Jasmine, jinja2, webapp2</em>" +
			"<br><br>" +
			"<strong>Miscellaneous</strong>" +
			"<br>" +
			"<em>Git/Git Bash/GitHub, ngrok, MediaWiki, GIMP, Adobe Premier/Audition, Wordpress</em>" +
			"<br><hr>" +
			"<strong><u>Activies and Honors</u></strong>" +
			"<br><br>" +
			"GCC Collegian Green Eyeshade Award" +
			"<br>" +
			"PSAT National Merit Commended Student" +
			"<br>" +
			"New Life Mentorship Program" +
			"<br>" +
			"Timothy Project Mentorship Program" +
			"<br>" +
			"Grove City College Chapel Choir" +
			"<br>" +
			"Founder of GCC Disc Golf Club" +
			"<br>"
		},
	]
};

var footer = {
	"notice" : "Copyright &copy; 2015 Andrew Eissen. All rights reserved.",
	"contacts" :
	[
		{
			"name" : "twitter",
			"url" : "http://www.twitter.com/andrew_eissen",
			"normal" : "images/twitterlogo.png",
			"hover" : "images/twitterlogohover.png"
		},
		{
			"name" : "gitHub",
			"url" : "https://www.github.com/andreweissen",
			"normal" : "images/githublogo.png",
			"hover" : "images/githublogohover.png"
		},
		{
			"name" : "linkedIn",
			"url" : "https://www.linkedin.com/in/andreweissen",
			"normal" : "images/linkedinlogo.png",
			"hover" : "images/linkedinlogohover.png"
		}
	]
};