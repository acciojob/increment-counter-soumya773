//your JS code here. If required.
 const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    incrementButton.addEventListener('click', () => {
      const currentValue = parseInt(counterParagraph.textContent, 10);
      alert(`Current value: ${currentValue}`);
      counterParagraph.textContent = currentValue + 1;
    });