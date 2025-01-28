# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common React bug where the cleanup function within a `useEffect` hook is not called when the component unmounts.  This can lead to memory leaks or unexpected behavior if the effect involves asynchronous operations.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the corrected version.

## Bug Description
The issue stems from incorrect usage or missing dependency array in the useEffect hook. In this specific case, missing the return function causes the cleanup not to be called when the component unmounts, leading to issues like memory leaks, which is fixed in bugSolution.js file. 

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs when mounting and unmounting the component.

## Solution
The solution is to always include a cleanup function and properly manage dependencies in the useEffect hook to ensure the cleanup function gets called when the component is unmounted. The `bugSolution.js` file demonstrates the correct approach. 