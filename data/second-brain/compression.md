# Compression

- The act of making something smaller
- Often used to store/transmit efficiently
- Reduction in the amount of space needed to store a piece of data or the bandwidth to transmit it
- Compression ratio
  - Size compressed data / size of original data
- Can be lossy or lossless
  - Lossless --> compression where _no_ data is lost
  - Lossy --> compression where _some_ data is lost

## Text Compression

- Three common types:
  - [Keyword encoding](#keyword-encoding)
  - [Run-length encoding](#run-length-encoding)
  - [Huffman encoding](#huffman-encoding)

### Keyword Encoding

- Frequently used words are replaced with characters
- We do not bother encoding single length words (I, a, etc) because we wouldn't save any space
- The longer the word, the higher the compression ratio

### Keyword Encoding Example

| word | symbol |
| ---- | ------ |
| As*  | ^      |
| the  | ~      |
| and  | +      |
| that | $      |
| must | &      |

_*note the uppercase A_

As the Sun and the Moon circle the Earth, we must remember that we are small.

becomes...

`^` `~` Sun `+` `~` Moon circle `~` Earth, we `&` remember `$` we are small.

## Run-Length Encoding

- When characters are repeated, we remove all duplicates and replace them with a count
  - `AAAAAAA` ---> `*A7`
  - `*` is a flag indicating compression needs to be decoded

## Huffman Encoding

- Uses variable-length bit strings to represent each characters
- Frequently used characters have short codes
  - Saves space
- Every bit string representing a character must have a _unique prefix_
  - Allows you to decode

### Decoding

- Look for match left --> right (bit by bit)
- Replace when match found
- Repeat until decoded

### Huffman Encoding Example

| Huffman Code | Character |
| ------------ | --------- |
| 00           | A         |
| 01           | E         |
| 100          | L         |
| 110          | O         |
| 111          | R         |
| 1010         | B         |
| 1011         | D         |

- Encoding `DOORBELL` would result in `1011110110111101001100100`
- If this used a fixed-size bit string for each character (say 8 bits) it would take 64 bits to store the word (8 x 8)
- The compressed version only takes 25 bits
- Compression ratio is 25/64 (~0.39)

## Video Compression

## Temporal Compression

- Looks for differences between consecutive frames
- If most of an image in two frames hasn't changed, we don't need all of the data of the second frame
- Keyframe is chosen to compare differences
  - Entire keyframe is stored
- Consecutive images only store changes
  - Delta frames

## Spatial Compression

- Removes redundant information within a frame
- Similar issues faced by compression still images
- Group pixels into blocks that have same color
  - Instead of storing each pixel, color and coordinates are stored
  - Similar to [run-length encoding](#run-length-encoding)

[[Computer Science]]

