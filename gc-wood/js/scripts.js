const copyBtn = document.getElementById('copy-btn');
const copyTarget = document.getElementById('discount-code');
const copyNotification = document.getElementById('copy-status');
copyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const textToCopy = document.createElement('textarea');
  
  // Copy to clipboard
  textToCopy.value = copyTarget.innerText;
  textToCopy.classList.add('sr-only');
  document.body.appendChild(textToCopy);
  textToCopy.focus();
  textToCopy.select();
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      console.log('Text copied!');
      copyNotification.textContent = 'Discount code copied to clipboard.';
      copyBtn.setAttribute('data-copied',true);
      setTimeout(() => {
        copyBtn.removeAttribute('data-copied');
      }, 1000);
    }
  } catch (err) {
    console.error('Fallback failed', err);
  }
  
  // Cleanup
  document.body.removeChild(textToCopy);
});
