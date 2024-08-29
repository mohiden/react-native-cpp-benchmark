#import "RNLazerInput.h"
#import "../cpp/RNLazerInput.cpp"  // Ensure correct path and file extension

extern "C" int add(int a, int b);

@implementation RNLazerInput

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(add:(int)a b:(int)b resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    int result = add(a, b);
    resolve(@(result));
}

@end

