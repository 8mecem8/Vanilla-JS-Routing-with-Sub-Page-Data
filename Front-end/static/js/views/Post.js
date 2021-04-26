import ViewSchema from './ViewSchema.js';

export default class extends ViewSchema
{
    constructor()
    {
        super();
        
    }



    async getHtml()
    {

        const asd = async () =>
            {
                const response = await fetch('/api'); 
                const data = await response.json();
                return data
            }


            const rdata = await asd()

            //console.log(rdata.map(at => Object.values(at)))
          


            let sPost =rdata.map(at => { return {...at,isMatch: location.pathname == '/posts/'+at.id}}).find(at => at.isMatch)

            this.setTitle(sPost.subject)
            
            console.log(sPost)
        return`
         
        <h2>${sPost.subject}</h2>
        <p>
        ${sPost.content}
        </p>
        
        
        `
        
    }

    
}