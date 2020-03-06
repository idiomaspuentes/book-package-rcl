const data = [
  {"id": "gen", "title": "Genesis", "usfm": "01-GEN", "testament": "old", "verseCount": 1533, "chapters": [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26]},
  {"id": "exo", "title": "Exodus", "usfm": "02-EXO", "testament": "old", "verseCount": 1213, "chapters": [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]},
  {"id": "lev", "title": "Leviticus", "usfm": "03-LEV", "testament": "old", "verseCount": 859, "chapters": [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34]},
  {"id": "num", "title": "Numbers", "usfm": "04-NUM", "testament": "old", "verseCount": 1288, "chapters": [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13]},
  {"id": "deu", "title": "Deuteronomy", "usfm": "05-DEU", "testament": "old", "verseCount": 959, "chapters": [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12]},
  {"id": "jos", "title": "Joshua", "usfm": "06-JOS", "testament": "old", "verseCount": 658, "chapters": [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]},
  {"id": "jdg", "title": "Judges", "usfm": "07-JDJ", "testament": "old", "verseCount": 618, "chapters": [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25]},
  {"id": "rut", "title": "Ruth", "usfm": "08-RUT", "testament": "old", "verseCount": 85, "chapters": [22, 23, 18, 22]},
  {"id": "1sa", "title": "1 Samuel", "usfm": "09-1SA", "testament": "old", "verseCount": 810, "chapters": [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13]},
  {"id": "2sa", "title": "2 Samuel", "usfm": "10-2SA", "testament": "old", "verseCount": 695, "chapters": [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25]},
  {"id": "1ki", "title": "1 Kings", "usfm": "11-1KI", "testament": "old", "verseCount": 816, "chapters": [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53]},
  {"id": "2ki", "title": "2 Kings", "usfm": "12-2KI", "testament": "old", "verseCount": 719, "chapters": [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30]},
  {"id": "1ch", "title": "1 Chronicles", "usfm": "13-1CH", "testament": "old", "verseCount": 942, "chapters": [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30]},
  {"id": "2ch", "title": "2 Chronicles", "usfm": "14-2CH", "testament": "old", "verseCount": 822, "chapters": [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23]},
  {"id": "ezr", "title": "Ezra", "usfm": "15-EZR", "testament": "old", "verseCount": 280, "chapters": [11, 70, 13, 24, 17, 22, 28, 36, 15, 44]},
  {"id": "neh", "title": "Nehemiah", "usfm": "16-NEH", "testament": "old", "verseCount": 406, "chapters": [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31]},
  {"id": "est", "title": "Ester", "usfm": "17-EST", "testament": "old", "verseCount": 167, "chapters": [22, 23, 15, 17, 14, 14, 10, 17, 32, 3]},
  {"id": "job", "title": "Job", "usfm": "18-JOB", "testament": "old", "verseCount": 1070, "chapters": [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17]},
  {"id": "psa", "title": "Psalms", "usfm": "19-PSA", "testament": "old", "verseCount": 2461, "chapters": [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6]},
  {"id": "pro", "title": "Proverbs", "usfm": "20-PRO", "testament": "old", "verseCount": 915, "chapters": [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31]},
  {"id": "ecc", "title": "Ecclesiastes", "usfm": "21-ECC", "testament": "old", "verseCount": 222, "chapters": [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14]},
  {"id": "sng", "title": "Song of Songs", "usfm": "22-SNG", "testament": "old", "verseCount": 117, "chapters": [17, 17, 11, 16, 16, 13, 13, 14]},
  {"id": "isa", "title": "Isaiah", "usfm": "23-ISA", "testament": "old", "verseCount": 1292, "chapters": [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24]},
  {"id": "jer", "title": "Jermiah", "usfm": "24-JER", "testament": "old", "verseCount": 1364, "chapters": [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34]},
  {"id": "lam", "title": "Lamentations", "usfm": "25-LAM", "testament": "old", "verseCount": 154, "chapters": [22, 22, 66, 22, 22]},
  {"id": "ezk", "title": "Ezekiel", "usfm": "26-EZK", "testament": "old", "verseCount": 1273, "chapters": [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35]},
  {"id": "dan", "title": "Daniel", "usfm": "27-DAN", "testament": "old", "verseCount": 357, "chapters": [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13]},
  {"id": "hos", "title": "Hosea", "usfm": "28-HOS", "testament": "old", "verseCount": 197, "chapters": [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9]},
  {"id": "jol", "title": "Joel", "usfm": "29-JOL", "testament": "old", "verseCount": 73, "chapters": [20, 32, 21]},
  {"id": "amo", "title": "Amos", "usfm": "30-AMO", "testament": "old", "verseCount": 146, "chapters": [15, 16, 15, 13, 27, 14, 17, 14, 15]},
  {"id": "oba", "title": "Obadiah", "usfm": "31-OBA", "testament": "old", "verseCount": 21, "chapters": [21]},
  {"id": "jon", "title": "Jonah", "usfm": "32-JON", "testament": "old", "verseCount": 48, "chapters": [17, 10, 10, 11]},
  {"id": "mic", "title": "Micah", "usfm": "33-MIC", "testament": "old", "verseCount": 105, "chapters": [16, 13, 12, 13, 15, 16, 20]},
  {"id": "nam", "title": "Nahum", "usfm": "34-NAM", "testament": "old", "verseCount": 47, "chapters": [15, 13, 19]},
  {"id": "hab", "title": "Habakkuk", "usfm": "35-HAB", "testament": "old", "verseCount": 56, "chapters": [17, 20, 19]},
  {"id": "zep", "title": "Zephaniah", "usfm": "36-ZEP", "testament": "old", "verseCount": 53, "chapters": [18, 15, 20]},
  {"id": "hag", "title": "Haggai", "usfm": "37-HAG", "testament": "old", "verseCount": 38, "chapters": [15, 23]},
  {"id": "zec", "title": "Zechariah", "usfm": "38-ZEC", "testament": "old", "verseCount": 211, "chapters": [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21]},
  {"id": "mal", "title": "Malachi", "usfm": "39-MAL", "testament": "old", "verseCount": 55, "chapters": [14, 17, 18, 6]},
  {"id": "mat", "title": "Matthew", "usfm": "41-MAT", "testament": "new", "verseCount": 1071, "chapters": [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]},
  {"id": "mrk", "title": "Mark", "usfm": "42-MRK", "testament": "new", "verseCount": 678, "chapters": [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]},
  {"id": "luk", "title": "Luke", "usfm": "43-LUK", "testament": "new", "verseCount": 1151, "chapters": [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]},
  {"id": "jhn", "title": "John", "usfm": "44-JHN", "testament": "new", "verseCount": 879, "chapters": [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]},
  {"id": "act", "title": "Acts", "usfm": "45-ACT", "testament": "new", "verseCount": 1007, "chapters": [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31]},
  {"id": "rom", "title": "Romans", "usfm": "46-ROM", "testament": "new", "verseCount": 433, "chapters": [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]},
  {"id": "1co", "title": "1 Corinthians", "usfm": "47-1CO", "testament": "new", "verseCount": 437, "chapters": [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]},
  {"id": "2co", "title": "2 Corinthians", "usfm": "48-2CO", "testament": "new", "verseCount": 257, "chapters": [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14]},
  {"id": "gal", "title": "Galations", "usfm": "49-GAL", "testament": "new", "verseCount": 149, "chapters": [24, 21, 29, 31, 26, 18]},
  {"id": "eph", "title": "Ephesians", "usfm": "50-EPH", "testament": "new", "verseCount": 155, "chapters": [23, 22, 21, 32, 33, 24]},
  {"id": "php", "title": "Phillipians", "usfm": "51-PHP", "testament": "new", "verseCount": 104, "chapters": [30, 30, 21, 23]},
  {"id": "col", "title": "Colossians", "usfm": "52-COL", "testament": "new", "verseCount": 95, "chapters": [29, 23, 25, 18]},
  {"id": "1th", "title": "1 Thessalonians", "usfm": "53-1TH", "testament": "new", "verseCount": 89, "chapters": [10, 20, 13, 18, 28]},
  {"id": "2th", "title": "2 Thessalonians", "usfm": "54-2TH", "testament": "new", "verseCount": 47, "chapters": [12, 17, 18]},
  {"id": "1ti", "title": "1 Timothy", "usfm": "55-1TI", "testament": "new", "verseCount": 113, "chapters": [20, 15, 16, 16, 25, 21]},
  {"id": "2ti", "title": "2 Timothy", "usfm": "56-2TI", "testament": "new", "verseCount": 83, "chapters": [18, 26, 17, 22]},
  {"id": "tit", "title": "Titus", "usfm": "57-TIT", "testament": "new", "verseCount": 46, "chapters": [16, 15, 15]},
  {"id": "phm", "title": "Philemon", "usfm": "58-PHM", "testament": "new", "verseCount": 25, "chapters": [25]},
  {"id": "heb", "title": "Hebrews", "usfm": "59-HEB", "testament": "new", "verseCount": 303, "chapters": [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]},
  {"id": "jas", "title": "James", "usfm": "60-JAS", "testament": "new", "verseCount": 108, "chapters": [27, 26, 18, 17, 20]},
  {"id": "1pe", "title": "1 Peter", "usfm": "61-1PE", "testament": "new", "verseCount": 105, "chapters": [25, 25, 22, 19, 14]},
  {"id": "2pe", "title": "2 Peter", "usfm": "62-2PE", "testament": "new", "verseCount": 61, "chapters": [21, 22, 18]},
  {"id": "1jn", "title": "1 John", "usfm": "63-1JN", "testament": "new", "verseCount": 105, "chapters": [10, 29, 24, 21, 21]},
  {"id": "2jn", "title": "2 John", "usfm": "64-2JN", "testament": "new", "verseCount": 13, "chapters": [13]},
  {"id": "3jn", "title": "3 John", "usfm": "65-3JN", "testament": "new", "verseCount": 15, "chapters": [15]},
  {"id": "jud", "title": "Jude", "usfm": "66-JUD", "testament": "new", "verseCount": 25, "chapters": [25]},
  {"id": "rev", "title": "Revelation", "usfm": "67-REV", "testament": "new", "verseCount": 404, "chapters": [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]}
]

