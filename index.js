const bibleArray =[{book:"Genesis",chapters:50,verses:1533},
{book:"Exodus",chapters:40,verses:1213},
{book:"Leviticus",chapters:27,verses:859},
{book:"Numbers",chapters:36,verses:1288},
{book:"Deuteronomy",chapters:34,verses:959},
{book:"Joshua",chapters:24,verses:658},
{book:"Judges",chapters:21,verses:618},
{book:"Ruth",chapters:4,verses:85},
{book:"1 Samuel",chapters:31,verses:810},
{book:"2 Samuel",chapters:24,verses:695},
{book:"1 Kings",chapters:22,verses:816},
{book:"2 Kings",chapters:25,verses:719},
{book:"1 Chronicles",chapters:29,verses:942},
{book:"2 Chronicles",chapters:36,verses:822},
{book:"Ezra",chapters:10,verses:280},
{book:"Nehemiah",chapters:13,verses:406},
{book:"Esther",chapters:10,verses:167},
{book:"Job",chapters:42,verses:1070},
{book:"Psalms",chapters:150,verses:2461},
{book:"Proverbs",chapters:31,verses:915},
{book:"Ecclesiastes",chapters:12,verses:222},
{book:"Song of Solomon",chapters:8,verses:117},
{book:"Isaiah",chapters:66,verses:1292},
{book:"Jeremiah",chapters:52,verses:1364},
{book:"Lamentations",chapters:5,verses:154},
{book:"Ezekiel",chapters:48,verses:1273},
{book:"Daniel",chapters:12,verses:357},
{book:"Hosea",chapters:14,verses:197},
{book:"Joel",chapters:3,verses:73},
{book:"Amos",chapters:9,verses:146},
{book:"Obadiah",chapters:1,verses:21},
{book:"Jonah",chapters:4,verses:48},
{book:"Micah",chapters:7,verses:105},
{book:"Nahum",chapters:3,verses:47},
{book:"Habakkuk",chapters:3,verses:56},
{book:"Zephaniah",chapters:3,verses:53},
{book:"Haggai",chapters:2,verses:38},
{book:"Zechariah",chapters:14,verses:211},
{book:"Malachi",chapters:4,verses:55},
{book:"Matthew",chapters:28,verses:1071},
{book:"Mark",chapters:16,verses:678},
{book:"Luke",chapters:24,verses:1151},
{book:"John",chapters:21,verses:879},
{book:"Acts",chapters:28,verses:1007},
{book:"Romans",chapters:16,verses:433},
{book:"1 Corinthians",chapters:16,verses:437},
{book:"2 Corinthians",chapters:13,verses:257},
{book:"Galatians",chapters:6,verses:149},
{book:"Ephesians",chapters:6,verses:155},
{book:"Philippians",chapters:4,verses:104},
{book:"Colossians",chapters:4,verses:95},
{book:"1 Thessalonians",chapters:5,verses:89},
{book:"2 Thessalonians",chapters:3,verses:47},
{book:"1 Timothy",chapters:6,verses:113},
{book:"2 Timothy",chapters:4,verses:83},
{book:"Titus",chapters:3,verses:46},
{book:"Philemon",chapters:1,verses:25},
{book:"Hebrews",chapters:13,verses:303},
{book:"James",chapters:5,verses:108},
{book:"1 Peter",chapters:5,verses:105},
{book:"2 Peter",chapters:3,verses:61},
{book:"1 John",chapters:5,verses:105},
{book:"2 John",chapters:1,verses:13},
{book:"3 John",chapters:1,verses:14},
{book:"Jude",chapters:1,verses:25},
{book:"Revelation",chapters:22,verses:404}];

var referenceDay = 1649476800000;
var oneDay = 86400000;
var referenceChapter = 914;
var today = Date.now();
var daysSince = Math.floor((today - referenceDay) / oneDay);
var todayChapter = referenceChapter + daysSince;
var startDate = new Date(referenceDay - (referenceChapter*24*3600*1000));

var totalChapters = bibleArray.reduce(function(a, b) {
 return a + b.chapters;
}, 0);
var totalVerses = bibleArray.reduce(function(a, b) {
 return a + b.verses;
}, 0);

var countChapters = todayChapter;
var currentBook ="";
var currentChapter=0;
var versesRead =0;

let i = -1;
while (countChapters > 0 ){
  i++;
  currentBook = bibleArray[i].book;
  countChapters -= bibleArray[i].chapters;
  versesRead += bibleArray[i].verses;
}

currentChapter = bibleArray[i].chapters + countChapters;
versesRead -= bibleArray[i].verses;
var newTestament = 930-referenceChapter;
var newTestamentDate = new Date(newTestament*24*3600*1000+referenceDay);
var percentBooks = 100*i / 66;
var percentChapters = 100*todayChapter/totalChapters;
var finishedDays = totalChapters-referenceChapter-2;
var finishedDate = new Date((totalChapters-referenceChapter)*24*3600*1000+referenceDay);

document.getElementById("date-start").innerHTML = startDate.toDateString();
document.getElementById("today's-chapter").innerHTML = currentBook + " " + currentChapter;
document.getElementById("bible-facts").innerHTML = i + " full books read, " + todayChapter + " chapters read, at least "+ versesRead + " verses read.";
document.getElementById("new-testament").innerHTML = newTestamentDate.toDateString() + " or in " + (newTestament-2) +" days.";
document.getElementById("progress").innerHTML = percentBooks.toFixed(2) + "% of the books done and " + percentChapters.toFixed(2) + "% of the chapters done."
document.getElementById("finish-date").innerHTML = finishedDate.toDateString() + " or in " + finishedDays +" days.";
document.getElementById("todays-link").href ="https://api.nlt.to/api/passages?ref="+currentBook+"."+currentChapter+"&key=test";
