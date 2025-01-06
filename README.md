# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrect usage of the `useEffect` hook.  The `useEffect` hook is essential for managing side effects, but improper dependency management can easily lead to unintended consequences.

## Problem

The `bug.js` file contains a component that attempts to increment a counter within the `useEffect` hook's callback function and includes the counter in its dependency array. This creates an infinite loop. Every time the counter updates, the effect runs again, causing the counter to update again, and so on.

## Solution

The `bugSolution.js` file demonstrates the corrected approach. The solution involves refactoring the code to update the counter based on conditions and avoid unnecessary re-renders. We use a conditional update with `useCallback` to efficiently manage state.