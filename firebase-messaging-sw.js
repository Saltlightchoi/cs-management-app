importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// 파이어베이스 초기화 (백그라운드용)
firebase.initializeApp({
  apiKey: "AIzaSyAwHIxKGrMKm8kx2m8AlkCXrCUBBZFTYjc",
  authDomain: "cs-management-7a59f.firebaseapp.com",
  projectId: "cs-management-7a59f",
  storageBucket: "cs-management-7a59f.firebasestorage.app",
  messagingSenderId: "1073462154236",
  appId: "1:1073462154236:web:be8040bdd5c2c436a85879"
});

const messaging = firebase.messaging();

// 앱이 백그라운드에 있을 때 알림을 띄우는 로직
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 알림 수신: ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/Icon-192.png' // 스마트폰에 뜰 아이콘
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});