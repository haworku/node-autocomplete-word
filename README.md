# autocomplete-word
Autocomplete word fragments using one or more text files as the data source

## Usage
- `npm install` to add js dependencies 
-  `node ./solution.js [word fragment] [files]` i.e. `node ./solution.js betwix fixtures/shakespeare-complete.txt fixtures/other-source.txt`


## Requirements
- [x] executable from the command line and accept arguments as a list consisting of a fragment and one or more file paths
- [x] case-insensitive 
- [x] returns words that auto-complete fragment and frequency in text
- [x] returns only top 25 words,  ordered by frequency 

### Stretch
- [ ] unicode data and queries are supported (e.g. `ünch` might return `München`, and `ÁRE` might return `JUÁREZ`)
- [ ] can handle large files while still performant (in both time and space complexity)


## Known Bugs/Issues


## How to Extend
