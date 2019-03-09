// Contains Work Place Details
class WorkPlace {
    constructor(private company: string, private position: string, private timePeriod: string, private city?: string, private description?: string) {
        this.company = company;
        this.position = position;
        this.timePeriod = timePeriod;
        this.city = city;
        this.description = description;
    }

    getCompany = () => {
        return this.company;
    }

    getPosition = () => {
        return this.position;
    }

    getTimePeriod = () => {
        return this.timePeriod;
    }

    getCity = () => {
        return this.city;
    }

    getDescription = () => {
        return this.description;
    }
}

// High School Details go here
class HighSchool {

    constructor(private school: string, private location: string, private graduated?: boolean, private timePeriod?: string, private description?: string) {
        this.school = school;
        this.location = location;
        this.graduated = graduated;
        this.timePeriod = timePeriod
        this.description = description;
    }

    getSchool = () => {
        return this.school;
    }

    getGraduated = () => {
        return this.graduated;
    }

    getTimePeriod = () => {
        return this.timePeriod;
    }

    getDescription = () => {
        return this.description;
    }

    getLocation = () => {
        return this.location;
    }
}

// College Details go here 
// Common properties are inherited from high school
class College extends HighSchool {
    constructor(school: string, location: string, graduated?: boolean, timePeriod?: string, description?: string,
        private concentrations?: string[3], private attendedFor?: string, private degree?: string) {
        super(school, location, graduated, timePeriod, description);
        this.concentrations = concentrations;
        this.attendedFor = attendedFor;
        this.degree = degree
    }

    getConcentrations = () => {
        return this.concentrations;
    }

    getAttendedFor = () => {
        return this.attendedFor;
    }

    getDegree = () => {
        return this.degree;
    }
}

// Professional Skill Details go here
class ProfessionalSkills {
    // Initializes all fields 
    constructor(private professionalSKills?: string[]) {
        this.professionalSKills = professionalSKills;
    }

    getProfessionalSkills = () => {
        return this.professionalSKills;
    }

    setProfessionalSkills = (...skills: string[]) => {
        this.professionalSKills = skills;
    }
}

// Places You've Lived Details go here 
// Each Place Details go here 
class Place {
    constructor(private whereTo: string, private when: string, private title: string, private address: string,
        private from?: string, private withWhom?: string, private story?: string, private uploadPhoto?: boolean) {
        this.whereTo = whereTo;
        this.when = when;
        this.title = title;
        this.address = address;
        this.from = from;
        this.withWhom = withWhom;
        this.story = story;
        this.uploadPhoto = uploadPhoto;
    }

    getWhereTo = () => {
        return this.whereTo;
    }

    getWhen = () => {
        return this.when;
    }

    getTitle = () => {
        return this.title;
    }

    getAddress = () => {
        return this.address;
    }

    getFrom = () => {
        return this.from;
    }

    getWithWhom = () => {
        return this.withWhom;
    }

    getStory = () => {
        return this.story;
    }

    getPhotoStatus = () => {
        return this.uploadPhoto;
    }
}

// Address Details go here 
class Address {
    constructor(private address: string, private city?: string, private zip?: string, private neighborhood?: string) {
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.neighborhood = neighborhood;
    }

    getAddress = () => {
        return this.address;
    }

    getCity = () => {
        return this.city;
    }

    getZip = () => {
        return this.zip;
    }

    getNeighborhood = () => {
        return this.neighborhood;
    }
}

// Contact and Basic Information Details go here 
class ContactInformation {
    constructor(private birthDate: string, private birthYear: number, private gender: string, private languages: string[],
        private mobilePhones: string[], private email: string[], private address?: Address, private publicKey?: string,
        private websites?: string[], private socialLink?: string[], private interestedIn?: string, private religiousViews?: string[],
        private politicalViews?: string[]) {
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

    getMobilePhone = () => {
        return this.mobilePhones;
    }

    getEmail = () => {
        return this.email;
    }

    getAddress = () => {
        return this.address;
    }

    getPublicKey = () => {
        return this.publicKey;
    }

    getWebsite = () => {
        return this.websites;
    }

    getSocialLink = () => {
        return this.socialLink;
    }

    getBirthDate = () => {
        return this.birthDate;
    }

    getBirthYear = () => {
        return this.birthYear;
    }

    getGender = () => {
        return this.gender;
    }

    getLanguages = () => {
        return this.languages;
    }

    getInterestedIn = () => {
        return this.interestedIn;
    }

    getPoliticalViews = () => {
        return this.politicalViews;
    }

    getReligiousViews = () => {
        return this.religiousViews;
    }
}

// Family and Relationships Details go here 
class FamilyRelationships {
    constructor(private relationshipStatus: string, private relationshipTo?: string, private relationshipSince?: string,
        private familyMemberName?: string[], private familyMemberRelation?: string) {
        this.relationshipStatus = relationshipStatus;
        this.relationshipTo = relationshipTo;
        this.relationshipSince = relationshipSince;
        this.familyMemberName = familyMemberName;
        this.familyMemberRelation = familyMemberRelation;
    }

