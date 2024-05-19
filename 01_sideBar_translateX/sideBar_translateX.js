let offset = -200;
/** side barの表示・非表示設定 */
document.getElementById("menuIcon").addEventListener("click", () => {
    showSideBar();
});

function showSideBar() {
    offset = -offset;
    const animation = document.getElementById("sideBar").animate(
        [
            {   transform: `translateX(${offset}px)`    }
        ],
        {
            duration: 200,
            fill: "forwards"
        },
    );
}
