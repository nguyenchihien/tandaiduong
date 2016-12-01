var URL = "/tandaiduong"; //-- EDIT here 
// var URL = ""; //-- EDIT here 
var facebookAppId = "123";
var googleAnalyticId = "UA-11";
var keywords = "vận chuyển, logistics";

var colors = [
    "red","blue","green","orange",  
    "pink", "purple", "light-blue", "cyan", 
    "light-green", "yellow", "deep-orange", 
    "deep-purple", "indigo", "teal", 
    // "deep-purple", "indigo", "teal", "lime", 
    // "light-green", "yellow", "amber", "deep-orange", 
    // "brown", "grey", "blue-grey"      
];

colors = ['ligh-blue']
var i = Math.floor( Math.random() * (colors.length - 0) + 0 );
var chooseColor = colors[i].toString();


var cssfiles = [
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/featherlight/1.5.0/featherlight.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
    //-- blog web fonts 
    // 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic',
    // 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
    'https://fonts.googleapis.com/css?family=Arimo|Athiti|Kanit:500i,800|Maitree|Mitr|Noticia+Text|Open+Sans|Pridi|Prompt|Roboto|Roboto+Slab|Trirong|Lemonada|Lobster|Noto+Serif:700i|Pattaya|Prompt:500i|Sriracha|Tinos:700i|Arima+Madurai:800|Baloo|Itim|Lalezar',
    URL+'/assets/style.css'
];
var jsfiles = [ 
    'https://code.jquery.com/jquery-2.2.4.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/featherlight/1.5.0/featherlight.min.js',
    // 'https://apis.google.com/js/plusone.js', //-- google comments
    URL+'/assets/jquery.waypoints.min.js', //-- scroll to view
    URL+'/assets/inview.min.js',  //-- scroll to view
    URL+'/assets/flowType.js',  //-- scroll to view
    URL+'/assets/lettering.js',  //-- scroll to view
    URL+'/assets/textillate.js',  //-- scroll to view
    // 'assets/index.js', 
];

function loadAll(){
    LazyLoad.css(cssfiles, function(){});
    LazyLoad.js(jsfiles, function(){
        $(document).ready(function(){
            initAll();
        });
    });   
}


