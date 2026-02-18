// ADDED: Simple function to show flowers and text
        function startFlowers() {
            document.getElementById('welcome-page').classList.add('hide');
            document.getElementById('anniversary-text').classList.add('show');
            // ADJUSTED TIMING: Now flowers grow AFTER button click
            document.body.classList.remove("container");
        }
        
        // ADJUSTED TIMING: Removed automatic container removal
        onload = () =>{
            // Flowers will wait for button click
            // Container class keeps them paused until then
        };