self.addEventListener('push', function(event) {
  let data = { title: '⏰ 計時時間到！', body: '你的階段倒數已結束！' };
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: 'https://via.placeholder.com/192/ff4d6d/ffffff?text=🍉',
    badge: 'https://via.placeholder.com/96/ff4d6d/ffffff?text=🍉',
    vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40],
    tag: 'watermelon-timer-notification',
    renotify: true,
    data: { dateOfArrival: Date.now() }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
