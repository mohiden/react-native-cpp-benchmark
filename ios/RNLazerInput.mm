#import "RNLazerInput.h"
#import "../cpp/RNLazerInput.cpp"

@implementation RNLazerInput

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(quicksort
                  : (NSArray<NSNumber *> *)array resolver
                  : (RCTPromiseResolveBlock)resolve rejecter
                  : (RCTPromiseRejectBlock)reject) {
  int length = (int)[array count];
  int *intArray = (int *)malloc(length * sizeof(int));

  for (int i = 0; i < length; ++i) {
    intArray[i] = [array[i] intValue];
  }

  quicksort(intArray, 0, length - 1);

  NSMutableArray *sortedArray = [NSMutableArray arrayWithCapacity:length];
  for (int i = 0; i < length; ++i) {
    [sortedArray addObject:@(intArray[i])];
  }

  free(intArray);

  resolve(@{ @"sortedArray" : sortedArray });
}

@end
