export function ReadTime(wordCount) {
    // Average reading speed in words per minute
    const wordsPerMinute = 200;
  
    // Calculate the number of words in the text
    // const wordCount = text.split(/\s+/).length;
  
    // Calculate reading time in minutes
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
    return readingTime;
  }
