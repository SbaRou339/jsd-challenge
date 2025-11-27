# Minimum Cars Needed — TypeScript Solution

### This repository contains a clean, well-structured TypeScript solution to the classic “minimum number of cars needed” problem. Each car has a number of people currently in it and a total number of seats. People can move freely between cars, and the goal is to determine the minimum number of cars required to transport everyone.

## Problem Summary

You are given two arrays:

P[K] — number of people originally in each car

S[K] — number of seats in each car

The group wants to use as few cars as possible while ensuring all people can be accommodated across the chosen cars. Any extra cars should remain parked.

🧩 Approach

This solution uses a greedy algorithm with sorting, which is optimal, simple, and easy to explain:

Calculate the total number of people.

Sort seat capacities in descending order.

Take the largest cars first and keep subtracting their seat capacity from the remaining people.

Stop once everyone fits — the number of cars used is the answer.

This method is clean, efficient, and perfect for junior developer interviews or coding assessments.

📦 Features

✔️ Written in TypeScript

✔️ Easy-to-read, interview-ready solution

✔️ Includes example test cases

✔️ Clear algorithm explanation

✔️ Beginner and junior-friendly code

🚀 How to Run
