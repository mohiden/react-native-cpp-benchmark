# react-native-c++-benchmark

In this repository, I have implemented a quicksort algorithm in C++ and benchmarked it against a JavaScript quicksort algorithm. To perform the benchmarking, the C++ function is executed within a React Native app.

## Features
- **High Performance**: Leveraging C++ for low-level, optimized text handling.
- Cross-platform support for both Android and iOS.
- Simple API with support for common text input properties.


## Installation
- **Step 1**: Install the package using or yarn install.
- **Step 2**: cd ios && pod install --repo-update
- **Step 3**: open the project in Xcode and run the project or open ios/RNLazerInput.xcworkspace.
- **Step 4**: in xcode clean the project with cmd+shift+k and run the project


## benchmarks
- to run the native c++ benchmarks
- **Step 1**: cd cpp && g++ -std=c++11 -O2 -o benchmark RNLazerInput.cpp benchmark.cpp
- **Step 2**: ./benchmark
