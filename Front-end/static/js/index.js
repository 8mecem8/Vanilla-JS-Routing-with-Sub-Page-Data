import Dashboard from "./views/Dashboard.js"
import Posts from './views/Posts.js'
import Settings from './views/Settings.js'
import SinglePost from './views/Post.js'

//Client Side routing 
const router = async () =>
{




    const routes =
    [
        { path: '/', view: Dashboard /*() => console.log('viewing dashboard')*/},
        { path: '/posts', view: Posts /*() => console.log('viewing posts')*/},
        //{ path: '/posts/:id', view: Post},
        { path: '/settings', view: Settings /*() => console.log('viewing settings')*/}
    ];

    // Test each route for potential match
    let pMatchs = routes.map(at =>
        {
           return {route:at,isMatch: location.pathname === at?.path} 

        }).find(at => 
            {
                return at.isMatch
            });

        //default route when there is no match to show the any of pages
        if(!pMatchs){pMatchs = {route:routes[0],isMatch: true}}

        /* let match = pMatchs.find(at => {return at.isMatch}) */
        document.querySelector('main').innerHTML = new RegExp('^\/posts\/([1-9])').exec(location.pathname) ? document.querySelector('main').innerHTML = await new SinglePost().getHtml(): await new pMatchs.route.view().getHtml();





            //console.log(routes[1].path)
            //console.log('/posts/2'.match(/^\/posts\/(\d)/g))

            //console.log(new RegExp('^\/posts\/([1-9])').exec('/posts/2'))
             //console.log(pMatchs.route.view());

};


// window.addEventListener('popstate', router);
window.onpopstate = router


document.addEventListener('DOMContentLoaded', () =>
{
    //To prevent the page refreshing
    document.body.addEventListener('click', e =>
        {   
            if(e.target.matches(".nav-link"))
            {
                e.preventDefault()
                
                history.pushState(null,null,e.target.href)
                router()
            }
            

        }
    )
    
    
    router()
});
