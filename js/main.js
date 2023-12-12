var typed=new Typed('.typing',{
    strings:['Web Developer','UX Designer','Content Creator'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

const asideCursor = document.querySelectorAll(".aside-cursor");

asideCursor.forEach((cursor) => {
    cursor.addEventListener('click', () => {
        asideCursor.forEach((cs) => {
            cs.classList.remove('active');
        });
        cursor.classList.add('active');
    });
});