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
// Contains Work Place Details
var WorkPlace = /** @class */ (function () {
    function WorkPlace(company, position, timePeriod, city, description) {
        var _this = this;
        this.company = company;
        this.position = position;
        this.timePeriod = timePeriod;
        this.city = city;
        this.description = description;
        this.getCompany = function () {
            return _this.company;
        };
        this.getPosition = function () {
            return _this.position;
        };
        this.getTimePeriod = function () {
            return _this.timePeriod;
        };
        this.getCity = function () {
            return _this.city;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.company = company;
        this.position = position;
        this.timePeriod = timePeriod;
        this.city = city;
        this.description = description;
    }
    return WorkPlace;
}());
// High School Details go here
var HighSchool = /** @class */ (function () {
    function HighSchool(school, location, graduated, timePeriod, description) {
        var _this = this;
        this.school = school;
        this.location = location;
        this.graduated = graduated;
        this.timePeriod = timePeriod;
        this.description = description;
        this.getSchool = function () {
            return _this.school;
        };
        this.getGraduated = function () {
            return _this.graduated;
        };
        this.getTimePeriod = function () {
            return _this.timePeriod;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getLocation = function () {
            return _this.location;
        };
        this.school = school;
        this.location = location;
        this.graduated = graduated;
        this.timePeriod = this.timePeriod;
        this.description = description;
    }
    return HighSchool;
}());
// College Details go here 
// Common properties are inherited from high school
var College = /** @class */ (function (_super) {
    __extends(College, _super);
    function College(school, location, graduated, timePeriod, description, concentrations, attendedFor, degree) {
        var _this = _super.call(this, school, location, graduated, timePeriod, description) || this;
        _this.concentrations = concentrations;
        _this.attendedFor = attendedFor;
        _this.degree = degree;
        _this.getConcentrations = function () {
            return _this.concentrations;
        };
        _this.getAttendedFor = function () {
            return _this.attendedFor;
        };
        _this.getDegree = function () {
            return _this.degree;
        };
        _this.concentrations = concentrations;
        _this.attendedFor = attendedFor;
        _this.degree = degree;
        return _this;
    }
    return College;
}(HighSchool));
// Professional Skill Details go here
var ProfessionalSkills = /** @class */ (function () {
    // Initializes all fields 
    function ProfessionalSkills(professionalSKills) {
        var _this = this;
        this.professionalSKills = professionalSKills;
        this.getProfessionalSkills = function () {
            return _this.professionalSKills;
        };
        this.setProfessionalSkills = function () {
            var skills = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                skills[_i] = arguments[_i];
            }
            _this.professionalSKills = skills;
        };
        this.professionalSKills = professionalSKills;
    }
    return ProfessionalSkills;
}());
// Places You've Lived Details go here 
// Each Place Details go here 
var Place = /** @class */ (function () {
    function Place(whereTo, when, title, address, from, withWhom, story, uploadPhoto) {
        var _this = this;
        this.whereTo = whereTo;
        this.when = when;
        this.title = title;
        this.address = address;
        this.from = from;
        this.withWhom = withWhom;
        this.story = story;
        this.uploadPhoto = uploadPhoto;
        this.getWhereTo = function () {
            return _this.whereTo;
        };
        this.getWhen = function () {
            return _this.when;
        };
        this.getTitle = function () {
            return _this.title;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.getFrom = function () {
            return _this.from;
        };
        this.getWithWhom = function () {
            return _this.withWhom;
        };
        this.getStory = function () {
            return _this.story;
        };
        this.getPhotoStatus = function () {
            return _this.uploadPhoto;
        };
        this.whereTo = whereTo;
        this.when = when;
        this.title = title;
        this.address = address;
        this.from = from;
        this.withWhom = withWhom;
        this.story = story;
        this.uploadPhoto = uploadPhoto;
    }
    return Place;
}());
// Address Details go here 
var Address = /** @class */ (function () {
    function Address(address, city, zip, neighborhood) {
        var _this = this;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.neighborhood = neighborhood;
        this.getAddress = function () {
            return _this.address;
        };
        this.getCity = function () {
            return _this.city;
        };
        this.getZip = function () {
            return _this.zip;
        };
        this.getNeighborhood = function () {
            return _this.neighborhood;
        };
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.neighborhood = neighborhood;
    }
    return Address;
}());
// Contact and Basic Information Details go here 
var ContactInformation = /** @class */ (function () {
    function ContactInformation(birthDate, birthYear, gender, languages, mobilePhones, email, address, publicKey, websites, socialLink, interestedIn, religiousViews, politicalViews) {
        var _this = this;
        this.birthDate = birthDate;
        this.birthYear = birthYear;
        this.gender = gender;
        this.languages = languages;
        this.mobilePhones = mobilePhones;
        this.email = email;
        this.address = address;
        this.publicKey = publicKey;
        this.websites = websites;
        this.socialLink = socialLink;
        this.interestedIn = interestedIn;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
        this.getMobilePhone = function () {
            return _this.mobilePhones;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.getPublicKey = function () {
            return _this.publicKey;
        };
        this.getWebsite = function () {
            return _this.websites;
        };
        this.getSocialLink = function () {
            return _this.socialLink;
        };
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        this.getBirthYear = function () {
            return _this.birthYear;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLanguages = function () {
            return _this.languages;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.getPoliticalViews = function () {
            return _this.politicalViews;
        };
        this.getReligiousViews = function () {
            return _this.religiousViews;
        };
        this.birthDate = birthDate;
        this.birthYear = birthYear;
        this.gender = gender;
        this.languages = languages;
        this.mobilePhones = mobilePhones;
        this.email = email;
        this.address = address;
        this.publicKey = publicKey;
        this.websites = websites;
        this.socialLink = socialLink;
        this.interestedIn = interestedIn;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
    }
    return ContactInformation;
}());
// Family and Relationships Details go here 
var FamilyRelationships = /** @class */ (function () {
    function FamilyRelationships(relationshipStatus, relationshipTo, relationshipSince, familyMemberName, familyMemberRelation) {
        var _this = this;
        this.relationshipStatus = relationshipStatus;
        this.relationshipTo = relationshipTo;
        this.relationshipSince = relationshipSince;
        this.familyMemberName = familyMemberName;
        this.familyMemberRelation = familyMemberRelation;
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getRelationshipTo = function () {
            return _this.relationshipTo;
        };
        this.getRelationshipSince = function () {
            return _this.relationshipSince;
        };
        this.getFamilyMemberName = function () {
            return _this.familyMemberName;
        };
        this.getFamilyMemberRelation = function () {
            return _this.familyMemberRelation;
        };
        this.relationshipStatus = relationshipStatus;
        this.relationshipTo = relationshipTo;
        this.relationshipSince = relationshipSince;
        this.familyMemberName = familyMemberName;
        this.familyMemberRelation = familyMemberRelation;
    }
    return FamilyRelationships;
}());
// Details About You go here
var PersonalDetails = /** @class */ (function () {
    function PersonalDetails(bloodGroup, nameType, name, showAtTopOfProfile, aboutYou, favoriteQuotes, haveDonatedBlood) {
        var _this = this;
        this.bloodGroup = bloodGroup;
        this.nameType = nameType;
        this.name = name;
        this.showAtTopOfProfile = showAtTopOfProfile;
        this.aboutYou = aboutYou;
        this.favoriteQuotes = favoriteQuotes;
        this.haveDonatedBlood = haveDonatedBlood;
        this.getBloodGroup = function () {
            return _this.bloodGroup;
        };
        this.getHaveDonatedBlood = function () {
            return _this.haveDonatedBlood;
        };
        this.getNameType = function () {
            return _this.nameType;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getShowAtTopOfProfile = function () {
            return _this.showAtTopOfProfile;
        };
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.getFavoriteQuotes = function () {
            return _this.favoriteQuotes;
        };
        this.bloodGroup = bloodGroup;
        this.nameType = nameType;
        this.name = name;
        this.showAtTopOfProfile = showAtTopOfProfile;
        this.aboutYou = aboutYou;
        this.favoriteQuotes = favoriteQuotes;
        this.haveDonatedBlood = haveDonatedBlood;
    }
    return PersonalDetails;
}());
// Life Events go here
var LifeEvents = /** @class */ (function () {
    function LifeEvents(when, title, location, withWho, story, uploadPhoto) {
        var _this = this;
        this.when = when;
        this.title = title;
        this.location = location;
        this.withWho = withWho;
        this.story = story;
        this.uploadPhoto = uploadPhoto;
        this.getWhen = function () {
            return _this.when;
        };
        this.getTitle = function () {
            return _this.title;
        };
        this.getLocation = function () {
            return _this.location;
        };
        this.getWithWho = function () {
            return _this.withWho;
        };
        this.getStory = function () {
            return _this.story;
        };
        this.getUploadPhotoStatus = function () {
            return _this.uploadPhoto;
        };
        this.when = when;
        this.title = title;
        this.location = location;
        this.withWho = withWho;
        this.story = story;
        this.uploadPhoto = uploadPhoto;
    }
    return LifeEvents;
}());
// Example of social media 
// Work and Education Details 
console.log("\nWork and Education Information: \n\n");
// Work Place  
console.log("\nWork Details: \n\n");
var workExp1 = new WorkPlace("Illinois Institute of Technology", "Graduate Teaching Assistant", "I currently work here", "Chicago, Illinois", "Teaching Assistant .... :) ");
console.log("\nWork Experience 1:\n\n");
console.log("Company: " + workExp1.getCompany());
console.log("Position: " + workExp1.getPosition());
console.log("City: " + workExp1.getCity());
console.log("Description: " + workExp1.getDescription());
console.log("Time Period: " + workExp1.getTimePeriod());
var workExp2 = new WorkPlace("Uniken Systems", "UI/UX Designer + Researcher Intern", "May 2016 to August 2016", "Pune, Maharashtra", "I am working for Summer 2016 as an intern in R & D Department.");
console.log("\nWork Experience 2:\n\n");
console.log("Company: " + workExp2.getCompany());
console.log("Position: " + workExp2.getPosition());
console.log("City: " + workExp1.getCity());
console.log("Description: " + workExp2.getDescription());
console.log("Time Period: " + workExp2.getTimePeriod());
// Professional Skills 
console.log("\nProfessional Skills: \n\n");
var professionalSkillContainer = new ProfessionalSkills();
professionalSkillContainer.setProfessionalSkills("Casio Keyboard", "Java", "User Experience (UX) Design");
console.log("" + professionalSkillContainer.getProfessionalSkills());
// College Details
console.log("\nCollege Details: \n\n");
var college1 = new College("Illinois Institute of Technology", "Chicago, Illinois", true, "Class of 2019", undefined, undefined, "Graduate School", "Masters in Information Technology Management");
console.log("\nCollege 1:\n\n");
console.log("School: " + college1.getSchool());
console.log("Time Period: " + college1.getTimePeriod());
console.log("Degree: " + college1.getDegree());
console.log("Graduated: " + college1.getGraduated());
console.log("Attended For: " + college1.getAttendedFor());
console.log("Location: " + college1.getLocation());
var college2 = new College("Binghamton University", "Binghamton, New York", true, "Class of 2016", "Pursued for Fall 2015. Transferred to IIT, Chicago.", undefined, "Graduate School", "Masters in Computer Science");
console.log("\nCollege 2:\n\n");
console.log("School: " + college2.getSchool());
console.log("Time Period: " + college2.getTimePeriod());
console.log("Degree: " + college2.getDegree());
console.log("Graduated: " + college2.getGraduated());
console.log("Attended For: " + college2.getAttendedFor());
console.log("Location: " + college2.getLocation());
console.log("Description: " + college2.getDescription());
// College Details
console.log("\nHigh School Details: \n\n");
var highSchool = new HighSchool("S.V. Union High School", "Pune, Maharashtra", true, "Class of 2006", undefined);
console.log("School: " + highSchool.getSchool());
console.log("Location: " + highSchool.getLocation());
console.log("Graduated: " + highSchool.getGraduated());
console.log("Time Period: " + highSchool.getTimePeriod());
// Places You've Lived Details
console.log("\nPlaces You've Lived Details: \n\n");
// Places
var place = new Place("Vestal, New York", "Moved in August 2015", "Place of Residence in Binghamton", "U Club Binghamton", undefined, "Emre Derece", "My stay while I pursued Masters in Computer Science from Binghamton University.", false);
console.log("\nPlace Details: \n\n");
console.log("Title: " + place.getTitle());
console.log("Where To: " + place.getWhereTo());
console.log("Address: " + place.getAddress());
console.log("With: " + place.getWithWhom());
console.log("When: " + place.getWhen());
console.log("Story: " + place.getStory());
console.log("Uploaded Photo: " + place.getPhotoStatus());
// Contact and Basic Information Details 
console.log("\nContact and Basic Information Details: \n\n");
var contactInformation = new ContactInformation("June 3", 1990, "Male", ["English language", "Marathi language", "Marwari language"], ["+1 646-897-8574", "+91 9371117502"], ["pjakhotia@hawk.iit.edu", "priteshjakhotia@gmail.com"], undefined, undefined, ["https://prteshj.github.io/basics_of_frontend_design/"], ["WeChat: PJ_0007"], undefined, undefined, undefined);
console.log("\nCONTACT INFORMATION \n\n");
console.log("Mobile Phones: " + contactInformation.getMobilePhone());
console.log("Email: " + contactInformation.getEmail());
console.log("\nWEBSITES AND SOCIAL LINKS \n\n");
console.log("Websites: " + contactInformation.getWebsite());
console.log("Social Links: " + contactInformation.getSocialLink());
console.log("\nBASIC INFORMATION \n\n");
console.log("Birth Date: " + contactInformation.getBirthDate());
console.log("Birth Year: " + contactInformation.getBirthYear());
console.log("Gender: " + contactInformation.getGender());
console.log("Languages: " + contactInformation.getLanguages());
// Family and Relationships Details 
console.log("\nFamily and Relationships Details: \n\n");
var familyInformation = new FamilyRelationships("Married", "Dr Mitali Dodiya", "Married since Dec 24,2016", ["Harsh Jakhotia", "Mayuresh Jakhotia", "Sehul Maheshwari"], "Brother");
console.log("\nRELATIONSHIP\n\n");
console.log("Relationship Status: " + familyInformation.getRelationshipStatus());
console.log(familyInformation.getRelationshipStatus() + " to: " + familyInformation.getRelationshipTo());
console.log("" + familyInformation.getRelationshipSince());
// Family Members
console.log("\nFAMILY MEMBERS\n\n");
console.log(familyInformation.getFamilyMemberRelation() + " : " + familyInformation.getFamilyMemberName());
// Personal Details 
console.log("\nDetails About You: \n\n");
var personalDetails = new PersonalDetails("B+", "Nickname", "Preet", true, "I am a lover of art and music :)", "Everything is fair in love and war.", true);
console.log("\nABOUT YOU\n\n");
console.log("" + personalDetails.getAboutYou());
console.log("\nOTHER NAMES\n\n");
console.log(personalDetails.getNameType() + " : " + personalDetails.getName());
console.log("\nFAVORITE QUOTES\n\n");
console.log("" + personalDetails.getFavoriteQuotes());
console.log("\nBLOOD DONATIONS\n\n");
console.log("Blood Group: " + personalDetails.getBloodGroup());
console.log("Have donated blood: " + personalDetails.getHaveDonatedBlood());
// Life Events Details
var lifeEvent1 = new LifeEvents("July 19, 2016", undefined, "Pune, Maharashtra", "Dr Mitali Dodiya", "I feel the luckiest person on the planet with the most exquisite ring on my finger.", true);
console.log("\nLIFE EVENTS\n\n");
console.log("Life Event: Got Engaged to " + lifeEvent1.getWithWho());
console.log("Time Period: " + lifeEvent1.getWhen());
console.log("Story: " + lifeEvent1.getStory());
console.log("Upload photo: " + lifeEvent1.getUploadPhotoStatus());
