# autocomplete-word
Autocomplete word fragments using one or more text files as the data source

## Usage
- `npm install` to add js dependencies 
-  `node ./solution.js [word fragment] [files]` 
   -  e.g. `node ./solution.js betwix fixtures/shakespeare-complete.txt fixtures/lorem-unicode-aware.txt`  


## Requirements
- [x] executable from the command line and accept arguments as a list consisting of a fragment and one or more file paths
- [x] case-insensitive 
- [x] returns words that auto-complete fragment and frequency in text
- [x] returns only top 25 words,  ordered by frequency 

### Stretch
- [x] unicode data and queries are supported

## Known Bugs/Issues
- Does not validate file input is txt file
- Naive solution using substrings.  Does not do apply any fuzzy search or distance matching which could account for mispellings, similar sounding words, etc.
- Does not strip out trailing dashes (e.g `between-`) and counts as separate word

## How to Extend
- Consider alternatives to `fs.readFile` which is not performant on larger files. Also, use async file read (wrap in promise, for example).
- Implement matching/search algorithms.
- Consider space complexity... in general
- Seek to optimize sortByFreq
