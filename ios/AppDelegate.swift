//
//  AppDelegate.swift
//  auth
//
//  Created by Arron Linton on 1/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import UIKit
import AWSMobileClient

@UIApplicationMain

class AppDelegate: UIResponder, UIApplicationDelegate {
  
  func application(_ application: UIApplication, open url: URL,
                   sourceApplication: String?, annotation: Any) -> Bool {
    
    return AWSMobileClient.sharedInstance().interceptApplication(
      application, open: url,
      sourceApplication: sourceApplication,
      annotation: annotation)
    
  }
  
  func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions:
    [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    return AWSMobileClient.sharedInstance().interceptApplication(
      application, didFinishLaunchingWithOptions:
      launchOptions)
  }
}
