// SoundManager.js
import cuckooSound from '../../../assets/sounds/cuckoo.mp3';
import sheepSound from '../../../assets/sounds/sheep.mp3';

class SoundManager {
  constructor() {
    if (SoundManager.instance) {
      return SoundManager.instance;
    }

    this.sounds = {
      success: new Audio(cuckooSound),
      error: new Audio(sheepSound),
    };

    SoundManager.instance = this;
  }

  play(name) {
    const sound = this.sounds[name];
    if (!sound) return;

    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
}

export default new SoundManager();
