/*! For license information please see FCInstagram.js.LICENSE.txt */
var FCInstagram=window.FCInstagram||{};FCInstagram.name="FC Instagram",FCInstagram.version="2.0.0",console.info("%c "+FCInstagram.name+" %c v"+FCInstagram.version+" %c","margin-left: 5px; padding: 1px; color: #FEFEFE; font-size: 12px; line-height: 15px; background: #F79433; border-radius: 3px 0 0 3px;","padding: 1px; color: #FEFEFE; font-size: 12px; line-height: 15px; background: #FF5722; border-radius: 0 3px 3px 0;","background: transparent;"),"function"!=typeof Object.create&&(Object.create=function(e){function a(){}return a.prototype=e,new a}),function(e,a,t,n){var s={API_URL:"https://graph.instagram.com/me/media?fields=",API_FIELDS:"caption,media_url,media_type,permalink,timestamp,username",initialize:function(a,t){this.elem=t,this.$elem=e(t),this.accessToken=e.fn.FCInstagram.accessData.accessToken,this.options=e.extend({},e.fn.FCInstagram.options,a),this.messages={defaultImageAltText:"Instagram Photo",notFound:"This user account is private or doesn't have any photos."},this.getPhotos()},getPhotos:function(){var a=this;a.fetch().done((function(t){t.data?a.displayPhotos(t):t.error.message?e.error("FCInstagram.js - Error: "+t.error.message):e.error("FCInstagram.js - Error: user does not have photos.")}))},fetch:function(){var a=this.API_URL+this.API_FIELDS+"&access_token="+this.accessToken;return e.ajax({type:"GET",dataType:"jsonp",cache:!1,url:a})},displayPhotos:function(a){var s,o,r,i,p=[];if(i=this.options.max>=a.data.length?a.data.length:this.options.max,a.data!==n&&0!==a.data.length){for(var c=0;c<i;c++)if("IMAGE"===a.data[c].media_type||"CAROUSEL_ALBUM"===a.data[c].media_type){null!==a.data[c].caption||a.data[c].caption!==n?e("<span>").text(a.data[c].caption).html():this.messages.defaultImageAltText,s=e("<a>",{id:"ig_link",href:a.data[c].permalink,style:"background:url("+a.data[c].media_url+") no-repeat center / cover;",rel:"nofollow"}),t.getElementsByClassName("ig_img")[0].setAttribute("href",a.data[c].permalink),p.push(s)}else if("VIDEO"===a.data[c].media_type){r=1==this.options.autoplay?"autoplay muted loop playsinline":"",$source=e("<source>",{src:a.data[c].media_url,type:"video/mp4"}),o=e("<video "+r+">").append($source),s=e("<a>",{href:a.data[c].permalink,rel:"nofollow"}).append(o),t.getElementsByClassName("ig_img")[0].setAttribute("href",a.data[c].permalink),p.push(s)}this.$elem.prepend(p),"function"==typeof this.options.complete&&this.options.complete.call(this)}else this.$elem.append(this.messages.notFound)}};jQuery.fn.FCInstagram=function(a){jQuery.fn.FCInstagram.accessData.accessToken?this.each((function(){Object.create(s).initialize(a,this)})):e.error("You must define an accessToken on jQuery.FCInstagram")},jQuery.fn.FCInstagram.options={complete:null,max:9,autoplay:!1},jQuery.fn.FCInstagram.accessData={accessToken:null}}(jQuery,window,document);