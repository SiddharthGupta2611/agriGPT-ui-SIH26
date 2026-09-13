// Audio Text-to-Speech Helper with Vernacular Support
export const playVernacularSpeech = (
  text: string, 
  lang: 'en' | 'hi' | 'mr', 
  onStart?: () => void, 
  onEnd?: () => void
): boolean => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onStart) onStart();
    setTimeout(() => { if (onEnd) onEnd(); }, 3000);
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Select language tag
  switch (lang) {
    case 'hi':
      utterance.lang = 'hi-IN';
      break;
    case 'mr':
      // Fallback to hi-IN or mr-IN if available
      utterance.lang = 'mr-IN';
      break;
    case 'en':
    default:
      utterance.lang = 'en-IN';
      break;
  }

  utterance.rate = 0.95; // Slightly slower for clear agrarian comprehension
  utterance.pitch = 1.0;

  if (onStart) {
    utterance.onstart = () => onStart();
  }
  if (onEnd) {
    utterance.onend = () => onEnd();
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
  return true;
};

export const stopSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
