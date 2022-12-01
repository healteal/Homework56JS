document.addEventListener('DOMContentLoaded', () => {
    function follow()  {
        const bird = document.querySelector('#bird');
        window.addEventListener('mousemove', e => {
            bird.style.left = e.pageX + 'px';
            bird.style.top = e.pageY + 'px';
        })
    }
    follow();
})