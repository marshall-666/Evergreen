function handleGarbage(top="5em", left="20em", url="/images/garbage/grouped garbage.png", name="falling")
{
    return`
    <div>
    <img style="
    display:flex;
    position: relative;
    left:${left};
    top: ${top};
    animation: ${name} 5s linear 0s;" src="${url}" alt="">

    </div>
    
    `
}