    getRelationshipStatus = () => {
        return this.relationshipStatus;
    }

    getRelationshipTo = () => {
        return this.relationshipTo;
    }

    getRelationshipSince = () => {
        return this.relationshipSince;
    }

    getFamilyMemberName = () => {
        return this.familyMemberName;
    }

    getFamilyMemberRelation = () => {
        return this.familyMemberRelation;
    }
}

// Details About You go here
class PersonalDetails {
    constructor(private bloodGroup: string, private nameType: string, private name: string, private showAtTopOfProfile?: boolean, private aboutYou?: string, private favoriteQuotes?: string, private haveDonatedBlood?: boolean) {
        this.bloodGroup = bloodGroup;
        this.nameType = nameType;
        this.name = name;
        this.showAtTopOfProfile = showAtTopOfProfile;
        this.aboutYou = aboutYou;
        this.favoriteQuotes = favoriteQuotes;
        this.haveDonatedBlood = haveDonatedBlood;
    }

    getBloodGroup = () => {
        return this.bloodGroup;
    }

    getHaveDonatedBlood = () => {
        return this.haveDonatedBlood;
    }

    getNameType = () => {
        return this.nameType;
    }

    getName = () => {
        return this.name;
    }

    getShowAtTopOfProfile = () => {
        return this.showAtTopOfProfile;
    }

    getAboutYou = () => {
        return this.aboutYou;
    }

    getFavoriteQuotes = () => {
        return this.favoriteQuotes;
    }
}

// Life Events go here
class LifeEvents {
    constructor(private when: string, private title?: string, private location?: string, private withWho?: string, private story?: string, private uploadPhoto?: boolean) {
        this.when = when;
        this.title = title;
        this.location = location;
        this.withWho = withWho;
        this.story = story;
        this.uploadPhoto = uploadPhoto;
    }

    getWhen = () => {
        return this.when;
    }

    getTitle = () => {
        return this.title;
    }

    getLocation = () => {
        return this.location;
    }

    getWithWho = () => {
        return this.withWho;
    }

    getStory = () => {
        return this.story;
    }

