# autocomplete-word

Autocomplete word fragments using one or more text files as the data source

## Usage

- `npm install` to add js dependencies
- `node ./solution.js [word fragment] [files]`
  - e.g. `node ./solution.js betwix fixtures/shakespeare-complete.txt fixtures/lorem-unicode-aware.txt`

## Requirements

- [x] command line executable, accepts string fragment and one or more file paths as parameters
- [x] case-insensitive
- [x] returns words that auto-complete fragment and frequency in text
- [x] returns only top 25 words, ordered by frequency

### Stretch

- [x] some unicode data and queries support (not fully tested)

## Known Bugs/Issues

- Does not validate file input is txt file
- Naive solution using unicode-aware regex matching. Does not do apply any fuzzy search or distance matching which could account for mispellings, similar sounding words, etc.
- Does not strip out trailing dashes (e.g `between-`) and counts as separate word
- Random: should rename any use of `fragment` variable to `query` because fragments have so many other references in js land.

## How to Extend

- Consider alternatives to `fs.readFile` which is not performant on larger files.
- Implement matching/search algorithms.
- Consider space and time complexity... in general
- Seek to optimize `sortByFreq`
