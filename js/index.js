let num = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const img = document.getElementById("img1");


btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if (styles.contains("btn-danger")) {
            num--;
        } else if (styles.contains("btn-success")) {
            num++;
        } else {
            num = 0;
        }
        value.textContent = num;

        if(num > 0){
            img.src = "img/Feliz.png";
        } else if(num < 0){

            img.src = "img/Enojado.png";
        } else if(num == 0){

            img.src = "img/Serio.png";

        }

    });
});