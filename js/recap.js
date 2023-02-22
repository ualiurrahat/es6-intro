// bg change
document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName("friend");
    for(const friend of friends)
    {
        friend.style.backgroundColor = 'lightblue';
    }
});
// text center for third element
document.getElementById("text-center").addEventListener('click', function(){
    const ele = document.getElementById("third-friend");
    ele.style.textAlign = 'center';
});

// add new friend
document.getElementById("ad-btn").addEventListener('click', function(){
    const friendsContainer = document.getElementById("friends-container");
    const div = document.createElement("div");
    div.innerHTML =`
    <h3 class = "friend-name">Friend New</h3>
    <p>This is my new friend</p>`
    div.classList.add("friend");
    friendsContainer.appendChild(div);

})
