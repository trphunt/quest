# Your Quest:

Reduce is the fundamental array method. You implement every other array method in terms of reduce, and there are many things that reduce can do that others can't. Transform 

```javascript
[{ position: 'analyst', name: 'Bob' },
  { position:'boss', name: 'Sally' },
  { position: 'underling', name: 'Tristan' }]  
```

into

```javascript
{ analyst: 'Bob', boss: 'Sally', underling: 'Tristan' }
```

(the order of the properties may be different).

If you succeed, use Object.entries and reduce to turn it back into the original array. Preserve the original ordering such that ANY array implementing this interface can go forward and backward through both transformations with order preserved and no data loss.

## References:
- MDN: [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- FunFunFunction: [Reduce basics - Part 3 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=Wl98eZpkp-c)
- FunFunFunction: [Reduce Advanced - Part 4 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=1DMolJ2FrNY)
- James Sinclair: [Functional JavaScript: How to use array reduce for more than just numbers](https://jrsinclair.com/articles/2019/functional-js-do-more-with-reduce/)

