// make a card showing museum, artist name, description
function MakeTrendingCard(props) {
    return (
        <div class="card-border">
            <div class="card">
                <h2 class="gallery-name">{props.name}</h2>
                <p class="desc">{props.desc}</p>
                <div class="gallery-info">
                    <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.65625 30.3984H16.5124V24.0941L4.99782 25.7418L16.5124 17.36H0.65625L0.65625 30.3984Z" fill="white"/>
                        <path d="M20.2852 17.3555H36.1413V23.6598L24.6267 22.0121L36.1413 30.3939H20.2852V17.3555Z" fill="white"/>
                        <path d="M20.2852 13.8047L36.1413 13.8047V7.50038L24.6267 9.1481L36.1413 0.766229L20.2852 0.766229V13.8047Z" fill="white"/>
                        <path d="M16.5117 13.8047L0.655539 13.8047V7.50038L12.1701 9.1481L0.655539 0.766229L16.5117 0.766229V13.8047Z" fill="white"/>
                    </svg>
                    <p>{props.handle}</p>
                </div>
                <div class="enter-btn">Enter the gallery</div>
            </div>
        </div>
    );
}

// function to move to the next card in trending carousel
function nextImg() {
    alert("hi");
}

// function to move to the previous card in trending carousel
function prvImg() {
    alert("bye");
}

// function to loop through act of showing cards
function TrendingGalleries() {
    return (
        <div id="carousel-parent">
            <div id="carousel-child">
                <MakeTrendingCard name="Gallery 1" handle="@gal1" desc="Heylo this is a gallery with its description useless stuff basically"/>
                <MakeTrendingCard name="Virtual Gallery" handle="@vgallery" desc="Heylo this is a gallery with its description useless stuff basically"/>
                <MakeTrendingCard name="XOXO" handle="@xoxo" desc="Heylo this is a gallery with its description useless stuff basically"/>
                <MakeTrendingCard name="siiiiiiiiz" handle="@you" desc="Heylo this is a gallery with its description useless stuff basically"/>
            </div>
            <div id="carousel-btns">
                <p onClick={nextImg}> nxt </p>
                <p onClick={prvImg}> prv </p>
            </div>
        </div>                  
    );
}
ReactDOM.render(<TrendingGalleries />, document.querySelector("#carousel"));