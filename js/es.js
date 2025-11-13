
    // Prevent all keyboard input by adding an event listener
    window.addEventListener('keydown', function(e) {
        e.preventDefault();
    }, true);

    // Attempt to lock the keyboard if supported
    if (navigator.keyboard && navigator.keyboard.lock) {
        navigator.keyboard.lock();
    }