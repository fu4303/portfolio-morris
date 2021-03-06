# Selection Sort

![Selection sort animation](/assets/second-brain/2020-10-22-08-50-00.gif)

- In-place comparison sort
- Inefficient for large lists
- Generally worse than insertion sort

## Complexity

| Average Time | Space  |
| ------------ | ------ |
| $O(n^2)$     | $O(1)$ |

## Process

- Find the smallest element in an [[array]]
- Swap it with the first unordered element

## Implementation

### JavaScript

```javascript
function selectionSort(array) {
  // Loop through the array
  for (let i = 0; i < array.length - 1; i++) {
    // Keep track of unsorted elelment
    let minIndex = i;

    // Loop through the rest of the array to find the smallest element
    for (let j = i + 1; j < array.length; j++) {
      // Smaller element found so update min
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Smallest element isn't the one we are at, swap them
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}
```

[[Computer Science]] [[Algorithm]]

