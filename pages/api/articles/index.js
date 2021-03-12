import {articles} from './../../../data';

const Handler = (req , res) => {
   res.status(200).json(articles)
}
 
export default Handler;