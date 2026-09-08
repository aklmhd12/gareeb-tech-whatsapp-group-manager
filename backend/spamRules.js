function isAllowedLink(url) {
  const allowed = [
    'youtube.com',
    'youtu.be',
    'zoom.us',
    'zoom.com',
    'meet.google.com',
    'teams.microsoft.com'
  ];
  return allowed.some(domain => url.includes(domain));
}

function isSpam(message) {
  if (!message) return false;

  const blockedWords = [
    'FREE',
    'OFFER',
    'CLICK HERE',
    'CRYPTO',
    'INVESTMENT'
  ];

  return blockedWords.some(word =>
    message.toUpperCase().includes(word)
  );
}

module.exports = { isAllowedLink, isSpam };