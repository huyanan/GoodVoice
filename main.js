const ioHook = require('iohook');
const player1 = require('play-sound')();
const player2 = require('play-sound')();

// 注册键盘事件监听器
ioHook.on("keydown", event => {
  // console.log('keydown', {
  //   ctrlKey: event.ctrlKey,
  //   metaKey: event.metaKey,
  //   keycode: event.keycode
  // });
  console.log(event)
  // try {
  //   // 判断是否按下了组合键 Command + Control + L (MacOS)
  //   if (event.metaKey && event.ctrlKey && event.keycode === 38) {
  //     // 播放音频
  //     player1.play('./turn_around.mp3', function(err){
  //         if (err) console.log('Error occurred while playing audio:', err);
  //     });
  //     player2.play('./cheer.mp3', function(err){
  //       if (err) console.log('Error occurred while playing audio:', err);
  //     });
  //   }
  // } catch (error) {
  //   console.error('Error:', error);
  // }
});

// control
// keycode 29 rowcode 59
// command
// keycode 3675 rowcode 55
// l的keycode
// keycode 38 rowcode 37
try {
  const id = ioHook.registerShortcut(
    [59, 55, 37],
    (keys) => {
      console.log('Shortcut called with keys:', keys);
      playSound();
    },
    (keys) => {
      console.log('Shortcut has been released!');
    }
  );
  
} catch (error) {
  console.log(error)
}

function playSound() {
  // 播放音频
  player1.play('./turn_around.mp3', function(err){
      if (err) console.log('Error occurred while playing audio:', err);
  });
  player2.play('./cheer.mp3', function(err){
    if (err) console.log('Error occurred while playing audio:', err);
  });
}




// 启动键盘事件监听
ioHook.useRawcode(true);
ioHook.start(); // debug mode
// ioHook.start(true); // debug mode
