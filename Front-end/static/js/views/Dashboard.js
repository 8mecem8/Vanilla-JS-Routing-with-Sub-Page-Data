import ViewSchema from './ViewSchema.js';

export default class extends ViewSchema
{
    constructor()
    {
        super();
        this.setTitle("Dash-Board");
    }



    async getHtml()
    {
        return`
         
        <h2>Welcome back, Dear User</h2>
        <p>
        The Göktürkler(s) or Köktürkler(s) were a Turkic people of ancient Central Asia. Known in medieval Chinese sources as Tujue (突厥 Tūjué), the Göktürks under the leadership of Bumin Khan (d. 552) and his sons succeeded the Xiongnu (Turkish: Doğu Hun; Chinese: 匈奴; pinyin: Xiōngnú; Wade-Giles: Hsiung-nu) as the main Turkic power in the region and took hold of the lucrative Silk Road trade during the sixth century. The Göktürk rulers originated from the Ashina tribe, an Altaic people who lived in the northern corner of the area presently called Xinjiang. (:新疆|新疆).
        </p>

        <p>
        <a href="/posts" id="mm" class="nav-link">View recent posts</a>
        </p>
        
        
        `
        
        
    }
}