export const bookTitleById = (id) => {
  for (let i=0; i < data.length; i++) {
    if ( data[i].id === id ) {
      return data[i].title;
    }
  }
  return "";
}
export const chaptersInBook = (bookId) => {
  try {
    let chapters;
    if (bookId === 'obs') {
      chapters = [...Array(50).keys()].map(i=>i+1);
    } else {
      chapters = bookData(bookId).chapters;
    }
    return chapters;
  } catch(error) {
    return null;
  }
};

export const versesInChapter = ({bookId, chapter}) => {
  const verses = chaptersInBook({bookId})[chapter - 1];
  return verses;
};

export const bookData = (bookId) => {
  const _bookData = data.filter(row => row.id === bookId)[0];
  return _bookData;
};

export const testament = (bookId) => {
  const _testament = bookData(bookId).testament;
  return _testament;
};

export const validateBookId = (reference) => {
  let valid;
  if (reference.bookId === 'obs') {
    valid = true;
  } else if (reference.bookId && !!bookData(reference.bookId)) {
    valid = true;
  }
  return valid;
}

export const validateChapter = (reference) => {
  const dependencies = ( validateBookId(reference) );
  const chapters = chaptersInBook(reference.bookId);
  const chapterCount = chapters.length;
  const inRange = (chapterCount && reference.chapter <= chapterCount);

  const valid = (dependencies && inRange);
  return valid;
}

export const validateVerse = (reference) => {
  const dependencies = (validateBookId(reference) && validateChapter(reference));
  const chapters = chaptersInBook(reference.bookId);
  const verseCount = chapters[reference.chapter-1];
  const inRange = (verseCount && reference.verse <= verseCount);
  return (dependencies && inRange);
};

export const validateReference = (reference) => {
  const validBookId = validateBookId(reference);
  if ( !validBookId ) return false;
  const validChapter = validateChapter(reference);
  if ( !validChapter ) return false;
  const validVerse = (!!reference.verse) ? validateVerse(reference) : true;
  if ( !validVerse ) return false
  return true;
};
