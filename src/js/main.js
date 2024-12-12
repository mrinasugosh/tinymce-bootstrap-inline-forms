// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

tinymce.init({
    selector: '#descriptionTextarea',
    menubar: false,                    // Disable the menu bar for simplicity
    plugins: ['link', 'paste'],        
    toolbar: 'undo redo | bold italic | link', 
    height: 300,                      
  });
  