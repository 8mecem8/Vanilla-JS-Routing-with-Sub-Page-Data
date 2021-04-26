import ViewSchema from './ViewSchema.js'

export default class extends ViewSchema
{
    constructor()
    {
        super();
        this.setTitle('Posts');
    };

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
            console.log(rdata)





        return`

            
            <h3><a href="posts/${rdata[0].id}" id="mm" class="nav-link">${rdata[0].subject}<a></h3>
                <ul>
                  
                    <li>${rdata[0].content[0]}</li>
                    <li>${rdata[0].content[1]}</li>
                    <li>${rdata[0].content[2]}</li>
                    <li>${rdata[0].content[3]}</li>
                    <li>${rdata[0].content[4]}</li>
                    <li>${rdata[0].content[5]}</li>
                    <li>${rdata[0].content[6]}</li>
                    <li>${rdata[0].content[7]}</li>
                    <li>${rdata[0].content[8]}</li>
                    <li>${rdata[0].content[9]}</li>
                    <li>${rdata[0].content[10]}</li>
                    <li>${rdata[0].content[11]}</li>
                    <li>${rdata[0].content[12]}</li>
                    
                </ul>

            <h3><a href="posts/${rdata[1].id}" id="mm" class="nav-link">${rdata[1].subject}<a></h3>
                <ul>
                  
                    <li>${rdata[1].content[0]}</li>
                    <li>${rdata[1].content[1]}</li>
                    <li>${rdata[1].content[2]}</li>
                    <li>${rdata[1].content[3]}</li>
                    <li>${rdata[1].content[4]}</li>
                    <li>${rdata[1].content[5]}</li>
                    <li>${rdata[1].content[6]}</li>
                    <li>${rdata[1].content[7]}</li>
                    
                  
                    
                </ul>


            ${rdata.slice(2).map(at =>
            { return`
             
                    <h3><a href="posts/${at.id}" id="mm" class="nav-link">${at.subject}</a></h3>
                        <ul>
                            <li>${at.content}</li>
                
                        </ul>
            `})}




      
        `;
    }

}