    getUploadPhotoStatus = () => {
        return this.uploadPhoto;
    }
}

// Example of social media 
// Work and Education Details 
console.log(`\nWork and Education Information: \n\n`);
// Work Place  
console.log(`\nWork Details: \n\n`);
let workExp1 = new WorkPlace("Illinois Institute of Technology", "Graduate Teaching Assistant", "I currently work here", "Chicago, Illinois", "Teaching Assistant .... :) ");
console.log(`\nWork Experience 1:\n\n`);
console.log(`Company: ${workExp1.getCompany()}`);
console.log(`Position: ${workExp1.getPosition()}`);
console.log(`City: ${workExp1.getCity()}`);
console.log(`Description: ${workExp1.getDescription()}`);
console.log(`Time Period: ${workExp1.getTimePeriod()}`);
let workExp2 = new WorkPlace("Uniken Systems", "UI/UX Designer + Researcher Intern", "May 2016 to August 2016", "Pune, Maharashtra", "I am working for Summer 2016 as an intern in R & D Department.");
console.log(`\nWork Experience 2:\n\n`);
console.log(`Company: ${workExp2.getCompany()}`);
console.log(`Position: ${workExp2.getPosition()}`);
console.log(`City: ${workExp1.getCity()}`);
console.log(`Description: ${workExp2.getDescription()}`);
console.log(`Time Period: ${workExp2.getTimePeriod()}`);
// Professional Skills 
console.log(`\nProfessional Skills: \n\n`);
let professionalSkillContainer = new ProfessionalSkills();
professionalSkillContainer.setProfessionalSkills("Casio Keyboard", "Java", "User Experience (UX) Design");
console.log(`${professionalSkillContainer.getProfessionalSkills()}`);
// College Details
console.log(`\nCollege Details: \n\n`);
let college1 = new College("Illinois Institute of Technology", "Chicago, Illinois", true, "Class of 2019", undefined, undefined, "Graduate School", "Masters in Information Technology Management");
console.log(`\nCollege 1:\n\n`);
console.log(`School: ${college1.getSchool()}`);
console.log(`Time Period: ${college1.getTimePeriod()}`);
console.log(`Degree: ${college1.getDegree()}`);
console.log(`Graduated: ${college1.getGraduated()}`);
console.log(`Attended For: ${college1.getAttendedFor()}`);
console.log(`Location: ${college1.getLocation()}`);
let college2 = new College("Binghamton University", "Binghamton, New York", true, "Class of 2016", "Pursued for Fall 2015. Transferred to IIT, Chicago.", undefined, "Graduate School", "Masters in Computer Science");
console.log(`\nCollege 2:\n\n`);
console.log(`School: ${college2.getSchool()}`);
console.log(`Time Period: ${college2.getTimePeriod()}`);
console.log(`Degree: ${college2.getDegree()}`);
console.log(`Graduated: ${college2.getGraduated()}`);
console.log(`Attended For: ${college2.getAttendedFor()}`);
console.log(`Location: ${college2.getLocation()}`);
console.log(`Description: ${college2.getDescription()}`);
// College Details
console.log(`\nHigh School Details: \n\n`);
let highSchool = new HighSchool("S.V. Union High School", "Pune, Maharashtra", true, "Class of 2006", undefined);
console.log(`School: ${highSchool.getSchool()}`);
console.log(`Location: ${highSchool.getLocation()}`);
console.log(`Graduated: ${highSchool.getGraduated()}`);
console.log(`Time Period: ${highSchool.getTimePeriod()}`);
// Places You've Lived Details
console.log(`\nPlaces You've Lived Details: \n\n`);
// Places
let place = new Place("Vestal, New York", "Moved in August 2015", "Place of Residence in Binghamton", "U Club Binghamton",
    undefined, "Emre Derece", "My stay while I pursued Masters in Computer Science from Binghamton University.", false);
console.log(`\nPlace Details: \n\n`);
console.log(`Title: ${place.getTitle()}`);
console.log(`Where To: ${place.getWhereTo()}`);
console.log(`Address: ${place.getAddress()}`);
console.log(`With: ${place.getWithWhom()}`);
console.log(`When: ${place.getWhen()}`);
console.log(`Story: ${place.getStory()}`);
console.log(`Uploaded Photo: ${place.getPhotoStatus()}`);
// Contact and Basic Information Details 
console.log(`\nContact and Basic Information Details: \n\n`);
let contactInformation = new ContactInformation("June 3", 1990, "Male", ["English language", "Marathi language", "Marwari language"], ["+1 646-897-8574", "+91 9371117502"], ["pjakhotia@hawk.iit.edu", "priteshjakhotia@gmail.com"], undefined, undefined, ["https://prteshj.github.io/basics_of_frontend_design/"],
    ["WeChat: PJ_0007"], undefined, undefined, undefined);
console.log(`\nCONTACT INFORMATION \n\n`);
console.log(`Mobile Phones: ${contactInformation.getMobilePhone()}`);
console.log(`Email: ${contactInformation.getEmail()}`);
console.log(`\nWEBSITES AND SOCIAL LINKS \n\n`);
console.log(`Websites: ${contactInformation.getWebsite()}`);
console.log(`Social Links: ${contactInformation.getSocialLink()}`);
console.log(`\nBASIC INFORMATION \n\n`);
console.log(`Birth Date: ${contactInformation.getBirthDate()}`);
console.log(`Birth Year: ${contactInformation.getBirthYear()}`);
console.log(`Gender: ${contactInformation.getGender()}`);
console.log(`Languages: ${contactInformation.getLanguages()}`);
// Family and Relationships Details 
console.log(`\nFamily and Relationships Details: \n\n`);
let familyInformation = new FamilyRelationships("Married", "Dr Mitali Dodiya", "Married since Dec 24,2016", ["Harsh Jakhotia", "Mayuresh Jakhotia", "Sehul Maheshwari"], "Brother");
console.log(`\nRELATIONSHIP\n\n`);
console.log(`Relationship Status: ${familyInformation.getRelationshipStatus()}`);
console.log(`${familyInformation.getRelationshipStatus()} to: ${familyInformation.getRelationshipTo()}`);
console.log(`${familyInformation.getRelationshipSince()}`);
// Family Members
console.log(`\nFAMILY MEMBERS\n\n`);
console.log(`${familyInformation.getFamilyMemberRelation()} : ${familyInformation.getFamilyMemberName()}`);
// Personal Details 
console.log(`\nDetails About You: \n\n`);
let personalDetails = new PersonalDetails("B+","Nickname","Preet",true,"I am a lover of art and music :)",
"Everything is fair in love and war.",true);
console.log(`\nABOUT YOU\n\n`);
console.log(`${personalDetails.getAboutYou()}`);
console.log(`\nOTHER NAMES\n\n`);
console.log(`${personalDetails.getNameType()} : ${personalDetails.getName()}`);
console.log(`\nFAVORITE QUOTES\n\n`);
console.log(`${personalDetails.getFavoriteQuotes()}`);
console.log(`\nBLOOD DONATIONS\n\n`);
console.log(`Blood Group: ${personalDetails.getBloodGroup()}`);
console.log(`Have donated blood: ${personalDetails.getHaveDonatedBlood()}`);
// Life Events Details
let lifeEvent1 = new LifeEvents("July 19, 2016",undefined,"Pune, Maharashtra","Dr Mitali Dodiya","I feel the luckiest person on the planet with the most exquisite ring on my finger.",true);
console.log(`\nLIFE EVENTS\n\n`);
console.log(`Life Event: Got Engaged to ${lifeEvent1.getWithWho()}`);
console.log(`Time Period: ${lifeEvent1.getWhen()}`);
console.log(`Story: ${lifeEvent1.getStory()}`);
console.log(`Upload photo: ${lifeEvent1.getUploadPhotoStatus()}`);
