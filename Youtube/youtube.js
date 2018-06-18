// Youtube video class details go here
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// When not signed in
var Youtube_Video = /** @class */ (function () {
    function Youtube_Video(url, title, views, likes, dislikes, logoImagePresent, publishedOn, description, category, license, duration, comments) {
        var _this = this;
        this.url = url;
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.logoImagePresent = logoImagePresent;
        this.publishedOn = publishedOn;
        this.description = description;
        this.category = category;
        this.license = license;
        this.duration = duration;
        this.comments = comments;
        this.getVideoUrl = function () {
            return _this.url;
        };
        this.getVideoTitle = function () {
            return _this.title;
        };
        this.getVideoViews = function () {
            return _this.views;
        };
        this.getVideoLikes = function () {
            return _this.likes;
        };
        this.getVideoDislikes = function () {
            return _this.dislikes;
        };
        this.getVideoLogoPresent = function () {
            return _this.logoImagePresent;
        };
        this.getPublishedOn = function () {
            return _this.publishedOn;
        };
        this.getVideoDescription = function () {
            return _this.description;
        };
        this.getVideoCategory = function () {
            return _this.category;
        };
        this.getVideoLicense = function () {
            return _this.license;
        };
        this.getVideoDuration = function () {
            return _this.duration;
        };
        this.getVideoComments = function () {
            return _this.comments;
        };
        // Business logic is applied in below methods with no implementation to achieve the functionality
        // Plays video
        this.play = function () {
            console.log("Video started playing successfully.");
        };
        // Pauses video
        this.pause = function () {
            console.log("Video started pausing successfully.");
        };
        // Forwards to next video
        this.forward = function () {
            console.log("Forwarded to next video successfully.");
        };
        // Settings such as Autoplay, Annotations, Speed, Subtitles, Quality
        this.settings = function () {
            // Autoplay can be toggled On or Off
            // Annotations can be toggled On or Off
            // Speed can be one of 0.25, 0.5, 0.75, Normal, 1.25 and 1.5
            // Subtitles can be chosed in all available languages as per user choice
            // Quality can be whatever is available or supported based on video and
            // user choice
            // All possible quality choices are 144p, 240p, 360p, 480p, 720p (HD), 1080p (HD)
            console.log("You can do settings for Autoplay, Annotations, Speed, Subtitles and Quality.");
        };
        // If video supports cinema mode, this setting enables it
        this.cinemaMode = function () {
            console.log("Cinema mode is successfully activated.");
        };
        // If video supports theater mode, this setting enables it
        this.theaterMode = function () {
            console.log("Theater mode is successfully activated.");
        };
        // This setting makes video full screen
        this.fullScreen = function () {
            console.log("Full screen mode is successfully motivated.");
        };
        // Opens video transcript
        this.openTranscript = function () {
            console.log("Open Transcript mode has successfully activated.");
        };
        // Loads sidebar with related videos based on business logic
        this.getRelatedVideos = function () {
            console.log("Successfully retrieved all realted videos.");
        };
        // Applies busines logic to sort comments below video based on top comments
        this.sortByTopComments = function () {
            console.log("Sorting by top comments is successfully done.");
        };
        // Applies busines logic to sort comments below video based on newest comments
        this.sortByNewestComments = function () {
            console.log("Sorting by newest comments is successfully done.");
        };
        this.url = url;
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.logoImagePresent = logoImagePresent;
        this.publishedOn = publishedOn;
        this.description = description;
        this.category = category;
        this.license = license;
        this.duration = duration;
        this.comments = comments;
    }
    // Can only be called by child class i.e subscribed user 
    Youtube_Video.prototype.setComments = function (comment) { this.comments = comment; };
    ;
    // Can only be called by child class i.e subscribed user
    Youtube_Video.prototype.report = function (url) { };
    ;
    // Can only be called by child class i.e subscribed user
    Youtube_Video.prototype.addTranslations = function (url) { };
    ;
    return Youtube_Video;
}());
// Class denotes a signed in user
// Class applies business logic to update UI and all other changes
// It returns a boolean value to denote success
var LoggedIn_User = /** @class */ (function (_super) {
    __extends(LoggedIn_User, _super);
    function LoggedIn_User(url, title, views, likes, dislikes, logoImagePresent, publishedOn, description, category, license, duration, comments, userId, userName) {
        var _this = _super.call(this, url, title, views, likes, dislikes, logoImagePresent, publishedOn, description, category, license, duration, comments) || this;
        _this.userId = userId;
        _this.userName = userName;
        // Returns name of logged in user
        _this.getUserName = function () {
            return _this.userName;
        };
        // Needs to find current video based on video url 
        _this.subscribe = function (videoUrl) {
            // Successfully subscribes user to the current video and returns true if successful
            // It returns false if for some reason it was unable to subscribe
            return true;
        };
        // User is now able to add comments once logged in
        _this.addPublicComment = function (videoUrl) {
            // Succesfully updates comments with now added comment 
            // And applies business logic to correctly update total
            // number of comments   
            _super.prototype.setComments.call(_this, _this.getVideoComments() + 1);
            console.log("Adding comment was successful.");
            console.log("Total number of comments now is " + _this.getVideoComments());
        };
        // User can add current video or videos to his playlist
        _this.addToPlaylist = function (videoUrl) {
            // Applies business logic to add all videos to playlist    
            console.log("Successfully added video to playlist.");
        };
        // User can report current video 
        _this.reportVideo = function (videoUrl) {
            _super.prototype.report.call(_this, videoUrl);
            // Applies business logic to report video   
            console.log("Successfully reported videos to the youtube team.");
        };
        // User can provide translations for current video 
        _this.addTranslationsToVideo = function (videoUrl) {
            _super.prototype.addTranslations.call(_this, videoUrl);
            // Applies business logic to add video translations
            console.log("Successfully added translations for the video.");
        };
        // Some business logic is applied here to report any comment from list of all
        // comments below the video
        _this.reportComment = function (commentId) {
            console.log("Reported comment successfully to the youtube team.");
        };
        // Some business logic is applied here to like any comment from list of all
        // comments below the video
        _this.likeComment = function (commentId) {
            console.log("Liked the comment " + commentId + " successfully.");
        };
        // Some business logic is applied here to dislike any comment from list of all
        // comments below the video
        _this.dislikeComment = function (commentId) {
            console.log("Disliked the comment " + commentId + " successfully.");
        };
        // Some business logic is applied here to reply to any comment from list of all
        // comments below the video
        _this.replyToComment = function (commentId) {
            console.log("Replied to the comment " + commentId + " successfully.");
        };
        // Some business logic is applied here to get all videos user subscribed to
        _this.allSubscribedVideos = function () {
            console.log("Retrieved all subscribed videos successfully.");
        };
        // Some business logic is applied here to reply to get user's youtube feed history    
        _this.history = function () {
            console.log("Retrieved all feed history for " + _this.userName + " successfully.");
        };
        // Some business logic is applied here to get all videos liked by user
        _this.likedVideos = function () {
            // Will return false based on business logic
            console.log("Successfully retrieved all videos liked by " + _this.userName);
        };
        _this.userId = userId;
        _this.userName = userName;
        return _this;
    }
    return LoggedIn_User;
}(Youtube_Video));
// Example of Youtube video
// I did have a use case in mind where I am thinking of how to make provision so that one user can add
// many instances of different videos to his object.
// But left it out because it wasn't yet covered or taught how to do it in this level.
// Example: LoggedIn user class has a property of array of class Youtube_Video where each item represents 
// an instance of youtube video.
// I can simply create instances of different youtube videos and add it as an array to this user class.
// I assume one case is Youtube_Video class which resembles a user not logged in to youtube 
// watching a specific video
console.log("\nNON LOGGED IN USER WATCHING VIDEO DETAILS:\n\n");
var inifinitheismVideo = new Youtube_Video("https://www.youtube.com/watch?v=T7vQkDqwRFE", "A fresh perspective to celebrate Father's Day - By Mahatria | infinitheism", 6211, 85, 3, true, "Jun 17, 2017", "Wishing you Most and more...\nMahatria brings a fresh perspective to celebrate Father's Day\n7 Days - 7 Ways\nGet creative... express... surprise...", "Nonprofits & Activism", "Standard YouTube License", "2:31", 3);
console.log("Title: " + inifinitheismVideo.getVideoTitle());
console.log("Description: " + inifinitheismVideo.getVideoDescription());
console.log("Url: " + inifinitheismVideo.getVideoUrl());
console.log("Number of views: " + inifinitheismVideo.getVideoViews());
console.log("Likes: " + inifinitheismVideo.getVideoLikes());
console.log("Dislikes: " + inifinitheismVideo.getVideoDislikes());
console.log("Video thumbnail present: " + inifinitheismVideo.getVideoLogoPresent());
console.log("Published on: " + inifinitheismVideo.getPublishedOn());
console.log("Category: " + inifinitheismVideo.getVideoCategory());
console.log("License: " + inifinitheismVideo.getVideoLicense());
console.log("Duration: " + inifinitheismVideo.getVideoDuration());
console.log("Total number of comments: " + inifinitheismVideo.getVideoComments());
// Another case if logged in user with more features such as subscription etc.
console.log("\nLOGGED IN USER WATCHING VIDEO DETAILS:\n\n");
var pritesh = new LoggedIn_User("https://www.youtube.com/watch?v=PwGXhJAYdDQ", "Build The Person You Want to Be - Best Motivational Videos Compilation for 2018", 3427887, 61000, 2500, true, "14 Nov 2017", "Motivational videos to help you succeed.", "Education", "Standard YouTube Licence", "34:34", 1040, "UC0VRrJoOEugQ69jVc6DU83w", "Pritesh Jakhotia");
console.log("User: " + pritesh.getUserName());
console.log("Title: " + pritesh.getVideoTitle());
console.log("Description: " + pritesh.getVideoDescription());
console.log("Url: " + pritesh.getVideoUrl());
console.log("Subscribed: " + pritesh.subscribe(pritesh.getVideoUrl()));
console.log("Number of views: " + pritesh.getVideoViews());
console.log("Likes: " + pritesh.getVideoLikes());
console.log("Dislikes: " + pritesh.getVideoDislikes());
console.log("Video thumbnail present: " + pritesh.getVideoLogoPresent());
console.log("Published on: " + pritesh.getPublishedOn());
console.log("Category: " + pritesh.getVideoCategory());
console.log("License: " + pritesh.getVideoLicense());
console.log("Duration: " + pritesh.getVideoDuration());
console.log("Total number of comments: " + pritesh.getVideoComments());
pritesh.addPublicComment(pritesh.getVideoUrl());
