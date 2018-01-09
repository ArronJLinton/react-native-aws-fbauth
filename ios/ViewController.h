//
//  ViewController.h
//  auth
//
//  Created by Arron Linton on 1/4/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#ifndef ViewController_h
//#define ViewController_h

// Add this to the header of your file, e.g. in ViewController.m
// after #import "ViewController.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>

// Add this to the body
@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  FBSDKLoginButton *loginButton = [[FBSDKLoginButton alloc] init];
  // Optional: Place the button in the center of your view.
  loginButton.center = self.view.center;
  loginButton.readPermissions = @[@"public_profile", @"email"];
  [self.view addSubview:loginButton];
}

@end

//#endif /* ViewController_h */

