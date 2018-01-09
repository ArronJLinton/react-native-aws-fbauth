//
//  ViewController.swift
//  auth
//
//  Created by Arron Linton on 1/4/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

import UIKit
import AWSAuthCore
import AWSAuthUI

//@UIApplicationMain

class ViewController: UIViewController {
  
  override func viewDidLoad() {
    
    super.viewDidLoad()
    
    if !AWSSignInManager.sharedInstance().isLoggedIn {
      AWSAuthUIViewController
        .presentViewController(with: self.navigationController!,
           configuration: nil,
           completionHandler: { (provider: AWSSignInProvider, error: Error?) in
            if error != nil {
              print("Damn Error occurred: \(String(describing: error))")
            } else {
              // sign in successful.
              print("We live baby !")
            }
        })
    }
  }
}
