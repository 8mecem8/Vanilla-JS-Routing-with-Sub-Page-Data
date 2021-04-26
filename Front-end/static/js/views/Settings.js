import ViewSchema from './ViewSchema.js';

export default class extends ViewSchema
{
    constructor()
    {
        super();
        this.setTitle("Settings");
    }



    async getHtml()
    {
        return`
         
        <h2>Settings</h2>
        <p>
        Manage the Theme settings and your privacy, configration
        </p>
  
        `
        
        
    }
}