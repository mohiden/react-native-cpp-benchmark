#include "RNLazerInput.h"
#include <chrono>
#include <cstdlib>
#include <iostream>
#include <vector>

void generateRandomArray(std::vector<int> &array, int size) {
  for (int i = 0; i < size; ++i) {
    array.push_back(rand() % 1000);
  }
}

int *toCArray(const std::vector<int> &vec) {
  int *array = new int[vec.size()];
  std::copy(vec.begin(), vec.end(), array);
  return array;
}

int main() {
  const int size = 100000;
  std::vector<int> array;
  generateRandomArray(array, size);

  int *cArray = toCArray(array);

  auto start = std::chrono::high_resolution_clock::now();

  quicksort(cArray, 0, size - 1);

  auto end = std::chrono::high_resolution_clock::now();

  std::chrono::duration<double, std::milli> duration = end - start;

  std::cout << "Quicksort took " << duration.count() << " ms for " << size
            << " elements.\n";

  delete[] cArray;

  return 0;
}
