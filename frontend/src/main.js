import '/styles/style.css'

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
const router = async () =>{

const routes = [
    { path:'/', view: ()=> console.log('viewing home')},
    { path:'/headphones', view: ()=> console.log('viewing headphones')},
    { path:'/speakers', view: ()=> console.log('viewing speakers')},
    { path:'/earphones', view: ()=> console.log('viewing earphones')},
    { path:'/cart', view: ()=> console.log('viewing cart')},
    { path:'/404', view:()=> console.log('viewing 404')}
]

const potentialMatches = routes.map(route =>{
    return {
        route,
        isMatch: location.pathname === route?.path
    }
});

let match = potentialMatches.find(matches => matches.isMatch);

if (!match) {
    match = {
        route: routes.find(route => route.path === '/404'),
        isMatch:true
    }
}

console.log(match.route.view())
};

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', ()=>{

    // stopping the page reload. Also allowing for all anchors with data-link to change navigation.
    document.body.addEventListener('click', (e)=>{
        if (e.target.matches('[data-link]')){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})