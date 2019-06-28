import React from 'react';

let whatClass = ""

function whatever()
{
    whatClass = "pressed";
}

function Home()
{
    return(
        <div>
            <h1 onClick={whatever} className = {whatClass}>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Id 
                cursus metus aliquam eleifend mi in. Turpis egestas maecenas pharetra convallis posuere morbi 
                leo urna molestie. Adipiscing tristique risus nec feugiat in. Volutpat blandit aliquam etiam erat 
                velit scelerisque in dictum. Placerat in egestas erat imperdiet. Turpis cursus in hac 
                habitasse platea dictumst. Dictum non consectetur a erat nam at. Turpis in eu mi bibendum
                neque egestas. Eget mauris pharetra et ultrices. Tortor aliquam nulla facilisi cras fermentum odio.
                Congue nisi vitae suscipit tellus mauris a.</p>
        </div>
    )
}

export default Home;