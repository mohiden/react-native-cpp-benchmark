#include "RNLazerInput.h"
#include <algorithm>

int medianOfThree(int *array, int low, int high) {
    int mid = low + (high - low) / 2;
    if (array[low] > array[mid])
        std::swap(array[low], array[mid]);
    if (array[low] > array[high])
        std::swap(array[low], array[high]);
    if (array[mid] > array[high])
        std::swap(array[mid], array[high]);
    return mid;
}

void quicksort(int *array, int low, int high) {
    while (low < high) {
        if (high - low < 10) {
            for (int i = low + 1; i <= high; ++i) {
                int key = array[i];
                int j = i - 1;
                while (j >= low && array[j] > key) {
                    array[j + 1] = array[j];
                    --j;
                }
                array[j + 1] = key;
            }
            break;
        } else {
            int pivotIndex = medianOfThree(array, low, high);
            std::swap(array[pivotIndex], array[high]);
            int pivot = array[high];

            int i = low - 1;
            for (int j = low; j < high; ++j) {
                if (array[j] < pivot) {
                    i++;
                    std::swap(array[i], array[j]);
                }
            }
            std::swap(array[i + 1], array[high]);
            int pivotPos = i + 1;

            if (pivotPos - low < high - pivotPos) {
                quicksort(array, low, pivotPos - 1);
                low = pivotPos + 1; 
            } else {
                quicksort(array, pivotPos + 1, high);
                high = pivotPos - 1; 
            }
        }
    }
}
