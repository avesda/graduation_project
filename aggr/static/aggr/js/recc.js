// make a card showing museum, artist name, description
function MakeReccTrendingCard(props) {
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

// function to get categories from our database   ---------------------------- hardcoded for now
function GetCategories() {
    const categories = ["Reccomended", "Cats", "Cyber", "Bunny"];
    const updatedList = categories.map((listItems)=>{
        return <li onClick={
            function Show(listItems) { 
                alert(listItems); 
            }
          }> {listItems}</li>;
    });
    
    return(
        <ul>{updatedList}</ul>
    );
}



// function to loop through act of showing cards
function ReccMuseums() {
    return (
        <div id="recc-parent">
            <div id="sub-sub-heading">
                <GetCategories/>
            </div>
            <div id="recc-child">
                <MakeReccTrendingCard name="Gallery 1" handle="@gal1" desc="Heylo this is a gallery with its description useless stuff basically"/>
                <MakeReccTrendingCard name="Virtual Gallery" handle="@vgallery" desc="Heylo this is a gallery with its description useless stuff basically"/>
                <MakeReccTrendingCard name="XOXO" handle="@xoxo" desc="Heylo this is a gallery with its description useless stuff basically"/>
                <MakeReccTrendingCard name="siiiiiiiiz" handle="@you" desc="Heylo this is a gallery with its description useless stuff basically"/>
            </div>
        </div>                  
    );
}
ReactDOM.render(<ReccMuseums />, document.querySelector("#showing-area"));