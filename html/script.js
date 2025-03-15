document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', function() {
        const content = this.nextElementSibling;

        document.querySelectorAll('.section-content').forEach(section => {
            if(section !== content){
                section.classList.remove('active')
            }
        });
        content.classList.toggle('active')
    });
});