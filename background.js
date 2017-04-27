// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.debugger.attach({tabId:tab.id}, version,
      onAttach.bind(null, tab.id));
});

var version = "1.0";

   chrome.webRequest.onBeforeSendHeaders.addListener(
      function(details) {
          console.log("#############################");
          console.log(details.requestHeaders);

			
			var extraHeader = { "name":"user", "value":"san" };
			details.requestHeaders.push(extraHeader);
          	for (var i = 0; i < details.requestHeaders.length; ++i) {
            console.log(" Name :"+details.requestHeaders[i].name);
             console.log(" value :"+details.requestHeaders[i].value);
      
   
          }

          console.log(details.requestHeaders);
          return {requestHeaders: details.requestHeaders};
        },
        {urls: ["<all_urls>"]},
        ["blocking", "requestHeaders"]);

function onAttach(tabId) {
  if (chrome.runtime.lastError) {
    alert("hiya");
    alert(chrome.runtime.lastError.message);
    return;
  }



 // chrome.windows.create(
  //    {url: "headers.html?" + tabId, type: "popup", width: 800, height: 600});
}
