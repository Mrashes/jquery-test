function scrape(input) {
            let urlDest = `https://www.instagram.com/explore/tags/chicago/?__a=1`;
            $.ajax({
                url: urlDest,
                type: "get",
                dataType: "html",
                success: function(data) {
                //do something with data
                    console.log(data)
                }
            });
    // return new Promise (
    //     function(resolve, reject) {
    //     // let query = input;
    //     // let urlDest = `https://www.instagram.com/explore/tags/${query}/?__a=1`
    //     let urlDest = `https://www.instagram.com/explore/tags/chicago/?__a=1`;
    //     $.ajax({
    //         url: urlDest,
    //         type: "get",
    //         dataType: "html",
    //         success: function(data) {
    //         //do something with data
    //             console.log(data)
    //         }
    //     });
    //     // $.ajax({
	//     //   url: urlDest,
	//     // //   method: 'GET'
	//     // }).done(function (err, response) {
    //     //         if(err){
    //     //             console.log(err)
    //     //             reject(err)
    //     //         }
    //     //         else {
    //     //             console.log(response)
    //             //     let json = JSON.parse(body, 2)
    //             //     if (json.tag.media.nodes[0].display_src == undefined){
    //             //         let imgURL = [];
    //             //         for (var i=0; i<json.tag.top_posts.nodes.length; i++) {
    //             //         imgURL.push(json.tag.top_posts.nodes[i].display_src)
    //             //         }
    //             //         resolve(imgURL)
    //             //     }
    //             //     else{
    //             //         let imgURL = [];
    //             //         for (var i=0; i<json.tag.media.nodes.length; i++) {
    //             //         imgURL.push(json.tag.media.nodes[i].display_src)
    //             //         }
    //             //         resolve(imgURL)
    //             //     }
    //             // }
    // //         }
    // //     });
    // //     }
    // )
}
