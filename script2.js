<style>
  body {
    background-color: teal;
  	color: white;
  }

  img {
    display: block;
    height: 540px;
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    border: 10px solid black;
  }

  article {
    text-align: center;
    margin: 100px;
    font-size: 100px;
  }
</style>

<img src="http://explosionhub.com/wp-content/uploads/2012/07/1562-cute-little-cat.jpg">
              </img>
              <article>
              Don't use w3 Schools or this cat will be sad :(
              </article>


              $('head').prepend("<img src='http://explosionhub.com/wp-content/uploads/2012/07/1562-cute-little-cat.jpg'>
                            </img>
                            <article>
                            Don't use w3 Schools or this cat will be sad :(
                            </article>");
              $('head').css('background-color', 'teal !important');

              // $('body').replaceWith("<article>
              //               Don't use w3 Schools or this cat will be sad :(
              //               </article>")

